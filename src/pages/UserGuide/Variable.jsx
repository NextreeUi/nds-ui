import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { sass } from '@codemirror/lang-sass';
import { html } from '@codemirror/lang-html';

// nds-ui
import { Button, Popup } from '@/nds-ui/component';

const Variable = () => {
  const SettingRef = React.useRef();
  const ColorArrayRef = React.useRef();

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Variable</h1>
          <p className='description'>
            NDS-UI는 컴포넌트의 CSS값을 변수(Variable)로 지정해놓았습니다. <br/>
            그래서 커스텀을 할 때 별도의 CSS파일을 만들어서 수정할 수 있지만 <br/>
            그냥 변수 값만 바꿔서 수정할 수 있습니다.
          </p>
        </div>

        {/* Setting */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={SettingRef}>Setting</h2>
            <p className='description'>
              scss파일을 하나 만들어줍니다. <br/>
              'nds-ui/css/_variable.scss'에 보시면 :root 부분이 있을겁니다. <br/>
              이 :root 부분을 전체 복사해서 가져옵니다. 수정하고 싶은 부분을 수정하면 반영됩니다. <br/>
              (수정하지 않는 부분은 평소에 주석처리 해주세요)
            </p>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[sass({ sass: true })]}
                value=
{`:root {
  // mode
  &[data-theme = "light"] {
    --set-black    : 0,0,0             ;
    --set-white    : 255,255,255       ;
    --set-primary  : 63,70,243         ;
    --primary_light: rgb(121,126,252);
    --primary_deep : rgb(10,19,225)  ;
    
    --set-secondary  : 225,20,81        ;
    --secondary_light: rgb(244,63,118);
    --secondary_deep : rgb(198,1,60)  ;
    
    --set-tertiary  : 18,170,161       ;
    --tertiary_light: rgb(38,206,196);
    --tertiary_deep : rgb(10,142,135);

    --notification: rgb(237,46,46) ;
    --success     : rgb(14,218,108);
    --warning     : rgb(252,166,0) ;
     
    --gray1-100 : #111   ;
    --gray2-100 : #222   ;
    --gray3-100 : #333   ;
    --gray4-100 : #444   ;
    --gray5-100 : #555   ;
    --gray6-100 : #666   ;
    --gray7-100 : #777   ;
    --gray8-100 : #888   ;
    --gray9-100 : #999   ;
    --graya-100 : #aaa   ;
    --grayb-100 : #bbb   ;
    --grayc-100 : #ccc   ;
    --grayd-100 : #ddd   ;
    --graye-100 : #eee   ;
    --grayf5-100: #0a0a0a;
    --grayf8-100: #070707;
  } 
  &[data-theme = "dark"] {
    background-color: rgb(0,0,0,0.8)  ;
    --set-black     : 255,255,255       ;
    --set-white     : 0,0,0             ;
    --set-primary   : 108,114,254       ;
    --primary_light : rgb(60,67,238)  ;
    --primary_deep  : rgb(137,142,255);
    
    --set-secondary  : 245,62,117        ;
    --secondary_light: rgb(226,29,88)  ;
    --secondary_deep : rgb(243,122,158);
    
    --set-tertiary  : 56,227,217        ;
    --tertiary_light: rgb(15,176,167) ;
    --tertiary_deep : rgb(149,255,249);

    --notification: rgb(250,84,84) ;
    --success     : rgb(70,233,145);
    --warning     : rgb(255,184,46);

    --gray1-100 : #eee   ;
    --gray2-100 : #ddd   ;
    --gray3-100 : #ccc   ;
    --gray4-100 : #bbb   ;
    --gray5-100 : #aaa   ;
    --gray6-100 : #999   ;
    --gray7-100 : #888   ;
    --gray8-100 : #777   ;
    --gray9-100 : #666   ;
    --graya-100 : #555   ;
    --grayb-100 : #444   ;
    --grayc-100 : #333   ;
    --grayd-100 : #222   ;
    --graye-100 : #111   ;
    --grayf5-100: #f5f5f5;
    --grayf8-100: #f8f8f8;
  }
  // font
  --font: Pretendard, sans-serif;

  // radius
  --radius: 5rem;
  // color
  --black    : rgb(var(--set-black))    ;
  --white    : rgb(var(--set-white))    ;
  --primary  : rgb(var(--set-primary))  ;
  --secondary: rgb(var(--set-secondary));
  --tertiary : rgb(var(--set-tertiary)) ;

  --disabled      : var(--grayc);
  --disabled_deep : var(--graya);

  --gray1:  rgb(var(--set-black), 0.933);
  --gray2:  rgb(var(--set-black), 0.866);
  --gray3:  rgb(var(--set-black), 0.8  );
  --gray4:  rgb(var(--set-black), 0.733);
  --gray5:  rgb(var(--set-black), 0.666);
  --gray6:  rgb(var(--set-black), 0.6  );
  --gray7:  rgb(var(--set-black), 0.533);
  --gray8:  rgb(var(--set-black), 0.466);
  --gray9:  rgb(var(--set-black), 0.4  );
  --graya:  rgb(var(--set-black), 0.333);
  --grayb:  rgb(var(--set-black), 0.266);
  --grayc:  rgb(var(--set-black), 0.2  );
  --grayd:  rgb(var(--set-black), 0.133);
  --graye:  rgb(var(--set-black), 0.066);
  --grayf5: rgb(var(--set-black), 0.04 );
  --grayf8: rgb(var(--set-black), 0.027);

  --transparent: rgb(var(--set-black), 0)  ;
  --white3     : rgb(var(--set-white), 0.8);
  --white6     : rgb(var(--set-white), 0.6);
  --white9     : rgb(var(--set-white), 0.4);
  --whitec     : rgb(var(--set-white), 0.2);

  --shadow: 0 0 8rem 0 var(--grayc);

  --backdrop : var(--gray9);

  --avatar1  : rgb(208, 23, 57)  ;
  --avatar2  : rgb(235, 104, 9)  ;
  --avatar3  : rgb(244, 180, 15) ;
  --avatar4  : rgb(22, 206, 41)  ;
  --avatar5  : rgb(22, 170, 126) ;
  --avatar6  : rgb(11, 167, 217) ;
  --avatar7  : rgb(22, 63, 206)  ;
  --avatar8  : rgb(108, 27, 210) ;
  --avatar9  : rgb(217, 11, 209) ;
  --avatar10 : rgb(128, 128, 128);

  // accordion
  --accordion-otl: 1px solid var(--grayc);
  --accordion-h : 36rem;
  --accordion-font-size: 14rem;
  --accordion-color : var(--gray6);
  --accordion-p: 0rem 10rem;
  --accordion-gap: 10rem;
  --accordion-hover: var(--grayd);

  // avatar
  --avatar-size-large     : 44rem;
  --avatar-size-medium    : 34rem;
  --avatar-size-small     : 28rem;
  --avatar-size-extraSmall: 24rem;
  
  // badge
  --badge-size: 16rem;
  --badge-size-dot: 10rem;

  // btn
  --btn-size-large     : 44rem;
  --btn-size-medium    : 34rem;
  --btn-size-small     : 28rem;
  --btn-size-extraSmall: 24rem;
  --btn-txt-large     : 14rem;
  --btn-txt-medium    : 13rem;
  --btn-txt-small     : 12rem;
  --btn-txt-extraSmall: 12rem;
  --btn-p-large     : 0 30rem;
  --btn-p-medium    : 0 20rem;
  --btn-p-small     : 0 10rem;
  --btn-p-extraSmall: 0 5rem ;
  --btn-shadow : var(--shadow);
  
  // checkbox
  --checkbox: var(--gray6);
  --checkbox-disabled : var(--gray9);
  --checkbox-size-large     : 24rem;
  --checkbox-size-medium    : 20rem;
  --checkbox-size-small     : 16rem;
  --checkbox-size-extraSmall: 14rem;
  --checkbox-ripple-size-large     : calc(var(--checkbox-size-large) * 2)     ;
  --checkbox-ripple-size-medium    : calc(var(--checkbox-size-medium) * 2)    ;
  --checkbox-ripple-size-small     : calc(var(--checkbox-size-small) * 2)     ;
  --checkbox-ripple-size-extraSmall: calc(var(--checkbox-size-extraSmall) * 2);
  
  // chip
  --chip-p-large      : 15rem;
  --chip-p-medium     : 10rem;
  --chip-p-small      : 5rem ;
  --chip-p-extraSmall : 5rem ;
  --chip-btnp-large      : 7rem;
  --chip-btnp-medium     : 5rem;
  --chip-btnp-small      : 5rem;
  --chip-btnp-extraSmall : 3rem;

  // location
  --location-gap : 5rem;
  --location-font-size: 12rem;
  --location-light: var(--gray9);
  --location-light-hover: var(--gray6);
  --location-bold: var(--black);

  // popover
  --popover-bg : var(--white);
  --popover-otl : 1px solid var(--grayc);
  --popover-z: 100;
  --popover-shadow : var(--shadow);

  // radio
  --radio: var(--gray6);
  --radio-disabled : var(--gray9);
  --radio-size-large     : 24rem;
  --radio-size-medium    : 20rem;
  --radio-size-small     : 16rem;
  --radio-size-extraSmall: 14rem;
  --radio-ripple-size-large     : calc(var(--radio-size-large) * 2)     ;
  --radio-ripple-size-medium    : calc(var(--radio-size-medium) * 2)    ;
  --radio-ripple-size-small     : calc(var(--radio-size-small) * 2)     ;
  --radio-ripple-size-extraSmall: calc(var(--radio-size-extraSmall) * 2);

  // select 
  --select-size-large     : 44rem;
  --select-size-medium    : 34rem;
  --select-size-small     : 28rem;
  --select-size-extraSmall: 24rem;
  --select-txt-large     :  14rem;
  --select-txt-medium    :  13rem;
  --select-txt-small     :  12rem;
  --select-txt-extraSmall:  12rem;
  --select-p-large     : 0 15rem;
  --select-p-medium    : 0 13rem;
  --select-p-small     : 0 11rem;
  --select-p-extraSmall: 0 9rem ;
  --select-width: 300rem;

  --select-disabled-bg : var(--grayc);
  --select-disabled-otl : var(--transparent);

  --select-option-max-h: 300rem;

  // switch
  --switch-width: 24rem;
  --switch-height: 14rem;
  --switch-btn-width: 10rem;
  --switch-btn-height: 10rem;
  --switch-padding: calc((var(--switch-height) - var(--switch-btn-height)) / 2);
  --switch-ml: calc(var(--switch-width) - (var(--switch-padding) * 2) - var(--switch-btn-width));
  --switch-unchecked : var(--gray9);
  --switch-disabled : var(--grayc);

  // table
  --table-otl       : 1px solid var(--gray9);
  --table-th-bg     : var(--graye-100);
  --table-th-color  : var(--black);
  --table-td-otlb   : 1px dashed var(--grayc);
  --talbe-td-color  : var(--gray6);
  --talbe-folding-bg: var(--grayf5);

  // textfield
  --textfield-size-large     : 44rem;
  --textfield-size-medium    : 34rem;
  --textfield-size-small     : 28rem;
  --textfield-size-extraSmall: 24rem;
  --textfield-txt-large     :  14rem;
  --textfield-txt-medium    :  13rem;
  --textfield-txt-small     :  12rem;
  --textfield-txt-extraSmall:  12rem;
  --textfield-p-large     : 0 15rem;
  --textfield-p-medium    : 0 13rem;
  --textfield-p-small     : 0 11rem;
  --textfield-p-extraSmall: 0 9rem ;
  --textfield-color: var(--gray9);
  --textfield-focus-color: var(--gray6);
  --textfield-otl: var(--grayc);
  --textfield-focus-otl: var(--gray6);
  --textfield-placeholder-color: var(--gray9);
  --textfield-focus-placeholder-color: var(--gray6);
  --textfield-read-only-bg: var(--graye);
  --textfield-disabled-bg: var(--grayc);
  --textfield-disabled-otl: var(--transparent);

  --textfield-wrap-gap : 3rem;

  --textfield-helpertext-color: var(--gray6);

  --textarea-otl: var(--grayc);
  --textarea-focus-otl: var(--gray6);
  --textarea-font-size: 12rem;
  --textarea-p: 12rem 12rem;
  
  // tooltip
  --tooltip-margin : 5rem;
  --tooltip-size-large      : 8rem 15rem;
  --tooltip-size-medium     : 5rem 10rem;
  --tooltip-size-small      : 3rem 7rem;
  --tooltip-size-extraSmall : 2rem 5rem;
  --tooltip-font-size-large      : 13rem;
  --tooltip-font-size-medium     : 12rem;
  --tooltip-font-size-small      : 11rem;
  --tooltip-font-size-extraSmall : 10rem;

  // tree
  --tree-h : 36rem;
  --tree-font-size: 14rem;
  --tree-color : var(--gray6);
  --tree-p: 0rem 10rem;
  --tree-gap: 10rem;
  --tree-hover: var(--grayd);
  --tree-detail-pl: 20rem;
  --tree-item-h : 36rem;
  --tree-item-font-size: 14rem;
  --tree-item-p: 0rem 10rem;
  --tree-item-gap: 10rem;

  // popup
  --popup-bg : var(--white);
  --popup-otl : 1px solid var(--grayc);
  --popup-z: 100;
}`}/>
            </div>
            <p className='description flex gap10'>
              예를 들어서 Primary 컬러를 바꾸고 싶다면 --set-primary 의 값을 바꾸면 됩니다.
              (버튼을 눌르면 Primary 컬러가 바뀝니다.)
            </p>
            <div className='flex gap10'>
              <Button className='width100' variant='contained'
                onClick={()=>{
                  document.documentElement.style.setProperty("--set-primary", "0,0,0");
                }}
              > 
                --set-primary : 0,0,0
              </Button>
              <Button className='width100' variant='contained'
                onClick={()=>{
                  document.documentElement.style.setProperty("--set-primary", "63,70,243");
                }}
              > 
                --set-primary : 63,70,243 
              </Button>
            </div>
          </div>
        </div>

        {/* Color Array */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={ColorArrayRef}>Color Array</h2>
            <p className='description'>
              색상 또한 변수를 사용하는데, 자주 쓰는 색상은 배열로 모아놓습니다. <br/>
              크게 colors / grays / main 3가지 배열이 있습니다. <br/>
              이 배열은 컴포넌트에 사용이 되며, 나중에 해당 컴포넌트에 사용할 수 있는 색상이 무엇이 있는지 알기 위해 참고할 수 있습니다.
            </p>
          </div>
        </div>

        {/* $colors */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>$colors</h3>
            <p className='description'>
              유채색과 무채색(투명도 유/무) 모두 모아놓은 배열입니다.
            </p>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[sass({ sass: true })]}
                value=
{`$colors: (
  "primary" : var(--primary),
  "primary_light" : var(--primary_light),
  "primary_deep" : var(--primary_deep),
  "secondary" : var(--secondary),
  "secondary_light" : var(--secondary_light),
  "secondary_deep" : var(--secondary_deep),
  "tertiary" : var(--tertiary),
  "tertiary_light" : var(--tertiary_light),
  "tertiary_deep" : var(--tertiary_deep),
  "notification": var(--notification),
  "success": var(--success),
  "warning": var(--warning),
  "black" : var(--black),
  "gray1"  : var(--gray1) ,
  "gray2"  : var(--gray2) ,
  "gray3"  : var(--gray3) ,
  "gray4"  : var(--gray4) ,
  "gray5"  : var(--gray5) ,
  "gray6"  : var(--gray6) ,
  "gray7"  : var(--gray7) ,
  "gray8"  : var(--gray8) ,
  "gray9"  : var(--gray9) ,
  "graya"  : var(--graya) ,
  "grayb"  : var(--grayb) ,
  "grayc"  : var(--grayc) ,
  "grayd"  : var(--grayd) ,
  "graye"  : var(--graye) ,
  "grayf5" : var(--grayf5),
  "grayf8" : var(--grayf8),
  "gray1-100"  : var(--gray1-100) ,
  "gray2-100"  : var(--gray2-100) ,
  "gray3-100"  : var(--gray3-100) ,
  "gray4-100"  : var(--gray4-100) ,
  "gray5-100"  : var(--gray5-100) ,
  "gray6-100"  : var(--gray6-100) ,
  "gray7-100"  : var(--gray7-100) ,
  "gray8-100"  : var(--gray8-100) ,
  "gray9-100"  : var(--gray9-100) ,
  "graya-100"  : var(--graya-100) ,
  "grayb-100"  : var(--grayb-100) ,
  "grayc-100"  : var(--grayc-100) ,
  "grayd-100"  : var(--grayd-100) ,
  "graye-100"  : var(--graye-100) ,
  "grayf5-100" : var(--grayf5-100),
  "grayf8-100" : var(--grayf8-100),
  "white"  : var(--white) ,
  "white3" : var(--white3),
  "white6" : var(--white6),
  "white9" : var(--white9),
  "whitec" : var(--whitec),
  "transparent" : var(--transparent),
  "disabled" : var(--disabled),
  "disabled_deep" : var(--disabled_deep),
);`}/>
            </div>
          </div>
        </div>

        {/* $grays */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>$grays</h3>
            <p className='description'>
              무채색(투명도 x)만 모아놓은 배열입니다.
            </p>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[sass({ sass: true })]}
                value=
{`$grays: (
  "black"  : var(--black)     ,
  "white"  : var(--white)     ,
  "gray1"  : var(--gray1-100) ,
  "gray2"  : var(--gray2-100) ,
  "gray3"  : var(--gray3-100) ,
  "gray4"  : var(--gray4-100) ,
  "gray5"  : var(--gray5-100) ,
  "gray6"  : var(--gray6-100) ,
  "gray7"  : var(--gray7-100) ,
  "gray8"  : var(--gray8-100) ,
  "gray9"  : var(--gray9-100) ,
  "graya"  : var(--graya-100) ,
  "grayb"  : var(--grayb-100) ,
  "grayc"  : var(--grayc-100) ,
  "grayd"  : var(--grayd-100) ,
  "graye"  : var(--graye-100) ,
  "grayf5" : var(--grayf5-100),
  "grayf8" : var(--grayf8-100),
);`}/>
            </div>
          </div>
        </div>

        {/* $main */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>$main</h3>
            <p className='description'>
              주요색상만 모아놓은 배열입니다.
            </p>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[sass({ sass: true })]}
                value=
{`$main : (
  "primary" : var(--set-primary),
  "secondary" : var(--set-secondary),
  "tertiary" : var(--set-tertiary),
  "black" : var(--set-black),
  "white" : var(--set-white),
);`}/>
            </div>
          </div>
        </div>

        <div className='layout-scroll'>
          <p>Classes</p>
          <a onClick={()=>{SettingRef.current.scrollIntoView()}}> Setting </a>
          <a onClick={()=>{ColorArrayRef.current.scrollIntoView()}}> Color Array </a>
        </div>

      </div>
    </>
  )
}
export default Variable;