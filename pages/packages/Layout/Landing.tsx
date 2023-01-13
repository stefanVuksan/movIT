//import modules
import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';

//import components
import Navbar from '../Component/Navbar/NavBar'
import Footer from '../Component/Footer'

type LandinglayoutProps = {
    children: ReactNode,
};

const Landinglayout: FC<LandinglayoutProps> = ({ children = true }) => {
    return (
        <>
            <Navbar />
            {children}
            {<Footer />}
        </>
    );
};

export default Landinglayout;
