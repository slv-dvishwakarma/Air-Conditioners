import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { ParentContainer } from "@/components/ParentContainer";
import { Product } from "@/components/Product";

export default function Home() {

  const home = {
    logo: "/logo.png",
    alt: "Deal Website",
    searchbar: {
      name: "searchbar",
      key: "dropdown",
      placeholder: "Search",
      option: [
        "AC 1.5 Ton",
        "AC 1 Ton",
        "AC 2 Ton",
        "AC 3 Ton",
      ],
      language: [
        "English - EN",
        "Hindi - HI",
      ]
    },
    product: {
      breadcrumb: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Category",
          link: "/category",
        },
        {
          label: "Products",
          link: "/products",
        },
        {
          label: "AC",
          link: "/ac",
        },
      ],
      brand: {
        label: "Featured Brand",
        name: "brand",
        options: [
          "Voltas",
          "Daikin",
          "Carrier",
          "Panasonic",
          "Blue Star",
          "Godrej",
          "Samsung",
        ],
      },
      delivery: {
        label: "Pay On Delivery",
        name: "delivery",
        options: [
          "Eligible for Pay On Delivery",
        ],
      },
      compressor: {
        label: "Compressor Type",
        name: "compressor",
        options: [
          "Rotary Scroll",
        ],
      },
      energy: {
        label: "Energy Star",
        name: "energy",
        options: [
          "1 Star",
          "2 Star",
          "3 Star",
          "4 Star",
          "5 Star",
        ],
      },
      coil: {
        label: "Condenser Coil Material",
        name: "coil",
        options: [
          "Copper",
        ],
      },
      appliances : {
        label: "Large Appliances Top Brands",
        name: "appliances",
        options: [
          "Top Brands",
        ],
      },
    },

    product_list: {
      list_1: {
        image: "/AC.jpg",
        title: "LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, 2024 Model, TS-Q18JNXE3, White)",
        rank: 4,
        rank_list: "1,951",
        Price: "45000",
        discount_price: "1000",
        emi: "No Cost EMI available on select cards",
        service: "Service: Paid Installation",
        delivery: "FREE delivery",
        currancy: "₹"
      }
    }
  }

  return (
    <>
      <ParentContainer className="bg-primary">
        <Header logo={home.logo} alt={home.alt} searchbar={home.searchbar} option={home.searchbar.option} language={home.searchbar.language}  />
      </ParentContainer>
      <ParentContainer>
        <Product breadcrumb={home.product.breadcrumb} brand={home.product.brand} delivery={home.product.delivery} compressor={home.product.compressor} energy={home.product.energy} coil={home.product.coil} appliances={home.product.appliances} list_1={home.product_list.list_1}/>
      </ParentContainer>
      {/* <ParentContainer>
        <Footer />
      </ParentContainer> */}
    </>
  );
}
