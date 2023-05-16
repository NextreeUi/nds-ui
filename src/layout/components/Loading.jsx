import * as React from "react";

const Loading = () => {
  const all = React.useRef();
  
  React.useEffect(()=>{
    setTimeout(() => {
      all.current.remove();
    }, 2000);
  })
  return (
    <>
      <div ref={all} className="loading-wrap close">
        <svg className="loading" width="50" height="50" >
          <circle className="frame" cx="25" cy="25" r="23" strokeWidth="4" strokeDashoffset={10}/>
        </svg>
      </div> 
    </>
  );
};

export default Loading;