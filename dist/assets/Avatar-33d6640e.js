import{r as n,j as e,B as l}from"./index-ab2469fa.js";import{R as a,j as r}from"./index-8cad6eb6.js";import{A as s}from"./Avatar-44d19210.js";import{T as y}from"./Table-cc32831e.js";const w=()=>{const i=n.useRef(),d=n.useRef(),m=n.useRef(),[c,u]=n.useState(!1),h=()=>{u(!c)},[o,v]=n.useState(!1),p=()=>{v(!o)};n.useState(!1);const[x,b]=n.useState(!1),N=()=>{b(!x)},[t,A]=n.useState(!1),j=()=>{A(!t)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Avatar"}),e.jsx("p",{className:"description",children:"Avatar 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import { Avatar } from 'nds-ui/component';
// or
import Avatar from 'nds-ui/component/Avatar';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:d,children:"Property"}),e.jsxs("p",{className:"description",children:["Avatar 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"name / size / color / radius / number  등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Name"}),e.jsxs("p",{className:"description",children:["기본적인 Avatar 형태입니다. ",e.jsx("br",{}),"name 속성에 이름을 표기하면, 맨 앞글자를 대문자로 표기해줍니다. ",e.jsx("br",{}),"색상 설정을 안할 경우 Variable의 $avatar1~10까지 10가지 색상중 랜덤으로 선택됩니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsx(s,{name:"nds"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:h,children:e.jsx("i",{className:"i-code w14 h14"})})}),c?e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds'/>
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsx("p",{className:"description",children:"size 속성으로 크기를 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(s,{name:"nds",size:"large"}),e.jsx(s,{name:"nds"}),e.jsx(s,{name:"nds",size:"small"}),e.jsx(s,{name:"nds",size:"extraSmall"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:p,children:e.jsx("i",{className:"i-code w14 h14"})})}),o?e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds' size='large'/>
      <Avatar name='nds' />
      <Avatar name='nds' size='small'/>
      <Avatar name='nds' size='extraSmall'/>
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds' size='large'/>
<Avatar name='nds' />
<Avatar name='nds' size='small'/>
<Avatar name='nds' size='extraSmall'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Radius"}),e.jsx("p",{className:"description",children:"radius 속성으로 굴곡을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(s,{name:"nds",radius:"rect"}),e.jsx(s,{name:"nds",radius:"normal"}),e.jsx(s,{name:"nds"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:N,children:e.jsx("i",{className:"i-code w14 h14"})})}),x?e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds' radius='rect'/>
      <Avatar name='nds' radius='normal'/>
      <Avatar name='nds' />
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds' radius='rect'/>
<Avatar name='nds' radius='normal'/>
<Avatar name='nds' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Number"}),e.jsx("p",{className:"description",children:"number 속성으로 랜덤 색상을 고정으로 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(s,{name:"nds",number:1}),e.jsx(s,{name:"nds",number:2}),e.jsx(s,{name:"nds",number:3}),e.jsx(s,{name:"nds",number:4}),e.jsx(s,{name:"nds",number:5}),e.jsx(s,{name:"nds",number:6}),e.jsx(s,{name:"nds",number:7}),e.jsx(s,{name:"nds",number:8}),e.jsx(s,{name:"nds",number:9}),e.jsx(s,{name:"nds",number:10})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:j,children:e.jsx("i",{className:"i-code w14 h14"})})}),t?e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds' number={1}/>
      <Avatar name='nds' number={2}/>
      <Avatar name='nds' number={3}/>
      <Avatar name='nds' number={4}/>
      <Avatar name='nds' number={5}/>
      <Avatar name='nds' number={6}/>
      <Avatar name='nds' number={7}/>
      <Avatar name='nds' number={8}/>
      <Avatar name='nds' number={9}/>
      <Avatar name='nds' number={10}/>
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds' number={1}/>
<Avatar name='nds' number={2}/>
<Avatar name='nds' number={3}/>
<Avatar name='nds' number={4}/>
<Avatar name='nds' number={5}/>
<Avatar name='nds' number={6}/>
<Avatar name='nds' number={7}/>
<Avatar name='nds' number={8}/>
<Avatar name='nds' number={9}/>
<Avatar name='nds' number={10}/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Color"}),e.jsx("p",{className:"description",children:"color 속성으로 아바타 색상 10가지 외의 색상으로 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(s,{name:"nds",color:"primary"}),e.jsx(s,{name:"nds",color:"secondary"}),e.jsx(s,{name:"nds",color:"tertiary"}),e.jsx(s,{name:"nds",color:"primary_light"}),e.jsx(s,{name:"nds",color:"secondary_light"}),e.jsx(s,{name:"nds",color:"tertiary_light"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:j,children:e.jsx("i",{className:"i-code w14 h14"})})}),t?e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds' color='primary'/>
      <Avatar name='nds' color='secondary'/>
      <Avatar name='nds' color='tertiary'/>
      <Avatar name='nds' color='primary_light'/>
      <Avatar name='nds' color='secondary_light'/>
      <Avatar name='nds' color='tertiary_light'/>
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds' color='primary'/>
<Avatar name='nds' color='secondary'/>
<Avatar name='nds' color='tertiary'/>
<Avatar name='nds' color='primary_light'/>
<Avatar name='nds' color='secondary_light'/>
<Avatar name='nds' color='tertiary_light'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:m,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(y,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"name"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["닉네임의 대표문자를 설정하는 속성입니다. ",e.jsx("br",{}),"설장한 문자의 맨 앞글자가 대문자로 출력됩니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:["'large' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'medium'"}),"'small' ",e.jsx("br",{}),"'extraSmall'"]}),e.jsx("td",{children:"크기를 설정하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"radius"}),e.jsxs("td",{children:["'rect' ",e.jsx("br",{}),"'normal' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'round'"})]}),e.jsx("td",{children:"굴곡을 설정하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"number"}),e.jsxs("td",{children:["1~10 ",e.jsx("br",{}),"number"]}),e.jsxs("td",{children:["배경색을 아바타 색상 1~10가지 중에서 1가지를 설정하는 속성입니다. ",e.jsx("br",{}),"아바타 색상 수정을 원할경우 10가지는 Variable의 변수 $avatar1~10을 변경하시면 됩니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsx("td",{children:"$colors"}),e.jsxs("td",{children:["배경색을 설정하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{m.current.scrollIntoView()},children:" API"})]})]})})};export{w as default};
