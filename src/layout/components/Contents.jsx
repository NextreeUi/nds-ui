import * as React from "react";
import loadable from "@loadable/component";
import { Route, Routes, useParams } from "react-router-dom";

const Contents = () => {
  const params = useParams();

  // Component import
  const PageContents = loadable(
    () => import(`../../page/${params.type}/${params.id}.jsx`),
    { fallback: 
      <div className="loading-wrap">
        <svg className="loading" width="50" height="50" >
          <circle className="frame" cx="25" cy="25" r="23" strokeWidth="4" strokeDashoffset={10}/>
        </svg>
      </div> 
    }
  );

  return (
    <>
      <PageContents />
    </>
  );
};

export default Contents;
