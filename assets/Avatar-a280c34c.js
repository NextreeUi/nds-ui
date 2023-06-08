import{r as n,j as s,B as l}from"./index-4cfbf475.js";import{R as a}from"./index-4a5422bd.js";import{j as r}from"./index-9acf6573.js";import{A as e}from"./Avatar-0db76e93.js";import{T as y}from"./Table-d1ea99e4.js";const R=()=>{const d=n.useRef(),i=n.useRef(),m=n.useRef(),[c,u]=n.useState(!1),h=()=>{u(!c)},[o,v]=n.useState(!1),p=()=>{v(!o)};n.useState(!1);const[x,b]=n.useState(!1),N=()=>{b(!x)},[t,A]=n.useState(!1),j=()=>{A(!t)};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"layout-all",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h1",{children:"Avatar"}),s.jsx("p",{className:"description",children:"Avatar 컴포넌트입니다."})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:d,children:"Import"}),s.jsx("div",{className:"codeMirror",children:s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import { Avatar } from 'nds-ui/component';
// or
import Avatar from 'nds-ui/component/Avatar';`})}),s.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",s.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",s.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:i,children:"Property"}),s.jsxs("p",{className:"description",children:["Avatar 컴포넌트 안에는 다양한 속성들이 있습니다. ",s.jsx("br",{}),"name / size / color / radius / number  등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Name"}),s.jsxs("p",{className:"description",children:["기본적인 Avatar 형태입니다. ",s.jsx("br",{}),"name 속성에 이름을 표기하면, 맨 앞글자를 대문자로 표기해줍니다. ",s.jsx("br",{}),"색상 설정을 안할 경우 Variable의 $avatar1~10까지 10가지 색상중 랜덤으로 선택됩니다."]})]}),s.jsx("div",{className:"layout-example",children:s.jsx(e,{name:"nds"})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:h,children:s.jsx("i",{className:"i-code w14 h14"})})}),c?s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds'/>
    </div>
  )
}

export default Example;`}):s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds'/>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Size"}),s.jsx("p",{className:"description",children:"size 속성으로 크기를 설정할 수 있습니다."})]}),s.jsxs("div",{className:"layout-example",children:[s.jsx(e,{name:"nds",size:"large"}),s.jsx(e,{name:"nds"}),s.jsx(e,{name:"nds",size:"small"}),s.jsx(e,{name:"nds",size:"extraSmall"})]}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:p,children:s.jsx("i",{className:"i-code w14 h14"})})}),o?s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds' size='large'/>
<Avatar name='nds' />
<Avatar name='nds' size='small'/>
<Avatar name='nds' size='extraSmall'/>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Radius"}),s.jsx("p",{className:"description",children:"radius 속성으로 굴곡을 설정할 수 있습니다."})]}),s.jsxs("div",{className:"layout-example",children:[s.jsx(e,{name:"nds",radius:"rect"}),s.jsx(e,{name:"nds",radius:"normal"}),s.jsx(e,{name:"nds"})]}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:N,children:s.jsx("i",{className:"i-code w14 h14"})})}),x?s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds' radius='rect'/>
<Avatar name='nds' radius='normal'/>
<Avatar name='nds' />
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Number"}),s.jsx("p",{className:"description",children:"number 속성으로 랜덤 색상을 고정으로 설정할 수 있습니다."})]}),s.jsxs("div",{className:"layout-example",children:[s.jsx(e,{name:"nds",number:1}),s.jsx(e,{name:"nds",number:2}),s.jsx(e,{name:"nds",number:3}),s.jsx(e,{name:"nds",number:4}),s.jsx(e,{name:"nds",number:5}),s.jsx(e,{name:"nds",number:6}),s.jsx(e,{name:"nds",number:7}),s.jsx(e,{name:"nds",number:8}),s.jsx(e,{name:"nds",number:9}),s.jsx(e,{name:"nds",number:10})]}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:j,children:s.jsx("i",{className:"i-code w14 h14"})})}),t?s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
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
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Color"}),s.jsx("p",{className:"description",children:"color 속성으로 아바타 색상 10가지 외의 색상으로 설정할 수 있습니다."})]}),s.jsxs("div",{className:"layout-example",children:[s.jsx(e,{name:"nds",color:"primary"}),s.jsx(e,{name:"nds",color:"secondary"}),s.jsx(e,{name:"nds",color:"tertiary"}),s.jsx(e,{name:"nds",color:"primary_light"}),s.jsx(e,{name:"nds",color:"secondary_light"}),s.jsx(e,{name:"nds",color:"tertiary_light"})]}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(l,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:j,children:s.jsx("i",{className:"i-code w14 h14"})})}),t?s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):s.jsx(a,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Avatar name='nds' color='primary'/>
<Avatar name='nds' color='secondary'/>
<Avatar name='nds' color='tertiary'/>
<Avatar name='nds' color='primary_light'/>
<Avatar name='nds' color='secondary_light'/>
<Avatar name='nds' color='tertiary_light'/>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:m,children:" API "}),s.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),s.jsx(y,{classWrap:"table-props",colGroup:s.jsxs(s.Fragment,{children:[s.jsx("col",{className:"table-props-col1"}),s.jsx("col",{className:"table-props-col2"})]}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"props"}),s.jsx("th",{children:s.jsx("div",{className:"table-props-value",children:"value"})}),s.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"name"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["닉네임의 대표문자를 설정하는 속성입니다. ",s.jsx("br",{}),"설장한 문자의 맨 앞글자가 대문자로 출력됩니다."]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"size"}),s.jsxs("td",{children:["'large' ",s.jsx("br",{}),s.jsx("p",{className:"b",children:"'medium'"}),"'small' ",s.jsx("br",{}),"'extraSmall'"]}),s.jsx("td",{children:"크기를 설정하는 속성입니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"radius"}),s.jsxs("td",{children:["'rect' ",s.jsx("br",{}),"'normal' ",s.jsx("br",{}),s.jsx("p",{className:"b",children:"'round'"})]}),s.jsx("td",{children:"굴곡을 설정하는 속성입니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"number"}),s.jsxs("td",{children:["1~10 ",s.jsx("br",{}),"number"]}),s.jsxs("td",{children:["배경색을 아바타 색상 1~10가지 중에서 1가지를 설정하는 속성입니다. ",s.jsx("br",{}),"아바타 색상 수정을 원할경우 10가지는 Variable의 변수 $avatar1~10을 변경하시면 됩니다."]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"color"}),s.jsx("td",{children:"$colors"}),s.jsxs("td",{children:["배경색을 설정하는 속성입니다. ",s.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]})]})})]}),s.jsxs("div",{className:"layout-scroll",children:[s.jsx("p",{children:"Content"}),s.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Import"}),s.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Property"}),s.jsx("a",{onClick:()=>{m.current.scrollIntoView()},children:" API"})]})]})})};export{R as default};
