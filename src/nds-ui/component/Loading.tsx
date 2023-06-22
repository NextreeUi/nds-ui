import * as React from "react";
import styles from './style.module.scss';

const Loading = ({
    color='primary',
  }:{
    color: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,
  }) => {
  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  return (
    <>
      <svg className={styles.loading} width="50" height="50" >
        <circle className={styles['loading-content'] + ' ' + colorStyle(color)} cx="25" cy="25" r="23" strokeWidth="4" strokeDashoffset={10}/>
      </svg>
    </>
  );
}

export default Loading;