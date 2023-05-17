import * as React from "react";

import { Loading } from '@/nds-ui/component';

const LoadingPage = () => {
  const all = React.useRef();
  
  React.useEffect(()=>{
    setTimeout(() => {
      all.current.remove();
    }, 2000);
  })
  return (
    <>
      <div ref={all} className="loading-wrap">
        <Loading />
      </div> 
    </>
  );
};

export default LoadingPage;