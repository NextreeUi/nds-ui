import{j as t,s as a,r as c,B as n}from"./index-3a58b41f.js";import{R as o}from"./index-be815c0a.js";import{j as r}from"./index-ac5f5498.js";import{T as k}from"./Table-df068c7f.js";const i=({content:p,placement:l="bottom",bg:s="grayc",color:e,radius:m="normal",size:d="medium",children:u,className:h})=>{s=="black"||s=="gray1"||s=="gray2"||s=="gray3"||s=="gray4"||s=="gray5"||s=="gray6"||s=="gray7"||s=="gray8"||s=="gray9"?e=e||"white":(s=="graya"||s=="grayb"||s=="grayc"||s=="grayd"||s=="graye"||s=="grayf5"||s=="grayf8"||s=="white")&&(e=e||"black");const j=x=>x?a[`bg-${x}`]:"";return t.jsx(t.Fragment,{children:t.jsxs("div",{className:a["tooltip-wrap"],children:[t.jsx("div",{className:a.children,children:u}),t.jsx("div",{className:a.tooltip+" "+(l=="top-start"?a["placement-top-start"]:l=="top"?a["placement-top"]:l=="top-end"?a["placement-top-end"]:l=="right-start"?a["placement-right-start"]:l=="right"?a["placement-right"]:l=="right-end"?a["placement-right-end"]:l=="bottom-start"?a["placement-bottom-start"]:l=="bottom"?a["placement-bottom"]:l=="bottom-end"?a["placement-bottom-end"]:l=="left-start"?a["placement-left-start"]:l=="left"?a["placement-left"]:l=="left-end"?a["placement-left-end"]:"")+" "+(m=="rect"?a["radius-rect"]:m=="normal"?a["radius-normal"]:m=="round"?a["radius-round"]:"")+" "+(d=="large"?a["size-large"]:d=="medium"?a["size-medium"]:d=="small"?a["size-small"]:d=="extraSmall"?a["size-extraSmall"]:"")+" "+(e=="black"?a["color-black"]:e=="white"?a["color-white"]:"")+" "+j(s)+" "+(h||""),children:p})]})})},z=()=>{const p=c.useRef(),l=c.useRef(),s=c.useRef(),[e,m]=c.useState(!1),d=()=>{m(!e)},[u,h]=c.useState(!1),j=()=>{h(!u)},[x,f]=c.useState(!1),N=()=>{f(!x)},[B,y]=c.useState(!1),b=()=>{y(!B)},[v,g]=c.useState(!1),T=()=>{g(!v)};return c.useState(!1),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"layout-all",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h1",{children:"Tooltip"}),t.jsx("p",{className:"description",children:"Tooltip 컴포넌트는 호버시 나타나는 안내문입니다."})]}),t.jsx("div",{className:"layout-small",children:t.jsxs("div",{className:"layout-title",children:[t.jsx("h2",{ref:p,children:"Import"}),t.jsx("div",{className:"codeMirror",children:t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`import { Tooltip } from 'nds-ui/component';
// or
import Tooltip from 'nds-ui/component/Tooltip';`})}),t.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",t.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",t.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),t.jsx("div",{className:"layout-small",children:t.jsxs("div",{className:"layout-title",children:[t.jsx("h2",{ref:l,children:"Property"}),t.jsxs("p",{className:"description",children:["Tooltip 컴포넌트 안에는 다양한 속성들이 있습니다. ",t.jsx("br",{}),"content / placement / bg / color / radius / size 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),t.jsxs("div",{className:"layout-small",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h3",{children:"Content"}),t.jsx("p",{className:"description",children:"content 속성은 Tooltip의 내용을 정하는 속성입니다."})]}),t.jsx("div",{className:"layout-example",children:t.jsx(i,{content:"Tooltip",children:t.jsx(n,{variant:"contained",children:"Hover"})})}),t.jsxs("div",{className:"codeMirror",children:[t.jsx("div",{className:"btn-wrap",children:t.jsx(n,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:d,children:t.jsx("i",{className:"i-code w14 h14"})})}),e?t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Tooltip content='Tooltip'>
      <Button variant='contained'>Hover</Button>
    </Tooltip>
  )
}

export default Example;`}):t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Tooltip content='Tooltip'>
  <Button variant='contained'>Hover</Button>
