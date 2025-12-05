import ProjectCard from "./ProjectCard";
import ProfolioImage from "../assets/images/profolio.png";
import SkillHubImage from "../assets/images/skill-hub-home.png";
import BlogPOstImage from "../assets/images/blog-post.png";
import XcloneImage from "../assets/images/x-clone.png";
import easyBillImage from "../assets/images/easy_bill.png";
import fitnessAppImage from "../assets/images/fitness-app.png";

function Projects() {
  const projects = [
    {
      id: 123,
      title: "Skill Hub",
      image: SkillHubImage,
      description:
        "A platform built with React for the frontend, Python Flask for the backend, and Firebase for the database. It connects clients with service providers, enabling seamless service discovery, efficient management, and smart matching for enhanced user experiences.",
      technologies: ["React.js", "flask", "firebase", "tailwindCss"],
      githubLink: "https://github.com/flowSar/skillhub",
      githubBackendLink: "",
      viewProjectLink: "https://skillhub-delta.vercel.app/",
      color: "red-300",
    },
    {
      id: 124,
      title: "Easy_bill",
      image: easyBillImage,
      description:
        "A Flutter app powered by Firebase for managing bills and invoices. Users can scan products, generate invoices, and register multiple accounts for seamless billing and financial tracking.",
      technologies: ["Flutter", "Dart", "firebase"],
      githubLink: "https://github.com/flowSar/easy_bill_clean_architecture",
      githubBackendLink: "",
      viewProjectLink: "",
      color: "purple-300",
    },
    {
      id: 125,
      title: "Simple X clone",
      image: XcloneImage,
      description:
        "A social media platform clone built with React, Inertia, and Laravel, enabling users to post updates, like content, and comment on posts in a sleek, interactive interface.",
      technologies: ["React.js", "Inertia", "Laravel"],
      githubLink: "https://github.com/flowSar/blog-post-laravel",
      githubBackendLink: "",
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
      githubBackendLink: "",
      viewProjectLink: "",
      color: "green-300",
    },
    {
      id: 127,
      title: "Blog-post Full stack MERN",
      image: BlogPOstImage,
      description:
        "Full-stack MERN app enabling users to write, edit, and manage blog posts with MongoDB storage.",
      technologies: ["React.js", "TailwindCSS", "Express.js", "Mongodb"],
      githubLink: "https://github.com/flowSar/blog-post-MERN",
      githubBackendLink: "",
      viewProjectLink: "",
      color: "blue-300",
    },
    {
      id: 128,
      title: "Fitness App Flutter",
      image: fitnessAppImage,
      description:
        "A fitness app built with Flutter for the mobile interface, Laravel for the API, React for the dashboard, and MySQL for data storage. It allows users to track workouts, manage progress, and stay motivated.",
      technologies: ["Flutter", "Laravel", "React.js", "MySQL"],
      githubLink: "https://github.com/flowSar/fitness_app_flutter",
      githubBackendLink:
        "https://github.com/flowSar/fitness_app_backend_laravel",
      viewProjectLink: "",
      color: "green-300",
    },
    // {
    //   id: 126,
    //   title: "My-Profolio",
    //   image: ProfolioImage,
    //   description:
    //     "Personal portfolio website showcasing projects, skills, and achievements built with React and TailwindCSS.",
    //   technologies: ["React.js", "TailwindCSS", "Html", "Mongodb"],
    //   githubLink: "https://github.com/flowSar/my-portfolio",
    //   viewProjectLink: "https://sar-profolio.vercel.app/",
    //   color: "red-300",
    // },
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
                githubBackendLink={project.githubBackendLink}
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
