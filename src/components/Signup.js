import React from 'react'
import Header   from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [user,setuser]=useState({
        name:"",
        email:"",
        password:"",
    });
   //console.log(user);
   const navigate=useNavigate();
    const handleinput=(e)=>{
        const {name,value}=e.target;
        setuser({ ...user, [name]:value });
    };
    const submit=async(e)=>{
       e.preventDefault();
       const {name,email,password}=user;
            const res=await fetch("http://localhost:5000/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,password
                })
            })
            const data= await res.json();
           // console.log(data);
            if(!data.error){
            
              navigate("/");
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
    <form method='POST'  className="p-12 absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=" font-bold text-3xl">Sign Up</h1>
        <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleinput} className="p-2 my-6 w-full bg-gray-700" />
        <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleinput} className="p-2 my-6 w-full bg-gray-700" />
        <input type="password" placeholder='Password' name="password" value={user.password} onChange={handleinput} className="p-2 my-4 w-full bg-gray-700" />
        <button  onClick={submit} className="p-1 my-6 bg-red-500 w-full rounded-lg">SignUp</button>
        <p> Let's <Link to="/"><button  className="font-bold cursor-pointer"> Signin Now</button></Link></p>

      </form>
</div>
  )
}

export default Signup