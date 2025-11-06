function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-100 flex justify-between items-center py-4 px-4 md:px-40 bg-white border-b border-gray-200'>
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
      <div>toggle</div>
    </header>
  );
}

export default Header;
