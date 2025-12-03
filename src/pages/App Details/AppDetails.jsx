import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { ResponsiveContainer, CartesianGrid, BarChart, Bar, Tooltip, XAxis, YAxis } from "recharts";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { addStoredDB, getStoredApp } from "../../utility/addToDB";
import { toast, ToastContainer } from "react-toastify";


const AppDetails = () => {
  const { id } = useParams();
  const idNumber = parseInt(id);
  const InfoData = useLoaderData();
  const {
    companyName,
    image,
    title,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings, 
  } = InfoData.find((data) => data.id === idNumber);
  
  const [installed, setInstalled] = useState(false)

  const handleInstall = (id)=>{

    addStoredDB(id);
    toast("Installed Success")
    setInstalled(true)

  }


  useEffect(()=> {
    const installedApps = getStoredApp()
    if(installedApps.includes(id)){
      setInstalled(true)
    }
  },[])

  return (
    <div className="bg-[#D2D2D2] py-10 px-8 md:px-4">
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        <img src={image} className="w-9/12 mx-auto md:w-3/12 h-auto" alt="App Icon" />
        <div>
          <h2 className="font-bold text-xl md:text-2xl mt-6 md:mt-0">
            {title} : {description}
          </h2>
          <p className="text-[#627382] mt-2 md:mt-0 text-sm md:text-md">
            Developed by{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              {companyName}
            </span>
          </p>

          <div className="border-t-1 border-gray-500 my-10"></div>

          <div className="md:m-4 flex items-center md:gap-16 gap-15 justify-center md:justify-start">
            <div className="flex flex-col items-center mt-6 gap-2">
              <img
                className="w-7/12 md:w-6/12"
                src={downloadIcon}
                alt="Download Icon"
              />
              <p className="text-xs md:text-sm">Downloads</p>
              <p className="font-extrabold text-xl md:text-2xl">{downloads}</p>
            </div>
            <div className="flex flex-col items-center mt-6 gap-2">
              <img
                className="w-7/12 md:w-6/12"
                src={ratingIcon}
                alt="Star Icon"
              />
              <p className="text-xs md:text-sm">Average Ratings</p>
              <p className="font-extrabold text-xl md:text-2xl">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center mt-6 gap-2">
              <img
                className="w-7/12 md:w-6/12"
                src={reviewIcon}
                alt="Download Icon"
              />
              <p className="text-xs md:text-sm text-center">Total Reviews</p>
              <p className="font-extrabold text-xl md:text-2xl">{reviews}</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <button onClick={()=> handleInstall(id)} disabled={installed} className={`btn block bg-[#00D390] text-white shadow-none mt-10 md:mt-8  ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"}`}>
             
           {
            installed ? "Installed" : `Install Now ( ${size} MB )`
           }
            </button>
           <ToastContainer />
          </div>
        </div>
      </div>
      <div className="border-t-1 border-gray-500 my-10"></div>

      <div>
          <h3 className="text-xl font-semibold ml-8 md:ml-10 mb-2 md:mb-6">
            Ratings
          </h3>

<ResponsiveContainer width="90%" height={300}>
       <BarChart
  
    data={ratings}
    layout="vertical"
    style={{ marginLeft: "20px" }}
  >
    <CartesianGrid stroke="" />
    <XAxis type="number" />
    <YAxis type="category" dataKey="name" width={80} />
    <Tooltip />

    <Bar
      dataKey="count"
      fill="#FF8811" 
      barSize={20}
      radius={[0, 0, 0, 0]}
    />
  </BarChart>
          </ResponsiveContainer>
      </div>

      <div className="border-b-1 border-gray-500 my-10"></div>

      <div>
          <h3 className="text-xl font-semibold md:ml-8 md:ml-10 mb-2 md:mb-6">
           Description
          </h3>
          <p className="text-[#627382] mt-3 md:mt-0 text-sm md:text-md md:ml-8">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
