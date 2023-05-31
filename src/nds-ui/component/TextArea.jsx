import * as React from "react";
import styles from './style.module.scss';

const TextArea = ({
                rect,
                defaultValue,
                placeholder,
                rows,
                maxLength,
                readOnly,
                disabled,
                onChange,
                onClick,
                onFocus,
                onKeyDown,
                className,
                }) => {
  return (
    <>
      <textarea 
        className={
          styles.textarea
          + ' ' +
          (className ? className : '' )
          + ' ' +
          (rect ? styles.rect : '')
        }
        defaultValue={defaultValue} 
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        readOnly={readOnly}
        disabled={disabled} 
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

export default TextArea;