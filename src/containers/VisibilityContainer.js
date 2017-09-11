import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Footer } from '../components/Footer';
import { switchVisibility } from '../actions/ActionCreators';

const mapStatesToProps = function( state ) {
    return {
        visibilityFilter: state.visibility
    }
};

const mapDispatchToProps = function( dispatch ) {

    return {
        ...bindActionCreators( { switchVisibility }, dispatch )
    };
};

export const VisibilityContainer = connect( mapStatesToProps, mapDispatchToProps )( Footer );