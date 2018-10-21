import React from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import {Container} from "./components";
export default class App extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        return(<div>
            <AppBar position="static" color="default">
                <h2>Site</h2>
            </AppBar>
            <Container />

        </div>);
    }
}


ReactDOM.render(<App />, document.getElementById("app"));