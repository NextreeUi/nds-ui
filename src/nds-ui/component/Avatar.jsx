import * as React from "react";
import styles from './avatar.module.scss';

const Avatar = ({
    size = 'medium',
    radius = 'round',
    name = 'avatar',
    color,
    className,
    number = Math.floor(Math.random() * 10) + 1,
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