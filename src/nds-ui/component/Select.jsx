import * as React from "react";
import styles from './select.module.scss';

const Select = ({
    theme='primary',
    size='medium',
    color,
    ripple,
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
  const rippleStyle = (ripple) => {
    return ripple ? styles[`ripple-${ripple}`] : '';
  }
  return (
    <>
      <div className={styles['select-wrap']}>
        <div className={styles['select']}>
          내용
        </div>
        <div className={styles[`select-option`]}>

        </div>
      </div>
    </>
  );
}

export default Select;