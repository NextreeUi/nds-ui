import{r,j as s,s as l,B as x}from"./index-a44d468f.js";import{R as e,j as c}from"./index-8b9547c3.js";import{T as w}from"./Table-402555d6.js";const i=({wrap:m,title:n,icon:o,iconLocation:t="right",iconRotate:j,children:h,id:p,className:a})=>{const[d,u]=r.useState(!1),v=()=>{u(!d)};return s.jsx(s.Fragment,{children:m?s.jsx("div",{className:l["accordion-wrap"]+" "+(a||""),children:h}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:l["accordion-summary"]+" "+(t=="left"?l["icon-left"]:"")+" "+(a||""),id:p,onClick:v,children:[t=="right"?n:s.jsx(s.Fragment,{}),s.jsx("div",{className:d?l[`${j||o||"deg180"}`]:"",children:o||s.jsx("i",{className:l.arrow})}),t=="left"?n:s.jsx(s.Fragment,{})]}),s.jsx("div",{className:l["accordion-detail"]+" "+(d?"":l.close),children:h})]})})},k=()=>{const m=r.useRef(),n=r.useRef(),o=r.useRef(),[t,j]=r.useState(!1),h=()=>{j(!t)},[p,a]=r.useState(!1),d=()=>{a(!p)},[u,v]=r.useState(!1),A=()=>{v(!u)},[N,f]=r.useState(!1),y=()=>{f(!N)};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"layout-all",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h1",{children:"Accordion"}),s.jsx("p",{className:"description",children:"Accordion은 클릭시 확장되는 컴포넌트입니다."})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:m,children:"Import"}),s.jsx("div",{className:"codeMirror",children:s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`import { Accordion } from 'nds-ui/component';
// or
import Accordion from 'nds-ui/component/Accordion';`})}),s.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",s.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",s.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:n,children:"Property"}),s.jsxs("p",{className:"description",children:["Accordion 컴포넌트는 다양한 속성이 있습니다. ",s.jsx("br",{}),"wrap / title / icon / iconLocation / iconRotate 등이 있습니다."]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Basic Accordion"}),s.jsxs("p",{className:"description",children:["기본적인 Accordion 형태입니다. ",s.jsx("br",{}),"가장 부모 태그에 wrap 속성을 단 Accorion 컴포넌트로 감싸줍니다. ",s.jsx("br",{}),"자식 Accordion 속성에 title을 달아줍니다. ",s.jsx("br",{}),"확장된 내용은 자식 Accordion 안에 넣어줍니다."]})]}),s.jsx("div",{className:"layout-example",children:s.jsx(i,{wrap:!0,children:s.jsx(i,{title:"아코디언",children:s.jsx("div",{className:"p20",children:" 아코디언 내용입니다."})})})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:h,children:s.jsx("i",{className:"i-code w14 h14"})})}),t?s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`import * as React from 'react';
import { Accordion } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Accordion wrap>
      <Accordion title='아코디언'>
        <div className='p20'> 아코디언 내용입니다.</div>
      </Accordion>
    </Accordion>
  )
}

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`<>
<Accordion wrap>
  <Accordion title='아코디언'>
    <div className='p20'> 아코디언 내용입니다.</div>
  </Accordion>
</Accordion>
</>`})]})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"wrap"}),s.jsx("p",{className:"description",children:"wrap 속성은 부모 Accordion 컴포넌트에 사용합니다."})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"title"}),s.jsxs("p",{className:"description",children:["title 속성은 자식 Accordion 컴포넌트에 사용합니다. ",s.jsx("br",{}),"확장하기 이전의 내용을 설정할 수 있습니다."]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Icon"}),s.jsxs("p",{className:"description",children:["icon 속성을 이용하여, 확장 아이콘을 커스텀할 수 있습니다. ",s.jsx("br",{}),"속성 값으로 원하는 이미지나 문자를 넣을 수 있습니다."]})]}),s.jsx("div",{className:"layout-example",children:s.jsx(i,{wrap:!0,children:s.jsx(i,{title:"아이콘이 변경되었습니다.",icon:s.jsx(x,{size:"small",variant:"outlined",children:"Custom"}),children:s.jsx("div",{className:"p20",children:" 아코디언 내용입니다."})})})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:d,children:s.jsx("i",{className:"i-code w14 h14"})})}),p?s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`import * as React from 'react';
import { Accordion, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Accordion wrap>
      <Accordion title='아코디언' icon={<Button size='small' variant='outlined'>Custom</Button>}>
        <div className='p20'> 아코디언 내용입니다.</div>
      </Accordion>
    </Accordion>
  )
}

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`<>
<Accordion wrap>
  <Accordion title='아코디언' icon={<Button size='small' variant='outlined'>Custom</Button>}>
    <div className='p20'> 아코디언 내용입니다.</div>
  </Accordion>
</Accordion>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Icon Location"}),s.jsx("p",{className:"description",children:"iconLocation 속성을 이용하여, 확장 아이콘 위치를 설정할 수 있습니다."})]}),s.jsx("div",{className:"layout-example",children:s.jsx(i,{wrap:!0,children:s.jsx(i,{title:"아이콘이 왼쪽에 있습니다.",iconLocation:"left",children:s.jsx("div",{className:"p20",children:" 아코디언 내용입니다."})})})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:A,children:s.jsx("i",{className:"i-code w14 h14"})})}),u?s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`import * as React from 'react';
import { Accordion, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Accordion wrap>
      <Accordion title='아코디언' iconLocation='left'>
        <div className='p20'> 아코디언 내용입니다.</div>
      </Accordion>
    </Accordion>
  )
}

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`<>
<Accordion wrap>
  <Accordion title='아코디언' iconLocation='left'>
    <div className='p20'> 아코디언 내용입니다.</div>
  </Accordion>
</Accordion>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Icon Rotate"}),s.jsxs("p",{className:"description",children:["iconRotate 속성을 이용하여, 확장 아이콘 회전을 설정할 수 있습니다. ",s.jsx("br",{}),"속성 값은 deg90 / deg180 / deg 270 이 있습니다."]})]}),s.jsx("div",{className:"layout-example",children:s.jsx(i,{wrap:!0,children:s.jsx(i,{title:"아이콘이 90도 회전합니다.",iconRotate:"deg90",children:s.jsx("div",{className:"p20",children:" 아코디언 내용입니다."})})})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:y,children:s.jsx("i",{className:"i-code w14 h14"})})}),N?s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`import * as React from 'react';
import { Accordion, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Accordion wrap>
      <Accordion title='아코디언' iconRotate='deg90'>
        <div className='p20'> 아코디언 내용입니다.</div>
      </Accordion>
    </Accordion>
  )
}

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[c({jsx:!0})],value:`<>
<Accordion wrap>
  <Accordion title='아코디언' iconRotate='deg90'>
    <div className='p20'> 아코디언 내용입니다.</div>
  </Accordion>
</Accordion>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:o,children:" API "}),s.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),s.jsx(w,{classWrap:"table-props",colGroup:s.jsxs(s.Fragment,{children:[s.jsx("col",{className:"table-props-col1"}),s.jsx("col",{className:"table-props-col2"})]}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"props"}),s.jsx("th",{children:s.jsx("div",{className:"table-props-value",children:"value"})}),s.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"wrap"}),s.jsx("td",{children:"boolean"}),s.jsxs("td",{children:["Accordion 부모 컴포넌트에 넣는 속성으로 불리언(Boolean) 타입입니다. ",s.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"title"}),s.jsxs("td",{children:["string ",s.jsx("br",{}),"element"]}),s.jsx("td",{children:"Accordion 자식 컴포넌트에 넣는 속성으로 문자형(string) 타입이 들어가거나, html 태그를 넣어도 됩니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"icon"}),s.jsx("td",{children:"element"}),s.jsx("td",{children:"확장 아이콘을 변경하는 속성으로 html 태그를 넣습니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"iconLocation"}),s.jsxs("td",{children:["'left'",s.jsx("p",{className:"b",children:"'right'"})]}),s.jsx("td",{children:"확장 아이콘을 위치를 설정하는 속성입니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"iconRotate"}),s.jsxs("td",{children:["'deg90'",s.jsx("p",{className:"b",children:"'deg180'"}),"'deg270'"]}),s.jsx("td",{children:"확장 아이콘을 클릭시 회전각도를 설정하는 속성입니다."})]})]})})]}),s.jsxs("div",{className:"layout-scroll",children:[s.jsx("p",{children:"Content"}),s.jsx("a",{onClick:()=>{m.current.scrollIntoView()},children:" Import"}),s.jsx("a",{onClick:()=>{n.current.scrollIntoView()},children:" Property"}),s.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" API"})]})]})})};export{k as default};
