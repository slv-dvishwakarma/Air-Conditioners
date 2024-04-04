import { Banners } from '@/components/Home/Banners';
import { HeroSlider } from '@/components/Home/HeroSlider'
import { ViewedProduct } from '@/components/Home/ViewedProduct';
import { ParentContainer } from '@/components/ParentContainer';
import React from 'react'

const page = () => {

    type ColumnType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

    const home = {
        slider: [
            {
                image: "/slider-1.jpg",
                title: "Refresh your space",
                label: "Shop the Home store",
                button_label: "Learn more",
                button_link: "/ac",
            },
            {
                image: "/slider-2.jpg",
                title: "Discover new items",
                label: "Check out the latest arrivals",
                button_label: "Explore",
                button_link: "/latest",
            },
            {
                image: "/slider-3.jpg",
                title: "Check out the latest arrivals",
                label: "Grab your favorites at discounted prices",
                button_label: "Shop now",
                button_link: "/sale",
            },
        ],
        viewed: {
            title: "Related to items you've viewed",
            listing_button: {
                name: "View All",
                link: "/ac",
            },
            products: [
                {
                    company: "Voltas -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 3,
                    rank_list: 1951,
                    Price: 10000.00,
                    discount_price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Daikin -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-2.jpg",
                    rank: 4,
                    rank_list: 1951,
                    Price: 20000.00,
                    discount_price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Carrier -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-3.jpg",
                    rank: 5,
                    rank_list: 1951,
                    Price: 30000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Panasonic -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-4.jpg",
                    rank: 2,
                    rank_list: 1951,
                    Price: 40000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Blue Star -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 1,
                    rank_list: 1951,
                    Price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Blue Star -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 1,
                    rank_list: 1951,
                    Price: 60000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
            ],
        },

        trends: {
            title: "Inspired by your shopping trends",
            listing_button: {
                name: "View All",
                link: "/ac",
            },
            products: [
                {
                    company: "Voltas -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 3,
                    rank_list: 1951,
                    Price: 10000.00,
                    discount_price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Daikin -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-2.jpg",
                    rank: 4,
                    rank_list: 1951,
                    Price: 20000.00,
                    discount_price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Carrier -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-3.jpg",
                    rank: 5,
                    rank_list: 1951,
                    Price: 30000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Panasonic -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-4.jpg",
                    rank: 2,
                    rank_list: 1951,
                    Price: 40000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Blue Star -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 1,
                    rank_list: 1951,
                    Price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Blue Star -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 1,
                    rank_list: 1951,
                    Price: 60000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
            ],
        },


        products_banner: {
            column: 3 as ColumnType,
            banner: [
                {
                    name: "Prodcut Banner",
                    image: "/banner-1.jpg",
                    image_width: 683,
                    image_height: 374,
                    link: "/",
                    column_merge: 2 as ColumnType,
                },
                {
                    name: "Prodcut Banner",
                    image: "/banner-2.jpg",
                    image_width: 332,
                    image_height: 374,
                    link: "/",
                    column_merge: 1 as ColumnType,
                },
            ],
        },

        product_banner: {
            column: 1 as ColumnType,
            banner: [
                {
                    name: "Prodcut Banner",
                    image: "/banner-3.jpg",
                    image_width: 1600,
                    image_height: 533,
                    link: "/",
                    column_merge: 1 as ColumnType,
                },
            ],
        },

        devices: {
            title: "Deals Devices",
            listing_button: {
                name: "View All",
                link: "/ac",
            },
            products: [
                {
                    company: "Voltas -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 3,
                    rank_list: 1951,
                    Price: 10000.00,
                    discount_price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Daikin -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-2.jpg",
                    rank: 4,
                    rank_list: 1951,
                    Price: 20000.00,
                    discount_price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Carrier -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-3.jpg",
                    rank: 5,
                    rank_list: 1951,
                    Price: 30000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Panasonic -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-4.jpg",
                    rank: 2,
                    rank_list: 1951,
                    Price: 40000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Blue Star -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 1,
                    rank_list: 1951,
                    Price: 50000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
                {
                    company: "Blue Star -",
                    name: "1 Ton 3 Star Wi-Fi Inverter Smart Split AC",
                    image: "/viewedproduct/product-1.jpg",
                    rank: 1,
                    rank_list: 1951,
                    Price: 60000.00,
                    delivery: "FREE delivery",
                    currancy: "₹",
                },
            ],
        },

        product_banner1: {
            column: 1 as ColumnType,
            banner: [
                {
                    name: "Prodcut Banner",
                    image: "/banner4.gif",
                    image_width: 1600,
                    image_height: 533,
                    link: "/",
                    column_merge: 1 as ColumnType,
                },
            ],
        },
    };

    return (
        <>
            <HeroSlider slider={home.slider} />
            <ParentContainer>
                <ViewedProduct title={home.viewed.title} products={home.viewed.products} listing_button={home.viewed.listing_button}/>
                <Banners banner={home.products_banner.banner} column={home.products_banner.column}/>
                <ViewedProduct title={home.trends.title} products={home.trends.products} listing_button={home.trends.listing_button}/>
                <Banners banner={home.product_banner.banner} column={home.product_banner.column}/>
                <ViewedProduct title={home.devices.title} products={home.devices.products} listing_button={home.devices.listing_button}/>
                <Banners banner={home.product_banner1.banner} column={home.product_banner1.column}/>
            </ParentContainer>
        </>
    )
}

export default page