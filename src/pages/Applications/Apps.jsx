import React from 'react';
import { useLoaderData } from 'react-router';
import downloadIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"

const Apps = () => {

    const InfoData = useLoaderData()

    return (
        <div className='bg-[#D2D2D2] text-center '>
      <div className="md:w-8/12 mx-auto p-8 pt-15">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#001931]">Our All Applications</h1>
        <p className="md:w-8/12 mx-auto text-xs md:text-[16px] text-[#627382] mt-4">
        Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-4 p-4 mt-5">
        {
        InfoData.map(card => <div className="card bg-base-100 w-auto h-full md:h-100 shadow-sm ">
  <figure>
    <img className="object-cover"
      src={card.image}
      alt="Card Images" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{card.title} : {card.description}</h2>

    <div className="card-actions  flex justify-between mt-3">
     <div className="flex items-center justify-center p-1 text-[#00D390] bg-[#F1F5E8] rounded-xs">
         <img className="w-2/12 mx-auto -mr-1 ml-2" src={downloadIcon} alt="Download Icon" />
        <p className="text-sm md:text-md ">{card.downloads}</p>
     </div>
     <div className="flex items-center justify-center p-1 text-[#FF8811] bg-[#FFF0E1] rounded-xs">
         <img className="w-2/12 mx-auto -mr-1 ml-2" src={ratingIcon} alt="Download Icon" />
        <p className="text-sm md:text-md ">{card.ratingAvg}</p>
     </div>
    </div>
  </div>

</div>)
        }
        </div>

        </div>
    );
};

export default Apps;