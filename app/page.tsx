import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { ParentContainer } from "@/components/ParentContainer";
import { Product } from "@/components/Product";

export default function Home() {

  const currentYear = new Date().getFullYear();

  const home = {
    logo: "/logo.png",
    alt: "Deal Website",
    cart: 2,
    options: [
      "My Account",
      "Profile",
      "Help",
    ],
    price: {
      label: "Price",
      range: [300, 1000],
      maxPrice: 5000,
    },
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
      appliances: {
        label: "Large Appliances Top Brands",
        name: "appliances",
        options: [
          "Top Brands",
        ],
      },
    },
    color: {
      label: "Colour",
      name: "color",
      options: [
        "bg-[#0000FF]",
        "bg-[#008000]",
        "bg-[#808080]",
        "bg-[#ff0000]",
      ],
    },

    product_list: [
      {
        image: "/product/ac1.jpg",
        title: "LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, 2024 Model, TS-Q18JNXE3, White)",
        rank: 4,
        rank_list: "1,951",
        Price: 45000,
        discount_price: 71000,
        emi: "No Cost EMI available on select cards",
        service: "Service: Paid Installation",
        delivery: "FREE delivery",
        currancy: "₹",
        mrp: "M.R.P:",
      },
      {
        image: "/product/ac2.jpg",
        title: "LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, 2024 Model, TS-Q18JNXE3, White)",
        rank: 2.5,
        rank_list: "1,951",
        Price: 35000,
        discount_price: 50000,
        emi: "No Cost EMI available on select cards",
        service: "Service: Paid Installation",
        delivery: "FREE delivery",
        currancy: "₹",
        mrp: "M.R.P:",
      },
      {
        image: "/product/ac3.jpg",
        title: "LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, 2024 Model, TS-Q18JNXE3, White)",
        rank: 2.5,
        rank_list: "1,951",
        Price: 30000,
        discount_price: 50000,
        emi: "No Cost EMI available on select cards",
        service: "Service: Paid Installation",
        delivery: "FREE delivery",
        currancy: "₹",
        mrp: "M.R.P:",
      },
      {
        image: "/product/ac4.jpg",
        title: "LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, 2024 Model, TS-Q18JNXE3, White)",
        rank: 2.5,
        rank_list: "1,951",
        Price: 40000,
        discount_price: 50000,
        emi: "No Cost EMI available on select cards",
        service: "Service: Paid Installation",
        delivery: "FREE delivery",
        currancy: "₹",
        mrp: "M.R.P:",
      },
      {
        image: "/product/ac5.jpg",
        title: "LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection, 2024 Model, TS-Q18JNXE3, White)",
        rank: 2.5,
        rank_list: "1,951",
        Price: 38000,
        discount_price: 50000,
        emi: "No Cost EMI available on select cards",
        service: "Service: Paid Installation",
        delivery: "FREE delivery",
        currancy: "₹",
        mrp: "M.R.P:",
      },
    ],

    footer: {
      know: {
        label: "Let to Know Us",
        image: [
          "/play-store.png",
          "/app-store.png",
        ],
        menu: [
          {
            name: "Careers",
            link: "/"
          },
          {
            name: "About Us",
            link: "/"
          },
          {
            name: "UK Modern Slavery Statement",
            link: "/"
          },
        ],
      },
      footer_item: [
        {
          label: "Make Money with Us",
          menu: [
            {
              name: "Make Money with Us",
              link: "/"
            },
            {
              name: "Sell on Deal",
              link: "/"
            },
            {
              name: "Sell Under Private Brands",
              link: "/"
            },
            {
              name: "Sell on Deal Business",
              link: "/"
            },
            {
              name: "Sell on Deal Handmade",
              link: "/"
            },
            {
              name: "Fulfilment by Deal",
              link: "/"
            },
            {
              name: "Seller Fulfilled Prime",
              link: "/"
            },
            {
              name: "Advertise Your Products",
              link: "/"
            },
            {
              name: "Deal Pay",
              link: "/"
            },
            {
              name: "Host an Deal Hub",
              link: "/"
            },
          ],
        },
        {
          label: "Deal Payment Methods.",
          menu: [
            {
              name: "Deal Platinum Mastercard",
              link: "/"
            },
            {
              name: "Deal Classic Mastercard",
              link: "/"
            },
            {
              name: "Deal Money Store",
              link: "/"
            },
            {
              name: "Gift Cards",
              link: "/"
            },
            {
              name: "Deal Currency Converter",
              link: "/"
            },
            {
              name: "Payment Methods Help",
              link: "/"
            },
            {
              name: "Shop with Points",
              link: "/"
            },
            {
              name: "Top Up Your Account",
              link: "/"
            },
            {
              name: "Top Up Your Account in Store",
              link: "/"
            },
          ],
        },
        {
          label: "Let Us Help You",
          menu: [
            {
              name: "Track Packages or View Orders",
              link: "/"
            },
            {
              name: "Delivery Rates & Policies",
              link: "/"
            },
            {
              name: "Deal Prime",
              link: "/"
            },
            {
              name: "Returns & Replacements",
              link: "/"
            },
            {
              name: "Recycling Manage Your Content and Devices",
              link: "/"
            },
            {
              name: "Deal Mobile App",
              link: "/"
            },
            {
              name: "Deal Assistant",
              link: "/"
            },
            {
              name: "Customer Service",
              link: "/"
            },
          ],
        },
      ],
    },
    copyright: {
      label: "© Deal.com",
      year: currentYear,
      menu: [
        {
          name: "Conditions of Use & Sale",
          link: "/"
        },
        {
          name: "Privacy Notice",
          link: "/"
        },
        {
          name: "Cookies Notice",
          link: "/"
        },
      ]
    }
  }

  return (
    <>
      <ParentContainer className="bg-primary">
        <Header logo={home.logo} alt={home.alt} cart={home.cart} searchbar={home.searchbar} option={home.searchbar.option} language={home.searchbar.language} options={home.options} />
      </ParentContainer>
      <ParentContainer>
        <Product breadcrumb={home.product.breadcrumb} brand={home.product.brand} delivery={home.product.delivery} compressor={home.product.compressor} energy={home.product.energy} coil={home.product.coil} appliances={home.product.appliances} product_list={home.product_list} price={home.price} color={home.color} />
      </ParentContainer>
      <ParentContainer className="bg-primary text-white">
        <Footer logo={home.logo} alt={home.alt} know={home.footer.know} footer_item={home.footer.footer_item} copyright={home.copyright} language={home.searchbar.language}/>
      </ParentContainer>
    </>
  );
}
