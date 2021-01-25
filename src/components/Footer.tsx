import React from "react";
import Logo from "../assets/img/logo-dark.png";

export default function Footer() {
  return (
    <div className='bg-gray-900 text-center py-16 flex flex-col justify-center items-center'>
      <img src={Logo} alt='logo' width='202px' className='pb-12'/>
      <ul className='space-y-4 text-white uppercase'>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
      <p className='py-8 font-medium text-gray-400'>
        Designo Central Office<br /> 3886 Wellington Street <br /> Toronto, Ontario M9C 3J5
      </p>
      <p className='font-medium text-gray-400'>
      Contact Us (Central Office) <br />
      P : +1 253-863-8967 <br />
      M : contact@designo.com
      </p>
    </div>
  );
}
