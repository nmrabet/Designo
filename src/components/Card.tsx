import React from "react";
import work from '../assets/img/undraw_programming_2svr.svg';
import work1 from '../assets/img/undraw_forming_ideas_0pav.svg';
import work2 from '../assets/img/undraw_Add_friends_wa2a.svg';

export default function Card() {
  const CardData = [
    {
      id: 1,
      title: "Web design",
      subtitle: "View Project",
    },
    {
      id: 2,
      title: "App design",
      subtitle: "View Project",
    },
    {
      id: 3,
      title: "Graphic Design",
      subtitle: "View Projects",
    },
  ];
  return <div className=''>
      {CardData.map(element => {
          return <div key={element.id}  className=' flex flex-col justify-center items-center py-12 px-8 border rounded'>
              <h2 className='text-2xl'>{element.title}</h2>
              <p>{element.subtitle}</p>
          </div>
      })}
      <div className='flex flex-col justify-center items-center text-center space-y-6 py-24'>
          <img src={work} alt="" className='border rounded-full' width='50%'/>
          <h2>PASSIONATE</h2>
          <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
          <img src={work1} alt="" className='border rounded-full' width='50%'/>
          <h2>RESOURCEFUL</h2>
          <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
          <img src={work2} alt="" className='border rounded-full' width='50%'/>
          <h2>RESOURCEFUL</h2>
          <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
      </div>
  </div>;
}
