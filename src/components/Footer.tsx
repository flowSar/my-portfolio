import MailIcon from "./icons/MailIcon";
import PhoneIcon from "./icons/PhoneIcon";

function Footer() {
  return (
    <footer className=' flex flex-col dark:bg-dark-blue bg-gray-50'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 text-primary px-4 py-4'>
        <div>
          <h2 className='text-xl font-bold text-white'>Brahim Sarouri</h2>
          <p className='mt-4'>
            Full Stack Developer passionate about creating innovative web and
            mobile applications.
          </p>
        </div>
        <div>
          <h2 className='text-xl font-bold text-white'>Contact</h2>
          <div className='flex mt-4'>
            <MailIcon />
            <span>brahim.sar151@gmail.com</span>
          </div>
          <div className='flex mt-2'>
            <PhoneIcon />
            <span>+212 650 704 968</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-bold text-white'>Quick Links</h2>
          <ul className='flex flex-col gap-2 mt-4'>
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
        </div>
      </div>
      <p className='text-primary text-center py-8'>
        © 2025 Sarouri Brahim. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
