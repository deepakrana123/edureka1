import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import RestDisplay from './RestaurentDisplay';

const url = "https://developerfunnelrestapi.herokuapp.com/restaurantDetails"

class RestaurentDeatils extends Component{
    constructor(){
        super()
        this.state={
            details:''
        }
    }

    render(){
        console.log(this.state.details);
        return(
            <React.Fragment>
                <RestDisplay  restData={this.state.details}/>
            </React.Fragment>
        )
    }

  

    componentDidMount(){
       var hotelid = this.props.match.params.id
       console.log(hotelid)
       axios.get(`${url}/${hotelid}`)
       .then((response) =>  {this.setState({details:response.data})})
    }
    
}

export default withRouter(RestaurentDeatils)