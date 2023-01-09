//import modules
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';

//import components
import Navbar from '../Component/Navbar/NavBar'
import Footer from '../Component/Footer'

type MainlayoutProps = {
    children: ReactNode,
};

const Mainlayout: FC<MainlayoutProps> = ({ children = true }) => {
    return (
        <>
            <Navbar />
            {children}
            {<Footer />}
        </>
    );
};

export default Mainlayout;
