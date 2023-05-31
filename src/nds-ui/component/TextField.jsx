import * as React from 'react';
import styles from './style.module.scss';


const TextField = ({
                  size = 'medium',
                  radius = 'normal',
                  defaultValue,
                  placeholder,
                  helperText,
                  error,
                  readOnly,
                  disabled,
                  onClick,
                  onFocus,
                  onKeyDown,
                  classHelper,
                  className,
                  }) => {
  return (
    <>
    {
      helperText ?
      <div className={styles['textfield-wrap']}>
        <input type='text'
          className={
            styles.textfield
            + ' ' + 
            (size == 'extraSmall' ? styles.extraSmall :
            size == 'small' ? styles.small :
            size == 'medium' ? styles.medium :
            size == 'large' ? styles.large : '')
            + ' ' + 
            (radius == 'round' ? styles.round : 
            radius == 'normal' ? styles.normal : 
            radius == 'rect' ? styles.rect : '')
            + ' ' +
            (error ? styles.error : '')
            + ' ' + 
            (className ? className : '')
          }
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onClick={onClick}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
        <p 
          className={
            styles['textfield-helper-text'] 
            + ' ' + 
            (size == 'extraSmall' ? styles.extraSmall :
            size == 'small' ? styles.small :
            size == 'medium' ? styles.medium :
            size == 'large' ? styles.large : '')
            + ' ' + 
            (error ? styles.error : '')
            + ' ' +
            (classHelper ? classHelper : '')
            }>
          {helperText}
        </p>
      </div>
      :
      <input type='text'
      className={
        styles.textfield
        + ' ' + 
        (size == 'extraSmall' ? styles.extraSmall :
        size == 'small' ? styles.small :
        size == 'medium' ? styles.medium :
        size == 'large' ? styles.large : '')
        + ' ' + 
        (radius == 'round' ? styles.round : 
        radius == 'rect' ? styles.rect : '')
        + ' ' + 
        (className ? className : '')
      }
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      />
    }
      
    </>
  )
}

export default TextField;