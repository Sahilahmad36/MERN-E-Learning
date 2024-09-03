// eslint-disable-next-line no-unused-vars
// import React from "react";
// import "./Courses.css";
// import { CourseData } from '../../context/CourseContext';
// import CourseCard from "../../components/coursecard/CourseCard";

// const Courses = () => {

// const {courses} = CourseData();
// console.log(courses);
//   return (
//     <div className="courses">
//     <h2>Available Courses</h2>
//     <div className="course-container">
//       {courses && courses.length>0 ? (
//         courses.map((e)=> <CourseCard key={e._id} course={e}/> )
//         ) : (
//           <p>No Courses Yet!</p>
//         )}
//     </div>
//     </div>
//   );
// };

// export default Courses;
import React, { useState } from "react";
import "./Courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="courses">
     <div className="search-container">
        <input
          type="text"
          placeholder="Search by course title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="course-search"
        />
      </div>
      <h2>Available Courses</h2>

     

      <div className="course-container">
        {filteredCourses && filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p>No Courses Found!</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
