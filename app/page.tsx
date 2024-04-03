import { Banners } from '@/components/Home/Banners';
import { HeroSlider } from '@/components/Home/HeroSlider'
import { ViewedProduct } from '@/components/Home/ViewedProduct';
import { ParentContainer } from '@/components/ParentContainer';
import React from 'react'

const page = () => {

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
                image: "/slider-1.jpg",
                title: "Discover new items",
                label: "Check out the latest arrivals",
                button_label: "Explore",
                button_link: "/latest",
            },
            {
                image: "/slider-1.jpg",
                title: "Check out the latest arrivals",
                label: "Grab your favorites at discounted prices",
                button_label: "Shop now",
                button_link: "/sale",
            },
        ],
        viewed: {
            title: "Related to items you've viewed",
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
    };

    return (
        <>
            <HeroSlider slider={home.slider} />
            <ParentContainer>
                <ViewedProduct title={home.viewed.title} products={home.viewed.products} />
                <Banners />
                <ViewedProduct title={home.trends.title} products={home.trends.products} />
            </ParentContainer>
        </>
    )
}

export default page