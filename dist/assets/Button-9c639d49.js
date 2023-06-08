import{r as a,j as e,B as t}from"./index-4cfbf475.js";import{R as s}from"./index-4a5422bd.js";import{j as r}from"./index-9acf6573.js";import{h as ne}from"./index-0ae14b68.js";import{T as ie}from"./Table-d1ea99e4.js";import"./index-1c9f993c.js";const he=()=>{const o=a.useRef(),n=a.useRef(),i=a.useRef(),l=a.useRef(),[d,S]=a.useState(!1),w=()=>{S(!d)},[c,R]=a.useState(!1),E=()=>{R(!c)},[u,H]=a.useState(!1),z=()=>{H(!u)},[m,O]=a.useState(!1),q=()=>{O(!m)},[x,M]=a.useState(!1),$=()=>{M(!x)},[h,V]=a.useState(!1),D=()=>{V(!h)},[j,I]=a.useState(!1),P=()=>{I(!j)},[p,T]=a.useState(!1),G=()=>{T(!p)},[v,A]=a.useState(!1),F=()=>{A(!v)},[B,L]=a.useState(!1),_=()=>{L(!B)},[N,J]=a.useState(!1),W=()=>{J(!N)},[y,X]=a.useState(!1),K=()=>{X(!y)},[C,Q]=a.useState(!1),U=()=>{Q(!C)},[b,Y]=a.useState(!1),Z=()=>{Y(!b)},[f,ee]=a.useState(!1),te=()=>{ee(!f)},[k,se]=a.useState(!1),re=()=>{se(!k)},[g,ae]=a.useState(!1),oe=()=>{ae(!g)};return e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Button"}),e.jsx("p",{className:"description",children:"클릭 인터렉션이 있는 Button 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:o,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import { Button } from 'nds-ui/component';
// or
import Button from 'nds-ui/component/Button';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:n,children:"Property"}),e.jsxs("p",{className:"description",children:["Button 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"variant / theme / size / radius / square / shadow / bg / otl / color / ripple / hoverBg / hoverOtl / hoverColor / hoverRadius / disabled 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Variant"}),e.jsx("p",{className:"description",children:"variant 속성으로 버튼의 종류를 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{children:" Noraml "}),e.jsx(t,{variant:"outlined",children:" Outlined  "}),e.jsx(t,{variant:"contained",children:" Contained "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:w,children:e.jsx("i",{className:"i-code w14 h14"})})}),d?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button> Noraml </Button>
<Button variant='outlined'> Outlined  </Button>
<Button variant='contained'> Contained </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Theme"}),e.jsxs("p",{className:"description",children:["theme 속성으로 버튼의 컬러를 설정할 수 있습니다. ",e.jsx("br",{}),"theme 속성은 bg, otl, color, ripple, hoverBg 5개의 속성을 동시에 바꿉니다. 디테일한 커스텀을 하려면 다른 속성을 이용하시면 됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{theme:"primary",variant:"contained",children:" Primary "}),e.jsx(t,{theme:"secondary",variant:"contained",children:" Secondary "}),e.jsx(t,{theme:"tertiary",variant:"contained",children:" Tertiary "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:E,children:e.jsx("i",{className:"i-code w14 h14"})})}),c?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button theme='primary' variant='contained'> Primary </Button>
      <Button theme='secondary' variant='contained'> Secondary </Button>
      <Button theme='tertiary' variant='contained'> Tertiary </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button theme='primary' variant='contained'> Primary </Button>
<Button theme='secondary' variant='contained'> Secondary </Button>
<Button theme='tertiary' variant='contained'> Tertiary </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsx("p",{className:"description",children:"size 속성으로 버튼의 크기 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{size:"large",variant:"contained",children:" Large "}),e.jsx(t,{variant:"contained",children:" Medium "}),e.jsx(t,{size:"small",variant:"contained",children:" Small "}),e.jsx(t,{size:"extraSmall",variant:"contained",children:" ExtraSmall "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:z,children:e.jsx("i",{className:"i-code w14 h14"})})}),u?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button size='large' variant='contained'> Large </Button>
      <Button variant='contained'> Medium </Button>
      <Button size='small' variant='contained'> Small </Button>
      <Button size='extraSmall' variant='contained'> ExtraSmall </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button size='large' variant='contained'> Large </Button>
<Button variant='contained'> Medium </Button>
<Button size='small' variant='contained'> Small </Button>
<Button size='extraSmall' variant='contained'> ExtraSmall </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Radius"}),e.jsx("p",{className:"description",children:"radius 속성으로 버튼의 굴곡을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{radius:"rect",variant:"contained",children:" Rect "}),e.jsx(t,{variant:"contained",children:" Normal "}),e.jsx(t,{radius:"round",variant:"contained",children:" Round "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:q,children:e.jsx("i",{className:"i-code w14 h14"})})}),m?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button radius='rect' variant='contained'> Rect </Button>
      <Button variant='contained'> Normal </Button>
      <Button radius='round' variant='contained'> Round </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button radius='rect' variant='contained'> Rect </Button>
