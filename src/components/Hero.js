import React from "react";
import hero from "../assets/hero.png";
const Hero = () => {
  const social_media = [
    {
      logo: "logo-instagram",
      link: "https://www.instagram.com/yoganino/",
    },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/rahardianyoganino/",
    },
    {
      logo: "logo-github",
      link: "https://github.com/yoganino123",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-gray-900 dark:text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <br />
            <span>Rahardian Yoganino Pradipta</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          {/* <button className="btn-primary mt-8">Contact Me</button> */}
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, i) => (
              <div
                key={i}
                className="text-gray-500 hover:text-cyan-600 cursor-pointer "
              >
                <a href={icon?.link} target="_blank">
                  <ion-icon name={icon?.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
