import * as React from "react";
import styles from './style.module.scss';

import { Link } from "react-router-dom";

const Location = ({
    number=2,
    link1,
    link2,
    link3,
    link4,
    linkLast,
    depth1='Home',
    depth2='Depth2',
    depth3='Depth3',
    depth4='Depth4',
    depthLast='Last',
    icon,

    id,
    className,
  }) => {
  return (
    <>
      <div className={styles['location-wrap'] + ' ' + (className ? className : '')}
        id={id}
      >
        <Link to={link1} className={styles['location-light']}> {depth1} </Link>
        {icon ? icon : <i className={styles['location-arrow']} />}
        {number > 2 ? 
          <>
            <Link to={link2} className={styles['location-light']}> {depth2} </Link>
            {icon ? icon : <i className={styles['location-arrow']} />}
          </>
          : <></>
        } 
        {number > 3 ? 
          <>
            <Link to={link3} className={styles['location-light']}> {depth3} </Link>
            {icon ? icon : <i className={styles['location-arrow']} />}
          </>
          : <></>
        } 
        {number > 4 ? 
          <>
            <Link to={link4} className={styles['location-light']}> {depth4} </Link>
            {icon ? icon : <i className={styles['location-arrow']} />}
          </>
          : <></>
        } 
        <Link to={linkLast} className={styles['location-bold']}> {depthLast} </Link>
      </div>
    </>
  );
}

export default Location;