</Tooltip>
</>`})]})]}),t.jsxs("div",{className:"layout-small",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h3",{children:"Placement"}),t.jsx("p",{className:"description",children:"placement 속성으로 Tooltip의 위치를 정할 수 있습니다."})]}),t.jsxs("div",{className:"layout-example",children:[t.jsx(i,{placement:"top",content:"Top",children:t.jsx(n,{className:"w50 h50",variant:"contained",children:"Top"})}),t.jsx(i,{placement:"bottom",content:"Bottom",children:t.jsx(n,{className:"w50 h50",variant:"contained",children:"Bottom"})}),t.jsx(i,{placement:"left",content:"Left",children:t.jsx(n,{className:"w50 h50",variant:"contained",children:"Left"})}),t.jsx(i,{placement:"right",content:"Right",children:t.jsx(n,{className:"w50 h50",variant:"contained",children:"Right"})})]}),t.jsxs("div",{className:"codeMirror",children:[t.jsx("div",{className:"btn-wrap",children:t.jsx(n,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:j,children:t.jsx("i",{className:"i-code w14 h14"})})}),u?t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip placement='top' content='Top'> 
        <Button className='w50 h50' variant='contained'>Top</Button> 
      </Tooltip>
      <Tooltip placement='bottom' content='Bottom'> 
        <Button className='w50 h50' variant='contained'>Bottom</Button> 
      </Tooltip>
      <Tooltip placement='left' content='Left'> 
        <Button className='w50 h50' variant='contained'>Left</Button> 
      </Tooltip>
      <Tooltip placement='right' content='Right'> 
        <Button className='w50 h50' variant='contained'>Right</Button> 
      </Tooltip>
    </div>
  )
}

export default Example;`}):t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Tooltip placement='top' content='Top'> 
  <Button className='w50 h50' variant='contained'>Top</Button> 
</Tooltip>
<Tooltip placement='bottom' content='Bottom'> 
  <Button className='w50 h50' variant='contained'>Bottom</Button> 
</Tooltip>
<Tooltip placement='left' content='Left'> 
  <Button className='w50 h50' variant='contained'>Left</Button> 
</Tooltip>
<Tooltip placement='right' content='Right'> 
  <Button className='w50 h50' variant='contained'>Right</Button> 
</Tooltip>
</>`})]})]}),t.jsxs("div",{className:"layout-small",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h3",{children:"Background"}),t.jsxs("p",{className:"description",children:["bg 속성으로 Tooltip의 배경색을 설정할 수 있습니다. ",t.jsx("br",{}),"색상은 Variable의 $grays 를 참고하세요."]})]}),t.jsxs("div",{className:"layout-example",children:[t.jsx(i,{bg:"black",content:"Black",children:t.jsx(n,{variant:"contained",children:"Black"})}),t.jsx(i,{bg:"grayc",content:"GrayC",children:t.jsx(n,{variant:"contained",children:"GrayC"})})]}),t.jsxs("div",{className:"codeMirror",children:[t.jsx("div",{className:"btn-wrap",children:t.jsx(n,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:N,children:t.jsx("i",{className:"i-code w14 h14"})})}),x?t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip bg='black' content='Black'> 
        <Button variant='contained'>Black</Button> 
      </Tooltip>
      <Tooltip bg='grayc' content='GrayC'> 
        <Button variant='contained'>GrayC</Button> 
      </Tooltip>
    </div>
  )
}

export default Example;`}):t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Tooltip bg='black' content='Black'> 
  <Button variant='contained'>Black</Button> 
</Tooltip>
<Tooltip bg='grayc' content='GrayC'> 
  <Button variant='contained'>GrayC</Button> 
