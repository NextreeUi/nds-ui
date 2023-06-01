import{r as o,j as e,B as t}from"./index-e28265ce.js";import{R as s,j as n}from"./index-72ddc5e7.js";const d=()=>{const[a,i]=o.useState(!1),r=()=>{i(!a)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Tree"}),e.jsx("p",{className:"description",children:"클릭 인터렉션이 있는 Checkbox 컴포넌트입니다."})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{children:"Basic Tree"}),e.jsx("p",{className:"description",children:"variant 속성으로 버튼의 종류를 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{children:" Noraml "}),e.jsx(t,{variant:"outlined",children:" Outlined  "}),e.jsx(t,{variant:"contained",children:" Contained "})]}),e.jsxs("div",{className:"codeMirror",children:[a?e.jsx(s,{theme:"dark",extensions:[n({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[n({jsx:!0})],value:`<>
<Button> Noraml </Button>
<Button variant='outlined'> Outlined  </Button>
<Button variant='contained'> Contained </Button>
</>`}),e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:r,children:e.jsx("i",{className:"i-code w14 h14"})})]})]})]})})};export{d as default};
