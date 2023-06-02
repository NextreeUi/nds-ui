import * as React from "react";
import styles from './style.module.scss';

import { Button } from '../component';

const SlideBtn = ({left}) => {
  return (
    <Button
      className={styles['slide-btn'] + ' ' + (left ? styles['left'] : '')}
      square 
      size='large' 
      variant="contained"
      bg='white' 
      color='black' 
      hoverBg='grayc-100' 
      hoverColor='white'
      ripple='white'
      radius="round"
      shadow
    >
      <p />
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
    delay = 3000,
    noPause,
    classSlide,
    classBtn,
    classNavWrap,
    classNav,
    
  }) => {
  const [ state, setState ] = React.useState(1);
  const slide = React.useRef();

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
    // document.documentElement.style.setProperty("--slide-margin-left", `${100 - state * 100}%`);
    // document.documentElement.style.setProperty("--slide-width", `${content.length * 100}%`);
    slide.current.style.marginLeft = `${100 - state * 100}%`
    slide.current.style.width = `${content.length * 100}%`
  })  

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
        <div ref={slide} className={styles['slide']}>
          {content}
        </div>
        {/* btn */}
        <div className={styles['slide-btn-wrap'] + ' ' + (classBtn ? classBtn : '')}>
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
          <div className={styles['slide-nav-wrap'] + ' ' + (classNavWrap ? classNavWrap : '')}>
            {
              content.map((cont, index)=>{
                return (
                  <div 
                    key={index} 
                    className={styles['slide-nav'] + ' ' + (state == index + 1 ? styles['select'] : '') + ' ' + (classNav ? classNav : '')} 
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
                  pauseIcon ? pauseIcon : <i className={styles['slide-nav-pause']} />
                  :
                  playIcon ? playIcon : <i className={styles['slide-nav-play']} />
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