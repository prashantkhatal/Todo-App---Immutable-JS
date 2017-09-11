import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

// This will help to return children component as element to be placed directly without
// any wrapper in TransitionGroup's component element
const SingleElementRenderer = (props) => {
    const childArr = React.Children.toArray(props.children);
    return childArr[0] || null;
}


export const SingleTransitionElement = (props) =>(
	<ReactTransitionGroup component={SingleElementRenderer}>
		{props.children}
	</ReactTransitionGroup>
)