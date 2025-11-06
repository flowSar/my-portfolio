function About() {
  return (
    <section
      id='about'
      className='h-[400px] dark:bg-dark-blue-100 bg-light-gray flex  items-center justify-center px-4'
    >
      <div className='w-[95%] md:w-3xl flex flex-col items-center justify-center space-y-10'>
        <h1 className='text-4xl font-bold'>About Me</h1>
        <p className='text-center text-primary'>
          I'm a passionate developer eager to create innovative web and mobile
          applications. I love learning new technologies and building projects
          that solve real-world problems.
        </p>
        <p className='text-center text-primary'>
          I'm constantly expanding my skill set and looking for opportunities to
          grow as a developer while contributing to exciting projects.
        </p>
      </div>
    </section>
  );
}

export default About;
