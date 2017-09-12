var path = require('path'), //path of node js installation
	DIST_DIR = path.resolve(__dirname, "dist"),
	SRC_DIR = path.resolve(__dirname, "src"),
	customPort,	//not defined will take 8080 automatically
	ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: SRC_DIR +  "/app/index.js",
    output:{
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders : [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets:[ "react", "es2015", "stage-2"]
                }
            },
	        {
	        	test : /\.css$/,
		        loader: ExtractTextPlugin.extract( {
			        fallback: 'style-loader',
			        use: [ 'css-loader']
		        } )
	        },
	        {
		        test: /\.(?:gif|jpg|png)$/,
		        loader: 'file-loader',
		        options: {
		        	name:'[hash].[ext]',
			        outputPath: 'images/'
		        }
	        }
        ]
    },

	plugins: [
		new ExtractTextPlugin({ filename: 'generated_styles.css', allChunks: true })
	],

    devServer: {
		host:"127.0.0.1",
		port: customPort,
        historyApiFallback:true
    }
}


module.exports = config;