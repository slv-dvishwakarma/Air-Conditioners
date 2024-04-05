import { GridBox } from "@/components/GridBox";
import { BreadCrumbs } from "./BreadCrumb";
import { ParentContainer } from "@/components/ParentContainer";
import { SideBar } from "./SideBar";
import { ProductListing } from "./ProductListing";
import jsonData from "./jsonData.json";

export default function Home() {

  return (
    <>
    <ParentContainer>
      <div className='product-template'>
      <BreadCrumbs />
      <GridBox columns={12} gap={10} className='sm:grid'>
        <GridBox.GridItem columnMerge={3} className='xl:block lg:block md:hidden hidden'>
          <SideBar delivery={jsonData.delivery} compressor={jsonData.compressor} energy={jsonData.energy} coil={jsonData.coil} appliances={jsonData.appliances}/>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={9} colMargeTablet={12} colMargeDesktop={9} colMargeLaptop={9}  className='pt-[20px]'>
          <ProductListing/>
        </GridBox.GridItem>
      </GridBox>
    </div>
    </ParentContainer>
    </>
  );
}
