import * as React from "react";
import styles from './style.module.scss';

const Avatar = ({
    name = 'avatar',
    size = 'medium',
    radius = 'round',
    number = Math.floor(Math.random() * 10) + 1,
    color,
    className,
  }:{
    name?: string,
    size: 'large' | 'medium' | 'small' | 'extraSmall',
    radius: 'rect' | 'normal' | 'round',
    number?: number,
    color?: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,
    className? : string
  }) => {
  const numberStyles = (number) => {
    return number ? styles[`color-${number}`] : ''
  }
  const colorStyles = (color) => {
    return color ? styles[`color-${color}`] : ''
  }
  name = name.charAt(0).toUpperCase()
  console.log(name)
  return (
    <>
      <div className={
        styles.avatar
        + ' ' +
        (size == 'large' ? styles['size-large'] :
        size == 'medium' ? styles['size-medium'] :
        size == 'small' ? styles['size-small'] :
        size == 'extraSmall' ? styles['size-extraSmall'] : '')
        + ' ' +
        (radius == 'rect' ? styles['radius-rect'] : 
        radius == 'normal' ? styles['radius-normal'] :
        radius == 'round' ? styles['radius-round'] : '')
        + ' ' +
        (numberStyles(number))
        + ' ' +
        (colorStyles(color))
        + ' ' +
        (className ? className : '')
      }>
        {name}
      </div>
    </>
  );
}

export default Avatar;