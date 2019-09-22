import React, { Component } from "react";
import ColorButton from './button.js';

class ButtonList extends Component {

	state = {
		buttons:[
			{id: 1, input: "", btnTxt: "1"},
			{id: 2, input: "", btnTxt: "2"}
		]
	};

	changeText = (id, e) => {
		const temp = [...this.state.buttons]
		const index = temp.indexOf( id)

		//updating the input text that appears
		temp[index] = {...id}
		temp[index].input = e;

		this.setState(this.state.buttons = temp);

		console.log(e);

	}

	changeBtnText = (id) => {
		const temp = [...this.state.buttons]
		const index = temp.indexOf( id)

		temp[index] = {...id};
		temp[index].btnTxt = temp[index].input;

		this.setState(this.state.buttons = temp);

		console.log(temp[index].input);
	}
	render(){

		return(
			<div> 
				{this.state.buttons.map(btn => <ColorButton key = {btn.id} input = {btn.input} btnTxt = {btn.btnTxt} id = {btn.id} btn = {btn}
															changeText = {this.changeText}
															changeBtnText = {this.changeBtnText}/>)}
			</div>
		);
	};

}

export default ButtonList;