import React, { useState } from "react";
import heroPng from "../../assets/hero.png";
import playStoreIcon from "../../assets/playstore.png";
import appStoreIcon from "../../assets/app-store.png";
import downloadIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import { useLoaderData, useNavigate } from "react-router";

const Home = () => {
    
    const InfoData = useLoaderData()
    const [showAll, setShowAll] = useState(false)

    const slicedCards = showAll ? InfoData : InfoData.slice(0, 8)

    const navigateApps = useNavigate()
    const handleNavigate = ()=>{
      navigateApps("/Apps")
    }

    
  return (
    <div className="bg-[#D2D2D2] text-center ">
      <div className="md:w-8/12 mx-auto p-8 pt-15">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#001931]">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="md:w-8/12 mx-auto text-xs md:text-md text-[#627382] mt-4">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div>
        <a className="btn m-2">
          <span className="w-2/12">
            <img src={playStoreIcon} alt="Playstore logo" />
          </span>
          Google Play
        </a>
        <a className="btn m-2">
          <span className="w-2/12">
            <img src={appStoreIcon} alt="App Store logo" />
          </span>
          App Store
        </a>
      </div>

      <div className="md:w-8/12 mx-auto mt-4">
        <img className="w-[80%] mx-auto" src={heroPng} alt="Hero png" />
      </div>

      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-5 md:p-8">
        <h2 className="font-bold text-2xl md:text-4xl text-center mt-5">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex gap-4 justify-between md:w-10/12 mx-auto my-12 items-center">
          <div>
            <p className="text-xs ">Total Downloads</p>
            <h2 className="font-extrabold text-2xl md:text-5xl my-3">29.6M</h2>

            <p className="text-xs ">21% more than last month</p>
          </div>
          <div>
            <p className="text-xs ">Total Reviews</p>
            <h2 className="font-extrabold text-2xl md:text-5xl my-3">906K</h2>

            <p className="text-xs ">
              46% more than last month 21% more than last month
            </p>
          </div>
          <div>
            <p className="text-xs ">Active Apps</p>
            <h2 className="font-extrabold text-2xl md:text-5xl my-3">132+</h2>

            <p className="text-xs  ">31 more will Launch</p>
          </div>
        </div>
      </div>

      <div className="p-4 mt-5">
        <h2 className="text-[#001931] font-bold text-2xl md:text-3xl">Trending Apps</h2>
        <p className="text-[#627382] text-xs md:text-md my-2">Explore All Trending Apps on the Market developed by us</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-4 p-4 mt-5">
        {
        slicedCards.map(card => <div className="card bg-base-100 w-auto h-full md:h-100 shadow-sm ">
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

        <button onClick={()=> handleNavigate()} className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white btn px-8 md:px-8 my-4">Show All</button>

      </div>
    </div>
  );
};

export default Home;
