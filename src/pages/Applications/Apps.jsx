import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import downloadIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"

const Apps = () => {

    const InfoData = useLoaderData()
    const [search, setSearch] = useState("")
    const filteredApps = InfoData.filter(apps => apps.title.toLowerCase().includes(search.toLocaleLowerCase()))


    return (
        <div className='bg-[#D2D2D2] text-center '>
      <div className="md:w-8/12 mx-auto p-8 pt-15">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#001931]">Our All Applications</h1>
        <p className="md:w-8/12 mx-auto text-xs md:text-[16px] text-[#627382] mt-4">
        Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

        <div className='flex justify-between items-center mt-10 p-5'>
          <p className='font-semibold text-lg'>({filteredApps.length}) Apps Found</p>
<label className="input bg-transparent w-5/12 md:w-3/12">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" onChange={(e) => setSearch(e.target.value) } className="grow" placeholder="Search" />

</label>
        </div>

      {
        filteredApps.length === 0 && (
                <p className="text-center text-lg font-semibold text-gray-600 py-10 ">
                    No App Found
                </p>
        )
      }

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-4 p-4 ">
        {
        filteredApps.map(card => <Link to={`/app/${card.id}`}>
        <div key={card.id} className="card bg-base-100 w-auto h-full md:h-100 shadow-sm ">
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

</div>
        </Link>)
        }
        </div>

        </div>
    );
};

export default Apps;