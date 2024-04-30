import React, { useEffect, useState } from 'react'
import { SVGIcon } from '../Icons';
import jsonData from "./jsonData.json"

export const AddItem = () => {

    const [admin, setAdmin] = useState(false);
    const [product, setProduct] = useState(false);

    useEffect(() => {
        const gettoken = localStorage.getItem('token');

        if (gettoken) {
            if (gettoken === 'admin') {
                setAdmin(true);
            }
        }
    }, []);

const handleOpen = () => {
    setProduct(true);
}

    return (
        <>
            {admin ? (
                <div className='add_item text-center my-4'>
                    <button type='button' onClick={handleOpen} className='p-6 space-y-3 border rounded-[20px] border-solid border-[#DBDBDB]'>
                        <SVGIcon className="text-[70px] flex justify-center text-accentColor" name={jsonData.icon} />
                        <h2>{jsonData.label}</h2>
                    </button>
                </div>
            ) : (null)}

            {product && (
                <div className={`${product ? "fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]" : ""}`}>
                <div className='flex items-center justify-center min-h-screen'>
                    <div className='relative bg-white w-[50%] mx-auto shadow-lg rounded-[20px]'>
                        Product
                    </div>
                </div>
                </div>
            )}
        </>
    )
}
