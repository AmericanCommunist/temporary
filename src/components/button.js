import React, { Component } from "react";

class ColorButton extends Component {

	state = {
		xIndex: 0,
		yIndex: 0,
	};

	render(){
		const mystyle = {
	      color: "white",
	      backgroundColor: "DodgerBlue",
	      padding: "10px",
	      fontFamily: "Arial"
    	};

		return(
			<div> 
				<input value = {this.props.input} onChange = {event => this.props.changeText(this.props.btn, event.target.value)}/>
				<button style = {mystyle} onClick = {() => this.props.changeBtnText(this.props.btn)}>{this.props.btnTxt}</button>
			</div>
		);
	};

}

export default ColorButton;
