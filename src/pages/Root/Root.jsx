import React, { Suspense } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense fallback={"Loading..."}>
             <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Root;