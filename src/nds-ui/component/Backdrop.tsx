import * as React from "react";
import styles from './style.module.scss';

const Backdrop = ({
    open,
    onClose,
    children,
    className,
  }:{
    open: boolean,
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode,
    className?: string,
  }) => {
  
  return (
    <>
    <div className={styles['backdrop-wrap'] + ' ' + (open ? styles.open : '')}>
      <div className={styles.backdrop} onClick={onClose}/>
      <div className={styles['backdrop-content'] + ' ' + (className ? className : '')}>
        {children}
      </div>
    </div>
    </>
  );
}

export default Backdrop;