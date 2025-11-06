function Hero() {
  return (
    <section
      id='hero'
      className='dark:bg-dark-blue w-full h-[90%]  flex flex-col items-center justify-center space-y-10 px-8 py-4 '
    >
      <div className='w-40 h-40 rounded-full bg-linear-to-r from-blue-600 to-purple-700 flex justify-center items-center'>
        BS
      </div>
      <h1 className='text-3xl md:text-6xl font-bold'>
        Hi, I'm{" "}
        <span className='bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Brahim Sarouri
        </span>
      </h1>
      <h2 className='text-lg md:text-2xl text-primary'>
        Full Stack Developer & Mobile App Enthusiast
      </h2>
      <p className='text-center md:w-xl text-primary'>
        I craft beautiful, functional web experiences that solve real problems
        and delight users.
      </p>
      <div className='space-y-4 space-x-0 md:space-x-4 md:space-y-0 flex flex-col md:flex-row md:justify-center w-full'>
        <button className='py-3 px-8 rounded-xl bg-linear-to-r from-blue-600 to-purple-700 text-white'>
          View My Work
        </button>
        <button className='py-3 px-8 rounded-xl border-2 border-blue-600 text-blue-600'>
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;
