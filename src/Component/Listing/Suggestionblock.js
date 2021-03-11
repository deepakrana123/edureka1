import React from 'react'
import {Link} from 'react-router-dom';
import "./Suggestion.css"

const Suggestionblock=(porps)=>{
    
    const renderSuggestion=({suedata})=>{
        if(suedata){
            return suedata.map((item)=>{
                return(
                <div className="card col-md-2" key={item._id} >
                        <Link to={`./deatils/${item._id}`}>{item.name}</Link>
                         <img className="card-img-top" alt="" src={item.thumb}/>
                        
                        <div className="card-body">
                        <h3 className="card-title">{item.localilty}</h3>
                        <p className="card-text">Cost:{item.cost}</p>
                        </div>
                </div>

            )})
        }
    
}
    return(
        <div className="conatiner">
        <h2>Thinking about your  pocket we have suggestion for you</h2>
      
        <div className="row">
        {renderSuggestion(porps)}</div>
        <br/></div>

    )

}


export default Suggestionblock;
