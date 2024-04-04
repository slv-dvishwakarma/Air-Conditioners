import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ParentContainer } from "@/components/ParentContainer";
import { Footer } from "@/components/template/Footer";
import { Header } from "@/components/template/Header";

const inter = Inter({ subsets: ["latin"] });

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
          <Header  />
        </ParentContainer>
        {children}
        <ParentContainer className="bg-primary">
          <Footer />
        </ParentContainer>
      </body>
    </html>
  );
}
