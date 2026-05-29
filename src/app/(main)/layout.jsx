import { Footer } from '@/components/HomePage/Sheard/Footer/Footer';
import Navber from '@/components/HomePage/Sheard/Navber/Navber';
import React from 'react';

const layout = ({ children }) => {

    return (
        <div>
            <Navber></Navber>
            <Footer></Footer>
            { children }
            
        </div>
    );
};

export default layout;