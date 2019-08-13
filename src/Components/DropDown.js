/* Calls the React and Route Library to be used */
import React from 'react';
import {BrowserRouter, Route, withRouter, Link} from "react-router-dom";
/* Calls custom components */
import CurConv from "./CurrencyConverter.js";
import Win from "./Win.js";

/* Create a Class Component */
class Dropdown extends React.Component {

  /* Creates a function */
    onChange = (e) => {
      /* Adds a new value */
      this.props.history.push(`/${e.target.value}`);
    }
    /* Converts data to a readable format for the web page */
    render() {

      /* Data to be retrieved and executed */
      return (

        /* Creates a dropdown */
        <select onChange={this.onChange}>
          {/* Adds an item to the dropdown */}
          <option value="Win">Win!</option>
          <option value="CurrencyConverter">Currency Converter</option>
        </select>
      );
  }
}

/* Enables the class to be imported to other Js files */
export default Dropdown;