import React from "react";
import canada from "../assets/img/illustration-canada.svg";
import australia from "../assets/img/illustration-australia.svg";
import uk from "../assets/img/illustration-united-kingdom.svg";

export default function AboutUs() {
  return (
    <div className='text-center'>
      <div className='about-us-img' />
      <div className='py-14 background text-white'>
        <h2 className='text-3xl font-semibold pb-6'>About Us</h2>
        <p className='px-32 pb-12'>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </div>
      <div className='about-us-img2'></div>
      <div className='background-text py-20 px-32'>
        <h2 className='font-medium text-3xl pb-6'>World-class talent</h2>
        <p className='text-black pb-6'>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p className='text-black'>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
      <div className='flex flex-col justify-center items-center py-14'>
        <img
          src={canada}
          alt=''
          className='border rounded-full h-52 w-52'
          width='50%'
        />
        <h2>Canada</h2>
        <img
          src={australia}
          alt=''
          className='border rounded-full h-52 w-52'
          width='50%'
        />
        <h2>Australia</h2>
        <img
          src={uk}
          alt=''
          className='border rounded-full h-52 w-52'
          width='50%'
        />
        <h2>United Kingdom</h2>
      </div>
      
      <div className='about-us-img3'></div>
      <div className='background-text py-20 px-44'>
        <h2 className='font-medium text-3xl pb-6'>The real deal</h2>
        <p className='text-black pb-6'>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p className='text-black'>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
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
