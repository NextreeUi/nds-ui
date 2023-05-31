import * as React from "react";
import styles from './style.module.scss';

import Button from "./Button";

const Chip = ({
    label,
    theme,
    variant='normal',
    radius='round',
    size='medium',
    deletable,
    bg,
    otl,
    color,
    btnTheme,
    iconBg,
    deleteIcon,
    id,
    className,
  }) => {
  // variant = 'normal'
  if (variant == 'normal') {
    theme = theme || 'graye'
    if      (theme == 'black')  {bg=bg||'black', otl=otl||'black', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray1')  {bg=bg||'gray1', otl=otl||'gray1', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray2')  {bg=bg||'gray2', otl=otl||'gray2', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray3')  {bg=bg||'gray3', otl=otl||'gray3', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray4')  {bg=bg||'gray4', otl=otl||'gray4', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray5')  {bg=bg||'gray5', otl=otl||'gray5', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray6')  {bg=bg||'gray6', otl=otl||'gray6', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray7')  {bg=bg||'gray7', otl=otl||'gray7', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray8')  {bg=bg||'gray8', otl=otl||'gray8', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray9')  {bg=bg||'gray9', otl=otl||'gray9', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'graya')  {bg=bg||'graya', otl=otl||'graya', color=color||'gray3', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayb')  {bg=bg||'grayb', otl=otl||'grayb', color=color||'gray3', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayc')  {bg=bg||'grayc', otl=otl||'grayc', color=color||'gray3', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayd')  {bg=bg||'grayd', otl=otl||'grayd', color=color||'gray6', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'graye')  {bg=bg||'graye', otl=otl||'graye', color=color||'gray6', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayf5') {bg=bg||'grayf5',otl=otl||'grayf5',color=color||'gray6', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayf8') {bg=bg||'grayf8',otl=otl||'grayf8',color=color||'gray6', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
  }
  else if (variant == 'contained') {
    theme = theme || 'graye'
    otl == otl || 'transparent'
    if      (theme == 'black')  {bg=bg||'black', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray1')  {bg=bg||'gray1', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray2')  {bg=bg||'gray2', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray3')  {bg=bg||'gray3', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray4')  {bg=bg||'gray4', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray5')  {bg=bg||'gray5', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray6')  {bg=bg||'gray6', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray7')  {bg=bg||'gray7', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray8')  {bg=bg||'gray8', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'gray9')  {bg=bg||'gray9', color=color||'white', btnTheme=btnTheme||'white', iconBg=iconBg||'white9'}
    else if (theme == 'graya')  {bg=bg||'graya', color=color||'gray3', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayb')  {bg=bg||'grayb', color=color||'gray3', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayc')  {bg=bg||'grayc', color=color||'gray3', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayd')  {bg=bg||'grayd', color=color||'gray6', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'graye')  {bg=bg||'graye', color=color||'gray6', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayf5') {bg=bg||'grayf5',color=color||'gray6', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
    else if (theme == 'grayf8') {bg=bg||'grayf8',color=color||'gray6', btnTheme=btnTheme||'black', iconBg=iconBg||'grayc' }
  }
  else if (variant == 'outlined') {
    theme= theme || 'gray9'
    bg == bg || 'transparent'
    if      (theme == 'black')  {otl=otl||'black', color=color||'black', btnTheme=btnTheme||'black', iconBg=iconBg||'black' }
    else if (theme == 'gray1')  {otl=otl||'gray1', color=color||'gray1', btnTheme=btnTheme||'gray1', iconBg=iconBg||'gray1' }
    else if (theme == 'gray2')  {otl=otl||'gray2', color=color||'gray2', btnTheme=btnTheme||'gray2', iconBg=iconBg||'gray2' }
    else if (theme == 'gray3')  {otl=otl||'gray3', color=color||'gray3', btnTheme=btnTheme||'gray3', iconBg=iconBg||'gray3' }
    else if (theme == 'gray4')  {otl=otl||'gray4', color=color||'gray4', btnTheme=btnTheme||'gray4', iconBg=iconBg||'gray4' }
    else if (theme == 'gray5')  {otl=otl||'gray5', color=color||'gray5', btnTheme=btnTheme||'gray5', iconBg=iconBg||'gray5' }
    else if (theme == 'gray6')  {otl=otl||'gray6', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'gray7')  {otl=otl||'gray7', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'gray8')  {otl=otl||'gray8', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'gray9')  {otl=otl||'gray9', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'graya')  {otl=otl||'graya', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'grayb')  {otl=otl||'grayb', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'grayc')  {otl=otl||'grayc', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'grayd')  {otl=otl||'grayd', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'graye')  {otl=otl||'graye', color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6' }
    else if (theme == 'grayf5') {otl=otl||'grayf5',color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6'}
    else if (theme == 'grayf8') {otl=otl||'grayf8',color=color||'gray6', btnTheme=btnTheme||'gray6', iconBg=iconBg||'gray6'}
  }
  const bgStyle = (bg) => {
    return bg ? styles[`bg-${bg}`] : '';
  }
  const otlStyle = (otl) => {
    return otl ? styles[`otl-${otl}`] : '';
  }
  const colorStyle = (color) => {
    return color ? styles[`color-${color}`] : '';
  }
  const iconBgStyle = (iconBg) => {
    return iconBg ? styles[`bg-${iconBg}`] : '';
  }
  
  return (
    <>
      <div className={
        styles.chip
        + ' ' +
        (deletable == 'right' ? styles['deletable-right'] : 
        deletable == 'left' ? styles['deletable-left'] : '')
        + ' ' +
        (radius == 'rect' ? styles['radius-rect'] :
        radius == 'normal' ? styles['radius-normal'] :
        radius == 'round' ? styles['radius-round'] : '')
        + ' ' +
        (bgStyle(bg))
        + ' ' +
        (otlStyle(otl))
        + ' ' +
        (colorStyle(color))
        + ' ' +
        (size == 'large' ? styles['size-large'] :
        size == 'medium' ? styles['size-medium'] :
        size == 'small' ? styles['size-small'] :
        size == 'extraSmall' ? styles['size-extraSmall'] : '')
        + ' ' +
        (className ? className : '')
      }
      id={id}>
        {
          deletable == 'left' ? 
          <Button 
          variant={
            (variant == 'outlined' ? 'outlined' : 'normal')
          } 
          className={
            styles[`chip-btn`]
            + ' ' +
            (size == 'large' ? styles['size-large'] :
            size == 'medium' ? styles['size-medium'] :
            size == 'small' ? styles['size-small'] :
            size == 'extraSmall' ? styles['size-extraSmall'] : '')
          }
            theme={btnTheme}>
              {
                deleteIcon 
                ?
                deleteIcon
                :
                <i 
                  className={
                    styles.icon 
                    + ' ' + 
                    (variant == 'outlined' ? styles.outlined : '')
                    + ' ' + 
                    (iconBgStyle(iconBg))
                  } 
                
                />
              }
          </Button>
          :
          <></>
        }
        {label}
        {
          deletable == 'right' ? 
          <Button 
          variant={
            (variant == 'outlined' ? 'outlined' : 'normal')
          } 
          className={
            styles['chip-btn']
            + ' ' +
            (size == 'large' ? styles['size-large'] :
            size == 'medium' ? styles['size-medium'] :
            size == 'small' ? styles['size-small'] :
            size == 'extraSmall' ? styles['size-extraSmall'] : '')
          }
            theme={btnTheme}>
              {
                deleteIcon 
                ?
                deleteIcon
                :
                <i 
                  className={
                    styles.icon 
                    + ' ' + 
                    (variant == 'outlined' ? styles.outlined : '')
                    + ' ' + 
                    (iconBgStyle(iconBg))
                  } 
                
                />
              }
          </Button>
          :
          <></>
        }
      </div>
    </>
  );
}

export default Chip;