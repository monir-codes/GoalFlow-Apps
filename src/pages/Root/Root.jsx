import React, { Suspense } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';


const Root = () => {

    const navigation = useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? (<div className="flex justify-center items-center min-h-screen">
                   <span className="loading loading-dots loading-xl"></span>
                </div>) : ( 
                    
                  <Outlet></Outlet>
                )
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;