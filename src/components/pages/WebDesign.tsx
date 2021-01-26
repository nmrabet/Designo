import React from "react";
import express from "../../assets/img/image-express.jpg";
import transfer from "../../assets/img/image-transfer.jpg";
import photon from "../../assets/img/image-photon.jpg";
import builder from "../../assets/img/image-builder.jpg";
import blogr from "../../assets/img/image-blogr.jpg";
import camp from "../../assets/img/image-camp.jpg";

export default function WebDesign() {
  const projectData = [
    {
      id: 1,
      url: express,
      title: "EXPRESS",
      text: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      id: 2,
      url: transfer,
      title: "TRANSFER",
      text:
        "Site for low-cost money transfers and sending money within seconds",
    },
    {
      id: 3,
      url: photon,
      title: "PHOTON",
      text:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      id: 4,
      url: builder,
      title: "BUILDER",
      text: "Connects users with local contractors based on their location",
    },
    {
      id: 5,
      url: blogr,
      title: "BLOGR",
      text: "Blogr is a platform for creating an online blog or publication",
    },
    {
      id: 6,
      url: camp,
      title: "CAMP",
      text:
        "Get expert training in coding, data, design, and digital marketing",
    },
  ];
  return (
    <div>
      <div className='background text-center text-white py-20 px-48'>
        <h2 className='text-3xl font-semibold pb-6'>Web Design</h2>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </div>
      <div className='py-20'>
        {projectData.map((project) => {
          return (
            <div key={project.id} className='py-6'>
              <img src={project.url} alt='' className='project-img' />
              <div className='project-text'>
                <h2 className='pb-4 font-bold text-xl'>{project.title}</h2>
                <p>{project.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
