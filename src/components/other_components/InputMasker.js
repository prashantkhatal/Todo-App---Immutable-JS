import React from 'react';
import InputElement from 'react-input-mask';


/**
 *
 * 9 => [0-9]
 * a => [a-zA-Z]
 * * => anything
 *
 */

export const InputMask = function( props ) {
	return(
		<div>
			<label>Phone Number: </label>
			<InputElement mask="+\91 aa aea aa99" maskChar="_" alwaysShowMask={true} formatChars={{'e':'[0-9]', 'a':'[0-9]', '9':'[0-9]'}}/>
		</div>
	);
}