<Button variant='contained'> Normal </Button>
<Button radius='round' variant='contained'> Round </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Square"}),e.jsx("p",{className:"description",children:"square 속성으로 버튼의 너비를 높이와 같게 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{variant:"contained",children:" Normal "}),e.jsx(t,{square:!0,variant:"contained",children:" S "}),e.jsx(t,{radius:"round",variant:"contained",children:" Normal "}),e.jsx(t,{square:!0,radius:"round",variant:"contained",children:" S "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:$,children:e.jsx("i",{className:"i-code w14 h14"})})}),x?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button variant='contained'> Normal </Button>
      <Button square variant='contained'> S </Button>
      <Button radius='round' variant='contained'> Normal </Button>
      <Button square radius='round' variant='contained'> S </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button variant='contained'> Normal </Button>
<Button square variant='contained'> S </Button>
<Button radius='round' variant='contained'> Normal </Button>
<Button square radius='round' variant='contained'> S </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Shadow"}),e.jsx("p",{className:"description",children:"shadow 속성으로 버튼의 그림자를 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{children:" Noraml "}),e.jsx(t,{shadow:!0,children:" Shadow "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:D,children:e.jsx("i",{className:"i-code w14 h14"})})}),h?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button> Noraml </Button>
      <Button shadow> Shadow </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button> Noraml </Button>
<Button shadow> Shadow </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Disabled"}),e.jsx("p",{className:"description",children:"disabled 속성으로 버튼을 비활성화 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{variant:"outlined",children:" Normal "}),e.jsx(t,{disabled:!0,variant:"outlined",children:" Disabled "}),e.jsx(t,{variant:"contained",children:" Normal "}),e.jsx(t,{disabled:!0,variant:"contained",children:" Disabled "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:P,children:e.jsx("i",{className:"i-code w14 h14"})})}),j?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button variant='outlined'> Normal </Button>
      <Button disabled variant='outlined'> Disabled </Button>
      <Button variant='contained'> Normal </Button>
      <Button disabled variant='contained'> Disabled </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button variant='outlined'> Normal </Button>
