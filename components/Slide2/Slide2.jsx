import React from "react";
import Card from "@material-ui/core/Card";

export default class Slide2 extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(!this.props.isIn){
            this.props.unmount();
        }
    }
    componentWillUnmount(){
      
    }
    render(){
        return <Card><div>number 2</div></Card>
    }
}