import * as React from 'react';
import styles from './style.module.scss';

const Button = ({
    theme='primary', 
    variant='normal', 
    size='medium', 
    radius='normal', 
    square,
    shadow, 
    bg, 
    otl, 
    color, 
    ripple,
    hoverBg,
    hoverOtl,
    hoverColor,
    disabled, 
    className,
    onClick, 
    children 
  }:{
    theme: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' , 
    variant: 'normal' | 'outlined' | 'contained', 
    size: 'large' | 'medium' | 'small' | 'extraSmall', 
    radius: 'rect' | 'normal' | 'round',
    square?: boolean,
    shadow?: boolean, 
    bg?: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,  
    otl?: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,  
    color?: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,  
    ripple?: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' , 
    hoverBg?: string,
    hoverOtl?: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,
    hoverColor?: 'primary' | 'primary_light' | 'primary_deep' | 'secondary' | 'secondary_light' | 'secondary_deep' | 'tertiary' | 'tertiary_light' | 'tertiary_deep' | 'notification' | 'success' | 'warning' | 'black' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9' | 'graya' | 'grayb' | 'grayc' | 'grayd' | 'graye' | 'grayf5' | 'grayf8' | 'gray1-100' | 'gray2-100' | 'gray3-100' | 'gray4-100' | 'gray5-100' | 'gray6-100' | 'gray7-100' | 'gray8-100' | 'gray9-100' | 'graya-100' | 'grayb' | 'grayc-100' | 'grayd-100' | 'graye-100' | 'grayf5-100' | 'grayf8-100' | 'white' | 'white3' | 'white6' | 'white9' | 'whitec' | 'transparent' | 'disabled' | 'disabled_deep' ,
    disabled?: boolean, 
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void, 
    children: React.ReactNode,
  }) => {
  // variant 조건문
  if (variant == 'contained') {
    otl = otl || 'transparent'
    bg = bg || theme
    // color ripple 조건문
    if (
      theme == 'graya' || 
      theme == 'grayb' || 
      theme == 'grayc' || 
      theme == 'grayd' || 
      theme == 'graye' ||
      theme == 'grayf5' ||
      theme == 'grayf8' ||
      theme == 'white'
      ) {
      color = color || 'black'
      ripple = ripple || 'black'
    } else {
      color = color || 'white'
      ripple = ripple || 'white'
    }
    // disabled 조건문
    if (disabled) {
      color = 'white'
      bg = 'disabled'
      ripple = 'disabled'
      hoverBg = 'disabled'
    }
    // hoverBg 조건문
    if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary'
    ) {
      hoverBg = hoverBg || theme + '_light' 
    } else if (theme == 'black') {hoverBg = hoverBg || 'gray3'} 
    else if (theme == 'gray1') {hoverBg = hoverBg || 'gray4'}
    else if (theme == 'gray2') {hoverBg = hoverBg || 'gray5'}
    else if (theme == 'gray3') {hoverBg = hoverBg || 'gray6'}
    else if (theme == 'gray4') {hoverBg = hoverBg || 'gray7'}
    else if (theme == 'gray5') {hoverBg = hoverBg || 'gray8'}
    else if (theme == 'gray6') {hoverBg = hoverBg || 'gray9'}
    else if (theme == 'gray7') {hoverBg = hoverBg || 'graya'}
    else if (theme == 'gray8') {hoverBg = hoverBg || 'grayb'}
    else if (theme == 'gray9') {hoverBg = hoverBg || 'grayc'}
    else if (theme == 'graya') {hoverBg = hoverBg || 'gray7'}
    else if (theme == 'grayb') {hoverBg = hoverBg || 'gray8'}
    else if (theme == 'grayc') {hoverBg = hoverBg || 'graya'}
    else if (theme == 'grayd') {hoverBg = hoverBg || 'grayb'}
    else if (theme == 'graye') {hoverBg = hoverBg || 'grayc'}
    else if (theme == 'grayf5') {hoverBg = hoverBg || 'grayd'}
    else if (theme == 'grayf8') {hoverBg = hoverBg || 'grayd'}
    else if (theme == 'white') {hoverBg = hoverBg || 'graye'}
  } 
  // outlined 조건문
  else if (variant == 'outlined') {
    color = color || theme
    otl = otl || theme
    bg = bg || 'transparent'
    // ripple 조건문
    if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary'
      ) {
      ripple = ripple || theme
    } else {
      ripple = ripple || 'black'
    }
    // disabled 조건문
    if (disabled) {
      otl = 'disabled'
      color = 'disabled'
      ripple = 'disabled'
      hoverBg = 'transparent'
    }
    // hover 조건문
    if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary' ||
      theme == 'black' ||
      theme == 'white'   
    ) {
      hoverBg = hoverBg || theme + '_15p'
    } else if (
      theme == 'gray1' ||
      theme == 'gray2' ||
      theme == 'gray3' ||
      theme == 'gray4' ||
      theme == 'gray5' ||
      theme == 'gray6' ||
      theme == 'gray7' ||
      theme == 'gray8' ||
      theme == 'gray9'
    ) {
      hoverBg = hoverBg || 'black_15p'
    } else {
      hoverBg = hoverBg || 'white_15p'
    }
  } else if (variant == 'normal') {
    color = color || theme
    otl = otl || 'transparent'
    bg = bg || 'transparent'
    // ripple 조건문
    if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary'
      ) {
      ripple = ripple || theme
    } else {
      ripple = ripple || 'black'
    }
    // disabled 조건문
    if (disabled) {
      color = 'disabled'
      ripple = 'disabled'
      hoverBg = 'transparent'
    }
     // hover 조건문
     if (
      theme == 'primary' ||
      theme == 'secondary' ||
      theme == 'tertiary' ||
      theme == 'black' ||
      theme == 'white'   
    ) {
      hoverBg = hoverBg || theme + '_15p'
    } else if (
      theme == 'gray1' ||
      theme == 'gray2' ||
      theme == 'gray3' ||
      theme == 'gray4' ||
      theme == 'gray5' ||
      theme == 'gray6' ||
      theme == 'gray7' ||
      theme == 'gray8' ||
      theme == 'gray9'
    ) {
      hoverBg = hoverBg || 'black_15p'
    } else {
      hoverBg = hoverBg || 'white_15p'
    }
  }

  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  const otlStyle = (otl) => {
    return otl ? styles[`otl-${otl}`] : '';
  }
  const bgStyle = (bg) => {
    return bg ? styles[`bg-${bg}`] : '';
  }
  const rippleStyle = (ripple) => {
    return ripple ? styles[`ripple-${ripple}`] : '';
  }
  const hoverBgStyle = (hoverBg) => {
    return hoverBg ? styles[`hover-bg-${hoverBg}`] : '';
  }
  const hoverOtlStyle = (hoverOtl) => {
    return hoverOtl ? styles[`hover-otl-${hoverOtl}`] : '';
  }
  const hoverColorStyle = (hoverColor) => {
    return hoverColor ? styles[`hover-color-${hoverColor}`] : '';
  }

  return (
    <>
      <button className={ 
        styles.button
        + ' ' + 
        (radius == 'round' ? styles['radius-round'] : 
        radius == 'rect' ? styles['radius-rect'] : 
        radius == 'normal' ? styles['radius-normal'] : '')
        + ' ' +
        (square ? styles.square : '')
        + ' ' +
        (shadow ? styles.shadow : '')
        + ' ' +
        (colorStyle(color))
        + ' ' +
        (otlStyle(otl))
        + ' ' +
        (bgStyle(bg))
        + ' ' +
        (rippleStyle(ripple))
        + ' ' +
        (hoverBgStyle(hoverBg))
        + ' ' +
        (hoverOtlStyle(hoverOtl))
        + ' ' +
        (hoverColorStyle(hoverColor))
        + ' ' +
        (size == 'large' ? styles.large :
        size == 'medium' ? styles.medium :
        size == 'small' ? styles.small :
        size == 'extraSmall' ? styles.extraSmall : '')
        + ' ' +
        (disabled ? styles['disabled'] : '')
        + ' ' +
        (className ? className : '' )
      }
        onClick={!disabled && onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button;