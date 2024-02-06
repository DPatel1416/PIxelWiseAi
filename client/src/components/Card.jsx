import React from 'react'; // Importing React library

import { download } from '../assets'; // Importing download icon from assets folder
import { downloadImage } from '../utils'; // Importing downloadImage function from utils folder

// Define Card functional component that takes props: _id, name, prompt, and photo
const Card = ({ _id, name, prompt, photo }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card"> {/* Container for the card with shadow effects */}
    <img
      className="w-full h-auto object-cover rounded-xl" // Styling for the image
      src={photo} // Image source
      alt={prompt} // Image alt text
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md"> {/* Styling for hover effect to display prompt */}
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p> {/* Displaying prompt text */}
      <div className="mt-5 flex justify-between items-center gap-2"> {/* Styling for name and download button */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div> {/* Displaying first letter of name in a circle */}
          <p className="text-white text-sm">{name}</p> {/* Displaying full name */}
        </div>
        <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none"> {/* Download button */}
          <img src={download} alt="download" className="w-6 h-6 object-contain invert" /> {/* Download icon */}
        </button>
      </div>
    </div>
  </div>
);

export default Card; // Exporting Card component
