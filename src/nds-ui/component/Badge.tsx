import * as React from "react";
import styles from './style.module.scss';

const Badge = ({
    color='notification',
    radius='round',
    vertical='top',
    horizontal='right',
    content,
    max,
    dot,
    children,
    id,
    className,
  }:{
    color: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,
    radius: 'rect' | 'normal' | 'round',
    vertical: 'top' | 'bottom',
    horizontal: 'right' | 'left',
    content?: string | number,
    max?: number,
    dot?: boolean,
    children?: React.ReactNode,
    id?: string,
    className?: string,
  }) => {
  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  if (max) {
    content > max 
    ? 
    content = max + '+'
    :
    content
  }
  return (
    <>
    <div className={styles['badge-wrap']}>
      {children}
      <div className={
        styles.badge
        + ' ' +
        (colorStyle(color))
        + ' ' +
        (radius == 'rect' ? styles['radius-rect']:
        radius == 'normal' ? styles['radius-normal']:
        radius == 'round' ? styles['radius-round']: '' )
        + ' ' +
        (vertical == 'top' ? styles['vertical-top']:
        vertical == 'bottom' ? styles['vertical-bottom']: '')
        + ' ' +
        (horizontal == 'left' ? styles['horizontal-left']:
        horizontal == 'right' ? styles['horizontal-right']: '')
        + ' ' +
        (dot ? styles.dot : '')
        + ' ' +
        (className ? className : '')
      }
        id={id}
      >
        {dot ? '' : content}
      </div>
    </div>
    </>
  );
}

export default Badge;