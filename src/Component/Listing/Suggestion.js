import React,{Component} from 'react'
import axios from 'axios'
import Suggestionblock from './Suggestionblock';

var url="https://devloperrestapi.herokuapp.com/restaurantList"

class Suggestion extends Component{
    constructor(){
        super()
        this.state={
            suggestion:''
        }
    }
    render(){
        console.log(this.state.suggestion)
        return(
            <div>
        <Suggestionblock  suedata={this.state.suggestion}/></div>
        )
    }
    componentDidMount(){
        let date=new Date().getDate();
        let mealid=sessionStorage.getItem('mealid')
        let ourl;
        if(date>0&&date<11){   
            ourl=`${url}/${mealid}?hcost=1000&lcost=600`;
            }
        else if(date>10&&date<21){
            ourl=`${url}/${mealid}?hcost=800&lcost=300`;
        }
        else if(date>20&&date<32){
            ourl=`${url}/${mealid}?hcost=300&lcost=100`;
        }
        axios.get(ourl)
        .then((response)=>this.setState({suggestion:response.data}))
        console.log("out>>>>" ,ourl)

    }

}

export default Suggestion;