import * as React from "react";
import styles from './select.module.scss';

const Option = ({ value, onClick, OptionClick }) => {
  return (
    <>
      
    </>
  );
};

const Select = ({
  size = 'medium',
  radius = 'normal',
  defaultValue = 0,
  list= ['데이터를 입력해주세요'],
  className
}) => {
  const lists = list;
  const [contentIndex, setContentIndex] = React.useState(defaultValue)
  const content = lists[contentIndex];
  const [state, setState] = React.useState(false);

  const BtnClick = () => {
    setState(true);
  }
  const ListClick = (index) => {
    setContentIndex(index)
    setState(false);
  }
  const BackdropClick = () => {
    setState(false);
  }
  return (
    <>
      <div className={styles["select-wrap"] + ' ' + (className ? className : '')}>
        <button 
          className={
            styles["select"]
            + ' ' + 
            (state ? styles['focus'] : '')
            + ' ' + 
            (radius == 'rect' ? styles['radius-rect'] : 
            radius == 'normal' ? styles['radius-normal'] :
            radius == 'round' ? styles['radius-round'] : '')
            + ' ' +
            (size == 'large' ? styles['size-large'] :
            size == 'medium' ? styles['size-medium'] :
            size == 'small' ? styles['size-small'] :
            size == 'extraSmall' ? styles['size-extraSmall'] : '')
          } 
          onClick={BtnClick}
        >
          {content}
          <div className={styles["select-icon"]}>
            <i />
          </div>
        </button>
        <ul className={styles['select-option']}>
          {lists.map((value, index)=>
            <li key={index} className={styles["option"] + ' ' + (index == contentIndex ? styles.active : '') } onClick={() => { ListClick(index) }}>
              <div>{value}</div>
            </li>
            )
          }
        </ul>
        <div className={styles['select-backdrop']} onClick={BackdropClick}/>
      </div>
    </>
  );
};

export default Select;