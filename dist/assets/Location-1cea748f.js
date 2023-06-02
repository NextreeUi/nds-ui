import{r as i,j as e,a as r,B as a}from"./index-22156145.js";import{R as s,j as t}from"./index-10abc73d.js";import{T as y}from"./Table-f0ee0c43.js";const B=()=>{const l=i.useRef(),o=i.useRef(),n=i.useRef(),[c,j]=i.useState(!1),u=()=>{j(!c)},[d,p]=i.useState(!1),v=()=>{p(!d)},[x,b]=i.useState(!1),N=()=>{b(!x)},[m,k]=i.useState(!1),L=()=>{k(!m)},[h,C]=i.useState(!1),f=()=>{C(!h)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Location"}),e.jsx("p",{className:"description",children:"Location은 현재 페이지까지의 사이트 구조를 링크로 표시한 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:l,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`import { Location } from 'nds-ui/component';
// or
import Location from 'nds-ui/component/Location';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:o,children:"Property"}),e.jsxs("p",{className:"description",children:["Location 컴포넌트는 다양한 속성이 있습니다. ",e.jsx("br",{}),"number / link1~4 / linkLast / depth1~4 / depthLast / icon 등이 있습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Basic Location"}),e.jsxs("p",{className:"description",children:["기본적인 Location 형태입니다. ",e.jsx("br",{}),"Locationa은 현재 페이지까지 관련된 사이트의 구조를 나열한 링크들입니다. ",e.jsx("br",{}),"링크를 누르면 해당 페이지로 넘어가는 기능을 만들 수 있습니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsx(r,{})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(a,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:u,children:e.jsx("i",{className:"i-code w14 h14"})})}),c?e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location />
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Location />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Number"}),e.jsxs("p",{className:"description",children:["Number 속성은 링크의 갯수를 표시합니다. ",e.jsx("br",{}),"기본값은 2이며 5까지 넣을 수 있습니다."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsxs("div",{className:"flexColumn",children:[e.jsx(r,{}),e.jsx(r,{number:3}),e.jsx(r,{number:4}),e.jsx(r,{number:5})]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(a,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:v,children:e.jsx("i",{className:"i-code w14 h14"})})}),d?e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn'>
      <Location />
      <Location number={3}/>
      <Location number={4}/>
      <Location number={5}/>
    </div>
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<div className='flexColumn'>
  <Location />
  <Location number={3}/>
  <Location number={4}/>
  <Location number={5}/>
</div>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"link1~4 / linkLast"}),e.jsxs("p",{className:"description",children:["link 속성은 해당 링크의 주소를 설정하는 속성입니다. ",e.jsx("br",{}),"link만 있고 눌렀을 때 아무 반응이 없으면 무용지물입니다. 주소를 넣어서 이동할 수 있게 만들 수 있습니다. ",e.jsx("br",{}),"link1 은 첫번째 링크의 주소를 ",e.jsx("br",{}),"link2 는 두번째 링크의 주소를 ",e.jsx("br",{}),".",e.jsx("br",{}),".",e.jsx("br",{}),".",e.jsx("br",{}),"linkLast 는 마지막 링크의 주소를 설정합니다."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{link1:"https://nextreeui.github.io/nds-ui/"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(a,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:N,children:e.jsx("i",{className:"i-code w14 h14"})})}),x?e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location link1='https://nextreeui.github.io/nds-ui/' />
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Location link1='https://nextreeui.github.io/nds-ui/' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"depth1~4 / depthLast"}),e.jsxs("p",{className:"description",children:["depth 속성은 해당 링크의 내용을 설정하는 속성입니다. ",e.jsx("br",{}),"depth1 은 첫번째 링크의 내용을 ",e.jsx("br",{}),"depth2 는 두번째 링크의 내용을 ",e.jsx("br",{}),".",e.jsx("br",{}),".",e.jsx("br",{}),".",e.jsx("br",{}),"depthLast 는 마지막 링크의 내용을 설정합니다."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{number:4,depth1:"Home",depth2:"Component",depth3:"Navigation",depthLast:"Location"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(a,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:L,children:e.jsx("i",{className:"i-code w14 h14"})})}),m?e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location 
      number={4} 
      depth1='Home'
      depth2='Component'
      depth3='Navigation'
      depthLast='Location'
    />
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Location 
  number={4} 
  depth1='Home'
  depth2='Component'
  depth3='Navigation'
  depthLast='Location'
/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Icon"}),e.jsx("p",{className:"description",children:"icon 속성은 해당 링크의 사이의 화살표아이콘을 커스텀하는 속성입니다."})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(r,{icon:e.jsx("p",{children:"|"})})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(a,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:f,children:e.jsx("i",{className:"i-code w14 h14"})})}),h?e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location icon={<p>|</p>} />
  )
}

export default Example;`}):e.jsx(s,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Location icon={<p>|</p>} />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:n,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(y,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"number"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"2"}),"3 ",e.jsx("br",{}),"4",e.jsx("br",{}),"5"]}),e.jsx("td",{children:"링크의 갯수를 설정하는 속성으로 2~5까지의 숫자가 들어갑니다."})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["link1~4, ",e.jsx("br",{}),"linkLast"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["링크의 주소를 넣는 속성으로 문자형(string) 타입이 들어갑니다. ",e.jsx("br",{}),"링크를 눌렀을 때                                  다른 주소로 넘어가는 기능을 합니다. ",e.jsx("br",{}),"link1 / link2 / link3 / link4 / linkLast 가 있으며 각 속성별로 링크의 순서를 의미합니다."]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["depth1~4,",e.jsx("br",{})," last"]}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["링크의 내용을 설정하는 속성으로 문자형(string) 타입이 들어갑니다. ",e.jsx("br",{}),"depth1 / depth2 / depth3 / depth4 / depthLast 가 있으며 각 속성별로 링크의 순서를 의미합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"icon"}),e.jsx("td",{children:"element"}),e.jsx("td",{children:"화살표 아이콘을 변경하는 속성으로 html 태그를 넣습니다."})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{l.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{n.current.scrollIntoView()},children:" API"})]})]})})};export{B as default};
