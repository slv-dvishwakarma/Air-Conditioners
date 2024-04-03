import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParentContainer } from "@/components/ParentContainer";

const inter = Inter({ subsets: ["latin"] });

const currentYear = new Date().getFullYear();

const archive = {
  logo: "/logo.png",
  alt: "Deal Website",
  cart: 2,
  options: [
    "My Account",
    "Profile",
    "Help",
  ],
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

export const metadata: Metadata = {
  title: "Air-Conditioners",
  description: "Deal website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParentContainer className="bg-primary">
          <Header logo={archive.logo} alt={archive.alt} cart={archive.cart} searchbar={archive.searchbar} option={archive.searchbar.option} language={archive.searchbar.language} options={archive.options} />
        </ParentContainer>
        {children}
        <ParentContainer className="bg-primary">
          <Footer logo={archive.logo} alt={archive.alt} know={archive.footer.know} footer_item={archive.footer.footer_item} copyright={archive.copyright} language={archive.searchbar.language} />
        </ParentContainer>
      </body>
    </html>
  );
}
