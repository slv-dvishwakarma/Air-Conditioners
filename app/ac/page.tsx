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
      <BreadCrumbs breadcrumb={jsonData.breadcrumb} brand={jsonData.brand} delivery={jsonData.delivery} compressor={jsonData.compressor} energy={jsonData.energy} coil={jsonData.coil} appliances={jsonData.appliances} price={jsonData.price} color={jsonData.colorfilter} title={jsonData.filter}/>
      <GridBox columns={12} gap={10} className='sm:grid'>
        <GridBox.GridItem columnMerge={3} className='xl:block lg:block md:hidden hidden'>
          <SideBar delivery={jsonData.delivery} compressor={jsonData.compressor} energy={jsonData.energy} coil={jsonData.coil} appliances={jsonData.appliances} price={jsonData.price} brand={jsonData.brand} color={jsonData.colorfilter}/>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={9} colMargeTablet={12} colMargeDesktop={9} colMargeLaptop={9}  className='pt-[20px]'>
          <ProductListing product_list={jsonData.product_list}/>
        </GridBox.GridItem>
      </GridBox>
    </div>
    </ParentContainer>
    </>
  );
}
