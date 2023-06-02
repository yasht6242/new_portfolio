import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to my portfolio website! I'm Yash Tiwari, a passionate and
          dedicated full stack developer with expertise in building dynamic and
          user-friendly web applications. I thrive on challenges and enjoy
          creating innovative solutions that merge form and function. With 2
          years of experience in the industry, I have acquired a strong
          foundation in both front-end and back-end development. My technical
          skills span across a wide range of programming languages, including
          JavaScript, HTML/CSS, React JS, Next JS, NodeJS, ExpressJS, MongoDB, SQL, Python, C++, allowing me to tackle diverse
          projects with ease. 
        </p>

        <br />

        <p className="text-xl">
        In my journey as a developer, I have successfully
          collaborated with cross-functional teams, including designers, project
          managers, and clients, to bring ideas to life. I'm adept at
          transforming requirements into scalable and efficient code, using
          frameworks such as React.js and Node.js. Additionally, I have
          experience in working with databases, RESTful APIs, and version
          control systems like Git. I have a keen eye for detail and take pride
          in writing clean, well-documented code that follows industry best
          practices. If you're looking for a reliable full stack developer who can bring your ideas to life,
          feel free to reach out. Let's create something amazing together!"
        </p>
      </div>
    </div>
  );
};

export default About;
