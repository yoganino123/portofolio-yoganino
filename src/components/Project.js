import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/projects1.png";
import project_person from "../assets/project-person.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Spotify Clone",
      github_link: "https://github.com/yoganino123/Spotify-Clone",
      live_link: "https://yoganino-lyriks-app.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-900 dark:text-gray-400 mt-3 text-lg">
          My awesome works
        </p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerview: 2 },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-cyan-600 dark:bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4 text-gray-900 dark:text-gray-100">
                    {project_info.name}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="dark:text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      GitHub
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="dark:text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" className="h-96" />
        </div>
      </div>
    </section>
  );
};

export default Project;
