import * as React from "react";
import styles from './style.module.scss';

import {Button} from '../component';

const Tab = ({
    state,
    setState,
    tabName = ['탭을 입력해주세요'],
    variant = 'contained',
    radius = 'rect',
    size = 'large',
    theme = 'primary',
    bg,
    otl,
    color,
    ripple = 'ripple',
    hoverBg,
    hoverOtl,
    hoverColor,
    children,
    classTabWrap,
    classTab,
    classBtnWrap,
    classBtn,
    classCustom,
  }) => {
  const tabList = tabName
  return (
    <>
      <div className={styles['tab-wrap'] + ' ' + (classTabWrap ? classTabWrap : '')}>
        <div className={styles['tab'] + ' ' + (classTab ? classTab : '')}>
          {
            tabList.map((list, index)=>{
              return (
                <div className={styles['tab-btn-wrap'] + ' ' + (classBtnWrap ?  classBtnWrap : '')} key={index}>
                  <Button 
                    className={
                      (classBtn ? classBtn : '')
                      + ' ' +
                      (state == index ? 'select' : '')
                    }
                    size={
                      size == 'large' ? 'large':
                      size == 'medium' ? 'medium':
                      size == 'small' ? 'small':
                      size == 'extraSmall' ? 'extraSmall': ''
                    } 
                    theme={theme}
                    bg={bg}
                    otl={otl}
                    color={color}
                    radius={radius}
                    ripple={ripple}
                    hoverBg={hoverBg}
                    hoverOtl={hoverOtl}
                    hoverColor={hoverColor}
                    variant={state == index ? variant : 'normal'}
                    onClick={() => { setState(index) }}
                  > 
                    {list}
                  </Button>
                  <div className={styles['tab-custom'] + ' ' + (classCustom ? classCustom : '') + ' ' + (state == index ? '' : styles['close']) + ' ' + (state == index ? '' : 'close')} />
                </div>
              )
            })
          }
        </div>
        {children}
      </div>
    </>
  );
}

export default Tab;