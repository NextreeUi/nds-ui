import{r as u,j as e,s as o,B as c}from"./index-9d820df2.js";import{R as x}from"./index-e4d90ce6.js";import{j as m}from"./index-f1649a7b.js";import{T as q}from"./Table-cf6c76b4.js";const j=({color:h="primary",size:d="large",max:i=5,endBtn:p=!0,className:g})=>{const[n,t]=u.useState(1),[a,r]=u.useState(1),[s,l]=u.useState(1),y=()=>{t(1),r(1),l(1)},v=()=>{a!==1&&(r(a-1),a<4||a>i-2?l(s-1):t(n-1))},b=()=>{a!==i&&(r(a+1),a<3||a>i-3?l(s+1):t(n+1))},C=()=>{i>5?(t(i-4),r(i),l(5)):(r(i),l(i))},N=()=>{i<6?(l(1),r(1)):s==1||(s==2?(r(1),l(1)):s==3?(r(a-2),a==3?l(1):a==4?(l(2),t(n-1)):a>4&&t(n-2)):s==4?(r(a-3),i==6?(l(s-2),t(n-1)):i>6&&(l(s-1),t(n-2))):s==5&&(r(a-4),i==6?(l(s-3),t(n-1)):i>6&&(l(s-2),t(n-2))))},P=()=>{i<6?(l(2),r(2)):s==1?(r(2),l(2)):s==3?(r(a-1),a==3?l(s-1):a>3&&t(n-1)):s==4?(r(a-2),l(s-1),t(n-1)):s==5&&(r(a-3),l(s-2),t(n-1))},k=()=>{i<6?(l(3),r(3)):s==1||s==2?(r(3),l(3)):(s==4||s==5)&&(r(i-2),l(3))},S=()=>{i<6?(l(4),r(4)):s==5?(r(4),l(4)):s==3?(r(a+1),a==i-2?l(s+1):a<i-2&&t(n+1)):s==2?(r(a+2),l(s+1),t(n+1)):s==1&&(r(a+3),l(s+2),t(n+1))},E=()=>{i<6?(l(5),r(5)):s==5||(s==4?(r(i),l(5)):s==3?(r(a+2),a==i-2?l(5):a==i-3?(l(4),t(n+1)):a<i-3&&t(n+2)):s==2?(r(a+3),i==6?(l(s+2),t(n+1)):i>6&&(l(s+1),t(n+2))):s==1&&(r(a+4),i==6?(l(s+3),t(n+1)):i>6&&(l(s+2),t(n+2))))},f=B=>B?o[`pagination-color-${B}`]:"";return e.jsx(e.Fragment,{children:e.jsxs("div",{className:o["pagination-wrap"]+" "+(g||""),children:[p?e.jsx(c,{theme:"grayc",square:!0,radius:"round",size:d,hoverBg:"graye",className:o["pagination-btn"],onClick:y,disabled:a==1,children:e.jsx("p",{className:o["pagination-left-end"]+" "+(a==1?o.disabled:"")})}):e.jsx(e.Fragment,{}),e.jsx(c,{theme:"grayc",square:!0,radius:"round",size:d,hoverBg:"graye",className:o["pagination-btn"],onClick:v,disabled:a==1,children:e.jsx("p",{className:o["pagination-left"]+" "+(a==1?o.disabled:"")})}),e.jsxs(c,{theme:"grayc",square:!0,radius:"round",size:d,color:"black",hoverBg:"graye",className:o["pagination-btn"]+" "+f(h)+" "+(s==1?o.active:""),onClick:N,children:[" ",n," "]}),i>1?e.jsxs(c,{theme:"grayc",square:!0,radius:"round",size:d,color:"black",hoverBg:"graye",className:o["pagination-btn"]+" "+f(h)+" "+(s==2?o.active:""),onClick:P,children:[" ",n+1," "]}):e.jsx(e.Fragment,{}),i>2?e.jsxs(c,{theme:"grayc",square:!0,radius:"round",size:d,color:"black",hoverBg:"graye",className:o["pagination-btn"]+" "+f(h)+" "+(s==3?o.active:""),onClick:k,children:[" ",n+2," "]}):e.jsx(e.Fragment,{}),i>3?e.jsxs(c,{theme:"grayc",square:!0,radius:"round",size:d,color:"black",hoverBg:"graye",className:o["pagination-btn"]+" "+f(h)+" "+(s==4?o.active:""),onClick:S,children:[" ",n+3," "]}):e.jsx(e.Fragment,{}),i>4?e.jsxs(c,{theme:"grayc",square:!0,radius:"round",size:d,color:"black",hoverBg:"graye",className:o["pagination-btn"]+" "+f(h)+" "+(s==5?o.active:""),onClick:E,children:[" ",n+4," "]}):e.jsx(e.Fragment,{}),e.jsx(c,{theme:"grayc",square:!0,radius:"round",size:d,hoverBg:"graye",className:o["pagination-btn"],onClick:b,disabled:a==i,children:e.jsx("p",{className:o["pagination-right"]+" "+(a==i?o.disabled:"")})}),p?e.jsx(c,{theme:"grayc",square:!0,radius:"round",size:d,hoverBg:"graye",className:o["pagination-btn"],onClick:C,disabled:a==i,children:e.jsx("p",{className:o["pagination-right-end"]+" "+(a==i?o.disabled:"")})}):e.jsx(e.Fragment,{})]})})},M=()=>{const h=u.useRef(),d=u.useRef(),i=u.useRef(),[p,g]=u.useState(!1),n=()=>{g(!p)},[t,a]=u.useState(!1),r=()=>{a(!t)},[s,l]=u.useState(!1),y=()=>{l(!s)},[v,b]=u.useState(!1),C=()=>{b(!v)},[N,P]=u.useState(!1),k=()=>{P(!N)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Pagination"}),e.jsx("p",{className:"description",children:"Pagination은 여러 범위가 있는 페이지에서 특정 페이지로 이동할 수 있는 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:h,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import { Pagination } from 'nds-ui/component';
// or
import Pagination from 'nds-ui/component/Pagination';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:d,children:"Property"}),e.jsxs("p",{className:"description",children:["Pagination 컴포넌트는 다양한 속성이 있습니다. ",e.jsx("br",{}),"color / size / max / endBtn  등이 있습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Basic Pagination"}),e.jsxs("p",{className:"description",children:["기본적인 Pagination 형태입니다. ",e.jsx("br",{}),"Pagination은 5개의 페이지가 출력되며, 현재 페이지 위치에 액티브된 숫자가 변경됩니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsx(j,{})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:n,children:e.jsx("i",{className:"i-code w14 h14"})})}),p?e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Pagination />
  )
}

export default Example;`}):e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`<>
<Pagination />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Color"}),e.jsxs("p",{className:"description",children:["color 속성은 색상을 설정하는 속성입니다. ",e.jsx("br",{}),"기본값은 primary입니다."]})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsx(j,{}),e.jsx(j,{color:"secondary"}),e.jsx(j,{color:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:r,children:e.jsx("i",{className:"i-code w14 h14"})})}),t?e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Pagination />
      <Pagination color='secondary'/>
      <Pagination color='tertiary'/>
    </div>
  )
}

