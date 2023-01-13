//import modules
import React, { FC, ReactNode } from 'react';

//import components
import Navbar from '../Component/Navbar/NavBar'
import Footer from '../Component/Footer'
import Section from '../Section';

type InnerLayoutProps = {
    children: ReactNode,
};

const InnerLayout: FC<InnerLayoutProps> = ({ children = true }) => {
    return (
        <>
            <Navbar />
            <Section name="inner">
                {children}
            </Section>
            {<Footer />}
        </>
    );
};

export default InnerLayout;
