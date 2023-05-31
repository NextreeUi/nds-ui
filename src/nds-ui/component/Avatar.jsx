import * as React from "react";
import styles from './style.module.scss';

const Avatar = ({
    name = 'avatar',
    size = 'medium',
    radius = 'round',
    number = Math.floor(Math.random() * 10) + 1,
    color,
    className,
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