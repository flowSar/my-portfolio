import { useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import CloseIcon from "./icons/CloseIcon";
import { twMerge } from "tailwind-merge";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "dark",
      document.documentElement.classList.contains("dark") ? "dark" : ""
    );
  };

  const handleManuOpen = () => {
    setMenuOpen((state) => !state);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-100  py-4 px-4 md:px-40 bg-white dark:bg-dark-blue dark:text-white border-b border-gray-700'>
      <div className='relative flex justify-between items-center'>
        <div className='text-3xl font-bold tracking-widest bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          BS
        </div>
        <nav className='hidden md:block'>
          <ul className='flex gap-8'>
            <li className='cursor-pointer hover:text-blue-600 duration-200'>
              <a href='#hero'>Home</a>
            </li>
            <li className='cursor-pointer hover:text-blue-600 duration-200'>
              <a href='#about'>About</a>
            </li>
            <li className='cursor-pointer hover:text-blue-600 duration-200'>
              <a href='#education'>Education</a>
            </li>
            <li className='cursor-pointer hover:text-blue-600 duration-200'>
              <a href='#skills'>Skills</a>
            </li>
            <li className='cursor-pointer hover:text-blue-600 duration-200'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='cursor-pointer hover:text-blue-600 duration-200'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='flex gap-4 items-center'>
          <button
            onClick={toggleTheme}
            id='themeToggle'
            className='p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition'
          >
            <SunIcon />
            <MoonIcon />
          </button>
          {menuOpen ? (
            <CloseIcon w='8' h='8' onClick={handleManuOpen} />
          ) : (
            <MenuIcon h='8' w='8' onClick={handleManuOpen} />
          )}
        </div>
        <div
          className={twMerge(
            "md:hidden absolute dark:bg-dark-blue w-full top-14 left-0 right-0",
            `${menuOpen ? "flex" : "hidden"}`
          )}
        >
          <nav className='py-4 px-4 pb-6'>
            <ul className='flex flex-col gap-4'>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <a href='#hero'>Home</a>
              </li>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <a href='#about'>About</a>
              </li>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <a href='#education'>Education</a>
              </li>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <a href='#skills'>Skills</a>
              </li>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <a href='#projects'>Projects</a>
              </li>
              <li className='cursor-pointer hover:text-blue-600 duration-200'>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
