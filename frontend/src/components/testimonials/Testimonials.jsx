// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Testimonial.css";
import student1 from "./student1.jpg";  
import sofiya from "./sofiya.jpg"; 

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "Saad",
            position: "2nd Class",
            message:
                "Thank you for helping me with math in tuition! You explain things so well, and I understand better now. I like how patient you are, and the practice we do really helps me get better at solving problems!",
            image: student1,  
        },
        {
            id: 2,
            name: "Sofiya",
            position: "7th Class",
            message:
                "Thank you for making math easier for me in tuition. You explain everything clearly and help me understand tough concepts. I really appreciate how you take the time to go over things until I get them!",
            image:
                sofiya,
        },
        {
            id: 3,
            name: "Samar",
            position: "5th Class",
            message:
                "Math tuition is really helping me understand things better. You make it fun and explain things in a way that's easy to get. I feel more confident now when I solve math problems!",
            image:
                "https://images.pexels.com/photos/6936380/pexels-photo-6936380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            name: "Khushi",
            position: "6th Class",
            message:
                "Thank you for making math easier in tuition. You explain things really well and give us lots of practice. I feel more confident with my math now, and I'm doing better in school!",
            image:
                "https://images.pexels.com/photos/8618018/pexels-photo-8618018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 5,
            name: "Priya",
            position: "3rd Class",
            message:
                "Thank you for helping me with math in tuition! You explain things so well, and I understand better now. I like how patient you are, and the practice we do really helps me get better at solving problems!",
            image: "https://images.pexels.com/photos/8500670/pexels-photo-8500670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  
        },
        {
            id: 6,
            name: "Shahzaib",
            position: "8th Class",
            message:
                "Thank you for making math easier for me in tuition. You explain everything clearly and help me understand tough concepts. I really appreciate how you take the time to go over things until I get them!",
            image:"https://images.pexels.com/photos/6936417/pexels-photo-6936417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 7,
            name: "Suhaan",
            position: "6th Class",
            message:
                "Math tuition is really helping me understand things better. You make it fun and explain things in a way that's easy to get. I feel more confident now when I solve math problems!",
            image:
                "https://images.pexels.com/photos/8500359/pexels-photo-8500359.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 8,
            name: "Komal",
            position: "6th Class",
            message:
                "Thank you for making math easier in tuition. You explain things really well and give us lots of practice. I feel more confident with my math now, and I'm doing better in school!",
            image:
                "https://images.pexels.com/photos/8390283/pexels-photo-8390283.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    return (
        <section className="testimonials">
            <h2>What our students say</h2>
            <div className="testimonials-cards">
                {testimonialsData.map((e) => (
                    <div className="testimonial-card" key={e.id}>
                        <div className="student-image">
                            <img src={e.image} alt={e.name} />
                        </div>
                        <p className="message">{e.message}</p>
                        <div className="info">
                            <p className="name">{e.name}</p>
                            <p className="position">{e.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

