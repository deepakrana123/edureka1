import React from "react";
import {Link} from "react-router-dom";
const Header=()=>{

  return(
    <React.Fragment>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to='/' >Edumota</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/deatils/id'>deatils</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link " to='/viewbooking'>ViewBooking</Link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        
        <Link class="btn btn-outline-success my-2 my-sm-0" type="submit" to="/login">Login</Link>
      </form>
    </div>
  </nav>
</React.Fragment>
  )
}
export default Header;