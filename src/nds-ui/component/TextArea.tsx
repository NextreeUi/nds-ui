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
                }:{
                rect?: boolean,
                defaultValue?: string,
                placeholder?: string,
                rows?: number,
                maxLength?: number,
                readOnly?: boolean,
                disabled?: boolean,
                onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void,
                onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
                onFocus?: (event: React.MouseEvent<HTMLButtonElement>) => void,
                onKeyDown?: (event: React.MouseEvent<HTMLButtonElement>) => void,
                className?: string,
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