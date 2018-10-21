import React from "react";
import Card from "@material-ui/core/Card";

export default class Slide3 extends React.Component{
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
        return <Card><div>slide3 </div></Card>;
    }
}