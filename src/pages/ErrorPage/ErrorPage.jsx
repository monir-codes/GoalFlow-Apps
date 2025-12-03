import React from 'react';
import ErrorLogo from "../../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="bg-[#D2D2D2] p-20 h-[100%]">
            <div className='flex flex-col justify-center items-center text-center'>
                <img src={ErrorLogo} alt="Error Banner" />
                <h1 className='font-semibold text-xl md:text-3xl mt-2'>Oops, page not found!</h1>
                <p className='text-[#627382] text-sm mt-1'>The page you are looking for is not available.</p>
                <Link to="/"><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn mt-3 text-white'>Go Back!</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;