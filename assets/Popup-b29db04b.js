import{j as s,s as c,r as a,B as o}from"./index-61f038e9.js";import{R as r}from"./index-e42883c4.js";import{j as d}from"./index-c615d801.js";import{T as u}from"./Table-8b14f5b0.js";const j=({open:l,onClose:i,children:t,className:e})=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:c["popup-wrap"]+" "+(l?c.open:""),children:[s.jsx("div",{className:c["popup-backdrop"],onClick:i}),s.jsx("div",{className:c.popup+" "+(e||""),children:t})]})}),B=()=>{const l=a.useRef(),i=a.useRef(),t=a.useRef(),[e,p]=a.useState(!1),x=()=>{p(!e)},[m,n]=a.useState(!1);return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"layout-all",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h1",{children:"Popup"}),s.jsx("p",{className:"description",children:"Popup 컴포넌트입니다."})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:l,children:"Import"}),s.jsx("div",{className:"codeMirror",children:s.jsx(r,{theme:"dark",extensions:[d({jsx:!0})],value:`import { Popup } from 'nds-ui/component';
// or
import Popup from 'nds-ui/component/Popup';`})}),s.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",s.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",s.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:i,children:"Property"}),s.jsxs("p",{className:"description",children:["Popup 컴포넌트 안에는 2가지 속성이 있습니다. ",s.jsx("br",{}),"open, onClose 속성이 있는데,그 사용법을 알아보겠습니다."]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Basic Popup"}),s.jsxs("p",{className:"description",children:["기본적인 Popup 형태입니다. ",s.jsx("br",{}),"버튼을 누르면 Popup이 나옵니다."]})]}),s.jsxs("div",{className:"layout-example",children:[s.jsx(o,{variant:"contained",onClick:()=>{n(!0)},children:" Popup "}),s.jsxs(j,{open:m,onClose:()=>{n(!1)},className:"p20 w300",children:[s.jsx("div",{className:"size16 b otlb-grayc pb10",children:"팝업"}),s.jsx("div",{className:"size12 p50 flexCenter",children:"팝업 내용입니다."}),s.jsxs("div",{className:"flex gap10 justifyEnd",children:[s.jsx(o,{onClick:()=>{n(!1)},className:"width100",size:"small",variant:"outlined",theme:"gray6",children:"취소"}),s.jsx(o,{onClick:()=>{n(!1)},className:"width100",size:"small",variant:"contained",children:" 확인 "})]})]})]}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(o,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:x,children:s.jsx("i",{className:"i-code w14 h14"})})}),e?s.jsx(r,{theme:"dark",extensions:[d({jsx:!0})],value:`import * as React from 'react';
import { Popup, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicOpen, setBasicOpen] = React.useState(false);
  return (
    <div className='flexColumn gap10'>
      <Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Backdrop </Button>
      <Popup open={BasicOpen} onClose={()=>{setBasicOpen(false)}} className='p20 w300'>
        <div className='size16 b otlb-grayc pb10'>팝업</div>
        <div className='size12 p50 flexCenter'>팝업 내용입니다.</div>
        <div className='flex gap10 justifyEnd'>
          <Button onClick={()=>{setBasicOpen(false)}} className='width100' size='small' variant='outlined' theme='gray6'>취소</Button>
          <Button onClick={()=>{setBasicOpen(false)}} className='width100' size='small' variant='contained'> 확인 </Button>
        </div>
      </Popup>
    </div>
  )
}

export default Example;`}):s.jsx(r,{theme:"dark",extensions:[d({jsx:!0})],value:`<>
<Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Backdrop </Button>
<Popup open={BasicOpen} onClose={()=>{setBasicOpen(false)}} className='p20 w300'>
  <div className='size16 b otlb-grayc pb10'>팝업</div>
  <div className='size12 p50 flexCenter'>팝업 내용입니다.</div>
  <div className='flex gap10 justifyEnd'>
    <Button onClick={()=>{setBasicOpen(false)}} className='width100' size='small' variant='outlined' theme='gray6'>취소</Button>
    <Button onClick={()=>{setBasicOpen(false)}} className='width100' size='small' variant='contained'> 확인 </Button>
  </div>
</Popup>
</>`})]})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"open"}),s.jsxs("p",{className:"description",children:["open 속성을 이용하여, Popup 을 나타낼 수 있습니다. ",s.jsx("br",{}),"open 속성의 값이 true 이면 나타나고, false 이면 사라집니다. ",s.jsx("br",{}),"React의 state를 사용하여 open의 값을 변경시킬 수 있습니다."]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"onClose"}),s.jsxs("p",{className:"description",children:["onClose 속성을 이용하여, Popup 을 사라지게 할 수 있습니다. ",s.jsx("br",{}),"open에 들어가는 값을 false 로 변경시키는 함수를 넣어주세요."]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:t,children:" API "}),s.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),s.jsx(u,{classWrap:"table-props",colGroup:s.jsxs(s.Fragment,{children:[s.jsx("col",{className:"table-props-col1"}),s.jsx("col",{className:"table-props-col2"})]}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"props"}),s.jsx("th",{children:s.jsx("div",{className:"table-props-value",children:"value"})}),s.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"open"}),s.jsx("td",{children:"boolean"}),s.jsxs("td",{children:["Backdrop을 나타내는 속성으로 불리언(Boolean) 타입입니다. ",s.jsx("br",{}),"속성값은 true / false 를 자유자재로 변경 가능한 state를 넣어주세요."]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"onClose"}),s.jsx("td",{children:"func"}),s.jsxs("td",{children:["Backdrop을 사라지게 하는 속성으로 함수 명령어가 들어갑니다. ",s.jsx("br",{}),"속성값은 open에 들어간 state 값이 false가 되도록 명령어를 넣어주세요."]})]})]})})]}),s.jsxs("div",{className:"layout-scroll",children:[s.jsx("p",{children:"Content"}),s.jsx("a",{onClick:()=>{l.current.scrollIntoView()},children:" Import"}),s.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Property"}),s.jsx("a",{onClick:()=>{t.current.scrollIntoView()},children:" API"})]})]})})};export{B as default};
