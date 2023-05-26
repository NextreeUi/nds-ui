import{r as o,j as t,B as a}from"./index-e11ed23f.js";import{R as s,j as n}from"./index-50dcb135.js";const c=()=>{const[e,i]=o.useState(!1),r=()=>{i(!e)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"layout-all",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h1",{children:"Avatar"}),t.jsx("p",{className:"description",children:"클릭 인터렉션이 있는 Avatar 컴포넌트입니다."})]}),t.jsxs("div",{className:"layout-small",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h2",{children:"Basic Avatar"}),t.jsx("p",{className:"description",children:"variant 속성으로 버튼의 종류를 설정할 수 있습니다."})]}),t.jsxs("div",{className:"layout-example",children:[t.jsx(a,{children:" Noraml "}),t.jsx(a,{variant:"outlined",children:" Outlined  "}),t.jsx(a,{variant:"contained",children:" Contained "})]}),t.jsxs("div",{className:"codeMirror",children:[e?t.jsx(s,{theme:"dark",extensions:[n({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):t.jsx(s,{theme:"dark",extensions:[n({jsx:!0})],value:`<>
<Button> Noraml </Button>
<Button variant='outlined'> Outlined  </Button>
<Button variant='contained'> Contained </Button>
</>`}),t.jsx(a,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:r,children:t.jsx("i",{className:"i-code w14 h14"})})]})]})]})})};export{c as default};
