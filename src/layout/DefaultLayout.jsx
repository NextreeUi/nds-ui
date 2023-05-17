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
        <Lnb address1={type} address2={id}/>
        <div className="flexColumn flex1">
          {/* Header  */}
          <Header />
          {/* Contents */}
          <div className='vh100-70 flex1 scrollYAuto px100 py50'>
            <Contents address1={type} address2={id}/>
          </div>
        </div>
        
      </div>
      {/* <LoadingPage/> */}

      {/* App > DefaultLayout > Lnb / Contents */}
    </>
  );
}

export default DefaultLayout;