</Tooltip>
</>`})]})]}),t.jsxs("div",{className:"layout-small",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h3",{children:"Color"}),t.jsxs("p",{className:"description",children:["color 속성으로 Tooltip의 글자색을 설정할 수 있습니다. ",t.jsx("br",{}),"색상은 black / white 2가지입니다."]})]}),t.jsxs("div",{className:"layout-example",children:[t.jsx(i,{color:"black",content:"Black",children:t.jsx(n,{variant:"contained",children:"Black"})}),t.jsx(i,{color:"white",content:"White",children:t.jsx(n,{variant:"contained",children:"White"})})]}),t.jsxs("div",{className:"codeMirror",children:[t.jsx("div",{className:"btn-wrap",children:t.jsx(n,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:b,children:t.jsx("i",{className:"i-code w14 h14"})})}),B?t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip color='black' content='Black'> 
        <Button variant='contained'>Black</Button> 
      </Tooltip>
      <Tooltip color='white' content='White'> 
        <Button variant='contained'>White</Button> 
      </Tooltip>
    </div>
  )
}

export default Example;`}):t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Tooltip color='black' content='Black'> 
  <Button variant='contained'>Black</Button> 
</Tooltip>
<Tooltip color='white' content='White'> 
  <Button variant='contained'>White</Button> 
</Tooltip>
</>`})]})]}),t.jsxs("div",{className:"layout-small",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h3",{children:"Radius"}),t.jsxs("p",{className:"description",children:["radius 속성으로 Tooltip의 굴곡을 설정할 수 있습니다. ",t.jsx("br",{}),"rect / normal / round 3가지 값이 있으며 기본값은 norml입니다."]})]}),t.jsxs("div",{className:"layout-example",children:[t.jsx(i,{radius:"rect",content:"rect",children:t.jsx(n,{variant:"contained",children:"rect"})}),t.jsx(i,{content:"normal",children:t.jsx(n,{variant:"contained",children:"normal"})}),t.jsx(i,{radius:"round",content:"round",children:t.jsx(n,{variant:"contained",children:"round"})})]}),t.jsxs("div",{className:"codeMirror",children:[t.jsx("div",{className:"btn-wrap",children:t.jsx(n,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:T,children:t.jsx("i",{className:"i-code w14 h14"})})}),v?t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip radius='rect' content='rect'> 
        <Button variant='contained'>rect</Button> 
      </Tooltip>
      <Tooltip content='normal'> 
        <Button variant='contained'>normal</Button> 
      </Tooltip>
      <Tooltip radius='round' content='round'> 
        <Button variant='contained'>round</Button> 
      </Tooltip>
    </div>
  )
}

export default Example;`}):t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Tooltip radius='rect' content='rect'> 
  <Button variant='contained'>rect</Button> 
</Tooltip>
<Tooltip content='normal'> 
  <Button variant='contained'>normal</Button> 
</Tooltip>
<Tooltip radius='round' content='round'> 
  <Button variant='contained'>round</Button> 
