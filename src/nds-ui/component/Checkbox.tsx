import * as React from "react";
import styles from './style.module.scss';

const Checkbox = ({
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
                }:{
                theme: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,
                size: 'large' | 'medium' | 'small' | 'extraSmall',
                color?:  'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,
                ripple?:  'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,
                defaultChecked?: boolean,
                id?: string,
                name?: string,
                value?: string,
                disabled?: boolean,
                className?: string,
                }) => {
  if (theme == 'primary') {color = color || 'primary'; ripple = ripple || 'primary'}
  else if (theme == 'primary_light') {color = color || 'primary_light'; ripple = ripple || 'primary_light'}
  else if (theme == 'primary_deep') {color = color || 'primary_deep'; ripple = ripple || 'primary_deep'}
  else if (theme == 'secondary') {color = color || 'secondary'; ripple = ripple || 'secondary'}
  else if (theme == 'secondary_light') {color = color || 'secondary_light'; ripple = ripple || 'secondary_light'}
  else if (theme == 'secondary_deep') {color = color || 'secondary_deep'; ripple = ripple || 'secondary_deep'}
  else if (theme == 'tertiary') {color = color || 'tertiary'; ripple = ripple || 'tertiary'}
  else if (theme == 'tertiary_light') {color = color || 'tertiary_light'; ripple = ripple || 'tertiary_light'}
  else if (theme == 'tertiary_deep') {color = color || 'tertiary_deep'; ripple = ripple || 'tertiary_deep'}
  else if (theme == 'black') {color = color || 'black'; ripple = ripple || 'black'}
  else if (theme == 'gray1') {color = color || 'gray1'; ripple = ripple || 'black'}
  else if (theme == 'gray2') {color = color || 'gray2'; ripple = ripple || 'black'}
  else if (theme == 'gray3') {color = color || 'gray3'; ripple = ripple || 'black'}
  else if (theme == 'gray4') {color = color || 'gray4'; ripple = ripple || 'black'}
  else if (theme == 'gray5') {color = color || 'gray5'; ripple = ripple || 'black'}
  else if (theme == 'gray6') {color = color || 'gray6'; ripple = ripple || 'black'}
  else if (theme == 'gray7') {color = color || 'gray7'; ripple = ripple || 'black'}
  else if (theme == 'gray8') {color = color || 'gray8'; ripple = ripple || 'black'}
  else if (theme == 'gray9') {color = color || 'gray9'; ripple = ripple || 'black'}
  else if (theme == 'graya') {color = color || 'graya'; ripple = ripple || 'black'}
  else if (theme == 'grayb') {color = color || 'grayb'; ripple = ripple || 'black'}
  else if (theme == 'grayc') {color = color || 'grayc'; ripple = ripple || 'black'}
  else if (theme == 'grayd') {color = color || 'grayd'; ripple = ripple || 'black'}
  else if (theme == 'graye') {color = color || 'graye'; ripple = ripple || 'black'}
  else if (theme == 'grayf5') {color = color || 'grayf5'; ripple = ripple || 'black'}
  else if (theme == 'grayf8') {color = color || 'grayf8'; ripple = ripple || 'black'}
  else if (theme == 'white') {color = color || 'white'; ripple = ripple || 'white'}

  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  const rippleStyle = (ripple) => {
    return ripple ? styles[`ripple-${ripple}`] : '';
  }
  return (
    <>
      <input type='checkbox' 
        className={
          styles.checkbox
          + ' ' +
          (colorStyle(color))
          + ' ' +
          (rippleStyle(ripple))
          + ' ' +
          (size == 'large' ? styles.large :
          size == 'medium' ? styles.medium :
          size == 'small' ? styles.small :
          size == 'extraSmall' ? styles.extraSmall : '')
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

export default Checkbox;