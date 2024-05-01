import React, { useEffect, useState } from 'react'
import { SVGIcon } from '../Icons';
import jsonData from "./jsonData.json"
import { ProductForm } from './ProductForm';
import { json } from 'stream/consumers';

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

    const handleClose = () => {
        setProduct(false);
    }

    useEffect(() => {
        if (product) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [product]);

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
                        <div className='relative bg-white xl:w-[70%] lg:w-[70%] md:w-[70%] w-[90%] mx-auto shadow-lg rounded-[20px] px-[2%]'>
                            <div className='flex items-center justify-between py-[20px] border-b-[#DADADA] border-b border-solid'>
                                <span className='text-xl font-semibold text-accentColor'>Add Product</span>
                                <button type='button' onClick={handleClose}><SVGIcon className="text-xl font-semibold" name="RxCross2" /></button>
                            </div>
                            <ProductForm product_image={jsonData.product_list.product_image} product_gallery={jsonData.product_list.product_gallery} product_item={jsonData.product_list.product_item}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
