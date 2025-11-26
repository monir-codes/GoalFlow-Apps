import React from "react";
import { useLoaderData, useParams } from "react-router";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import { addStoredDB } from "../../utility/addToDB";

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

  const handleInstall = (id)=>{

    addStoredDB(id)

  }

  return (
    <div className="bg-[#D2D2D2] py-10 px-8 md:px-4">
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        <img src={image} className="w-9/12 mx-auto md:w-3/12 h-auto" alt="" />
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
            <button onClick={()=> handleInstall(id)} className="btn block bg-[#00D390] text-white shadow-none mt-10 md:mt-8 mx-auto">
              Install Now ( {size} MB )
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-gray-500 my-10"></div>

      <div>
        <LineChart
          style={{
            width: "100%",
            aspectRatio: 1.618,
            maxWidth: 800,
            margin: "auto",
          }}
          responsive
          data={ratings}
        >
          <CartesianGrid stroke="#ffffff" strokeDasharray="5 5" />
          <XAxis dataKey="v" />
          <YAxis width="auto" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default AppDetails;
