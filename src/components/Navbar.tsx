import React from "react";
import Logo from "../assets/img/logo-dark.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <div>
      <div className='flex justify-between items-center px-6 py-8'>
        <Link to='/'>
          <img src={Logo} alt='design logo' width='196px' />
        </Link>
        <nav>
          <ul className={`sm:flex ${isOpen ? "block" : "hidden"}`}>
            <Link to='/ourCompany'>
              <li>Our Company</li>
            </Link>
            <Link to='/locations'>
              <li className='px-4'>Locations</li>
            </Link>
            <Link to='/contact'>
              <li>Contact</li>
            </Link>
          </ul>
          <button
            type='button'
            className='block sm:hidden'
            onClick={handleClick}
          >
            <svg
              className='h-6 w-6 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              {isOpen && (
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                />
              )}
              {!isOpen && (
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                />
              )}
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}
