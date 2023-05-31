import{j as e,s as c,r as t,B as u}from"./index-ab2469fa.js";import{R as l,j as r}from"./index-8cad6eb6.js";import{T as w}from"./Table-cc32831e.js";const s=({color:i="primary",radius:a="round",defaultChecked:o,id:n,name:j,value:m,disabled:h,className:x})=>{const p=d=>d?c[`color-${d}`]:"";return e.jsx(e.Fragment,{children:e.jsx("input",{type:"checkbox",className:c.switch+" "+p(i)+" "+(a=="rect"?c["radius-rect"]:a=="normal"?c["radius-normal"]:a=="round"?c["radius-round"]:"")+" "+(x||""),disabled:h,id:n,name:j,value:m,defaultChecked:o})})},g=()=>{const i=t.useRef(),a=t.useRef(),o=t.useRef(),[n,j]=t.useState(!1),m=()=>{j(!n)},[h,x]=t.useState(!1),p=()=>{x(!h)},[d,v]=t.useState(!1),C=()=>{v(!d)},[f,k]=t.useState(!1),N=()=>{k(!f)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Switch"}),e.jsx("p",{className:"description",children:"Switch 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`import { Switch } from 'nds-ui/component';
// or
import Switch from 'nds-ui/component/Switch';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:a,children:"Property"}),e.jsxs("p",{className:"description",children:["Select 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"size / radius / defaultValue / list 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Color"}),e.jsxs("p",{className:"description",children:["color 속성으로 스위치의 색상을 설정할 수 있습니다. ",e.jsx("br",{})]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(s,{defaultChecked:!0}),e.jsx(s,{defaultChecked:!0,color:"secondary"}),e.jsx(s,{defaultChecked:!0,color:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(u,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:m,children:e.jsx("i",{className:"i-code w14 h14"})})}),n?e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Switch } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Switch defaultChecked />
      <Switch defaultChecked color='secondary'/>
      <Switch defaultChecked color='tertiary'/>
    </div>
  )
}

export default Example;`}):e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Switch defaultChecked />
<Switch defaultChecked color='secondary'/>
<Switch defaultChecked color='tertiary'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Radius"}),e.jsx("p",{className:"description",children:"radius 속성으로 스위치의 굴곡을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(s,{defaultChecked:!0,radius:"rect"}),e.jsx(s,{defaultChecked:!0}),e.jsx(s,{defaultChecked:!0,radius:"round"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(u,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:p,children:e.jsx("i",{className:"i-code w14 h14"})})}),h?e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Switch } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Switch defaultChecked radius='rect' />
      <Switch defaultChecked />
      <Switch defaultChecked radius='round' />
    </div>
  )
}

export default Example;`}):e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Switch defaultChecked radius='rect' />
<Switch defaultChecked />
<Switch defaultChecked radius='round' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"DefaultChecked"}),e.jsx("p",{className:"description",children:"defaultChecked 속성으로 기본체크를 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(s,{}),e.jsx(s,{defaultChecked:!0})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(u,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:C,children:e.jsx("i",{className:"i-code w14 h14"})})}),d?e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Switch } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Switch />
      <Switch defaultChecked />
    </div>
  )
}

export default Example;`}):e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Switch />
<Switch defaultChecked />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Disabled"}),e.jsx("p",{className:"description",children:"disabled 속성으로 스위치를 비활성화 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(s,{defaultChecked:!0}),e.jsx(s,{disabled:!0,defaultChecked:!0})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(u,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:N,children:e.jsx("i",{className:"i-code w14 h14"})})}),f?e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Switch } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
    </div>
  )
}

export default Example;`}):e.jsx(l,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Switch defaultChecked />
<Switch disabled defaultChecked />
</>`})]})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"ID / Name / Value"}),e.jsx("p",{className:"description",children:"id / name / value 속성은 html과 사용방법이 같습니다."})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:o,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(w,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["체크 시 배경 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"radius"}),e.jsxs("td",{children:["'rect' ",e.jsx("br",{}),"'normal'",e.jsx("p",{className:"b",children:"'round'"})]}),e.jsx("td",{children:"굴곡을 조절하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultChecked"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["기본체크 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["비활성화 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"id"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["id 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"name"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["name 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["value 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{a.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" API"})]})]})})};export{g as default};
