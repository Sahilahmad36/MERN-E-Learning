/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./CourseCard.css";
import {server} from "../../main"
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({course}) => {
    const navigate = useNavigate();
    const {user, isAuth} = UserData();
    const {  fetchCourses } = CourseData();

    const deleteHandler = async(id) =>{
      if(confirm("Are you sure you want to delete this course")){
        try{
          const {data} = await axios.delete(`${server}/api/course/${id}`,{
           headers :{
             token: localStorage.getItem("token"),
           }
          });
          toast.success(data.message);
          fetchCourses();
           } catch (error){
             toast.error(error.response.data.message)
           }
      }
    };

  return (
   <div className="course-card">

    <img src={`${server}/${course.image}`} alt="free" className="course-image"/>
    <h3>{course.title}</h3>
    <p>Instructor- {course.createdBy}</p>
    <p>Duration- {course.duration} weeks</p>
    <p>Price- ₹{course.price}</p>
    {
        isAuth ? ( 
           <>
           {user && user.role !== "admin" ? (
            <>
        {user.subscription.includes(course._id) ? ( <button 
        onClick={() => navigate(`/course/study/${course._id}`)}
        className="pulse1">
        Study
        </button> ) : (
            <button 
        onClick={() => navigate(`/course/${course._id}`)}
        className="pulse1">
        Get Started
        </button>
        )}
            </>
           ) : (
            <button
             onClick={() => navigate(`/course/study/${course._id}`)}
             className="pulse1">
             Study
             </button>
           )}
           </>
      ) : (
        <button 
        onClick={() => navigate("/login")}
        className="pulse1">
        Get Started</button>
      )}
  <br />
      {
        user && user.role === "admin" && ( 
        <button onClick={()=>deleteHandler(course._id)} className="pulse1" style={{background:"red"}}>
        Delete
        </button>
      )}
   </div>
  );
};

export default CourseCard
