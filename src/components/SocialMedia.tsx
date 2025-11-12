import GithubIcon from "../assets/icons/github.png";
import LinkedInIcon from "../assets/icons/linkedin.png";

export default function SocialMedia() {
  return (
    <div className='w-full flex justify-center py-14'>
      <ul className='flex gap-4'>
        <li>
          <a
            href='https://github.com/flowSar'
            target='blank'
            className='cursor-pointer'
          >
            <img src={GithubIcon} className='h-10 w-10' />
          </a>
        </li>
        <li>
          <a href='' target='blank' className='cursor-pointer'>
            <img src={LinkedInIcon} className='h-10 w-10' />
          </a>
        </li>
      </ul>
    </div>
  );
}
