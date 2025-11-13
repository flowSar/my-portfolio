import { twMerge } from "tailwind-merge";

interface MenuIconProps {
  className?: string;
  onClick?: () => void;
}

function MenuIcon({ className = "w-6 h-6", onClick }: MenuIconProps) {
  return (
    <svg
      className={twMerge("flex md:hidden cursor-pointer", className)}
      onClick={onClick}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  );
}

export default MenuIcon;

// export const MenuIcon = ({ className = "w-6 h-6" }) => (

// );
