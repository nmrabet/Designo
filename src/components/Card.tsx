import React from "react";
import work from "../assets/img/undraw_programming_2svr.svg";
import work1 from "../assets/img/undraw_forming_ideas_0pav.svg";
import work2 from "../assets/img/undraw_Add_friends_wa2a.svg";
import { Link } from "react-router-dom";
import image from "../assets/img/header-img.png";

export default function Card() {
  return (
    <div className=''>
      <div className='background flex flex-col justify-center items-center pt-28 px-16 text-center space-y-6 text-white'>
        <h3 className='text-3xl font-semibold'>
          Award-winning custom designs and digital branding solutions
        </h3>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className='bg-white text-black border rounded py-4 px-8 uppercase font-medium'>
          Learn More
        </button>
        <img src={image} alt='phone' className='header-img' />
      </div>
      <div className='py-20 text-center flex flex-col justify-center items-center space-y-4 text-white text-xl uppercase'>
        <div className='big-screen'>
          <Link to='/webDesign'>
            <div className='cards1 flex flex-col justify-center items-center'>
              <h2 className='font-semibold text-4xl pb-8'>Web design</h2>
              <p>View Project</p>
            </div>
          </Link>
          <div>
            <Link to='/appDesign'>
              <div className='cards flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-4xl pb-8'>App design</h2>
                <p>View Project</p>
              </div>
            </Link>
            <Link to='/graphicDesign'>
              <div className='cards cardphoto flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-4xl pb-8'>Graphic Design</h2>
                <p>View Project</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center space-y-6 py-24'>
        <img
          src={work}
          alt=''
          className='border rounded-full h-52 w-52'
          width='50%'
        />
        <h2>PASSIONATE</h2>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
        <img
          src={work1}
          alt=''
          className='border rounded-full h-52 w-52'
          width='50%'
        />
        <h2>RESOURCEFUL</h2>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
        <img
          src={work2}
          alt=''
          className='border rounded-full h-52 w-52'
          width='50%'
        />
        <h2>RESOURCEFUL</h2>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </div>
      <div className='box text-center text-white space-y-6'>
        <h3 className='text-3xl font-medium '>Let’s talk about your project</h3>
        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        <button className='text-black uppercase border rounded py-2 px-4 bg-white font-semibold'>Get in touch</button>
      </div>
    </div>
  );
}
