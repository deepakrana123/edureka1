import React from 'react';
import './Search.css';
import {Component} from 'react';


const lurl="https://devloperrestapi.herokuapp.com/location";
const rurl="https://devloperrestapi.herokuapp.com/restaurents?city=";

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            restruents:''
        }
    }

    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.city}key={item._id} >
                    {item.name}|{item.city_name}</option>
                )

            })
        }

    }
    handlechange=(event)=>{
        console.log(event.target.value);
        let val=event.target.value;
        let rrurl= `${rurl}${val}`
        fetch(rrurl,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{this.setState({restruents:data})})

    }
    renderRestruant=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id} key={item._id}>
                    {item.name}|{item.locality}</option>
                )
                
            })
        }
    }
    render(){
        console.log(this.state.location);
    return(
       <React.Fragment>
       <div className="conatiner">
       <div className="imgconatiner">       
                   <div className="e">
                       EDUMOTA
               </div>
               <div className="heading">
                    Discover the best food  & drinks near Delhi NCR
               </div>

        <div className="locationselctor">
        <select className="selectlocation" id="loct" onChange={this.handlechange}>
         
        <option>Search your location</option>
                     {this.renderCity(this.state.location)}
                   </select>
    
        <select className="restinput" id="loct" onChange={this.handlechange}>
              <option>Serch for restraunts</option>
            {this.renderRestruant(this.state.restruents)}</select>
               </div>
           </div>
           
 
 </div>
       </React.Fragment>
    )}
    componentDidMount(){
        fetch(lurl,{Method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{this.setState({location:data})});
        
    }
}
export default Search;