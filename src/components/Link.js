import React from 'react';
import PropTypes from 'prop-types';

export const Link = ( props ) => {
    return (
        <a
            href="#"
            className={(props.isActive) ? 'active' : '' }
            onClick={( e ) => {
                e.preventDefault();
                props.switchVisibility( props.status );
            }}
        >{props.linkText}</a>
    );
}

Link.propTypes = {
    isActive:PropTypes.bool.isRequired,
    linkText:PropTypes.string.isRequired
}