function Education() {
  return (
    <section
      id='education'
      className='w-full bg-gray-100 dark:bg-dark-blue-100 py-20 mb-20'
    >
      <div className='flex flex-col items-center space-y-6'>
        <h1 className='text-4xl'>Education</h1>
        <h3 className='text-lg'>My academic background</h3>
        <div className='w-full md:w-4xl flex flex-col gap-6  px-6'>
          {/* // education */}
          <div className='py-4 px-6 rounded-md dark:bg-dark-blue space-y-6 mt-10 bg-white shadow-md shadow-black/10'>
            <h1 className='text-xl font-bold'>
              Bachelor’s degree in Physical Sciences with a specialization in
              Electronics.
            </h1>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0'>
              <h3>Hassan II University</h3>
              <div className='py-2 px-4 bg-gray-100 dark:bg-blue-950 rounded-md'>
                2020-2024
              </div>
            </div>
          </div>

          {/* // Certifications & Courses */}
          <div className='bg-white shadow-md shadow-black/10 dark:bg-dark-blue flex flex-col py-6 px-6 gap-4 rounded-md'>
            <h1 className='text-xl font-bold'>Certifications & Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0'>
              <div className='flex gap-4'>
                <svg
                  className='w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <div className=''>
                  <h2 className='text-md'>Full Stack Development Bootcamp</h2>
                  <h4 className='text-primary'>geeks institute</h4>
                </div>
              </div>
              <div className='flex gap-4'>
                <svg
                  className='w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <div className=''>
                  <h2 className='text-md'>
                    software engineer/backend Certificate
                  </h2>
                  <h4 className='text-primary'>alx africa</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
