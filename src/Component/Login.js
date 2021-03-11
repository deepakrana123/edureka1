import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory} from "react-router-dom";

import {auth} from './firebase';

function Login() {
    const history=useHistory();
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const signIn=(e)=>{
		e.preventDefault();

		auth.signInWithEmailAndPassword(email,password)
		.then(auth=>{
			history.push('/')
		})
		.catch(error=>alert(error.message))
	}

	const registor=(e)=>{
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email,password)
		.then((auth)=>{
			console.log(auth);
			if(auth){
				history.pushState('/')
			}
		})
		.catch(error=> alert(error.message))
	}

	return (
		<div className="login">
		<Link to="/">
	    <img className="login_logo" src=""  alt=""/>
		</Link>
	    <div className="login_conatiner">
	                   <h1>Sign in</h1>
			    <form>
			    
			   <input type="text" value={email}  placeholder= "email" onChange={e=>setEmail(e.target.value)}/>
				<input type='password' placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
				<button type='submit' onClick={signIn}
				 className="login_signInButton">Sign In</button>
				 </form>
			     
			 <button onClick={registor}
			 className="login_registerButton">Create your Account</button> 
			    </div>
		</div>
	)
}

export default Login;
