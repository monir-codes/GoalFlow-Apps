import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeStoredDB } from '../../utility/addToDB';
import downloadIcon from "../../assets/icon-downloads.png"
import ratingIcon from "../../assets/icon-ratings.png"
import { toast, ToastContainer } from 'react-toastify';


const Installation = () => {
    
    const [myApplist, setMyAppList] = useState([])
    const [sort, setSort] = useState("Sort ⬇️")
    const appInfo = useLoaderData()
    
    useEffect(()=>{

        const storedAppData = getStoredApp()
        const convertedStoredData = storedAppData.map(id => parseInt(id))
        const myAppsList = appInfo.filter(app => convertedStoredData.includes(app.id))
        setMyAppList(myAppsList)
    },[])

    const handleUninstall = (id)=>{
        removeStoredDB(id);
        setMyAppList(prev => prev.filter(app => app.id !== id))
         toast("Uninstalled Success")
    }
    
    const handleSort = (type)=>{
        setSort(type)

        if(type === "High-Low ⬇️" ){
            const sortedHighToLow = [...myApplist].sort((a,b) => b.downloads - a.downloads)
            setMyAppList(sortedHighToLow)
        }
        if(type === "Low-High ⬇️" ){
            const sortedLowToHigh = [...myApplist].sort((a,b) => a.downloads - b.downloads)
            setMyAppList(sortedLowToHigh)
        }

    }

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
  <div  tabIndex={0} role="button" className="btn m-1">{sort ? sort : ""}</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={() => handleSort("High-Low ⬇️")}>High-Low</a></li>
    <li><a onClick={() => handleSort("Low-High ⬇️")}>Low-High</a></li>
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
                    <div><button onClick={()=> handleUninstall(app.id)} className='btn bg-[#00D390] text-white text-xs md:text-sm'>Uninstall</button></div>
                </div>)
            }
            <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Installation;