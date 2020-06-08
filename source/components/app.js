import React from "react";
import "../../assets/styles/app.scss";
import Form from "./form";


export default class App extends React.Component{

	constructor( props ){
		super( props );
	}

	render(){
		return(
			<React.Fragment>
				<Form></Form>
			</React.Fragment>
		)
	}
}