import * as React from "react";
import loadable from "@loadable/component";
import { Loading } from "@/nds-ui/component";

const Contents = ({address1, address2}) => {

  // Component import
  const PageContents = loadable(
    () => import(`../../pages/${address1}/${address2}.jsx`),
    { fallback: 
      <div className="loading-wrap">
        <Loading />
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
