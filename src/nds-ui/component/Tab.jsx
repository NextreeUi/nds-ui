import * as React from "react";
import styles from './tab.module.scss';

import {Button} from '../component';

const Tab = ({
    state,
    setState,
    theme = 'primary',
    bg,
    otl,
    color,
    radius = 'rect',
    ripple = 'ripple',
    hoverBg,
    hoverOtl,
    hoverColor,
    hoverRadius,
    variant = 'contained',
    size = 'large',
    children,
    tabName = ['탭을 입력해주세요'],
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
                    className={(classBtn ? classBtn : '')}
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
                    hoverRadius={hoverRadius}
                    variant={state == index ? variant : 'normal'}
                    onClick={() => { setState(index) }}
                  > 
                    {list}
                  </Button>
                  <div className={styles['tab-custom'] + ' ' + (classCustom ? classCustom : '') + ' ' + (state == index ? '' : styles['close'])} />
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