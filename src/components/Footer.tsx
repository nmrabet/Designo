import React from "react";
import Logo from "../assets/img/logo-dark.png";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-gray-900 text-center py-16 flex flex-col justify-center items-center'>
      <img src={Logo} alt='logo' width='202px' className='pb-12' />
      <ul className='space-y-4 text-white uppercase'>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
      <p className='py-8 font-medium text-gray-400'>
        Designo Central Office
        <br /> 3886 Wellington Street <br /> Toronto, Ontario M9C 3J5
      </p>
      <p className='font-medium text-gray-400'>
        Contact Us (Central Office) <br />
        P : +1 253-863-8967 <br />M : contact@designo.com
      </p>
      <div className='flex py-10 space-x-3'>
        <FaFacebookSquare size='35' color='#e87f69' />
        <AiFillYoutube size='35' color='#e87f69' />
        <FaTwitter size='35' color='#e87f69' />
        <FaPinterest size='35' color='#e87f69' />
        <FaInstagram size='35' color='#e87f69' />
      </div>
    </div>
  );
}
