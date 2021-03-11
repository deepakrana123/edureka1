import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
const sorturl="https://devloperrestapi.herokuapp.com/restaurantList"

class Sortfilter extends Component{
    sortfilter=(event)=>{
    console.log(event.target.value);
    let sortType=event.target.value;
    let sortType1=sessionStorage.getItem('mealid')
    let curl;
    
    curl=`${sorturl}/${sortType1}?sort=${sortType}`
    
    axios.get(curl)
    .then((response)=>{this.props.sortdata(response.data)})
       
}
      render(){
          return(
              <React.Fragment>
              <center>Sort Filter</center>
              <div  onChange={this.sortfilter}>
              <label  className="radio">
              <input type="radio" value="1"  name="Sort" />Low to high
              </label>
              <label>
              <input type="radio" value="-1" name="Sort"/>High to low
              </label>
              </div>
              </React.Fragment>
          )
      }
}

export default withRouter(Sortfilter);