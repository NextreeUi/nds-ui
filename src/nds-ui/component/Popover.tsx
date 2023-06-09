import * as React from "react";
import styles from './style.module.scss';

const Popover = ({
    X='left', Y='bottomEnd',
    open,
    onClose,
    children,
    className,
  }:{
    X: 'leftEnd' | 'left' | 'center' | 'right' | 'rightEnd',
    Y: 'topEnd' | 'top' | 'center' | 'bottom' | 'bottomEnd',
    open: boolean,
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children?: React.ReactNode,
    className?: string,
  }) => {
  const Close = (onClose) => {
    return onClose;
  }
  return (
    <>
    <div className={styles['popover-backdrop'] + ' ' + (open ? styles.open : '')} onClick={Close(onClose)}/>
    <div className={
      styles.popover 
      + ' ' + 
      (X == 'left' ? styles['X-left']:
      X == 'leftEnd' ? styles['X-leftEnd']:
      X == 'center' ? styles['X-center']:
      X == 'rightEnd' ? styles['X-rightEnd']:
      X == 'right' ? styles['X-right']: '')
      + ' ' + 
      (Y == 'bottom' ? styles['Y-bottom']:
      Y == 'bottomEnd' ? styles['Y-bottomEnd']:
      Y == 'center' ? styles['Y-center']:
      Y == 'topEnd' ? styles['Y-topEnd']:
      Y == 'top' ? styles['Y-top']: '')
      + ' ' + 
      (X == 'center' && Y == 'center' ? styles.center : '')
      + ' ' + 
      (className ? className : '') 
      + ' ' + 
      (open ? styles.open : '')
    }>
      {children}
    </div>
    </>
  );
}

export default Popover;