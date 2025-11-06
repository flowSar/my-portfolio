import { twMerge } from "tailwind-merge";

interface SkillCardProps {
  bg: string;
  fg: string;
  title: string;
  skills: string[];
}
function SkillCard({ skills, title, fg, bg }: SkillCardProps) {
  return (
    <div className='px-4 py-4   rounded-lg shadow-lg  shadow-gray-300 hover:shadow-xl duration-200 min-h-[180px]'>
      <h1 className={twMerge("font-bold text-blue-600 mb-4 text-xl", fg)}>
        {title}
      </h1>
      <div className='flex flex-wrap gap-3'>
        {skills.map((skill) => (
          <div className={twMerge("py-2 px-4 rounded-md ", fg, bg)}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