<Button disabled variant='outlined'> Disabled </Button>
<Button variant='contained'> Normal </Button>
<Button disabled variant='contained'> Disabled </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:" Custom Example "}),e.jsxs("p",{className:"description",children:["여러가지 속성을 사용하여 버튼을 원하시는대로 커스텀할 수 있습니다. ",e.jsx("br",{}),"bg / otl / color / ripple / hoverBg / hoverOtl / hoverColor 등이 있습니다. ",e.jsx("br",{}),"이 중 bg / otl / color / ripple / hoverBg 속성은 theme 속성을 통해 동시에 컨트롤 가능하지만, 더 세부적인 컨트롤을 원하실 경우 사용하시면 됩니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsx(t,{variant:"contained",bg:"white",otl:"primary",color:"primary",hoverBg:"primary",hoverColor:"white",hoverRipple:"white",children:"Custom"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:G,children:e.jsx("i",{className:"i-code w14 h14"})})}),p?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button 
        variant='contained' 
        bg='white' 
        otl='primary' 
        color='primary' 
        hoverBg='primary' 
        hoverColor='white' 
        hoverRipple='white'
      > 
        Custom 
      </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button 
  variant='contained' 
  bg='white' 
  otl='primary' 
  color='primary' 
  hoverBg='primary' 
  hoverColor='white' 
  hoverRipple='white'
> 
  Custom 
</Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:" BG "}),e.jsx("p",{className:"description",children:"bg 속성을 사용하여 배경색을 바꿀 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{bg:"primary",children:" BG "}),e.jsx(t,{bg:"secondary",children:" BG "}),e.jsx(t,{bg:"tertiary",children:" BG "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:F,children:e.jsx("i",{className:"i-code w14 h14"})})}),v?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button bg='primary'> Custom </Button>
      <Button bg='secondary'> Custom </Button>
      <Button bg='tertiary'> Custom </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button bg='primary'> Custom </Button>
<Button bg='secondary'> Custom </Button>
<Button bg='tertiary'> Custom </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:" Outline "}),e.jsx("p",{className:"description",children:"otl 속성을 사용하여 외곽선 색을 바꿀 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{otl:"primary",children:" Outline "}),e.jsx(t,{otl:"secondary",children:" Outline "}),e.jsx(t,{otl:"tertiary",children:" Outline "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:_,children:e.jsx("i",{className:"i-code w14 h14"})})}),B?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button otl='primary'> Outline </Button>
      <Button otl='secondary'> Outline </Button>
      <Button otl='tertiary'> Outline </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button otl='primary'> Outline </Button>
<Button otl='secondary'> Outline </Button>
<Button otl='tertiary'> Outline </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:" Color "}),e.jsx("p",{className:"description",children:"color 속성을 사용하여 글자색을 바꿀 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{color:"primary",children:" Color "}),e.jsx(t,{color:"secondary",children:" Color "}),e.jsx(t,{color:"tertiary",children:" Color "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:W,children:e.jsx("i",{className:"i-code w14 h14"})})}),N?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button color='primary'> Color </Button>
      <Button color='secondary'> Color </Button>
      <Button color='tertiary'> Color </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button color='primary'> Color </Button>
<Button color='secondary'> Color </Button>
<Button color='tertiary'> Color </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:" Ripple "}),e.jsx("p",{className:"description",children:"ripple 속성을 사용하여 클릭시 인터렉션 색을 바꿀 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{ripple:"primary",children:" Click Button "}),e.jsx(t,{ripple:"secondary",children:" Click Button "}),e.jsx(t,{ripple:"tertiary",children:" Click Button "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:K,children:e.jsx("i",{className:"i-code w14 h14"})})}),y?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button ripple='primary'> Click Button </Button>
      <Button ripple='secondary'> Click Button </Button>
      <Button ripple='tertiary'> Click Button </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button ripple='primary'> Click Button </Button>
<Button ripple='secondary'> Click Button </Button>
<Button ripple='tertiary'> Click Button </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:" HoverBg "}),e.jsx("p",{className:"description",children:"hoverBg 속성을 사용하여 호버시 배경색을 바꿀 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{hoverBg:"primary",children:" Hover "}),e.jsx(t,{hoverBg:"secondary",children:" Hover "}),e.jsx(t,{hoverBg:"tertiary",children:" Hover "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:U,children:e.jsx("i",{className:"i-code w14 h14"})})}),C?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button hoverBg='primary'> Hover </Button>
      <Button hoverBg='secondary'> Hover </Button>
      <Button hoverBg='tertiary'> Hover </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button hoverBg='primary'> Hover </Button>
<Button hoverBg='secondary'> Hover </Button>
<Button hoverBg='tertiary'> Hover </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:" HoverOtl "}),e.jsx("p",{className:"description",children:"hoverOtl 속성을 사용하여 호버시 외곽선 색을 바꿀 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{hoverOtl:"primary",children:" Hover "}),e.jsx(t,{hoverOtl:"secondary",children:" Hover "}),e.jsx(t,{hoverOtl:"tertiary",children:" Hover "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:Z,children:e.jsx("i",{className:"i-code w14 h14"})})}),b?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button hoverOtl='primary'> Hover </Button>
      <Button hoverOtl='secondary'> Hover </Button>
      <Button hoverOtl='tertiary'> Hover </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button hoverOtl='primary'> Hover </Button>
<Button hoverOtl='secondary'> Hover </Button>
<Button hoverOtl='tertiary'> Hover </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:" HoverColor "}),e.jsx("p",{className:"description",children:"hoverColor 속성을 사용하여 호버시 글자색을 바꿀 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(t,{hoverColor:"primary",children:" Hover "}),e.jsx(t,{hoverColor:"secondary",children:" Hover "}),e.jsx(t,{hoverColor:"tertiary",children:" Hover "})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:te,children:e.jsx("i",{className:"i-code w14 h14"})})}),f?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button hoverColor='primary'> Hover </Button>
      <Button hoverColor='secondary'> Hover </Button>
      <Button hoverColor='tertiary'> Hover </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button hoverColor='primary'> Hover </Button>
<Button hoverColor='secondary'> Hover </Button>
<Button hoverColor='tertiary'> Hover </Button>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:" ClassName Custom "}),e.jsx("p",{className:"description",children:"className 을 사용하면 기본 제공되는 속성으로 불가능한 디자인 또한 해결 가능합니다."})]}),e.jsx("div",{className:"layout-example",children:e.jsx(t,{className:"custom-button",variant:"contained",radius:"round",children:" Custom "})}),e.jsxs("div",{className:"codeMirror",children:[e.jsxs("div",{className:"btn-wrap",children:[e.jsx("p",{children:"JSX"}),e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:re,children:e.jsx("i",{className:"i-code w14 h14"})})]}),k?e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button className='custom-button' variant='contained' radius='round'> Custom </Button>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Button className='custom-button' variant='contained' radius='round'> Custom </Button>
</>`})]}),e.jsxs("div",{className:`codeMirror ${g?"maxh1000":"maxh300"}`,children:[e.jsxs("div",{className:"btn-wrap",children:[e.jsx("p",{children:"CSS"}),e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:oe,children:e.jsx("i",{className:"i-code w14 h14"})})]}),e.jsx(s,{theme:"dark",extensions:[ne({html:!0})],value:`<style>
.custom-button {
  background-color: transparent !important;
  position: relative !important;
  color: var(--black) !important;
  &:hover {
    color: var(--white) !important;
    &::after  {
      left: 0;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: calc(-100% + 32rem);
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 100rem;
    background-color: var(--primary);
    transition: 0.5s;
  }
}
</style>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:l,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(ie,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"variant"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'noarmal'"}),"'outlined' ",e.jsx("br",{}),"'contained'"]}),e.jsxs("td",{children:["'normal' : 외곽선과 배경색이 없는 버튼입니다. ",e.jsx("br",{}),"'outlined' : 외곽선은 있고 배경색은 없는 버튼입니다. ",e.jsx("br",{}),"'contained' : 외곽선은 없고 배경색은 있는 버튼입니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"theme"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["theme 속성은 bg, color, otl, ripple, hoverBg 5가지 속성에 영향을 미칩니다. ",e.jsx("br",{}),"더 상세한 커스텀을 원할 경우 theme 대신 위 5가지 속성을 조절하시면 됩니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:["'large' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'medium'"}),"'small' ",e.jsx("br",{}),"'extraSmall'"]}),e.jsx("td",{children:"크기를 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"raidus"}),e.jsxs("td",{children:["'rect' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'normal'"}),"'round'"]}),e.jsx("td",{children:"굴곡을 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"square"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["너비값을 높이와 같게 정사각형으로 만드는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"shadow"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["그림자를 추가하는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["비활성화 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"bg"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),e.jsx("p",{className:"b",children:"'transparent'"}),"$colors"]}),e.jsxs("td",{children:["배경색을 조절하는 속성입니다. ",e.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"otl"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),e.jsx("p",{className:"b",children:"'transparent'"}),"$colors"]}),e.jsxs("td",{children:["외곽선 색을 조절하는 속성입니다. ",e.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),e.jsx("p",{className:"b",children:"'white'"}),"$colors"]}),e.jsxs("td",{children:["글자색을 조절하는 속성입니다. ",e.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ripple"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),e.jsx("p",{className:"b",children:"'white'"}),"$colors"]}),e.jsxs("td",{children:["클릭시 인터렉션 색을 조절하는 속성입니다. ",e.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hoverBg"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary_light'"}),e.jsx("p",{className:"b",children:"'primary_15p'"}),"$colors"]}),e.jsxs("td",{children:["호버시 배경색을 조절하는 속성입니다. ",e.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hoverOtl"}),e.jsx("td",{children:"$colors"}),e.jsxs("td",{children:["호버시 외곽선 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hoverColor"}),e.jsx("td",{children:"$colors"}),e.jsxs("td",{children:["호버시 글자색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{n.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Custom Example"}),e.jsx("a",{onClick:()=>{l.current.scrollIntoView()},children:" API"})]})]})};export{he as default};
