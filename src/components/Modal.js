import React from 'react';
import {SingleTransitionElement} from './SingleTransitionElement';


class ModalBox extends React.Component {

    componentWillEnter(callback){
        window.addEventListener('keyup', this.handleEscape);
        window.addEventListener('click', this.handleEscape);
        TweenMax.fromTo( this.ele, 0.7, {x: -700, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});
    }

    componentWillLeave(callback){
        window.removeEventListener('keyup', this.handleEscape);
        window.removeEventListener('click', this.handleEscape);
        TweenMax.fromTo( this.ele, 0.7, {x: 0, opacity: 1}, {x: 700, opacity: 0, onComplete: callback});
    }

    handleEscape = (e) => {
        ( (e.keyCode == 27) || (e.target.className == 'modal') ) && this.props.onCancel();
    }

    render() {
        return (
            <div className="modal" ref={ele => this.ele = ele}>
                <div className="modal-content">
                    <div className="modal-close" onClick={() => this.props.onCancel()}> &times; </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export const Modal = (props) => (
    <SingleTransitionElement>
        {props.show && <ModalBox {...props}>{props.children} </ModalBox>}
    </SingleTransitionElement>
)