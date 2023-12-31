import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const logout=()=>{
      dispatch(removeUser());
      navigate("/");
  }
  return (
    <div className="absolute w-screen px-8 py-2 flex justify-between bg-gradient-to-b from-black z-10">
        <img className="w-44 "src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
   
    { user && <div className="flex p-2"> 
      <img className=" h-12 w-12" src="https://tse2.mm.bing.net/th?id=OIP.RE_WgzICByGEGmvLtanb6QHaHa&pid=Api&P=0&h=180" alt="logo" />
      <button className="font-bold text-white" onClick={logout}>(Sign Out)</button>
    </div>}
    </div>
  )
}

export default Header