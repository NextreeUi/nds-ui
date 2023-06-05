import{r as e,j as s,L as r,B as x}from"./index-26bff6e6.js";import{R as l,j as t}from"./index-3267b1b1.js";import{T as m}from"./Table-c1dd1d21.js";const p=()=>{const a=e.useRef(),o=e.useRef(),i=e.useRef(),[n,c]=e.useState(!1),d=()=>{c(!n)};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"layout-all",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h1",{children:"Loading"}),s.jsx("p",{className:"description",children:"Loading 컴포넌트입니다."})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:a,children:"Import"}),s.jsx("div",{className:"codeMirror",children:s.jsx(l,{theme:"dark",extensions:[t({jsx:!0})],value:`import { Loading } from 'nds-ui/component';
// or
import Loading from 'nds-ui/component/Loading';`})}),s.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",s.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",s.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:o,children:"Property"}),s.jsxs("p",{className:"description",children:["Loading 컴포넌트 안에는 color 속성이 있습니다. ",s.jsx("br",{})]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Color"}),s.jsx("p",{className:"description",children:"color 속성으로 색상을 설정할 수 있습니다."})]}),s.jsxs("div",{className:"layout-example",children:[s.jsx(r,{}),s.jsx(r,{color:"secondary"}),s.jsx(r,{color:"tertiary"})]}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:d,children:s.jsx("i",{className:"i-code w14 h14"})})}),n?s.jsx(l,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button> Noraml </Button>
      <Button variant='outlined'> Outlined  </Button>
      <Button variant='contained'> Contained </Button>
    </div>
  )
}

export default Example;`}):s.jsx(l,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Button> Noraml </Button>
<Button variant='outlined'> Outlined  </Button>
<Button variant='contained'> Contained </Button>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:i,children:" API "}),s.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),s.jsx(m,{classWrap:"table-props",colGroup:s.jsxs(s.Fragment,{children:[s.jsx("col",{className:"table-props-col1"}),s.jsx("col",{className:"table-props-col2"})]}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"props"}),s.jsx("th",{children:s.jsx("div",{className:"table-props-value",children:"value"})}),s.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{children:"color"}),s.jsxs("td",{children:[s.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),s.jsxs("td",{children:["색상을 설정하는 속성입니다. ",s.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]})})})]}),s.jsxs("div",{className:"layout-scroll",children:[s.jsx("p",{children:"Content"}),s.jsx("a",{onClick:()=>{a.current.scrollIntoView()},children:" Import"}),s.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" Property"}),s.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" API"})]})]})})};export{p as default};
