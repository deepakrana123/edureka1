import React from 'react';
import { withRouter } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';
const RestDisplay =(props)=>{
 const renderHotel=({restData})=>{
        console.log(restData)
        if(restData){
            return restData.map((item)=>{
                return(
           <div className="conatiner" key={item._id}>
           <div className="panel panel-primary">
           <div className="panel-heading">
                 <h3>{item.name}</h3>
           </div>
           <div className="panel-body">
               <div className="row">
                <div className="col-md-12">
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">   
                       <img src={item.thumb}  className="img-responsive" alt="" style={{width:1500,height:400}}/>
              </button>
                  <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                   <div className="modal-content">
                   <div className="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Image Gallery For {restData.name}
                  </h4>
                       </div>
                    <div class="modal-body">
                  
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
  
               <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
             <li data-target="#myCarousel" data-slide-to="1"></li>
             <li data-target="#myCarousel" data-slide-to="2"></li>
             </ol>

  
            <div className="carousel-inner">
            <div className="item active">
           <img src={item.thumb} alt="Los Angeles" style={{width:250,height:200}}/>
              </div>

           <div className="item">
         <img src={item.thumb} alt="Chicago" style={{width:250,height:200}}/>
              </div>

          <div classNmae="item">
            <img src={item.thumb} alt="New York" style={{width:250,height:400}}/>
           </div>
         </div>
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span classNmae="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
              </div>

            </div>
          </div>               
     </div>
    <div className="col-md-12">
                  <h3>{item.name}</h3>
                  <h3>{item.locaility}</h3>
                  <h3>{item.city_name}</h3>
                  <h3>{item.address}</h3>
                </div>
               </div>
               <div className="conatiner">
               <div className="row">
               <Tabs>
               <TabList>
                 <Tab>About</Tab>
                 <Tab>Contact here</Tab>
               </TabList>
               <TabPanel>
                 <p>{item.name}</p>
                 <p>{item.type[0].name}||{item.type[1].name}</p>
                 <br/>
                 <p>{item.Cuisine[0].name}||{item.Cuisine[1].name}</p>
               </TabPanel>
               <TabPanel>
                 <h2>{item.address}</h2>
                 <h3>3545678765342</h3>
               </TabPanel>
             </Tabs>
           
               </div>
               <div className="row">
               <Link to={`/booking/${item._id}`} className="btn btn-success"> PlaceOrder</Link>
               <Link to={`/list/${sessionStorage.getItem('mealid')}`} className="btn btn-danger">Back</Link>
               </div>
               </div>
           </div>
            
           </div>
           </div>
            )})}
        
            else{
                return(
                    <img src="" alt=""/>
                )
            }

    
}
    return(
        <React.Fragment>
              {renderHotel(props)}
        </React.Fragment>
    )

}

export default withRouter(RestDisplay);

