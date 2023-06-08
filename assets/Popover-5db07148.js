import{j as e,s,r as l,B as d}from"./index-eb9b13ca.js";import{R as x}from"./index-684ab6c5.js";import{j as m}from"./index-0f57b3d8.js";import{T as E}from"./Table-5b5073f2.js";const t=({X:o="left",Y:n="bottomEnd",open:c,onClose:h,children:f,className:v})=>{const j=u=>u;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s["popover-backdrop"]+" "+(c?s.open:""),onClick:j(h)}),e.jsx("div",{className:s.popover+" "+(o=="left"?s["X-left"]:o=="leftEnd"?s["X-leftEnd"]:o=="center"?s["X-center"]:o=="rightEnd"?s["X-rightEnd"]:o=="right"?s["X-right"]:"")+" "+(n=="bottom"?s["Y-bottom"]:n=="bottomEnd"?s["Y-bottomEnd"]:n=="center"?s["Y-center"]:n=="topEnd"?s["Y-topEnd"]:n=="top"?s["Y-top"]:"")+" "+(o=="center"&&n=="center"?s.center:"")+" "+(v||"")+" "+(c?s.open:""),children:f})]})},k=()=>{const o=l.useRef(),n=l.useRef(),c=l.useRef(),[h,f]=l.useState(!1),v=()=>{f(!h)},[j,u]=l.useState(!1),b=()=>{u(!j)},[N,C]=l.useState(!1),[i,a]=l.useState(!1),[p,r]=l.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Popover"}),e.jsx("p",{className:"description",children:"Popover는 클릭시 주변에 나타나는 소규모 페이지입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:o,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import { Popover } from 'nds-ui/component';
// or
import Popover from 'nds-ui/component/Popover';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:n,children:"Property"}),e.jsxs("p",{className:"description",children:["Popover 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"X / Y / open / onClose 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Basic Popover"}),e.jsxs("p",{className:"description",children:["기본적인 Popover 형태입니다. ",e.jsx("br",{}),"버튼을 누르면 Popover가 나옵니다. ",e.jsx("br",{}),"* 부모의 포지션이 relative인 태그로 꼭 감싸주세요."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsxs("div",{className:"relative",children:[e.jsx(d,{variant:"contained",onClick:()=>{C(!0)},children:" Popover "}),e.jsx(t,{open:N,onClose:()=>{C(!1)},className:"p20 w300 size14 txt-black flexBetween alignCenter",children:"팝오버 페이지입니다."})]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(d,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:v,children:e.jsx("i",{className:"i-code w14 h14"})})}),h?e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import * as React from 'react';
import { Popover, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicOpen, setBasicOpen] = React.useState(false);
  return (
    <div className='relative'>
      <Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Popover </Button>
      <Popover 
        open={BasicOpen} 
        onClose={()=>{setBasicOpen(false)}} 
        className='p20 w300 size14 txt-black flexBetween alignCenter'
      >
        팝오버 페이지입니다.
      </Popover>
    </div>
  )
}

export default Example;`}):e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`<>
<div className='relative'>
  <Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Popover </Button>
  <Popover 
    open={BasicOpen} 
    onClose={()=>{setBasicOpen(false)}} 
    className='p20 w300 size14 txt-black flexBetween alignCenter'
  >
    팝오버 페이지입니다.
  </Popover>
</div>
</>`})]})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"open"}),e.jsxs("p",{className:"description",children:["open 속성을 이용하여, Popover 를 나타낼 수 있습니다. ",e.jsx("br",{}),"open 속성의 값이 true 이면 나타나고, false 이면 사라집니다. ",e.jsx("br",{}),"React의 state를 사용하여 open의 값을 변경시킬 수 있습니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"onClose"}),e.jsxs("p",{className:"description",children:["onClose 속성을 이용하여, Popover 를 사라지게 할 수 있습니다. ",e.jsx("br",{}),"open에 들어가는 값을 false 로 변경시키는 함수를 넣어주세요."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"X / Y"}),e.jsxs("p",{className:"description",children:["X 속성과 Y 속성은 위치를 설정하는 속성입니다. ",e.jsx("br",{}),"X 속성의 속성값은 leftEnd / left / center / right / rightEnd 가 있습니다. ",e.jsx("br",{}),"Y 속성의 속성값은 topEnd / top / center / bottom / bottomEnd 가 있습니다."]})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsxs("div",{className:"relative width100",children:[e.jsx(d,{className:"width100",variant:"contained",onClick:()=>{a(!0)},children:" Popover X"}),e.jsx(t,{X:"leftEnd",Y:"bottomEnd",open:i,onClose:()=>{a(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"leftEnd"}),e.jsx(t,{X:"left",Y:"bottomEnd",open:i,onClose:()=>{a(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"left"}),e.jsx(t,{X:"center",Y:"bottomEnd",open:i,onClose:()=>{a(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"center"}),e.jsx(t,{X:"right",Y:"bottomEnd",open:i,onClose:()=>{a(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"right"}),e.jsx(t,{X:"rightEnd",Y:"bottomEnd",open:i,onClose:()=>{a(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"rightEnd"})]}),e.jsxs("div",{className:"relative",children:[e.jsx(d,{className:"h300",variant:"contained",onClick:()=>{r(!0)},children:" Popover Y"}),e.jsx(t,{X:"rightEnd",Y:"topEnd",open:p,onClose:()=>{r(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"topEnd"}),e.jsx(t,{X:"rightEnd",Y:"top",open:p,onClose:()=>{r(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"top"}),e.jsx(t,{X:"rightEnd",Y:"center",open:p,onClose:()=>{r(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"center"}),e.jsx(t,{X:"rightEnd",Y:"bottom",open:p,onClose:()=>{r(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"bottom"}),e.jsx(t,{X:"rightEnd",Y:"bottomEnd",open:p,onClose:()=>{r(!1)},className:"p20 size14 w100 flexCenter txt-black ",children:"bottomEnd"})]})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(d,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:b,children:e.jsx("i",{className:"i-code w14 h14"})})}),j?e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`import * as React from 'react';
import { Popover, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [XOpen, setXOpen] = React.useState(false);
  const [YOpen, setYOpen] = React.useState(false);
  return (
    <div className='flexColumn gap10'>
      <div className='relative width100'>
        <Button className='width100' variant='contained' onClick={()=>{setXOpen(true)}}> Popover X</Button>
        <Popover 
          X='leftEnd'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          leftEnd
        </Popover>
        <Popover 
          X='left'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          left
        </Popover>
        <Popover 
          X='center'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          center
        </Popover>
        <Popover 
          X='right'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          right
        </Popover>
        <Popover 
          X='rightEnd'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          rightEnd
        </Popover>
      </div>
      <div className='relative'>
        <Button className='h300' variant='contained' onClick={()=>{setYOpen(true)}}> Popover Y</Button>
        <Popover 
          X='rightEnd'
          Y='topEnd'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          topEnd
        </Popover>
        <Popover 
          X='rightEnd'
          Y='top'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          top
        </Popover>
        <Popover 
          X='rightEnd'
          Y='center'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          center
        </Popover>
        <Popover 
          X='rightEnd'
          Y='bottom'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          bottom
        </Popover>
        <Popover 
          X='rightEnd'
          Y='bottomEnd'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          bottomEnd
        </Popover>
      </div>
    </div>
  )
}

export default Example;`}):e.jsx(x,{theme:"dark",extensions:[m({jsx:!0})],value:`<>
<div className='flexColumn gap10'>
  <div className='relative width100'>
    <Button className='width100' variant='contained' onClick={()=>{setXOpen(true)}}> Popover X</Button>
    <Popover 
      X='leftEnd'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      leftEnd
    </Popover>
    <Popover 
      X='left'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      left
    </Popover>
    <Popover 
      X='center'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      center
    </Popover>
    <Popover 
      X='right'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      right
    </Popover>
    <Popover 
      X='rightEnd'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      rightEnd
    </Popover>
  </div>
  <div className='relative'>
    <Button className='h300' variant='contained' onClick={()=>{setYOpen(true)}}> Popover Y</Button>
    <Popover 
      X='rightEnd'
      Y='topEnd'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      topEnd
    </Popover>
    <Popover 
      X='rightEnd'
      Y='top'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      top
    </Popover>
    <Popover 
      X='rightEnd'
      Y='center'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      center
    </Popover>
    <Popover 
      X='rightEnd'
      Y='bottom'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      bottom
    </Popover>
    <Popover 
      X='rightEnd'
      Y='bottomEnd'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      bottomEnd
    </Popover>
  </div>
</div>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:c,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(E,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"open"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["Backdrop을 나타내는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 true / false 를 자유자재로 변경 가능한 state를 넣어주세요."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onClose"}),e.jsx("td",{children:"func"}),e.jsxs("td",{children:["Backdrop을 사라지게 하는 속성으로 함수 명령어가 들어갑니다. ",e.jsx("br",{}),"속성값은 open에 들어간 state 값이 false가 되도록 명령어를 넣어주세요."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"X"}),e.jsxs("td",{children:["'leftEnd' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'left'"}),"'center' ",e.jsx("br",{}),"'right' ",e.jsx("br",{}),"'rightEnd'"]}),e.jsx("td",{children:"가로 위치를 정하는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"X"}),e.jsxs("td",{children:["'topEnd' ",e.jsx("br",{}),"'top' ",e.jsx("br",{}),"'center' ",e.jsx("br",{}),"'bottom'",e.jsx("p",{className:"b",children:"'bottomEnd'"})]}),e.jsx("td",{children:"세로 위치를 정하는 속성입니다."})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{n.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" API"})]})]})})};export{k as default};
