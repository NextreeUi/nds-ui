import{r as i,j as s,a,B as r}from"./index-26bff6e6.js";import{R as e,j as t}from"./index-3267b1b1.js";import{T as y}from"./Table-c1dd1d21.js";const I=()=>{const l=i.useRef(),n=i.useRef(),o=i.useRef(),[c,h]=i.useState(!1),u=()=>{h(!c)},[d,p]=i.useState(!1),N=()=>{p(!d)},[x,v]=i.useState(!1),b=()=>{v(!x)},[m,L]=i.useState(!1),k=()=>{L(!m)},[j,f]=i.useState(!1),C=()=>{f(!j)};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"layout-all",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h1",{children:"Location"}),s.jsx("p",{className:"description",children:"Location은 현재 페이지까지의 사이트 구조를 링크로 표시한 컴포넌트입니다."})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:l,children:"Import"}),s.jsx("div",{className:"codeMirror",children:s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import { Location } from 'nds-ui/component';
// or
import Location from 'nds-ui/component/Location';`})}),s.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",s.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",s.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:n,children:"Property"}),s.jsxs("p",{className:"description",children:["Location 컴포넌트는 다양한 속성이 있습니다. ",s.jsx("br",{}),"number / link1~4 / linkLast / depth1~4 / depthLast / icon 등이 있습니다."]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Basic Location"}),s.jsxs("p",{className:"description",children:["기본적인 Location 형태입니다. ",s.jsx("br",{}),"Locationa은 현재 페이지까지 관련된 사이트의 구조를 나열한 링크들입니다. ",s.jsx("br",{}),"링크를 누르면 해당 페이지로 넘어가는 기능을 만들 수 있습니다."]})]}),s.jsx("div",{className:"layout-example",children:s.jsx(a,{})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:u,children:s.jsx("i",{className:"i-code w14 h14"})})}),c?s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location />
  )
}

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Location />
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Number"}),s.jsxs("p",{className:"description",children:["Number 속성은 링크의 갯수를 표시합니다. ",s.jsx("br",{}),"기본값은 2이며 5까지 넣을 수 있습니다."]})]}),s.jsx("div",{className:"layout-example flexColumn",children:s.jsxs("div",{className:"flexColumn",children:[s.jsx(a,{}),s.jsx(a,{number:3}),s.jsx(a,{number:4}),s.jsx(a,{number:5})]})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:N,children:s.jsx("i",{className:"i-code w14 h14"})})}),d?s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<div className='flexColumn'>
  <Location />
  <Location number={3}/>
  <Location number={4}/>
  <Location number={5}/>
</div>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"link1~4 / linkLast"}),s.jsxs("p",{className:"description",children:["link 속성은 해당 링크의 주소를 설정하는 속성입니다. ",s.jsx("br",{}),"link만 있고 눌렀을 때 아무 반응이 없으면 무용지물입니다. 주소를 넣어서 이동할 수 있게 만들 수 있습니다. ",s.jsx("br",{}),"link1 은 첫번째 링크의 주소를 ",s.jsx("br",{}),"link2 는 두번째 링크의 주소를 ",s.jsx("br",{}),".",s.jsx("br",{}),".",s.jsx("br",{}),".",s.jsx("br",{}),"linkLast 는 마지막 링크의 주소를 설정합니다."]})]}),s.jsx("div",{className:"layout-example flexColumn",children:s.jsx(a,{link1:"https://nextreeui.github.io/nds-ui/"})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:b,children:s.jsx("i",{className:"i-code w14 h14"})})}),x?s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location link1='https://nextreeui.github.io/nds-ui/' />
  )
}

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Location link1='https://nextreeui.github.io/nds-ui/' />
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"depth1~4 / depthLast"}),s.jsxs("p",{className:"description",children:["depth 속성은 해당 링크의 내용을 설정하는 속성입니다. ",s.jsx("br",{}),"depth1 은 첫번째 링크의 내용을 ",s.jsx("br",{}),"depth2 는 두번째 링크의 내용을 ",s.jsx("br",{}),".",s.jsx("br",{}),".",s.jsx("br",{}),".",s.jsx("br",{}),"depthLast 는 마지막 링크의 내용을 설정합니다."]})]}),s.jsx("div",{className:"layout-example flexColumn",children:s.jsx(a,{number:4,depth1:"Home",depth2:"Component",depth3:"Navigation",depthLast:"Location"})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:k,children:s.jsx("i",{className:"i-code w14 h14"})})}),m?s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Location 
  number={4} 
  depth1='Home'
  depth2='Component'
  depth3='Navigation'
  depthLast='Location'
/>
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Icon"}),s.jsx("p",{className:"description",children:"icon 속성은 해당 링크의 사이의 화살표아이콘을 커스텀하는 속성입니다."})]}),s.jsx("div",{className:"layout-example flexColumn",children:s.jsx(a,{icon:s.jsx("p",{children:"|"})})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(r,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:C,children:s.jsx("i",{className:"i-code w14 h14"})})}),j?s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location icon={<p>|</p>} />
  )
}

export default Example;`}):s.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Location icon={<p>|</p>} />
</>`})]})]}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:o,children:" API "}),s.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),s.jsx(y,{classWrap:"table-props",colGroup:s.jsxs(s.Fragment,{children:[s.jsx("col",{className:"table-props-col1"}),s.jsx("col",{className:"table-props-col2"})]}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"props"}),s.jsx("th",{children:s.jsx("div",{className:"table-props-value",children:"value"})}),s.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"number"}),s.jsxs("td",{children:[s.jsx("p",{className:"b",children:"2"}),"3 ",s.jsx("br",{}),"4",s.jsx("br",{}),"5"]}),s.jsx("td",{children:"링크의 갯수를 설정하는 속성으로 2~5까지의 숫자가 들어갑니다."})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:["link1~4, ",s.jsx("br",{}),"linkLast"]}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["링크의 주소를 넣는 속성으로 문자형(string) 타입이 들어갑니다. ",s.jsx("br",{}),"링크를 눌렀을 때                                  다른 주소로 넘어가는 기능을 합니다. ",s.jsx("br",{}),"link1 / link2 / link3 / link4 / linkLast 가 있으며 각 속성별로 링크의 순서를 의미합니다."]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:["depth1~4,",s.jsx("br",{})," last"]}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["링크의 내용을 설정하는 속성으로 문자형(string) 타입이 들어갑니다. ",s.jsx("br",{}),"depth1 / depth2 / depth3 / depth4 / depthLast 가 있으며 각 속성별로 링크의 순서를 의미합니다."]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"icon"}),s.jsx("td",{children:"element"}),s.jsx("td",{children:"화살표 아이콘을 변경하는 속성으로 html 태그를 넣습니다."})]})]})})]}),s.jsxs("div",{className:"layout-scroll",children:[s.jsx("p",{children:"Content"}),s.jsx("a",{onClick:()=>{l.current.scrollIntoView()},children:" Import"}),s.jsx("a",{onClick:()=>{n.current.scrollIntoView()},children:" Property"}),s.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" API"})]})]})})};export{I as default};
