/* Calls the React Library to be used */
import React from "react";
/* Calls image source to be used */
import Chance from "../Images/qm.png";
/* Calls Style Sheet to customize elements */
import "../CandGStyles.css";

/* Creates React Functional Component */
	const	Choice = () => {
		    /* Creates an array */
		    var choice = ["You Win", "You Lose"];
		    /* Randomizes information */
		    return (
		    		choice[Math.floor(Math.random() * 2)]
		    	)
		}


/* Creates a React Class Component */
class Game extends React.Component {

	/* Initializes Data */
	constructor(){

		/* Inherits Parent Data */
		super()

		/* Sets properties default state */
		this.state = {
			counter : 5
		}
	}

		
		timer = setInterval(() => {

		 if (this.state.counter > 0) {
			this.setState ({
				counter : this.state.counter - 1
			})

		} else {
			window.location.reload();

		}}, 1000);


    /* Converts data to readable webpage format */
    render() {
  	
        /* Calls and executes information */
        return (

            /* Creates a div box */
            <div id = "cardChoices" >

			{/* Converts text to heading format 1 and 2 */}
			<h1> Flip a card and see if you Win!</h1>
			<h2> Time till outcomes Reset : {this.state.counter}</h2>

				{/*	Creates a div box */}
				<div id="flipcard" >
		  			<div id="cardinner">
		    			<div id="cardfront">

		    				{/*Inserts an image that has been imported*/}
		    				<img src={Chance} id = "CoverArt" alt="Chance Card"/>
		   				</div>
		    			<div id="cardback">
		    				{/* Calls React Components  */}
		      				<Choice/>
		    			</div>
		  			</div>
				</div>

				<br/>

				<div id="flipcard">
		  			<div id="cardinner">
		    			<div id="cardfront">
		    				<img src={Chance} id = "CoverArt" alt="Chance Card"/>
		   				</div>
		    			<div id="cardback">
		      				<Choice/>
		    			</div>
		  			</div>
				</div>

				<br/>

				<div id="flipcard">
		  			<div id="cardinner">
		    			<div id="cardfront">
		    				<img src={Chance} id = "CoverArt" alt="Chance Card" />
		   				</div>
		    			<div id="cardback">
		      				<Choice/>
		    			</div>
		  			</div>
				</div>

			</div>


        )
    }

}

/* Allows Component to be able to imported to other files */
export default Game