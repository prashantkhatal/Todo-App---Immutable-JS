import React from 'react';
import PropTypes from 'prop-types';

// import { Link } from './Link';
import {Link} from 'react-router';
import { VISIBILITY_STATUSES } from '../actions';

const visibilityOptions = [
    {
        linkText: 'All',
        status: VISIBILITY_STATUSES.SHOW_ALL
    },
    {
        linkText: 'Completed',
        status: VISIBILITY_STATUSES.SHOW_COMPLETED
    },
    {
        linkText: 'Active',
        status: VISIBILITY_STATUSES.SHOW_ACTIVE
    }
];

export function Footer( props ) {
    return (
        <div>Show: &nbsp;
            {/*{visibilityOptions.map( ( option, index ) => {*/}
                {/*return <Link key={index} {...props} status={option.status} linkText={option.linkText}*/}
                             {/*isActive={(props.visibilityFilter == option.status) ? true : false}/>*/}
            {/*} )}*/}

            {
                visibilityOptions.map( ( option, index ) => {
                    return <Link
                                to={`${option.status}`}
                                key={index}
                                activeClassName="button"
                                activeStyle={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    backgroundColor:'#6fde6f',
                                    border: '1px solid'
                                }}
                                onClick={( e ) => {
                                    // e.preventDefault();
                                    props.switchVisibility( option.status );
                                }}
                        >
                            {option.linkText}
                        </Link>
                } )
            }

        </div>
    );
}

Footer.propTypes = {
    visibilityFilter: PropTypes.string.isRequired
}