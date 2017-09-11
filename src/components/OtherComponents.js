import React from 'react';
import {InputMask} from './other_components/InputMasker';
import {Game} from './other_components/Tic Tac Toe Game/Game';

export function OtherComponent(props){
	return(
		<div>
			<InputMask />
			<br/>
			<br/>
			<Game />
		</div>
	);
}