import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { GridBox } from '../GridBox';
import { SVGIcon } from '../Icons';
import { CheckBox } from '../CheckBox';
import { Number } from '../Number';
import { ProductText } from '../ProductText';
import Image from 'next/image';

interface CategoryItem {
    name: string;
    label: string;
    option: string[];
}

interface TextItem {
    name: string;
    label: string;
    placeholder: string;
    required: boolean
}

interface ImageItem {
    label: string;
    name: string;
}

interface ProductItem {
    product_name: TextItem;
    product_sku: TextItem;
    sale_price: TextItem;
    regular_price: TextItem;
    product_category: CategoryItem;
    stock: TextItem;
    tag: TextItem;
}

interface ProductFormProps {
    product_image: ImageItem;
    product_gallery: ImageItem;
    product_item: ProductItem;
}

export const ProductForm: React.FC<ProductFormProps> = ({ product_image, product_gallery, product_item }) => {
    const imageFileInputRef = useRef<HTMLInputElement>(null);
    const galleryFileInputRef = useRef<HTMLInputElement>(null);
    const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
    const [galleryImages, setGalleryImages] = useState<{ name: string; image: string }[]>([]);
    const [imageName, setImageName] = useState<string | undefined>(undefined);
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileChange(e, setPreviewImage, setImageName, imageFileInputRef);
    };

    const handleGalleryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newGalleryImages: { name: string; image: string }[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();
                reader.onloadend = () => {
                    newGalleryImages.push({ name: file.name, image: reader.result as string });
                    if (newGalleryImages.length === files.length) {
                        setGalleryImages([...galleryImages, ...newGalleryImages]);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    };

    const handleFileButtonClick = (ref: React.RefObject<HTMLInputElement>) => {
        if (ref.current) {
            ref.current.click();
        }
    };

    const removeImageFromGallery = (index: number) => {
        setGalleryImages(prevGalleryImages => {
            const updatedGalleryImages = [...prevGalleryImages];
            updatedGalleryImages.splice(index, 1);
            return updatedGalleryImages;
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=' my-5'>
            <GridBox columns={6} gap={5} className='sm:grid'>
                <GridBox.GridItem columnMerge={2}>
                    <div className='flex gap-2.5 flex-wrap'>
                        <div className='product-image xl:w-[48%] lg:w-[48%] md:w-full w-[45%]'>
                            <Controller
                                name={product_image.name}
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange } }) => (
                                    <span>
                                        <input
                                            type="file"
                                            ref={imageFileInputRef}
                                            className="hidden"
                                            autoComplete="off"
                                            accept=".png, .jpg, image/png, image/jpeg"
                                            onChange={(e) => {
                                                handleImageFileChange(e);
                                                onChange(e.target.files?.[0]);
                                            }}
                                        />
                                        {previewImage ? (
                                            <div className='block m-auto text-center space-y-3'>
                                                <Image src={previewImage} alt="Preview" className="w-4/5 m-auto rounded-xl" />
                                                <p className='text-sm'>{imageName}</p>
                                            </div>
                                        ) : (
                                            <div className='block m-auto text-center space-y-3'>
                                                <button type='button' className='border border-solid border-[#DADADA] p-10 rounded-xl' onClick={() => handleFileButtonClick(imageFileInputRef)}><SVGIcon className="text-3xl text-accentColor" name="upload" /></button>
                                                <p className='text-sm'>{product_image.label}</p>
                                            </div>
                                        )}
                                    </span>
                                )}
                            />
                            <div className='mt-[10px]'>
                                {errors[product_image.name] && <span className="text-red-500 text-sm">Please Add Image</span>}
                            </div>
                        </div>
                        <div className='product-gallery xl:w-[48%] lg:w-[48%] md:w-full w-[45%]'>
                            <Controller
                                name={product_gallery.name}
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: false,
                                }}
                                render={({ field: { onChange } }) => (
                                    <span>
                                        <input
                                            type="file"
                                            ref={galleryFileInputRef}
                                            className="hidden"
                                            autoComplete="off"
                                            accept=".png, .jpg, image/png, image/jpeg"
                                            onChange={(e) => {
                                                handleGalleryFileChange(e);
                                                onChange(e.target.files);
                                            }}
                                            multiple
                                        />
                                        <div className='block m-auto text-center space-y-3'>
                                            <button type='button' className='border border-solid border-[#DADADA] p-10 rounded-xl' onClick={() => handleFileButtonClick(galleryFileInputRef)}><SVGIcon className="text-3xl text-accentColor" name="upload" /></button>
                                            <p className='text-sm'>{product_gallery.label}</p>
                                        </div>
                                    </span>
                                )}
                            />
                            <div className='mt-[10px]'>
                                {errors[product_gallery.name] && <span className="text-red-500 text-sm">Please Add Image</span>}
                            </div>
                        </div>
                        {galleryImages.map((image, index) => (
                            <div key={index} className=' product-gallery w-[48%] relative'>
                                <button className="absolute top-[-5px] right-1 bg-accentColor rounded-full p-1" onClick={() => removeImageFromGallery(index)}>
                                    <SVGIcon className="text-white" name="RxCross2" />
                                </button>
                                <Image src={image.image} alt="Preview" className="w-4/5 h-[114px] bg-cover rounded-xl m-auto" />
                            </div>
                        ))}
                    </div>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={4}>
                    <div className='flex gap-3 flex-wrap'>
                        <div className='xl:w-[48%] lg:w-[48%] md:w-full w-full'>
                            <ProductText name={product_item.product_name.name} label={product_item.product_name.label} placeholder={product_item.product_name.placeholder} required={product_item.product_name.required} control={control} errors={errors} />
                        </div>
                        <div className='xl:w-[48%] lg:w-[48%] md:w-full w-full'>
                        <ProductText name={product_item.product_sku.name} label={product_item.product_sku.label} placeholder={product_item.product_sku.placeholder} required={product_item.product_sku.required} control={control} errors={errors} />
                        </div>
                        <div className='xl:w-[48%] lg:w-[48%] md:w-full w-full'>
                            <Number name={product_item.sale_price.name} placeholder={product_item.sale_price.placeholder} label={product_item.sale_price.label} required={product_item.sale_price.required} control={control} errors={errors} />
                        </div>
                        <div className='xl:w-[48%] lg:w-[48%] md:w-full w-full'>
                            <Number name={product_item.regular_price.name} placeholder={product_item.regular_price.placeholder} label={product_item.regular_price.label} required={product_item.regular_price.required} control={control} errors={errors} />
                        </div>
                        
                        <div className='xl:w-[48%] lg:w-[48%] md:w-full w-full'>
                            <Number name={product_item.stock.name} placeholder={product_item.stock.placeholder} label={product_item.stock.label} required={product_item.stock.required} control={control} errors={errors} />
                        </div>
                        <div className='xl:w-[48%] lg:w-[48%] md:w-full w-full'>
                            <ProductText name={product_item.tag.name} placeholder={product_item.tag.placeholder} label={product_item.tag.label} required={product_item.tag.required} control={control} errors={errors} />
                        </div>
                        <div className='w-full'>
                            <CheckBox name={product_item.product_category.name} label={product_item.product_category.label} option={product_item.product_category.option} control={control} errors={errors} />
                        </div>
                    </div>
                </GridBox.GridItem>
            </GridBox>
            <button type='submit' className='bg-accentColor text-white px-[30px] py-2.5 rounded-[15px] flex mt-[30px] m-auto xl:w-[30%] lg:w-[30%] md:w-[30%] w-full justify-center'>Add Product</button>
        </form>
    )
}

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setPreviewImage: React.Dispatch<React.SetStateAction<string | undefined>>, setImageName: React.Dispatch<React.SetStateAction<string | undefined>>, ref: React.RefObject<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setImageName(file.name);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    }
};
