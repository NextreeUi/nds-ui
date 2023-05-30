import * as React from "react";
import styles from './style.module.scss';

const Switch = ({
                color='primary',
                radius='round',
                defaultChecked,
                id,
                name,
                value,
                disabled,
                className,
                }) => {
  
  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  return (
    <>
      <input type='checkbox' 
        className={
          styles.switch
          + ' ' +
          (colorStyle(color))
          + ' ' +
          (radius == 'rect' ? styles['radius-rect'] :
          radius == 'normal' ? styles['radius-normal'] :
          radius == 'round' ? styles['radius-round'] : '')
          + ' ' +
          (className ? className : '')
        }
        disabled={disabled}
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
    </>
  );
}

export default Switch;