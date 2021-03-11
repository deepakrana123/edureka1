import React from 'react';
import './Quicksearch.css';

import {Link} from 'react-router-dom';

const QuickDisplay=(props)=>{
  
    const renderList=({quickData})=>{
         if(quickData){
             return quickData.map((item)=>{
                      return(
                          <Link to={`/list/${item.mealtype}`} key={item._id}>
                          <div className="titleconatiner">
                          <div className="titlecompoent1">
                           <img src={`./images/${item.name}.jpg`} alt="" className="imageclass" style={{height:150,width:115}}/>
                                  </div>
                                  <div className="titlecompoent2">
                                      <div className="componetheading">
                                          {item.name}
                                      </div>
                                      <div className="componetsubheading">
                                          Excuslive {item.name} meals are there
                                      </div>
                                  </div>
                                  </div></Link>
                      )
             })
         }
    }


    
   return(
   <React.Fragment>
      
          <div className="quicksearchConatiner">
              <p className="quicksearchheading">
                  QUICK SEARCH
              </p>
              <p className="quicksearchsubheading">Search for the meal</p>
              {renderList(props)}
                      </div>
          </React.Fragment>
      )
  
  
   
 }



export default QuickDisplay;


