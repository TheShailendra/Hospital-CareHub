import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Shailendra Kumar, an ECE student at NIT Hamirpur, is developing a hospital management system using the MERN stack. This project reflects his dedication to leveraging modern web technologies to improve healthcare management. With a strong foundation in electronics and communication engineering, Shailendra is poised to create impactful tech solutions in the medical field.
          </p>
          <p>We are all in 2024!</p>
          <p>This is My MERN STACK PROJECT.</p>
          <p>
          Shailendra Kumar, an ECE student at NIT Hamirpur, is developing a hospital management system using the MERN stack. This project reflects his dedication to leveraging modern web technologies to improve healthcare management. With a strong foundation in electronics and communication engineering, Shailendra is poised to create impactful tech solutions in the medical field.
          </p>
          <p>MERN Stack Web Developer</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
