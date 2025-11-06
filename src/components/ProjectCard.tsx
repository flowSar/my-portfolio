import GithubIcon from "../assets/icons/github.png";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  viewProjectLink: string;
}

function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  viewProjectLink,
}: ProjectCardProps) {
  return (
    <div className='dark:bg-dark-blue-100 flex flex-col rounded-xl mt-8 shadow-md dark:shadow-dark-blue shadow-gray-300 hover:shadow-xl duration-200 overflow-hidden'>
      <div className='w-full h-[200px] bg-linear-to-r from-green-400 to-blue-600'></div>
      <div className='px-4 py-4 space-y-3'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <p className='text-primary'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {technologies.map((item) => (
            <div className='py-1 px-4 rounded-full bg-purple-200 text-purple-800'>
              {item}
            </div>
          ))}
        </div>
        <div className=''>
          <ul className='flex space-x-2'>
            <li className='text-blue-500 space-x-2'>
              <a
                href={githubLink}
                className='hover:underline cursor-pointer flex space-x-2'
              >
                <span>Github</span> <img src={GithubIcon} className='h-6' />
              </a>
            </li>
            <li className='text-blue-500 '>
              {viewProjectLink ? (
                <a
                  href={viewProjectLink}
                  className='hover:underline cursor-pointer'
                >
                  View Project {"->"}
                </a>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
