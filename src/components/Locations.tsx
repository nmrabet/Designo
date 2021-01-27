import React from 'react'

export default function Locations() {
  return (
    <div>
      <div className='box text-center text-white space-y-6'>
        <h3 className='text-3xl font-medium '>Let’s talk about your project</h3>
        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        <button className='text-black uppercase border rounded py-2 px-4 bg-white font-semibold'>Get in touch</button>
      </div>
    </div>
  )
}

// import React, { useState } from "react";
// import Map from "./Map";

// function Locations() {
//   const [markersData, setMarkersData] = useState([
//     { latLng: { lat: 49.8419, lng: 24.0315 }, title: 1 }
//   ]);

//   function addMarker() {
//     const lastMarker = markersData[markersData.length - 1];

//     setMarkersData([
//       ...markersData,
//       {
//         title: +lastMarker.title + 1,
//         latLng: {
//           lat: lastMarker.latLng.lat + 0.0001,
//           lng: lastMarker.latLng.lng + 0.0001
//         }
//       }
//     ]);
//   }

//   return (
//     <div>
//       <Map markersData={markersData} />
//       <button onClick={addMarker}>Add marker</button>
//       <ul>
//         Markers data:
//         {markersData.map(marker => (
//           <li key={marker.title}>
//             {marker.title}, lat: {marker.latLng.lat}, lng: {marker.latLng.lng},
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Locations
