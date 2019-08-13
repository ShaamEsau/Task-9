/* Calls the React Library to be used */
import React from "react";


/* Create React Class component*/
class CurrencyConvert extends React.Component {

	/* Initializes Data */
	constructor(){
		/* Inherits parents data */
		super()
		/* Sets properties default states */
		this.state = {
			userInput : 0,
			randRes : 0,
			eurRes : 0,
			pndRes : 0
		}
	}


	handleInput = (e) =>{

		/* Takes the entered data as a variable */
		var savInput = e.target.value;

		/* Updates state with new values */
		this.setState ({
			userInput : savInput,
			randRes : "R" + savInput * 15.16,
			eurRes : "€" + savInput * 0.89,
			pndRes : "£" + savInput * 0.82
		})
	}


	/* Converts data to readable web format */
	render(){
		return (

			/* Creates a div box */
			<div>

				{/* Converts text to heading format 2 */}
				<h2>Currency Converter</h2>

				{/* Creates a label to hold static text */}
				<label>Enter Dollars : </label>

				{/* Creates an text for users to enter data */}
				<input type = "text" placeholder = "Enter Here" onChange = {this.handleInput}/>

				<div>
					<label> Rands : </label><br/>
					{/* Textbox used to display data and cannot be edited by user */}
					<input type = "text" value = {this.state.randRes} readOnly/>
					
				</div>

				<div>
					<label> Euro : </label><br/>
					<input type = "text" value = {this.state.eurRes} readOnly/>
				</div>

				<div>
					<label> Pound : </label><br/>
					<input type = "text" value = {this.state.pndRes} readOnly/>
				</div>
			</div>
		)
	}
}




export default CurrencyConvert