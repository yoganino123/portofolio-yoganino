import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      name: "HTML-5",
      count: 50,
    },
    {
      logo: "logo-css3",
      name: "CSS-3",
      count: 50,
    },
    {
      logo: "logo-nodejs",
      name: "Node.js",
      count: 76,
    },
    {
      logo: "logo-react",
      name: "ReactJs",
      count: 86,
    },
    {
      logo: "logo-android",
      name: "Flutter",
      count: 50,
    },
    {
      logo: "cube-outline",
      name: "PostgreSQL",
      count: 65,
    },
    {
      logo: "cube-outline",
      name: "Dbeaver",
      count: 65,
    },
    {
      logo: "logo-github",
      name: "Github",
      count: 80,
    },
    {
      logo: "logo-javascript",
      name: "Javascript",
      count: 86,
    },
    {
      logo: "logo-android",
      name: "Dart",
      count: 50,
    },
  ];
  return (
    <section id="skills" className="py-10  relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-900 dark:text-gray-400 mt-3 text-lg">
          My Knowledge
        </p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-100 dark:bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-gray-900 dark:text-gray-100 text-6xl w-28 h-28 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3 text-gray-900 dark:text-gray-100">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
