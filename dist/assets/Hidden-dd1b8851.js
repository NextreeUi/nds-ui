import{r as s,j as e,s as u,B as m}from"./index-39fb6c20.js";import{R as n}from"./index-55296878.js";import{j as l}from"./index-b8dc7194.js";import{T as p}from"./Table-e2701c69.js";const i=({max:t=9999,min:r=0,children:c,className:a})=>{const[o,x]=s.useState(r<=window.innerWidth&&window.innerWidth<=t);let d=null;return s.useEffect(()=>{window.addEventListener("resize",()=>{clearTimeout(d),d=setTimeout(()=>{r<=window.innerWidth&&window.innerWidth<=t?x(!0):x(!1)},100)})},[]),e.jsx(e.Fragment,{children:o?e.jsx("div",{className:u.hidden+" "+(a||""),children:c}):e.jsx(e.Fragment,{})})},y=()=>{const t=s.useRef(),r=s.useRef(),c=s.useRef(),[a,o]=s.useState(!1),x=()=>{o(!a)},[d,h]=s.useState(!1),j=()=>{h(!d)};return s.useState(!1),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Hidden"}),e.jsx("p",{className:"description",children:"Hidden 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:t,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(n,{theme:"dark",extensions:[l({jsx:!0})],value:`import { Hidden } from 'nds-ui/component';
// or
import Hidden from 'nds-ui/component/Hidden';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:r,children:"Property"}),e.jsxs("p",{className:"description",children:["Hidden 컴포넌트는 스크린의 사이즈에 따라 화면에 나타나게 하고 없어지게 하는 기능입니다. 반응형 웹에 특화된 컴포넌트라고 볼 수 있습니다. ",e.jsx("br",{}),"Hidden 컴포넌트 안에는 2가지 속성이 있습니다. ",e.jsx("br",{}),"max와 min이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Max"}),e.jsxs("p",{className:"description",children:["max 속성을 이용하여 max 이상의 내용을 사라지게 할 수 있습니다. ",e.jsx("br",{}),"화면을 줄였다가 늘려보세요."]})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsx(i,{max:1600,className:"flexCenter width100 r10 h30  bgc-primary txt-white size20 b",children:" Max 1600 "}),e.jsx(i,{max:1800,className:"flexCenter width100 r10 h30  bgc-secondary txt-white size20 b",children:" Max 1800 "}),e.jsx(i,{max:2e3,className:"flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b",children:" Max 2000 "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:x,children:e.jsx("i",{className:"i-code w14 h14"})})}),a?e.jsx(n,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Hidden } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
      <Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
      <Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
<Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
<Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Min"}),e.jsxs("p",{className:"description",children:["min 속성을 이용하여 min 이하의 내용을 사라지게 할 수 있습니다. ",e.jsx("br",{}),"화면을 줄였다가 늘려보세요."]})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsx(i,{min:1600,className:"flexCenter width100 r10 h30  bgc-primary txt-white size20 b",children:" Min 1600 "}),e.jsx(i,{min:1800,className:"flexCenter width100 r10 h30  bgc-secondary txt-white size20 b",children:" Min 1800 "}),e.jsx(i,{min:2e3,className:"flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b",children:" Min 2000 "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:j,children:e.jsx("i",{className:"i-code w14 h14"})})}),d?e.jsx(n,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Hidden } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
      <Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
      <Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
<Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
<Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:c,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(p,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"max"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["스크린에 나타나는 최대 너비를 설정하는 속성입니다. ",e.jsx("br",{}),"숫자형(number) 타입입니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"min"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["스크린에 나타나는 최소 너비를 설정하는 속성입니다. ",e.jsx("br",{}),"숫자형(number) 타입입니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{t.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{r.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" API"})]})]})})};export{y as default};
