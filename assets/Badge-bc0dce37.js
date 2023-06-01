import{j as e,s as r,r as o,B as t}from"./index-e690ac9b.js";import{R as n,j as s}from"./index-6fc11d1a.js";import{A as M}from"./Avatar-a67028da.js";import{T as I}from"./Table-3da10440.js";const a=({color:h="notification",radius:i="round",vertical:c="top",horizontal:l="right",content:d,max:x,dot:m,children:v,id:B,className:u})=>{const p=j=>j?r[`color-${j}`]:"";return x&&d>x&&(d=x+"+"),e.jsx(e.Fragment,{children:e.jsxs("div",{className:r["badge-wrap"],children:[v,e.jsx("div",{className:r.badge+" "+p(h)+" "+(i=="rect"?r["radius-rect"]:i=="normal"?r["radius-normal"]:i=="round"?r["radius-round"]:"")+" "+(c=="top"?r["vertical-top"]:c=="bottom"?r["vertical-bottom"]:"")+" "+(l=="left"?r["horizontal-left"]:l=="right"?r["horizontal-right"]:"")+" "+(m?r.dot:"")+" "+(u||""),id:B,children:m?"":d})]})})},F=()=>{const h=o.useRef(),i=o.useRef(),c=o.useRef(),[l,d]=o.useState(!1),x=()=>{d(!l)},[m,v]=o.useState(!1),B=()=>{v(!m)},[u,p]=o.useState(!1),j=()=>{p(!u)},[g,C]=o.useState(!1),y=()=>{C(!g)},[N,k]=o.useState(!1),w=()=>{k(!N)},[f,R]=o.useState(!1),z=()=>{R(!f)},[b,E]=o.useState(!1),S=()=>{E(!b)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Badge"}),e.jsx("p",{className:"description",children:"Badge 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:h,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`import { Badge } from 'nds-ui/component';
// or
import Badge from 'nds-ui/component/Badge';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:"Property"}),e.jsxs("p",{className:"description",children:["Avatar 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"name / size / color / radius / number  등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Basic"}),e.jsxs("p",{className:"description",children:["기본적인 Badge 형태입니다. ",e.jsx("br",{}),"Badge는 다른 컴포넌트를 감싸는 형태로 작성합니다. ",e.jsx("br",{}),"화면상에는 모서리쪽 알림형태로 표시됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(a,{content:1,children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{dot:!0,children:e.jsx(M,{color:"primary",name:"nds"})})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:x,children:e.jsx("i",{className:"i-code w14 h14"})})}),l?e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={1}>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge dot>
        <Avatar color='primary' name='nds'/>
      </Badge>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`<>
<Badge content={1}>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge dot>
  <Avatar color='primary' name='nds'/>
</Badge>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Color"}),e.jsxs("p",{className:"description",children:["color 속성으로 색상을 설정할 수 있습니다. ",e.jsx("br",{}),"color 속성의 값은 Variable의 $colors 변수값을 넣을 수 있습니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(a,{content:1,color:"notification",children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{content:1,color:"success",children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{content:1,color:"warning",children:e.jsx(t,{variant:"contained",children:"메세지"})})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:B,children:e.jsx("i",{className:"i-code w14 h14"})})}),m?e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={1} color='notification'>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={1} color='success'>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={1} color='warning'>
        <Button variant='contained'>메세지</Button>
      </Badge>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`<>
<Badge content={1} color='notification'>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={1} color='success'>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={1} color='warning'>
  <Button variant='contained'>메세지</Button>
</Badge>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Radius"}),e.jsxs("p",{className:"description",children:["radius 속성으로 굴곡을 설정할 수 있습니다. ",e.jsx("br",{}),"rect / normal / round 값이 있고 round가 기본 값입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(a,{content:9,radius:"rect",children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{content:9,radius:"normal",children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{content:9,children:e.jsx(t,{variant:"contained",children:"메세지"})})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:j,children:e.jsx("i",{className:"i-code w14 h14"})})}),u?e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={9} radius='rect'>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={9} radius='normal'>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={9} >
        <Button variant='contained'>메세지</Button>
      </Badge>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`<>
<Badge content={9} radius='rect'>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={9} radius='normal'>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={9} >
  <Button variant='contained'>메세지</Button>
