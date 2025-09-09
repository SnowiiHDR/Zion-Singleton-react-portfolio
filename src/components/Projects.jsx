import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            {project.title === "Deadalus" ? (
                <div className="mb-6">
                  <iframe frameborder="0" src="https://itch.io/embed/3871938?linkback=true&amp;border_width=0&amp;bg_color=222222&amp;fg_color=eeeeee&amp;link_color=dc8b4d&amp;border_color=363636" width="206" height="165"><a href="https://greek-frog-studios.itch.io/deadalus">DEADALUS by Greek Frog Studios</a></iframe>
                </div>
              ) : (
            <img src= {project.image} alt={project.title} width={150} height={150} className="mb-6 rounded"/>
              )}
            </div>
             <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold"> {project.title}
              </h6>
               <p className="mb-4 text-neutral-400">{project.description}</p>
               {project.technologies.map ((tech,index)=> (
                <span key={index} className="mr-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium">{tech}</span>
               ))}
          </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
