import React from 'react'
import QuickDisplay from './QuickDisplay';
import {Component} from 'react';

const murl="https://devloperrestapi.herokuapp.com/mealtype";
class Quicksearch extends Component{
    constructor(){
        super()
            this.state={
                mealtype:''

            }
        
    }

    render(){
        return(
            <QuickDisplay quickData={this.state.mealtype}/>

        )
    }
    componentDidMount(){
        fetch(murl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{this.setState({mealtype:data})})
    }

}
export default Quicksearch;
       
                 