import React from "react";
import MainBanner from "./_Components/mainBanner/page";
import Logos from "./_Components/logos/page";
import Services from "./_Components/services/page";
import ClientsCount from "./_Components/clinetsCount/page";
import Bar from "./_Components/bar/page";
import AboutUsBreif from "./_Components/aboutUsBreif/page";
import Portfolio from "./_Components/portfolio/page";



export default function page() {
  return (
    <>

      <MainBanner />
      <AboutUsBreif/>
      <Bar/>
      <Services/>
      <Portfolio/>
         <ClientsCount/>
      <Logos/>
   
      


    </>
  );
}
