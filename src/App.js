/* Calls the React and Route Library to be used */
import React from 'react';
import {BrowserRouter, Route, Link, withRouter} from "react-router-dom";
/* Calls custom components */
import CurConv from "./Components/CurrencyConverter.js";
import Win from "./Components/Win.js";
import DropDown from "./Components/DropDown.js"


/* Creates Functional Component */
function App() {
  return (
    /* Placeholder for the component links */
    <BrowserRouter>
      {/* Creates a div box */}
      <div className="App">
        {/* Converts text to heading format 1 */}
        <h1>Welcome to the Currency Converter and the game Win!</h1>
        {/* Calls the variable */}
        <Menu />

        {/* Sets the link and path to the component to be displayed when link is clicked on */}
        <Route path="/Win" component = {Win} render={() => <Link to ="/Win"></Link>} />
        <Route path="/CurrencyConverter" component = {CurConv} render={() => <Link to = "/CurrencyConverter"></Link>} />    
      </div>
    </BrowserRouter>
  );
}

/* Create a Class Component */
class Dropdown extends React.Component {
 onChange = (e) => {
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

const Menu = withRouter(Dropdown);

/* Enables the class to be imported to other Js files */
export default App;
