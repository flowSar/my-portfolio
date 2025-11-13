import SkillCard from "./SkillCard";

function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "React.js",
    "JavaScript/TypScript",
    "Tailwind CSS",
  ];
  const mobileSkills = ["Flutter"];
  const backendSkills = ["Python", "Flask", "Node.js", "Express.js", "Laravel"];
  const databaseSkills = ["MySQL", "PostgresSQL", "Firebase", "mongodb"];
  const devopsSkills = ["Git", "Docker"];
  return (
    <section id='skills' className='flex flex-col px-4 mt-8 space-y-4'>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-4xl font-bold'>Technologies & Skills</h1>
        <h3 className='text-primary'>Tools and technologies I work with</h3>
      </div>
      <div className='grid grid-cols-auto-fill gap-6 py-8'>
        <SkillCard
          title='Frontend'
          skills={frontendSkills}
          fg='text-blue-700'
          bg='bg-blue-200'
        />
        <SkillCard
          title='Backend'
          skills={backendSkills}
          fg='text-purple-700'
          bg='bg-purple-200'
        />
        <SkillCard
          title='Mobile'
          skills={mobileSkills}
          fg='text-green-700'
          bg='bg-green-200'
        />
        <SkillCard
          title='Database'
          skills={databaseSkills}
          fg='text-orange-700'
          bg='bg-orange-200'
        />
        <SkillCard
          title='Tools & Deployment'
          skills={devopsSkills}
          fg='text-red-700'
          bg='bg-red-200'
        />
      </div>
    </section>
  );
}

export default Skills;