export default Example;`}):e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`<>
<div className='flexColumn gap10'>
  <Pagination />
  <Pagination color='secondary'/>
  <Pagination color='tertiary'/>
</div>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsxs("p",{className:"description",children:["size 속성은 크기를 설정하는 속성입니다. ",e.jsx("br",{}),"기본값은 large 입니다."]})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsx(j,{}),e.jsx(j,{size:"medium"}),e.jsx(j,{size:"small"}),e.jsx(j,{size:"extraSmall"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:y,children:e.jsx("i",{className:"i-code w14 h14"})})}),s?e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Pagination />
      <Pagination size='medium'/>
      <Pagination size='small'/>
      <Pagination size='extraSmall'/>
    </div>
  )
}

export default Example;`}):e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`<>
<div className='flexColumn gap10'>
  <Pagination />
  <Pagination size='medium'/>
  <Pagination size='small'/>
  <Pagination size='extraSmall'/>
</div>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Max"}),e.jsx("p",{className:"description",children:"max 속성은 총 페이지 수를 설정하는 속성입니다."})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(j,{max:10})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:C,children:e.jsx("i",{className:"i-code w14 h14"})})}),v?e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Pagination max={10}/>
  )
}

export default Example;`}):e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`<>
<Pagination max={10}/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"End Button"}),e.jsx("p",{className:"description",children:"endBtn 속성은 좌우 맨끝으로 버튼을 나타내거나 없애는 속성입니다."})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(j,{endBtn:!1})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:k,children:e.jsx("i",{className:"i-code w14 h14"})})}),N?e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Pagination endBtn={false}/>
  )
}

export default Example;`}):e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`<>
<Pagination endBtn={false}/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(q,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["색상을 설정하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'large'"}),"'medium' ",e.jsx("br",{}),"'small'  ",e.jsx("br",{}),"'extraSmall' ",e.jsx("br",{})]}),e.jsx("td",{children:"크기를 조절하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"max"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"5"}),"number"]}),e.jsx("td",{children:"페이지 수를 설정하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"endBtn"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"true"}),"Boolean"]}),e.jsx("td",{children:"맨 끝으로 버튼을 나타내거나 없애는 속성으로 불리언(Boolean) 타입입니다."})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{h.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" API"})]})]})})};export{M as default};
