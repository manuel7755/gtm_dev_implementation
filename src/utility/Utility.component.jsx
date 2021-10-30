
import React, { useState, useEffect } from 'react';


export const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width >= 1200);
}


export const apiCallProducts = (call) => {

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(products => call(products) )

}
