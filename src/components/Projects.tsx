import ProjectCard from "./ProjectCard";
import ProfolioImage from "../assets/images/profolio.png";
import SkillHubImage from "../assets/images/skill-hub-home.png";
import BlogPOstImage from "../assets/images/blog-post.png";

function Projects() {
  const projects = [
    {
      id: 123,
      title: "Skill Hub",
      image: SkillHubImage,
      description:
        "Platform connecting clients and service providers, enabling service discovery, management, and efficient matching.",
      technologies: ["React.js", "flask", "firebase", "tailwindCss"],
      githubLink: "https://github.com/flowSar/skillhub",
      viewProjectLink: "",
      color: "red-300",
    },
    {
      id: 124,
      title: "Easy_bill",
      image: "",
      description:
        "Flutter app to manage bills and invoices, scan products, register multiple users, and generate invoices.",
      technologies: ["Flutter", "Dart", "firebase"],
      githubLink: "https://github.com/flowSar/easy_bill_clean_architecture",
      viewProjectLink: "",
      color: "purple-300",
    },
    {
      id: 125,
      title: "Simple X clone",
      image: "",
      description:
        "A social media clone built with React, Inertia, and Laravel for posting, liking, and commenting.",
      technologies: ["React.js", "Inertia", "Laravel"],
      githubLink: "https://github.com/flowSar/blog-post-laravel",
      viewProjectLink: "",
      color: "orange-300",
    },
    {
      id: 126,
      title: "calculator",
      image: "",
      description:
        "Python Tkinter GUI calculator for performing basic arithmetic operations with user-friendly interface.",
      technologies: ["python", "python/tkinter"],
      githubLink: "https://github.com/flowSar/Python-Tkinter-GUI-Calculator",
      viewProjectLink: "",
      color: "green-300",
    },
    {
      id: 126,
      title: "Blog-post Full stack MERN",
      image: BlogPOstImage,
      description:
        "Full-stack MERN app enabling users to write, edit, and manage blog posts with MongoDB storage.",
      technologies: ["React.js", "TailwindCSS", "Express.js", "Mongodb"],
      githubLink: "https://github.com/flowSar/blog-post-MERN",
      viewProjectLink: "",
      color: "blue-300",
    },
    {
      id: 126,
      title: "My-Profolio",
      image: ProfolioImage,
      description:
        "Personal portfolio website showcasing projects, skills, and achievements built with React and TailwindCSS.",
      technologies: ["React.js", "TailwindCSS", "Html", "Mongodb"],
      githubLink: "https://github.com/flowSar/my-portfolio",
      viewProjectLink: "",
      color: "red-300",
    },
  ];
  return (
    <section id='projects'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl'>Featured Projects</h1>
        <div className='grid grid-cols-auto-fill gap-6 w-full px-4 py-4 overflow-hidden'>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                viewProjectLink={project.viewProjectLink}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
