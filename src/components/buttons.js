import React, { Component } from "react";
import ColorButton from './button.js';


class ButtonList extends Component {

	state = {
		buttons:[
			{id: 1, input: "", btnTxt: "1"},
			{id: 2, input: "", btnTxt: "2"}
		]
	};

	componentDidMount(){


		var temp = 0;

		//fetches hard coded array from server.js
		//express test
		//hardcoded array is ["one","two"]
		fetch('/test')
			.then(res => res.json())
			.then(texts => {const temp = [...this.state.buttons]

							//replaces text of buttons with text from hard coded array
							for(var i = 0; i < this.state.buttons.length; i++){
								temp[i].btnTxt = texts[i];
							}
							this.setState(this.state.buttons = temp);
			});

		console.log(temp);

	}

	changeText = (id, e) => {
		//in react, we cant change the variables
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

		var writeUrl = '/write='.concat(temp[index].btnTxt);

		fetch(writeUrl);

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