import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import stylesheet from './layout.module.css';

const Layout = () => {
    return (
        <div className={stylesheet.layout}>
            <div className={stylesheet.header}>
                <Header />
            </div>
            <div className={stylesheet.container}>
                <div  >
                    <Outlet />
                </div>
                <div  >
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout