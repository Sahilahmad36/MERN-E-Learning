// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./Auth.css";
import { Link, useNavigate } from 'react-router-dom'
import { UserData } from '../../context/UserContext';

const Verify = () => {
  const [otp, setOtp] = useState("");
  const {btnLoading, verifyOtp} = UserData();
  const navigate = useNavigate();

  const submitHandler = async(e) =>{
    e.preventDefault();
    await verifyOtp(Number(otp), navigate)
  }
  return (
    <div className='auth-page'>
      <div className='auth-form'>
      <h2>Verify Account</h2>
   <form onSubmit={submitHandler}>
    <input type='number' placeholder='Enter six digit otp'
     value={otp}
     onChange={(e)=> setOtp(e.target.value)}
     required />
    <button type="submit" disabled={btnLoading} className='pulse'>
    {btnLoading ? "Please Wait..." : "Verify"}
    </button>

   </form>
   <p>Go to <Link to='/login'>Login</Link> page
   </p>

      </div>
    </div>
  )
}

export default Verify;
