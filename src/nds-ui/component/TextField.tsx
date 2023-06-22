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
                  }:{
                  size: 'large' | 'medium' | 'small' | 'extraSmall',
                  radius: 'rect' | 'normal' | 'round',
                  defaultValue?: string,
                  placeholder?: string,
                  helperText?: string,
                  error?: boolean,
                  readOnly?: boolean,
                  disabled?: boolean,
                  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
                  onFocus?: (event: React.MouseEvent<HTMLButtonElement>) => void,
                  onKeyDown?: (event: React.MouseEvent<HTMLButtonElement>) => void,
                  classHelper?: string,
                  className?: string,
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