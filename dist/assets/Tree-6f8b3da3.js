import{r as a,j as e,s,B as p}from"./index-22156145.js";import{R as i,j as l}from"./index-10abc73d.js";import{T as N}from"./Table-f0ee0c43.js";const t=({title:n,item:h,icon:r,iconRotate:o,children:u,id:m,onClick:x,className:c})=>{const[d,j]=a.useState(!1),T=()=>{j(!d)};return e.jsx(e.Fragment,{children:h?e.jsxs("div",{className:s["tree-item"]+" "+(c||""),id:m,onClick:x,children:[e.jsx("i",{className:s.item}),n]}):e.jsxs("div",{className:s["tree-wrap"],children:[e.jsxs("div",{className:s["tree-summary"]+" "+(c||""),id:m,onClick:T,children:[e.jsx("div",{className:d?s[`${o||r||"deg90"}`]:"",children:r||e.jsx("i",{className:s.arrow})}),n]}),e.jsx("div",{className:s["tree-detail"]+" "+(d?"":s.close),children:u})]})})},C=()=>{const n=a.useRef(),h=a.useRef(),r=a.useRef(),[o,u]=a.useState(!1),m=()=>{u(!o)},[x,c]=a.useState(!1),d=()=>{c(!x)},[j,T]=a.useState(!1),v=()=>{T(!j)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Tree"}),e.jsx("p",{className:"description",children:"Tree는 폴더 구조를 나타내는 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:n,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(i,{theme:"dark",extensions:[l({jsx:!0})],value:`import { Tree } from 'nds-ui/component';
// or
import Tree from 'nds-ui/component/Tree';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:h,children:"Property"}),e.jsxs("p",{className:"description",children:["Tree 컴포넌트는 다양한 속성이 있습니다. ",e.jsx("br",{}),"title / item / icon / iconRotate 등이 있습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Basic Tree"}),e.jsxs("p",{className:"description",children:["기본적인 Tree 형태입니다. ",e.jsx("br",{}),"title 속성으로 해당 폴더의 제목을 붙여줍니다. ",e.jsx("br",{}),"하위 폴더 내용이 더 이상 없을 경우 item 속성을 붙여줍니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsxs(t,{title:"Tree Depth1",children:[e.jsxs(t,{title:"Tree Depth2",children:[e.jsx(t,{item:!0,title:"Tree Depth3"}),e.jsx(t,{item:!0,title:"Tree Depth3"}),e.jsx(t,{item:!0,title:"Tree Depth3"})]}),e.jsxs(t,{title:"Tree Depth2",children:[e.jsx(t,{item:!0,title:"Tree Depth3"}),e.jsx(t,{item:!0,title:"Tree Depth3"}),e.jsx(t,{item:!0,title:"Tree Depth3"})]}),e.jsx(t,{item:!0,title:"Tree Depth2"}),e.jsx(t,{item:!0,title:"Tree Depth2"})]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(p,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:m,children:e.jsx("i",{className:"i-code w14 h14"})})}),o?e.jsx(i,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Tree } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Tree title='Tree Depth1'>
      <Tree title='Tree Depth2'>
        <Tree item title='Tree Depth3'/>
        <Tree item title='Tree Depth3'/>
        <Tree item title='Tree Depth3'/>
      </Tree>
      <Tree title='Tree Depth2'>
        <Tree item title='Tree Depth3'/>
        <Tree item title='Tree Depth3'/>
        <Tree item title='Tree Depth3'/>
      </Tree>
      <Tree item title='Tree Depth2'/>
      <Tree item title='Tree Depth2'/>
    </Tree>
  )
}

export default Example;`}):e.jsx(i,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Tree title='Tree Depth1'>
  <Tree title='Tree Depth2'>
    <Tree item title='Tree Depth3'/>
    <Tree item title='Tree Depth3'/>
    <Tree item title='Tree Depth3'/>
  </Tree>
  <Tree title='Tree Depth2'>
    <Tree item title='Tree Depth3'/>
    <Tree item title='Tree Depth3'/>
    <Tree item title='Tree Depth3'/>
  </Tree>
  <Tree item title='Tree Depth2'/>
  <Tree item title='Tree Depth2'/>
</Tree>
</>`})]})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"title"}),e.jsx("p",{className:"description",children:"title 속성은 해당 폴더/파일의 제목을 설정합니다."})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"item"}),e.jsx("p",{className:"description",children:"item 속성은 하위 폴더의 내용이 더 이상 없을 경우 붙여줍니다."})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Icon"}),e.jsxs("p",{className:"description",children:["icon 속성을 이용하여, 확장 아이콘을 커스텀할 수 있습니다. ",e.jsx("br",{}),"속성 값으로 원하는 이미지나 문자를 넣을 수 있습니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsxs(t,{icon:e.jsx(p,{size:"extraSmall",square:!0,variant:"outlined",children:" O "}),title:"Custom Icon",children:[e.jsx(t,{item:!0,title:"Tree Depth2"}),e.jsx(t,{item:!0,title:"Tree Depth2"})]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(p,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:d,children:e.jsx("i",{className:"i-code w14 h14"})})}),x?e.jsx(i,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Tree } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Tree icon={<Button size='extraSmall' square variant='outlined'> O </Button>} title='Custom Icon'>
      <Tree item title='Tree Depth2'/>
      <Tree item title='Tree Depth2'/>
    </Tree>
  )
}

export default Example;`}):e.jsx(i,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Tree icon={<Button size='extraSmall' square variant='outlined'> O </Button>} title='Custom Icon'>
  <Tree item title='Tree Depth2'/>
  <Tree item title='Tree Depth2'/>
</Tree>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Icon Rotate"}),e.jsxs("p",{className:"description",children:["iconRotate 속성을 이용하여, 확장 아이콘의 회전각도를 수정할 수 있습니다. ",e.jsx("br",{}),"속성 값으로 deg90 / deg180 / deg270 을 넣을 수 있습니다."]})]}),e.jsx("div",{className:"layout-example",children:e.jsxs(t,{iconRotate:"deg180",title:"180도 회전됩니다.",children:[e.jsx(t,{item:!0,title:"Tree Depth2"}),e.jsx(t,{item:!0,title:"Tree Depth2"})]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(p,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:v,children:e.jsx("i",{className:"i-code w14 h14"})})}),j?e.jsx(i,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Tree } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Tree iconRotate='deg180' title='180도 회전됩니다.'>
      <Tree item title='Tree Depth2'/>
      <Tree item title='Tree Depth2'/>
    </Tree>
  )
}

export default Example;`}):e.jsx(i,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Tree iconRotate='deg180' title='180도 회전됩니다.'>
  <Tree item title='Tree Depth2'/>
  <Tree item title='Tree Depth2'/>
</Tree>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:r,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(N,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"title"}),e.jsxs("td",{children:["string ",e.jsx("br",{}),"element"]}),e.jsx("td",{children:"제목을 설정하는 속성으로 문자형(string) 타입이 들어가거나, html 태그를 넣어도 됩니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"item"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["가장 하위에 속하는 Tree에 넣는 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"icon"}),e.jsx("td",{children:"element"}),e.jsx("td",{children:"확장 아이콘을 변경하는 속성으로 html 태그를 넣습니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"iconRotate"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'deg90'"}),"'deg180' ",e.jsx("br",{}),"'deg270'"]}),e.jsx("td",{children:"확장 아이콘을 클릭시 회전각도를 설정하는 속성입니다."})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{n.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{h.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{r.current.scrollIntoView()},children:" API"})]})]})})};export{C as default};
