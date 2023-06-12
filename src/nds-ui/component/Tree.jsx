import * as React from "react";
import styles from './style.module.scss';

const Tree = ({
    title,
    item,
    icon,
    closeIcon,
    openIcon,
    iconRotate,
    children,
    id,
    onClick,
    className,
    expanded
  }) => {
  const [open, setOpen] = React.useState(expanded ? true : false);
  const Click = () => {
    setOpen(!open)
  }
  return (
    <>
    {
      item ?
      <div 
        className={styles['tree-item'] + ' ' + (className ? className : '')}
        id={id}
        onClick={onClick}
      >
        {
          closeIcon ?
          open ? openIcon : closeIcon
          :
          icon ? icon :
          <i className={styles.item}/>
        }
        {title}
      </div>
      :
      <div className={styles['tree-wrap']}>
        <div 
          className=
          {
            styles['tree-summary'] 
            + ' ' + 
            (className ? className : '') 
          } 
          id={id}
          onClick={Click}
        >
          <div className={(open ? styles[`${iconRotate ? iconRotate : icon ? icon : 'deg90'}`] : '')}>
            {
              closeIcon ?
              open ? openIcon : closeIcon
              :
              icon ? icon :
              <i className={styles.arrow}/>
            }
          </div>
          {title}
        </div>
        <div className={styles['tree-detail'] + ' ' + (open ? '' : styles.close)}>
          {children}
        </div>
      </div>
    }
    
    </>
  );
}

export default Tree;