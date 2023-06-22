import * as React from "react";
import styles from './style.module.scss';

// /**
//  * 
//  * @param {{name: string, title?:}} param0 
//  * @returns 
//  */
const Accordion = ({
    wrap,
    title,
    icon,
    iconLocation='right',
    iconRotate,
    children,
    id,
    className,
    onClick,
  }:{
    wrap?: boolean,
    title?: React.ReactNode | string,
    icon?: React.ReactNode,
    iconLocation?: 'right' | 'left',
    iconRotate?: 'deg90' | 'deg180' | 'deg270',
    children?: React.ReactNode,
    id?: string,
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  }) => {
  const [open, setOpen] = React.useState(false);
  const Click = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open)
    onClick ? onClick(event) : ''
  }
  return (
    <>
    {
      wrap ?
      <div className={styles['accordion-wrap'] + ' ' + (className ? className : '')}>
        {children}
      </div>
      :
      <>
        <div 
          className={
            styles['accordion-summary'] 
            + ' ' + 
            (iconLocation == 'left' ? styles['icon-left'] : '')
            + ' ' + 
            (className ? className : '')
          } 
          id={id}
          onClick={Click}
        >
          {iconLocation=='right' ? title : <></>}
          <div className={(open ? styles[`${iconRotate ? iconRotate : icon ? icon : 'deg180'}`] : '')}>
            {icon ? icon : <i className={styles.arrow}/>}
          </div>
          {iconLocation=='left' ? title : <></>}
        </div>
        <div className={styles['accordion-detail'] + ' ' + (open ? '' : styles.close)}>
          {children}
        </div>
      </>
    }
    </>
  );
}

export default Accordion;