import{r as a,j as e,B as t}from"./index-ab2469fa.js";import{R as s,j as l}from"./index-8cad6eb6.js";import{T as P}from"./Table-cc32831e.js";import{T as r}from"./TextField-7cb07d74.js";const H=()=>{const d=a.useRef(),i=a.useRef(),c=a.useRef(),[o,f]=a.useState(!1),N=()=>{f(!o)},[n,T]=a.useState(!1),C=()=>{T(!n)},[x,y]=a.useState(!1),b=()=>{y(!x)},[h,k]=a.useState(!1),F=()=>{k(!h)},[m,g]=a.useState(!1),w=()=>{g(!m)},[u,S]=a.useState(!1),V=()=>{S(!u)},[j,R]=a.useState(!1),z=()=>{R(!j)},[p,E]=a.useState(!1),B=()=>{E(!p)},[v,A]=a.useState(!1),M=()=>{A(!v)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"TextField"}),e.jsx("p",{className:"description",children:"TextField 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:d,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import { TextField } from 'nds-ui/component';
// or
import TextField from 'nds-ui/component/TextField';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:"Property"}),e.jsxs("p",{className:"description",children:["TextField 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"size / radius / disabled / readOnly / placeholder / defaultValue / helperText / error 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Basic"}),e.jsxs("p",{className:"description",children:["기본적인 TextFieald 형태입니다. ",e.jsx("br",{}),"박스 내부에 글을 입력할 수 있습니다."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:N,children:e.jsx("i",{className:"i-code w14 h14"})})}),o?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsxs("p",{className:"description",children:["size 속성으로 박스의 크기를 설정할 수 있습니다. ",e.jsx("br",{}),"기본 값은 medium 입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{placeholder:"large",size:"large"}),e.jsx(r,{placeholder:"medium"}),e.jsx(r,{placeholder:"small",size:"small"}),e.jsx(r,{placeholder:"extraSmall",size:"extraSmall"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:C,children:e.jsx("i",{className:"i-code w14 h14"})})}),n?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <TextField placeholder='large' size='large'/>
      <TextField placeholder='medium' />
      <TextField placeholder='small' size='large'/>
      <TextField placeholder='extraSmall' size='large'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField placeholder='large' size='large'/>
<TextField placeholder='medium' />
<TextField placeholder='small' size='large'/>
<TextField placeholder='extraSmall' size='large'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Radius"}),e.jsxs("p",{className:"description",children:["radius 속성으로 박스의 굴곡을 설정할 수 있습니다. ",e.jsx("br",{}),"기본 값은 normal 입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{placeholder:"rect",radius:"rect"}),e.jsx(r,{placeholder:"normal"}),e.jsx(r,{placeholder:"round",radius:"round"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:b,children:e.jsx("i",{className:"i-code w14 h14"})})}),x?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <TextField placeholder='rect' radius='rect'/>
      <TextField placeholder='normal' />
      <TextField placeholder='round' radius='round'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField placeholder='rect' radius='rect'/>
<TextField placeholder='normal' />
<TextField placeholder='round' radius='round'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"DefaultValue"}),e.jsx("p",{className:"description",children:"defaultValue 속성으로 박스를 기본값을 설정할 수 있습니다."})]}),e.jsx("div",{className:"layout-example",children:e.jsx(r,{defaultValue:"기본값입니다."})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:F,children:e.jsx("i",{className:"i-code w14 h14"})})}),h?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField defaultValue='기본값입니다.'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField defaultValue='기본값입니다.'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Placeholder"}),e.jsx("p",{className:"description",children:"placeholder 속성으로 입력시 자동삭제되는 값을 설정할 수 있습니다."})]}),e.jsx("div",{className:"layout-example",children:e.jsx(r,{placeholder:"아이디를 입력하세요"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:w,children:e.jsx("i",{className:"i-code w14 h14"})})}),m?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField placeholder='아이디를 입력하세요'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField placeholder='아이디를 입력하세요'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"HelperText"}),e.jsx("p",{className:"description",children:"helperText 속성으로 하단의 도움말을 넣을 수 있습니다."})]}),e.jsx("div",{className:"layout-example",children:e.jsx(r,{placeholder:"아이디를 입력하세요",helperText:"도움말"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:V,children:e.jsx("i",{className:"i-code w14 h14"})})}),u?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField placeholder='아이디를 입력하세요' helperText='도움말'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField placeholder='아이디를 입력하세요' helperText='도움말'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Error"}),e.jsx("p",{className:"description",children:"error 속성으로 경고표시를 할 수 있습니다."})]}),e.jsx("div",{className:"layout-example",children:e.jsx(r,{error:!0,defaultValue:"error!@#",helperText:"특수문자 제외"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:z,children:e.jsx("i",{className:"i-code w14 h14"})})}),j?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField error defaultValue='error!@#' helperText='특수문자 제외'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField error defaultValue='error!@#' helperText='특수문자 제외'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"ReadOnly"}),e.jsx("p",{className:"description",children:"readOnly 속성으로 읽기전용 설정 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{defaultValue:"기본값"}),e.jsx(r,{readOnly:!0,defaultValue:"읽기전용"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:B,children:e.jsx("i",{className:"i-code w14 h14"})})}),p?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <TextField defaultValue='기본값'/>
      <TextField readOnly defaultValue='읽기전용'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField defaultValue='기본값'/>
<TextField readOnly defaultValue='읽기전용'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Disabled"}),e.jsx("p",{className:"description",children:"disabled 속성으로 비활성화 설정 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{defaultValue:"기본값"}),e.jsx(r,{disabled:!0,defaultValue:"비활성화"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:M,children:e.jsx("i",{className:"i-code w14 h14"})})}),v?e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <TextField defaultValue='기본값'/>
      <TextField disabled defaultValue='비활성화'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<TextField defaultValue='기본값'/>
<TextField disabled defaultValue='비활성화'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:c,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(P,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:["'large' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'medium'"}),"'small' ",e.jsx("br",{}),"'extraSmall'"]}),e.jsx("td",{children:"크기를 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"radius"}),e.jsxs("td",{children:["'rect' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'normal'"}),"'round'"]}),e.jsx("td",{children:"굴곡을 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultValue"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"기본 값을 설정해주는 속성으로 문자열(string)을 넣습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"placeholder"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"입력시 사라지는 값을 설정하는 속성으로 문자열(string)을 넣습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"helperText"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"도움말 내용을 설정하는 속성으로 문자열(string)을 넣습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"error"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["에러 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"readOnly"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["읽기전용 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["비활성화 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onClick"}),e.jsx("td",{children:"func"}),e.jsx("td",{children:"JavaScript와 사용법이 같습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onFocus"}),e.jsx("td",{children:"func"}),e.jsx("td",{children:"JavaScript와 사용법이 같습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onKeyDown"}),e.jsx("td",{children:"func"}),e.jsx("td",{children:"JavaScript와 사용법이 같습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"className"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"TextField의 클래스를 설정하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"classHelper"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"helperText의 클래스를 설정하는 속성입니다."})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" API"})]})]})})};export{H as default};