</Tooltip>
</>`})]})]}),t.jsxs("div",{className:"layout-small",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h3",{children:"Size"}),t.jsxs("p",{className:"description",children:["size 속성으로 Tooltip의 크기를 설정할 수 있습니다. ",t.jsx("br",{}),"large / medium / small / extraSmall 4가지 값이 있으며 기본값은 medium 입니다."]})]}),t.jsxs("div",{className:"layout-example",children:[t.jsx(i,{size:"large",content:"large",children:t.jsx(n,{variant:"contained",children:"large"})}),t.jsx(i,{content:"medium",children:t.jsx(n,{variant:"contained",children:"medium"})}),t.jsx(i,{size:"small",content:"small",children:t.jsx(n,{variant:"contained",children:"small"})}),t.jsx(i,{size:"extraSmall",content:"extraSmall",children:t.jsx(n,{variant:"contained",children:"extraSmall"})})]}),t.jsxs("div",{className:"codeMirror",children:[t.jsx("div",{className:"btn-wrap",children:t.jsx(n,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:T,children:t.jsx("i",{className:"i-code w14 h14"})})}),v?t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip size='large' content='large'> 
        <Button variant='contained'>large</Button> 
      </Tooltip>
      <Tooltip content='medium'> 
        <Button variant='contained'>medium</Button> 
      </Tooltip>
      <Tooltip size='small' content='small'> 
        <Button variant='contained'>small</Button> 
      </Tooltip>
      <Tooltip size='extraSmall' content='extraSmall'> 
        <Button variant='contained'>extraSmall</Button> 
      </Tooltip>
    </div>
  )
}

export default Example;`}):t.jsx(o,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Tooltip size='large' content='large'> 
  <Button variant='contained'>large</Button> 
</Tooltip>
<Tooltip content='medium'> 
  <Button variant='contained'>medium</Button> 
</Tooltip>
<Tooltip size='small' content='small'> 
  <Button variant='contained'>small</Button> 
</Tooltip>
<Tooltip size='extraSmall' content='extraSmall'> 
  <Button variant='contained'>extraSmall</Button> 
</Tooltip>
</>`})]})]}),t.jsxs("div",{className:"layout-small",children:[t.jsxs("div",{className:"layout-title",children:[t.jsx("h2",{ref:s,children:" API "}),t.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),t.jsx(k,{classWrap:"table-props",colGroup:t.jsxs(t.Fragment,{children:[t.jsx("col",{className:"table-props-col1"}),t.jsx("col",{className:"table-props-col2"})]}),tHead:t.jsx(t.Fragment,{children:t.jsxs("tr",{children:[t.jsx("th",{children:"props"}),t.jsx("th",{children:t.jsx("div",{className:"table-props-value",children:"value"})}),t.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:t.jsxs(t.Fragment,{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"content"}),t.jsx("td",{children:"string"}),t.jsx("td",{children:"내용을 설정합니다. 문자열(string) 타입입니다."})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"placement"}),t.jsxs("td",{children:["'top-start' ",t.jsx("br",{}),"'top' ",t.jsx("br",{}),"'top-end' ",t.jsx("br",{}),"'right-start' ",t.jsx("br",{}),"'right' ",t.jsx("br",{}),"'right-end' ",t.jsx("br",{}),"'bottom-start' ",t.jsx("br",{}),t.jsx("p",{className:"b",children:"'bottom'"}),"'bottom-end' ",t.jsx("br",{}),"'left-start' ",t.jsx("br",{}),"'left' ",t.jsx("br",{}),"'left-end'"]}),t.jsx("td",{children:"위치를 설정합니다."})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"bg"}),t.jsxs("td",{children:[t.jsx("p",{className:"b",children:"'grayc'"}),"$grays"]}),t.jsxs("td",{children:["배경색을 설정합니다.",t.jsx("br",{}),"Variable의 $grays 값을 넣을 수 있습니다.  ",t.jsx("br",{}),"기본값은 grayc 입니다"]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"color"}),t.jsxs("td",{children:["'white' ",t.jsx("br",{}),"'black'"]}),t.jsxs("td",{children:["글자색을 설정합니다.",t.jsx("br",{}),"'white' / 'black' 2가지 값이 있습니다."]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"radius"}),t.jsxs("td",{children:["'rect' ",t.jsx("br",{}),t.jsx("p",{className:"b",children:"'normal'"}),"'round'"]}),t.jsx("td",{children:"굴곡을 설정하는 값입니다."})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"size"}),t.jsxs("td",{children:["'large' ",t.jsx("br",{}),t.jsx("p",{className:"b",children:"'medium'"}),"'small' ",t.jsx("br",{}),"'extraSmall'"]}),t.jsx("td",{children:"크기를 설정하는 값입니다."})]})]})})]}),t.jsxs("div",{className:"layout-scroll",children:[t.jsx("p",{children:"Content"}),t.jsx("a",{onClick:()=>{p.current.scrollIntoView()},children:" Import"}),t.jsx("a",{onClick:()=>{l.current.scrollIntoView()},children:" Property"}),t.jsx("a",{onClick:()=>{s.current.scrollIntoView()},children:" API"})]})]})})};export{z as default};
