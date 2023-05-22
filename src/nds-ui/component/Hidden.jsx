import * as React from "react";
import styles from './hidden.module.scss';

const Hidden = ({
    max=9999,
    min=0,
    children,
    className,
  }) => {
    
  const [on, setOn] = React.useState(min <= window.innerWidth && window.innerWidth <= max);
  let timer = null

  React.useEffect(()=>{
    window.addEventListener('resize', ()=>{
      clearTimeout(timer);
      timer = setTimeout(()=>{
        if ( min <= window.innerWidth && window.innerWidth <= max ){
          setOn(true)
        } else {
          setOn(false)
        }
      }, 100);
    });
  },[])
  
  return (
    <>
      <div className={styles.hidden + ' ' + (className ? className : '')}>
        {
          on ? children : <></>
        }
      </div>
    </>
  );
}

export default Hidden;