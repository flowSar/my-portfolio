import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 123,
      title: "Skill Hub",
      description:
        "Collaborative project management tool with real-time updates and team features",
      technologies: ["React.js", "flask", "firebase", "tailwindCss"],
      githubLink: "",
      viewProjectLink: "https://example.com",
    },
    {
      id: 124,
      title: "Easy_bill",
      description:
        "Collaborative project management tool with real-time updates and team features",
      technologies: ["Flutter", "Dart", "firebase"],
      githubLink: "",
      viewProjectLink: "https://example.com",
    },
    {
      id: 125,
      title: "X clone",
      description:
        "Collaborative project management tool with real-time updates and team features",
      technologies: ["React.js", "Inertia", "Laravel"],
      githubLink: "",
      viewProjectLink: "https://example.com",
    },
    {
      id: 126,
      title: "calculator",
      description:
        "Collaborative project management tool with real-time updates and team features",
      technologies: ["python", "python/tkinter"],
      githubLink: "",
      viewProjectLink: "https://example.com",
    },
  ];
  return (
    <section id='projects px-4'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl'>Featured Projects</h1>
        <div className='grid grid-cols-auto-fill gap-6 w-full px-4 overflow-hidden'>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                viewProjectLink={project.viewProjectLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
