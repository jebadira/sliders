import React from "react";
import Slide1 from "../Slide1/Slide1.jsx";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Slide2 from "../Slide2/Slide2.jsx";
import Slide3 from "../Slide3/Slide3.jsx";
export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index : 0,
            in : true
        }
    }

    handleNext(){
        this.setState({
            in : false,
        });
    }
    turnoff(){
        let closure = this;
        const index = this.state.index;
        const timer = setTimeout( () => {
            clearTimeout(timer);
            closure.setState({
                in : true,
                index : index + 1
            });
        }, 300);
        
    }
    render(){
        let slides = [<Slide1 isIn={this.state.in} unmount={this.turnoff.bind(this)} />, 
                        <Slide2 isIn={this.state.in} unmount={this.turnoff.bind(this)} />, 
                        <Slide3 isIn={this.state.in} unmount={this.turnoff.bind(this)} />];

            return(
            <div>
                <div style={{paddingTop: 100}}></div>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Slide direction={this.state.in ? "left" : "right"} in={this.state.in}>
                            {slides[this.state.index]}
                        </Slide>
                    </Grid>
                </Grid>
                <Button onClick={() => this.handleNext()}>Next</Button>
    
            </div>);
        
    }
}