import React from "react";
import "../../assets/styles/form.scss";
import "../../assets/styles/media.scss";

export default class Form extends React.Component {

	constructor( props ){
		super(props);
	};

	componentDidMount(){}

	render(){

		return(
			<form className={"form-wrap"} >
				<p className="title-form">Form Authorization</p>

				<div className={"form"}>
					<div className={"line-form"}>
						<label htmlFor="Email" className={"title-field-form"}>Email</label>
						<input type="email" className={"fill-form-field"} id="Email" placeholder="***" ></input>
					</div>

					<div className={"line-form"}>
						<label htmlFor="password" className={"title-field-form"}>Password</label>
						<input type="password" className={"fill-form-field"} id="password" placeholder="***" ></input>
					</div>
				</div>

				<div className={"wrap-form-btns"}>
					<div className={"checkbox-form"}>
							<input className={"checkbox-style"} id="checkbox-style-1" type="checkbox" value="value1"></input>
							<label htmlFor="checkbox-style-1" className={"signature-checkbox"}>Confirm data entry</label>
					</div>
					<button className={"btn-form"} type="submit">Sign Up</button>
				</div>

			</form>
		)
	}
}