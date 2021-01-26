import React from "react";
import change from "../../assets/img/image-change.jpg";
import boxed from "../../assets/img/image-boxed-water.jpg";
import science from "../../assets/img/image-science.jpg";

export default function GraphicDesign() {
  const graphicData = [
    {
      id: 1,
      url: change,
      title: "CHANGE",
      text: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      id: 2,
      url: boxed,
      title: "TRANSFER",
      text:
        "Site for low-cost money transfers and sending money within seconds",
    },
    {
      id: 3,
      url: science,
      title: "PHOTON",
      text:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
  ];
  return (
    <div>
      <div className='background text-center text-white py-20 px-48'>
        <h2 className='text-3xl font-semibold pb-6'>Graphic Design</h2>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </div>
      <div className='py-20'>
        {graphicData.map((graphic) => {
          return (
            <div key={graphic.id} className='py-6'>
              <img src={graphic.url} alt='' className='project-img' />
              <div className='project-text'>
                <h2 className='pb-4 font-bold text-xl'>{graphic.title}</h2>
                <p>{graphic.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
