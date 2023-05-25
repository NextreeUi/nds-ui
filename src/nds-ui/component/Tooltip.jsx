import * as React from "react";
import styles from './style.module.scss';

const Tooltip = ({
    placement='bottom',
    title,
    bg = 'grayc',
    color,
    radius = 'normal',
    size = 'medium',
    children,
    className,
  }) => {
  if      (bg == 'black' ) {color = color || 'white'}
  else if (bg == 'gray1' ) {color = color || 'white'}
  else if (bg == 'gray2' ) {color = color || 'white'}
  else if (bg == 'gray3' ) {color = color || 'white'}
  else if (bg == 'gray4' ) {color = color || 'white'}
  else if (bg == 'gray5' ) {color = color || 'white'}
  else if (bg == 'gray6' ) {color = color || 'white'}
  else if (bg == 'gray7' ) {color = color || 'white'}
  else if (bg == 'gray8' ) {color = color || 'white'}
  else if (bg == 'gray9' ) {color = color || 'white'}
  else if (bg == 'graya' ) {color = color || 'black'}
  else if (bg == 'grayb' ) {color = color || 'black'}
  else if (bg == 'grayc' ) {color = color || 'black'}
  else if (bg == 'grayd' ) {color = color || 'black'}
  else if (bg == 'graye' ) {color = color || 'black'}
  else if (bg == 'grayf5') {color = color || 'black'}
  else if (bg == 'grayf8') {color = color || 'black'}
  else if (bg == 'white' ) {color = color || 'black'}
  
  
  const bgStyle = (bg) => {
    return bg ? styles[`bg-${bg}`] : '';
  }
  return (
    <>
      <div className={styles['tooltip-wrap']}>
        <div className={styles['children']}>
          {children}
        </div>
        <div className={
          styles.tooltip 
          + ' ' +
         (placement == 'top-start'    ? styles['placement-top-start']    :
          placement == 'top'          ? styles['placement-top']          :
          placement == 'top-end'      ? styles['placement-top-end']      :
          placement == 'right-start'  ? styles['placement-right-start']  :
          placement == 'right'        ? styles['placement-right']        :
          placement == 'right-end'    ? styles['placement-right-end']    :
          placement == 'bottom-start' ? styles['placement-bottom-start'] :
          placement == 'bottom'       ? styles['placement-bottom']       :
          placement == 'bottom-end'   ? styles['placement-bottom-end']   :
          placement == 'left-start'   ? styles['placement-left-start']   :
          placement == 'left'         ? styles['placement-left']         :
          placement == 'left-end'     ? styles['placement-left-end']     : '')
          + ' ' +
         (radius == 'rect'   ?  styles['radius-rect']   :
          radius == 'normal' ?  styles['radius-normal'] :
          radius == 'round'  ?  styles['radius-round']  : '' )
          + ' ' +
         (size == 'large'      ? styles['size-large']      :
          size == 'medium'     ? styles['size-medium']     :
          size == 'small'      ? styles['size-small']      :
          size == 'extraSmall' ? styles['size-extraSmall'] : '')
          + ' ' +
         (color == 'black' ? styles['color-black'] :
          color == 'white' ? styles['color-white'] : '' )
          + ' ' +
          (bgStyle(bg))
          + ' ' +
          (className ? className : '')
          }
        >
          {title}
        </div>
      </div>
    </>
  );
}

export default Tooltip;