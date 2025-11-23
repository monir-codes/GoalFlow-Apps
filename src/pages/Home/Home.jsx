import React from 'react';
import heroPng from '../../assets/hero.png'
import playStoreIcon from '../../assets/playstore.png'
import appStoreIcon from '../../assets/app-store.png'

const Home = () => {
    return (
        <div className='bg-[#D2D2D2] text-center '>
            <div className='md:w-8/12 mx-auto p-8 pt-15'>
                <h1 className='text-4xl md:text-6xl font-extrabold'>We Build <br />
<span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive </span>Apps</h1>
        <p className='text-xs md:text-md text-[#627382] mt-3'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div>
                <a className='btn m-2'><span className='w-2/12'><img  src={playStoreIcon} alt="Playstore logo" /></span>Google Play</a>
                <a className='btn m-2'><span className='w-2/12'><img  src={appStoreIcon} alt="App Store logo" /></span>App Store</a>
            </div>

            <div className='md:w-8/12 mx-auto mt-4'>
            <img className='w-[80%] mx-auto' src={heroPng} alt="Hero png" />
            </div>

            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-8'>
                <h2 className='font-bold text-2xl md:text-4xl text-center'>Trusted by Millions, Built for You</h2>
                <div className='flex gap-4 md:gap-4 justify-between md:w-8/12 mx-auto my-8 items-center'>
                    <div >
                        <p className='text-xs '>
                            Total Downloads
                        </p>
                        <h2 className='font-extrabold text-2xl md:text-5xl my-3'>
                            29.6M
                        </h2>

                        <p className='text-xs '>
                        21% more than last month
                        </p>
                    </div>
                    <div >
                        <p className='text-xs '>
                            Total Reviews
                        </p>
                        <h2 className='font-extrabold text-2xl md:text-5xl my-3'>
                            906K
                        </h2>

                        <p className='text-xs '>
                       46% more than last month 21% more than last month
                        </p>
                    </div>
                    <div >
                        <p className='text-xs '>
                            Active Apps
                        </p>
                        <h2 className='font-extrabold text-2xl md:text-5xl my-3'>
                           132+
                        </h2>

                        <p className='text-xs  '>
                        31 more will Launch
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;