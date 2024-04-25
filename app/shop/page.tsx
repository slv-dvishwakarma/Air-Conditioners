"use client"
import { useState, useEffect } from "react";
import { GridBox } from "@/components/GridBox";
import { BreadCrumbs } from "./BreadCrumb";
import { ParentContainer } from "@/components/ParentContainer";
import { SideBar } from "./SideBar";
import { ProductListing } from "./ProductListing";
import jsonData from "./jsonData.json";
import hi from "./hi.json";

export default function Home() {
  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(jsonData);

  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'en') {
      setJsonDataFile(jsonData);
    } else if (newLanguage === null) {
      setJsonDataFile(jsonData);
    }
    else {
      setJsonDataFile(hi);
    }
  }, []);

  return (
    <ParentContainer>
      <div className='product-template'>
        <BreadCrumbs
          breadcrumb={jsonDataFile.breadcrumb}
          brand={jsonDataFile.brand}
          delivery={jsonDataFile.delivery}
          compressor={jsonDataFile.compressor}
          energy={jsonDataFile.energy}
          coil={jsonDataFile.coil}
          appliances={jsonDataFile.appliances}
          price={jsonDataFile.price}
          color={jsonDataFile.colorfilter}
          title={jsonDataFile.filter}
        />
        <GridBox columns={12} gap={10} className='sm:grid'>
          <GridBox.GridItem columnMerge={3} className='xl:block lg:block md:hidden hidden'>
            <SideBar
              delivery={jsonDataFile.delivery}
              compressor={jsonDataFile.compressor}
              energy={jsonDataFile.energy}
              coil={jsonDataFile.coil}
              appliances={jsonDataFile.appliances}
              price={jsonDataFile.price}
              brand={jsonDataFile.brand}
              color={jsonDataFile.colorfilter}
            />
          </GridBox.GridItem>
          <GridBox.GridItem columnMerge={9} colMargeTablet={12} colMargeDesktop={9} colMargeLaptop={9} className='pt-[20px]'>
            <ProductListing product_list={jsonDataFile.product_list} />
          </GridBox.GridItem>
        </GridBox>
      </div>
    </ParentContainer>
  );
}


