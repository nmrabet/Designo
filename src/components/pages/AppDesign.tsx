import React from "react";
import airfilter from "../../assets/img/image-airfilter.jpg";
import eyecam from "../../assets/img/image-eyecam.jpg";
import faceit from "../../assets/img/image-faceit.jpg";
import todo from "../../assets/img/image-todo.jpg";
import loopstudios from "../../assets/img/image-loopstudios.jpg";

export default function AppDesign() {
  const appdesignData = [
    {
      id: 1,
      url: airfilter,
      title: "AIRFILTER",
      text:
        "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      id: 2,
      url: eyecam,
      title: "EYECAM",
      text:
        "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      id: 3,
      url: faceit,
      title: "FACEIT",
      text:
        "Get to meet your favorite internet superstar with the faceit appoduct that lets you edit your favorite photos and videos at any time",
    },
    {
      id: 4,
      url: todo,
      title: "TODO",
      text: "A todo app that features cloud sync with light and dark mode",
    },
    {
      id: 5,
      url: loopstudios,
      title: "LOOPSTUDIOS",
      text: "A VR experience app made for Loopstudios",
    },
  ];
  return (
    <div>
      <div className='background text-center text-white py-20 px-48'>
        <h2 className='text-3xl font-semibold pb-6'>App Design</h2>
        <p>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </div>
      <div className='py-20'>
        {appdesignData.map((appData) => {
          return (
            <div key={appData.id} className='py-6'>
              <img src={appData.url} alt='' className='project-img' />
              <div className='project-text'>
                <h2 className='pb-4 font-bold text-xl'>{appData.title}</h2>
                <p>{appData.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
