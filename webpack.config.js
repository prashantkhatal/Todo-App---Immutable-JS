var path = require('path'); //path of node js installation

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var customPort;	//not defined will take 8080 automatically

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
            }
        ]
    },
    devServer: {
		host:"127.0.0.1",
		port: customPort,
        historyApiFallback:true
    }
}


module.exports = config;