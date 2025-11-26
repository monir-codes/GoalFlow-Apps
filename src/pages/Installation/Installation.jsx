import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utility/addToDB';
import downloadIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"


const Installation = () => {
    
    const [myApplist, setMyAppList] = useState([])
    const appInfo = useLoaderData()
    
    useEffect(()=>{

        const storedAppData = getStoredApp()
        const convertedStoredData = storedAppData.map(id => parseInt(id))
        const myAppsList = appInfo.filter(app => convertedStoredData.includes(app.id))
        setMyAppList(myAppsList)
    },[])



    return (
        <div className='p-4 md:p-12 bg-[#D2D2D2]'>
            <div className='text-center mt-10'>
            <h1 className='text-3xl md:text-4xl font-extrabold text-[#001931] mb-3'>Your Installed Apps</h1>
            <p className='text-[#627382] text-xs md:text-sm'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div>
                <div className='flex justify-between mt-15 items-center mb-4'>
                    <div>
                        <p className='font-semibold text-md'>{myApplist.length} Apps Found</p>
                    </div>
            <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
            </div>
                </div>

            {
                myApplist.map(app =>   <div className='bg-white p-2 md:p-4 rounded-sm flex justify-between items-center mb-3'>

                    <div className='flex items-center '>
                            <img className='w-2/12 md:w-1/16 rounded-sm mr-2' src={app.image} alt={"App Icon"} />
                    
                        <div className='mr-2'>
                            <h4 className='text-[10px] md:text-lg font-medium'>{app.title} : {app.description}</h4>

                        <div className='mt-2 flex items-center'>

                      <div className="flex items-center text-[#00D390]">
              <img
                className="w-1/10 md:w-2/13 mr-1"
                src={downloadIcon}
                alt="Download Icon"
              />
              <p className="font-bold text-[10px] md:text-sm">{app.downloads}</p>
            </div>
                        <div className="flex items-center text-[#FF8811]">
              <img
                className="w-2/11 md:w-2/13 mr-1"
                src={ratingIcon}
                alt="Download Icon"
              />
              <p className="font-bold text-[10px] md:text-sm">{app.ratingAvg}</p>
            </div>




                        <div>
                            <p className="font-bold text-[10px] md:text-sm">{app.size} MB</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div><button className='btn bg-[#00D390] text-white text-xs md:text-sm'>Uninstall</button></div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Installation;