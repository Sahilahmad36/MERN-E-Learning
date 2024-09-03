// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Courses from "./pages/courses/Courses";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Footer from "./components/footer/Footer";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import PaymentSuccess from "./pages/paymentsuccess/PaymentSuccess";
import Dashboard from "./pages/dashboard/Dashboard";
import CourseStudy from "./pages/coursestudy/CourseStudy";
import Lecture from "./pages/lecture/Lecture";
import AdminDashboard from "./admin/Dashboard/AdminDashboard";
import AdminCourses from "./admin/Courses/AdminCourses";
import AdminUsers from "./admin/Users/AdminUsers";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Contact from "./pages/contact/Contact";
import RefundPolicy from "./pages/refund/RefundPolicy";

const App = () => {

  const {isAuth, user, loading } = UserData()
  return (
    <>
      {loading ? ( 
        <Loading /> 
        ) : (
          <BrowserRouter>
    <Header isAuth={isAuth} />
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/course" element={<Courses />} />
     <Route path="/refund" element={<RefundPolicy />} />
     <Route path="/account" 
     element={isAuth ? <Account user={user} /> : <Login />} 
     />
     <Route path="/login" 
     element={isAuth ? <Home /> : <Login />} 
     />
     <Route path="/register" 
     element={isAuth ? <Home /> : <Register />} 
     />
     <Route path="/verify" 
     element={isAuth ? <Home /> : <Verify />} 
     />
     <Route path="/forgot" 
     element={isAuth ? <Home /> : <ForgotPassword />} 
     />
     <Route path="/reset-password/:token" 
     element={isAuth ? <Home /> : <ResetPassword />} 
     />
      <Route path="/course/:id" 
      element={isAuth ? 
      <CourseDescription user={user} /> : <Login />} />
      <Route path="/payment-success/:id" element={ isAuth ? <PaymentSuccess user={user}/>
      : <Login />} />
       <Route path="/:id/dashboard" element={ isAuth ? <Dashboard user={user}/>
      : <Login />} />
      <Route path="/course/study/:id" element={ isAuth ? <CourseStudy user={user}/>
      : <Login />} />

      <Route 
      path="/lectures/:id" 
      element={ isAuth ? <Lecture user={user}/>
      : <Login />} 
      />
      <Route 
      path="/admin/dashboard" 
      element={ isAuth ? <AdminDashboard user={user}/>
      : <Login />} 
      />

     <Route 
      path="/admin/course" 
      element={ isAuth ? <AdminCourses user={user}/>
      : <Login />} 
      />
      <Route 
      path="/admin/users" 
      element={ isAuth ? <AdminUsers user={user}/>
      : <Login />} 
      />
      </Routes>
      <Footer />
    </BrowserRouter>
    )}
    </>
   
  )
}

export default App