</Badge>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Vertical / Horizontal"}),e.jsxs("p",{className:"description",children:["vertical 속성으로 위치(수직)를 정할 수 있습니다. ",e.jsx("br",{}),"top / bottom 값이 있고 top이 기본 값입니다.",e.jsx("br",{}),"horizontal 속성으로 위치(수평)를 정할 수 있습니다. ",e.jsx("br",{}),"right / left 값이 있고 right가 기본 값입니다."]})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsxs("div",{className:"flex gap10",children:[e.jsx(a,{content:1,horizontal:"left",children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{content:1,children:e.jsx(t,{variant:"contained",children:"메세지"})})]}),e.jsxs("div",{className:"flex gap10",children:[e.jsx(a,{content:1,horizontal:"left",vertical:"bottom",children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{content:1,vertical:"bottom",children:e.jsx(t,{variant:"contained",children:"메세지"})})]})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:y,children:e.jsx("i",{className:"i-code w14 h14"})})}),g?e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <div className='flex gap10'>
        <Badge content={1} horizontal='left'>
          <Button variant='contained'>메세지</Button>
        </Badge>
        <Badge content={1}>
          <Button variant='contained'>메세지</Button>
        </Badge>
      </div>
      <div className='flex gap10'>
        <Badge content={1} horizontal='left' vertical='bottom'>
          <Button variant='contained'>메세지</Button>
        </Badge>
        <Badge content={1} vertical='bottom'>
          <Button variant='contained'>메세지</Button>
        </Badge>
      </div>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`<>
<div className='flex gap10'>
  <Badge content={1} horizontal='left'>
    <Button variant='contained'>메세지</Button>
  </Badge>
  <Badge content={1}>
    <Button variant='contained'>메세지</Button>
  </Badge>
</div>
<div className='flex gap10'>
  <Badge content={1} horizontal='left' vertical='bottom'>
    <Button variant='contained'>메세지</Button>
  </Badge>
  <Badge content={1} vertical='bottom'>
    <Button variant='contained'>메세지</Button>
  </Badge>
</div>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Content"}),e.jsx("p",{className:"description",children:"content 속성으로 현재 숫자를 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(a,{content:1,children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{content:2,children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{content:3,children:e.jsx(t,{variant:"contained",children:"메세지"})})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:S,children:e.jsx("i",{className:"i-code w14 h14"})})}),b?e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={1}>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={2}>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={3}>
        <Button variant='contained'>메세지</Button>
      </Badge>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`<>
<Badge content={1}>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={2}>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={3}>
  <Button variant='contained'>메세지</Button>
</Badge>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Max"}),e.jsxs("p",{className:"description",children:["max 속성으로 최대 숫자를 설정할 수 있습니다. ",e.jsx("br",{}),"content가 max보다 높을 경우 content대신 max가 표기되고 옆에 + 표시가 붙습니다."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(a,{content:100,max:99,children:e.jsx(t,{variant:"contained",children:"메세지"})})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:w,children:e.jsx("i",{className:"i-code w14 h14"})})}),N?e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={100} max={99}>
        <Button variant='contained'>메세지</Button>
      </Badge>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`<>
<Badge content={100} max={99}>
  <Button variant='contained'>메세지</Button>
</Badge>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Dot"}),e.jsx("p",{className:"description",children:"dot 속성으로 숫자 대신 점으로 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsx(a,{content:"New",children:e.jsx(t,{variant:"contained",children:"메세지"})}),e.jsx(a,{dot:!0,children:e.jsx(t,{variant:"contained",children:"메세지"})})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:z,children:e.jsx("i",{className:"i-code w14 h14"})})}),f?e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Badge content={100} max={99}>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge dot>
        <Button variant='contained'>메세지</Button>
      </Badge>
    </div>
  )
}

export default Example;`}):e.jsx(n,{theme:"dark",extensions:[s({jsx:!0})],value:`<>
<Badge content={100} max={99}>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge dot>
  <Button variant='contained'>메세지</Button>
</Badge>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:c,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(I,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'notification'"}),"$colors"]}),e.jsxs("td",{children:["배경색을 설정하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"radius"}),e.jsxs("td",{children:["'rect' ",e.jsx("br",{}),"'normal' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'round'"})]}),e.jsxs("td",{children:["굴곡을 설정하는 속성입니다. ",e.jsx("br",{}),"rect / normal / round 3가지 값이 있고 round 가 기본값입니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"vertical"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'top'"}),"'bottom'"]}),e.jsxs("td",{children:["위치(수직)를 설정하는 속성입니다. ",e.jsx("br",{}),"top / bottom 2가지 값이 있고 top 이 기본값입니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"horizontal"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'right'"}),"'left'"]}),e.jsxs("td",{children:["위치(수평)를 설정하는 속성입니다. ",e.jsx("br",{}),"right / left 2가지 값이 있고 right 가 기본값입니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"content"}),e.jsxs("td",{children:["number ",e.jsx("br",{}),"string"]}),e.jsxs("td",{children:["내용을 설정하는 속성입니다. ",e.jsx("br",{}),"문자열 혹은 숫자 타입의 데이터가 들어갑니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"max"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["content의 최대치를 설정하는 속성입니다. ",e.jsx("br",{}),"content의 값이 max값보다 크면 max가 표기되고 옆에 +가 붙습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"dot"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["내용 대신 점으로 표현하는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{h.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" API"})]})]})})};export{F as default};
