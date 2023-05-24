import * as React from "react";
import styles from './slide.module.scss';

import { Button } from '../component';

const SlideBtn = ({left}) => {
  return (
    <Button
      className={styles['btn'] + ' ' + (left ? styles['left'] : '')}
      square 
      size='large' 
      variant="contained"
      bg='white' 
      color='black' 
      hoverBg='gray6-100' 
      hoverColor='white'
      ripple='white'
      radius="round"
      shadow
    >
      <i />
    </Button>
  )
}
const Slide = ({
    content,
    leftBtn,
    rightBtn,
    noNav,
    pauseIcon,
    playIcon,
    autoSlide = true,
    noPause,
    classSlide,
    classBtn,
    classNavWrap,
    classNav,
    
  }) => {
  const [ state, setState ] = React.useState(1);

  const leftBtnClick = () => {
    if(state == 1) {
      setState(content.length)
    } else {
      setState(state - 1)
    }
  }
  const rightBtnClick = () => {
    if(state == content.length) {
      setState(1)
    } else {
      setState(state + 1)
    }
  }
  React.useEffect(()=>{
    document.documentElement.style.setProperty("--slide-margin-left", `${100 - state * 100}%`);
    document.documentElement.style.setProperty("--slide-width", `${content.length * 100}%`);
  })  

  // 자동 슬라이드 기능
  const [slideAuto, setSlideAuto] = React.useState(autoSlide);
  function useInterval(callback, delay) {
    const savedCallback = React.useRef();
    React.useEffect(()=>{
      savedCallback.current = callback;
    }, [callback]);

    React.useEffect(()=>{
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay, state])
  }

  if (slideAuto) {
    let delay = 3000;
    useInterval(()=>{
      if(state == content.length) {
        setState(1);
      } else {
        setState(state + 1)
      }
    }, delay)
  } else {
    let delay = null
    useInterval(()=>{
    }, delay)
  }
  
  return (
    <>
      <div className={styles['slide-wrap'] + ' ' + (classSlide ? classSlide : '')}>
        {/* slide content */}
        <div className={styles['slide']}>
          {content}
        </div>
        {/* btn */}
        <div className={styles['btn-wrap'] + ' ' + (classBtn ? classBtn : '')}>
          <div onClick={leftBtnClick}>
            {leftBtn  ? leftBtn  : <SlideBtn left />}
          </div>
          <div onClick={rightBtnClick}>
            {rightBtn ? rightBtn : <SlideBtn />     }
          </div>
        </div>
        {/* nav */}
        {
          noNav ?
          <></>
          :
          <div className={styles['nav-wrap'] + ' ' + (classNavWrap ? classNavWrap : '')}>
            {
              content.map((cont, index)=>{
                return (
                  <div 
                    key={index} 
                    className={styles['nav'] + ' ' + (state == index + 1 ? styles['select'] : '') + ' ' + (classNav ? classNav : '')} 
                    onClick={()=>{setState(index + 1)}}
                  />
                )
              })
            }
            {
              noPause ?
              <></>
              :
              <div onClick={()=>{setSlideAuto(!slideAuto)}}>
                {
                  slideAuto ?
                  pauseIcon ? pauseIcon : <i className={styles['nav-pause']} />
                  :
                  playIcon ? playIcon : <i className={styles['nav-play']} />
                }
              </div>
            }
          </div>  
        }
        
      </div>
    </>
  );
};

export default Slide;