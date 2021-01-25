import React from "react";
import canada from "../assets/img/illustration-canada.svg";
import australia from "../assets/img/illustration-australia.svg";
import uk from "../assets/img/illustration-united-kingdom.svg";

export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <div className='background text-white'>
        <h2 className='font-medium text-2xl py-10'>Contact Us</h2>
        <p className='px-24 pb-8'>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
        {/* <form action=''>
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />
        </form> */}
        <button className='bg-gray-100 py-4 px-10 border rounded uppercase text-black mb-10'>
          Submit
        </button>
      </div>
      <div className='py-10'>
        <img src={canada} alt='' />
        <h2>Canada</h2>
        <button className='bg-red-400 py-4 px-10 border rounded uppercase text-white font-semibold'>
          See Location
        </button>
        <img src={australia} alt='' />
        <h2>Australia</h2>
        <button className='bg-red-400 py-4 px-10 border rounded uppercase text-white font-semibold'>
          See Location
        </button>
        <img src={uk} alt='' />
        <h2>United Kingdom</h2>
        <button className='bg-red-400 py-4 px-10 border rounded uppercase text-white font-semibold'>
          See Location
        </button>
      </div>
    </div>
  );
}
