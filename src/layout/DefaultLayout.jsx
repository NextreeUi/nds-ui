import * as React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

// components
import Lnb from "@/layout/components/Lnb";
import Header from "@/layout/components/Header";
import Contents from "@/layout/components/Contents";
// import LoadingPage from "@/layout/components/LoadingPage";

function DefaultLayout() {
  const { type, id } = useParams();
  
  return (
    <>
      <div className='fixed flex width100 height100'>
        {/* Lnb */}
        <div className="w340">
          <Lnb address1={type} address2={id}/>
        </div>
        <div className="flexColumn flex1">
          {/* Header  */}
          <Header address1={type} address2={id}/>
          {/* Contents */}
          <div className='vh100-70 scrollYAuto scroll-fast flexColumn alignCenter'>
            <div className="flexColumn content-width py70">
              <Contents address1={type} address2={id}/>
            </div>
          </div>
        </div>
        
      </div>
      {/* <LoadingPage/> */}

      {/* App > DefaultLayout > Lnb / Contents */}
    </>
  );
}

export default DefaultLayout;
