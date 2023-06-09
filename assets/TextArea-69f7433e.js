import{r as l,j as e,B as t}from"./index-39fb6c20.js";import{R as s}from"./index-55296878.js";import{j as a}from"./index-b8dc7194.js";import{T as B}from"./Table-e2701c69.js";import{T as r}from"./TextArea-1fe3a8bc.js";const q=()=>{const d=l.useRef(),i=l.useRef(),c=l.useRef(),[n,v]=l.useState(!1),f=()=>{v(!n)},[o,N]=l.useState(!1),C=()=>{N(!o)},[x,y]=l.useState(!1),T=()=>{y(!x)},[m,A]=l.useState(!1),b=()=>{A(!m)},[u,k]=l.useState(!1),w=()=>{k(!u)},[j,R]=l.useState(!1),g=()=>{R(!j)},[h,V]=l.useState(!1),S=()=>{V(!h)},[p,E]=l.useState(!1),M=()=>{E(!p)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"TextArea"}),e.jsx("p",{className:"description",children:"TextArea 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:d,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import { TextArea } from 'nds-ui/component';
// or
import TextArea from 'nds-ui/component/TextArea';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:"Property"}),e.jsxs("p",{className:"description",children:["TextArea 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"rect / defaultValue / rows / maxLength / readOnly / disabled 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Basic"}),e.jsxs("p",{className:"description",children:["기본적인 TextArea 형태입니다. ",e.jsx("br",{}),"박스 내부에 글을 입력할 수 있습니다. ",e.jsx("br",{}),"TextField와 다른 점은 여러 줄의 글을 쓸 수 있습니다."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:f,children:e.jsx("i",{className:"i-code w14 h14"})})}),n?e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextArea/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`<>
<TextArea/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Rect"}),e.jsx("p",{className:"description",children:"rect 속성으로 박스의 굴곡을 각지게 설정할 수 있습니다."})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{rect:!0})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:C,children:e.jsx("i",{className:"i-code w14 h14"})})}),o?e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextArea rect/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`<>
<TextArea rect/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"DefaultValue"}),e.jsx("p",{className:"description",children:"defaultValue 속성으로 박스를 기본값을 설정할 수 있습니다."})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{defaultValue:"기본값입니다."})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:T,children:e.jsx("i",{className:"i-code w14 h14"})})}),x?e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextArea defaultValue='기본값입니다.'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`<>
<TextArea defaultValue='기본값입니다.'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Placeholder"}),e.jsx("p",{className:"description",children:"placeholder 속성으로 입력시 자동삭제되는 값을 설정할 수 있습니다."})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{placeholder:"아이디를 입력하세요"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:b,children:e.jsx("i",{className:"i-code w14 h14"})})}),m?e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextArea placeholder='아이디를 입력하세요'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`<>
<TextArea placeholder='아이디를 입력하세요'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Rows"}),e.jsx("p",{className:"description",children:"rows 속성으로 박스의 높이를 라인 갯수만큼 설정할 수 있습니다."})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{rows:10})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:w,children:e.jsx("i",{className:"i-code w14 h14"})})}),u?e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextArea rows={10}/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`<>
<TextArea rows={10}/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"MaxLength"}),e.jsx("p",{className:"description",children:"maxLength 속성으로 최대 글자 수를 설정할 수 있습니다."})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{maxLength:10})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:g,children:e.jsx("i",{className:"i-code w14 h14"})})}),j?e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextArea maxLength={10}/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`<>
<TextArea maxLength={10}/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"ReadOnly"}),e.jsx("p",{className:"description",children:"readOnly 속성으로 읽기전용으로 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsx(r,{defaultValue:"기본값입니다."}),e.jsx(r,{readOnly:!0,defaultValue:"읽기전용입니다."})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:S,children:e.jsx("i",{className:"i-code w14 h14"})})}),h?e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextArea defaultValue='기본값입니다.'/>
      <TextArea readOnly defaultValue='읽기전용입니다.'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`<>
<TextArea defaultValue='기본값입니다.'/>
<TextArea readOnly defaultValue='읽기전용입니다.'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Disabled"}),e.jsx("p",{className:"description",children:"disabled 속성으로 비활성화 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsx(r,{defaultValue:"기본값입니다."}),e.jsx(r,{disabled:!0,defaultValue:"비활성화입니다."})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(t,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:M,children:e.jsx("i",{className:"i-code w14 h14"})})}),p?e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextArea defaultValue='기본값입니다.'/>
      <TextArea disabled defaultValue='비활성화입니다.'/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[a({jsx:!0})],value:`<>
<TextArea defaultValue='기본값입니다.'/>
<TextArea disabled defaultValue='비활성화입니다.'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:c,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(B,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"rect"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["굴곡을 설정하는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultValue"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"기본 값을 설정해주는 속성으로 문자열(string)을 넣습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"placeholder"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"입력시 사라지는 값을 설정하는 속성으로 문자열(string)을 넣습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"rows"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"박스의 높이를 라인 갯수에 따라 설정합니다. 숫자(number) 타입입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxLength"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"최대 글자수를 설정합니다. 숫자(number) 타입입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"readOnly"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["읽기전용 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["비활성화 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onChange"}),e.jsx("td",{children:"func"}),e.jsx("td",{children:"JavaScript와 사용법이 같습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onClick"}),e.jsx("td",{children:"func"}),e.jsx("td",{children:"JavaScript와 사용법이 같습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onFocus"}),e.jsx("td",{children:"func"}),e.jsx("td",{children:"JavaScript와 사용법이 같습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onKeyDown"}),e.jsx("td",{children:"func"}),e.jsx("td",{children:"JavaScript와 사용법이 같습니다."})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" API"})]})]})})};export{q as default};
