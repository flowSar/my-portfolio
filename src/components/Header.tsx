function Header() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "dark",
      document.documentElement.classList.contains("dark") ? "dark" : ""
    );
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-100 flex justify-between items-center py-4 px-4 md:px-40 bg-white dark:bg-dark-blue dark:text-white border-b border-gray-200'>
      <div>Logo</div>
      <nav className='hidden md:block'>
        <ul className='flex gap-8'>
          <li className='cursor-pointer hover:text-blue-600 duration-200'>
            <a href='#hero'>Home</a>
          </li>
          <li className='cursor-pointer hover:text-blue-600 duration-200'>
            <a href='#about'>About</a>
          </li>
          <li className='cursor-pointer hover:text-blue-600 duration-200'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='cursor-pointer hover:text-blue-600 duration-200'>
            Projects
          </li>
          <li className='cursor-pointer hover:text-blue-600 duration-200'>
            Contact
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        id='themeToggle'
        className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition'
      >
        <svg
          id='sunIcon'
          className='w-5 h-5 hidden dark:block'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path
            fill-rule='evenodd'
            d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
            clip-rule='evenodd'
          ></path>
        </svg>
        <svg
          id='moonIcon'
          className='w-5 h-5 block dark:hidden'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
        </svg>
      </button>
    </header>
  );
}

export default Header;
