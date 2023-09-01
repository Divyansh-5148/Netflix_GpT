import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
const Login = () => {
  const dispatch=useDispatch();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
    //  console.log(credentials)
      const handle = (event) => {
        const { name, value } = event.target;
    
        setCredentials({ ...credentials, [name]: value });
      };
      const navigate=useNavigate();
      const submitt=async(e)=>{
        e.preventDefault();
        const {email,password}=credentials;
             const res=await fetch("http://localhost:5000/login",{
                 method:"POST",
                 headers:{
                     "Content-Type":"application/json"
                 },
                 body:JSON.stringify({
                     email,password
                 })
             })
             const data= await res.json();
             console.log(data);
             if(!data.error){
             const {user} =data;
             dispatch(addUser({user}));
               navigate("/browse");
             }
             else{
                 window.alert("Invalid Registration");
             }
 
     }

  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bgimage" />
        </div>
      <form className="p-12 absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=" font-bold text-3xl">Sign In</h1>
        <input type="text" placeholder="Email" name="email" value={credentials.email} onChange={handle} className="p-2 my-6 w-full bg-gray-700" />
        <input type="password" placeholder='Password' name="password" value={credentials.password} onChange={handle} className="p-2 my-4 w-full bg-gray-700" />
        <button onClick={submitt} className="p-1 my-6 bg-red-500 w-full rounded-lg">SignIn</button>


        <p>New to Netflix ? <Link to="/signup"><button className="font-bold cursor-pointer">Signup Now</button></Link></p>
      </form>
    </div>
  )
}

export default Login