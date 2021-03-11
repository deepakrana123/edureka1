import React from 'react';
import Search from './Search';
import Quicksearch from './Quicksearch';
import {Link} from 'react-router-dom';
import "./Home.css";

const Home=()=>{
    return(
        <React.Fragment>
        
        <Search/>
        <Link to="/"></Link>
        <Quicksearch/>

        
        </React.Fragment>
    )
}

export default Home;