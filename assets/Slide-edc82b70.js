import{r as s,j as e,s as d,B as r}from"./index-61f038e9.js";import{R as t}from"./index-e42883c4.js";import{j as i}from"./index-c615d801.js";import{T as M}from"./Table-8b14f5b0.js";const R=({left:a})=>e.jsx(r,{className:d["slide-btn"]+" "+(a?d.left:""),square:!0,size:"large",variant:"contained",bg:"white",color:"black",hoverBg:"grayc-100",hoverColor:"white",ripple:"white",radius:"round",shadow:!0,children:e.jsx("p",{})}),o=({content:a,leftBtn:j,rightBtn:u,noNav:N,pauseIcon:g,playIcon:y,autoSlide:b=!0,delay:C=3e3,noPause:B,classSlide:p,classBtn:w,classNavWrap:f,classNav:v})=>{const[l,c]=s.useState(1),m=s.useRef(),I=()=>{l==1?c(a.length):c(l-1)},P=()=>{l==a.length?c(1):c(l+1)};s.useEffect(()=>{m.current.style.marginLeft=`${100-l*100}%`,m.current.style.width=`${a.length*100}%`});const[x,E]=s.useState(b);function k(h,n){const S=s.useRef();s.useEffect(()=>{S.current=h},[h]),s.useEffect(()=>{function z(){S.current()}if(n!==null){let A=setInterval(z,n);return()=>clearInterval(A)}},[n,l])}return x?k(()=>{l==a.length?c(1):c(l+1)},C):k(()=>{},null),e.jsx(e.Fragment,{children:e.jsxs("div",{className:d["slide-wrap"]+" "+(p||""),children:[e.jsx("div",{ref:m,className:d.slide,children:a}),e.jsxs("div",{className:d["slide-btn-wrap"]+" "+(w||""),children:[e.jsx("div",{onClick:I,children:j||e.jsx(R,{left:!0})}),e.jsx("div",{onClick:P,children:u||e.jsx(R,{})})]}),N?e.jsx(e.Fragment,{}):e.jsxs("div",{className:d["slide-nav-wrap"]+" "+(f||""),children:[a.map((h,n)=>e.jsx("div",{className:d["slide-nav"]+" "+(l==n+1?d.select:"")+" "+(v||""),onClick:()=>{c(n+1)}},n)),B?e.jsx(e.Fragment,{}):e.jsx("div",{onClick:()=>{E(!x)},children:x?g||e.jsx("i",{className:d["slide-nav-pause"]}):y||e.jsx("i",{className:d["slide-nav-play"]})})]})]})})},V=()=>{const a=s.useRef(),j=s.useRef(),u=s.useRef(),[N,g]=s.useState(!1),y=()=>{g(!N)},[b,C]=s.useState(!1),B=()=>{C(!b)},[p,w]=s.useState(!1),f=()=>{w(!p)},[v,l]=s.useState(!1),c=()=>{l(!v)},[m,I]=s.useState(!1),P=()=>{I(!m)},[x,E]=s.useState(!1),k=()=>{E(!x)},[h,n]=s.useState(!1),S=()=>{n(!h)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Slide"}),e.jsx("p",{className:"description",children:"Slide는 화면을 좌우로 이동시키는 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:a,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`import { Slide } from 'nds-ui/component';
// or
import Slide from 'nds-ui/component/Slide';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:j,children:"Property"}),e.jsxs("p",{className:"description",children:["Slide 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"content, leftBtn, rightBtn, noNav, pauseIcon, playIcon, autoSlide, delay, noPause 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Content"}),e.jsxs("p",{className:"description",children:["content 속성으로 내용을 작성할 수 있습니다. ",e.jsx("br",{}),"속성값으로 배열이 들어가며, 배열의 각 항목은 width 100% height 100% 를 유지해주어야됩니다. ",e.jsx("br",{}),"(각 항목에 key 값을 넣어주세요) ",e.jsx("br",{}),"배열의 갯수만큼 슬라이드에 표시되는 항목이 늘어납니다. ",e.jsx("br",{}),"자동 슬라이드 기능과 네비게이션 버튼이 기본으로 들어가있습니다. 후에 속성으로 없앨 수 있습니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsx(o,{content:[e.jsx("div",{className:"bgc-primary width100 height100"},0),e.jsx("div",{className:"bgc-secondary width100 height100"},1),e.jsx("div",{className:"bgc-tertiary width100 height100"},2)]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:y,children:e.jsx("i",{className:"i-code w14 h14"})})}),N?e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      content={[
        <div className='bgc-primary width100 height100'/>,
        <div className='bgc-secondary width100 height100'/>,
        <div className='bgc-tertiary width100 height100'/>
      ]}
    />
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`<>
<Slide
  content={[
    <div className='bgc-primary width100 height100'/>,
    <div className='bgc-secondary width100 height100'/>,
    <div className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Left Button / Right Button"}),e.jsx("p",{className:"description",children:"leftBtn, rightBtn 속성으로 버튼을 커스텀할 수 있습니다."})]}),e.jsx("div",{className:"layout-example",children:e.jsx(o,{leftBtn:e.jsx(r,{variant:"contained",theme:"white",children:"Custom"}),rightBtn:e.jsx(r,{variant:"contained",theme:"white",children:"Custom"}),content:[e.jsx("div",{className:"bgc-primary width100 height100"},0),e.jsx("div",{className:"bgc-secondary width100 height100"},1),e.jsx("div",{className:"bgc-tertiary width100 height100"},2)]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:B,children:e.jsx("i",{className:"i-code w14 h14"})})}),b?e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      leftBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
      rightBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
      content={[
        <div className='bgc-primary width100 height100'/>,
        <div className='bgc-secondary width100 height100'/>,
        <div className='bgc-tertiary width100 height100'/>
      ]}
    />
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`<>
<Slide
  leftBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
  rightBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
  content={[
    <div className='bgc-primary width100 height100'/>,
    <div className='bgc-secondary width100 height100'/>,
    <div className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"No Navigation"}),e.jsx("p",{className:"description",children:"noNav 속성으로 네비게이션을 없앨 수 있습니다."})]}),e.jsx("div",{className:"layout-example",children:e.jsx(o,{noNav:!0,content:[e.jsx("div",{className:"bgc-primary width100 height100"},0),e.jsx("div",{className:"bgc-secondary width100 height100"},1),e.jsx("div",{className:"bgc-tertiary width100 height100"},2)]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:f,children:e.jsx("i",{className:"i-code w14 h14"})})}),p?e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      noNav
      content={[
        <div className='bgc-primary width100 height100'/>,
        <div className='bgc-secondary width100 height100'/>,
        <div className='bgc-tertiary width100 height100'/>
      ]}
    />
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`<>
<Slide
  noNav
  content={[
    <div className='bgc-primary width100 height100'/>,
    <div className='bgc-secondary width100 height100'/>,
    <div className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Pause Icon / Play Icon"}),e.jsxs("p",{className:"description",children:["pauseIcon 속성으로 네비게이션의 멈춤 버튼을 커스텀할 수 있습니다. ",e.jsx("br",{}),"playIcon 속성으로 네비게이션의 시작 버튼을 커스텀할 수 있습니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsx(o,{pauseIcon:e.jsx("p",{className:"b size16",children:"멈춤"}),playIcon:e.jsx("p",{className:"b size16",children:"시작"}),content:[e.jsx("div",{className:"bgc-primary width100 height100"},0),e.jsx("div",{className:"bgc-secondary width100 height100"},1),e.jsx("div",{className:"bgc-tertiary width100 height100"},2)]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:c,children:e.jsx("i",{className:"i-code w14 h14"})})}),v?e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      pauseIcon={<p className='b size16'>멈춤</p>}
      playIcon={<p className='b size16'>시작</p>}
      content={[
        <div key={0} className='bgc-primary width100 height100'/>,
        <div key={1} className='bgc-secondary width100 height100'/>,
        <div key={2} className='bgc-tertiary width100 height100'/>
      ]}
    />
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`<>
<Slide
  pauseIcon={<p className='b size16'>멈춤</p>}
  playIcon={<p className='b size16'>시작</p>}
  content={[
    <div key={0} className='bgc-primary width100 height100'/>,
    <div key={1} className='bgc-secondary width100 height100'/>,
    <div key={2} className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"AutoSlide"}),e.jsxs("p",{className:"description",children:["autoSlide 속성으로 자동 슬라이드를 끄거나 켤 수 있습니다. ",e.jsx("br",{}),"기본값은 false 입니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsx(o,{autoSlide:!1,content:[e.jsx("div",{className:"bgc-primary width100 height100"},0),e.jsx("div",{className:"bgc-secondary width100 height100"},1),e.jsx("div",{className:"bgc-tertiary width100 height100"},2)]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:P,children:e.jsx("i",{className:"i-code w14 h14"})})}),m?e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      autoSlide={false}
      content={[
        <div key={0} className='bgc-primary width100 height100'/>,
        <div key={1} className='bgc-secondary width100 height100'/>,
        <div key={2} className='bgc-tertiary width100 height100'/>
      ]}
    />
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`<>
<Slide
  autoSlide={false}
  content={[
    <div key={0} className='bgc-primary width100 height100'/>,
    <div key={1} className='bgc-secondary width100 height100'/>,
    <div key={2} className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Delay"}),e.jsxs("p",{className:"description",children:["delay 속성으로 자동 슬라이드의 시간 간격을 설정할 수 있습니다. ",e.jsx("br",{}),"단위는 밀리세크(ms) 입니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsx(o,{delay:1e3,content:[e.jsx("div",{className:"bgc-primary width100 height100"},0),e.jsx("div",{className:"bgc-secondary width100 height100"},1),e.jsx("div",{className:"bgc-tertiary width100 height100"},2)]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:k,children:e.jsx("i",{className:"i-code w14 h14"})})}),x?e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      delay={1000}
      content={[
        <div key={0} className='bgc-primary width100 height100'/>,
        <div key={1} className='bgc-secondary width100 height100'/>,
        <div key={2} className='bgc-tertiary width100 height100'/>
      ]}
    />
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`<>
<Slide
  delay={1000}
  content={[
    <div key={0} className='bgc-primary width100 height100'/>,
    <div key={1} className='bgc-secondary width100 height100'/>,
    <div key={2} className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"No Pause"}),e.jsx("p",{className:"description",children:"noPause 속성으로 멈춤 버튼을 없앨 수 있습니다."})]}),e.jsx("div",{className:"layout-example",children:e.jsx(o,{noPause:!0,content:[e.jsx("div",{className:"bgc-primary width100 height100"},0),e.jsx("div",{className:"bgc-secondary width100 height100"},1),e.jsx("div",{className:"bgc-tertiary width100 height100"},2)]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:S,children:e.jsx("i",{className:"i-code w14 h14"})})}),h?e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      noPause
      content={[
        <div key={0} className='bgc-primary width100 height100'/>,
        <div key={1} className='bgc-secondary width100 height100'/>,
        <div key={2} className='bgc-tertiary width100 height100'/>
      ]}
    />
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[i({jsx:!0})],value:`<>
<Slide
  noPause
  content={[
    <div key={0} className='bgc-primary width100 height100'/>,
    <div key={1} className='bgc-secondary width100 height100'/>,
    <div key={2} className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:u,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(M,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"content"}),e.jsx("td",{children:"Array"}),e.jsxs("td",{children:["내용을 작성하는 속성으로 배열(array)이 들어갑니다. ",e.jsx("br",{}),"배열의 각 항목엔 width 100% height 100% 가 권장됩니다. ",e.jsx("br",{}),"배열의 각 항목에 고유한 키(key)값을 넣어주세요."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"leftBtn"}),e.jsx("td",{children:"element"}),e.jsx("td",{children:"왼쪽 슬라이드 버튼을 커스텀하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"rightBtn"}),e.jsx("td",{children:"element"}),e.jsx("td",{children:"오른쪽 슬라이드 버튼을 커스텀하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"noNav"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["네비게이션을 없애는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"pauseIcon"}),e.jsx("td",{children:"element"}),e.jsx("td",{children:"멈춤 버튼을 커스텀하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"playIcon"}),e.jsx("td",{children:"element"}),e.jsx("td",{children:"시작 버튼을 커스텀하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"autoSlide"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:" true "}),"boolean"]}),e.jsxs("td",{children:["자동 슬라이드를 설정하는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"delay"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:" 3000 "}),"number"]}),e.jsxs("td",{children:["자동 슬라이드의 시간 간격을 설정하는 속성으로 숫자형(number) 타입입니다. ",e.jsx("br",{}),"단위는 밀리세크(ms)로 속성값 1000 당 1초를 의미합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"noPause"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["멈춤버튼을 없애는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"classSlide"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Slide 컴포넌트 전체의 클래스입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"classBtn"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"좌우 버튼을 감싸는 div 태그의 클래스입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"classNavWrap"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"네비게이션 버튼을 감싸는 div 태그의 클래스입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"classNav"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"네비게이션 하나하나의 클래스입니다."})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{a.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{j.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{u.current.scrollIntoView()},children:" API"})]})]})})};export{V as default};
