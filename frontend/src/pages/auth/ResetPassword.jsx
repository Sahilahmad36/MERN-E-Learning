/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Auth.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/user/reset?token=${params.token}`,
        {
          password,
        }
      );

      toast.success(data.message);
      navigate("/login");
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
         
          <input
            type="password"
            placeholder="Enter new Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button disabled={btnLoading} className="pulse">
            {btnLoading ? "Please Wait..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;