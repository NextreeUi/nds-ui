import{r as i,j as e,s,B as m}from"./index-4cfbf475.js";import{R as a}from"./index-4a5422bd.js";import{j as t}from"./index-9acf6573.js";import{T as g}from"./Table-d1ea99e4.js";const l=({size:r="medium",radius:d="normal",defaultValue:x=0,list:j=["데이터를 입력해주세요"],disabled:h=!1,className:p})=>{const n=j,[f,N]=i.useState(x),S=n[f],[b,o]=i.useState(!1),v=()=>{h==!1&&o(!0)},C=c=>{N(c),o(!1)},y=()=>{o(!1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:s["select-wrap"]+" "+(p||""),children:[e.jsxs("button",{className:s.select+" "+(b?s.focus:"")+" "+(d=="rect"?s["radius-rect"]:d=="normal"?s["radius-normal"]:d=="round"?s["radius-round"]:"")+" "+(r=="large"?s["size-large"]:r=="medium"?s["size-medium"]:r=="small"?s["size-small"]:r=="extraSmall"?s["size-extraSmall"]:"")+" "+(h?s.disabled:""),onClick:v,children:[S,e.jsx("div",{className:s["select-icon"],children:e.jsx("i",{})})]}),e.jsx("ul",{className:s["select-option"],children:n.map((c,u)=>e.jsx("li",{className:s.option+" "+(u==f?s.active:""),onClick:()=>{C(u)},children:e.jsx("div",{children:c})},u))}),e.jsx("div",{className:s["select-backdrop"],onClick:y})]})})},M=()=>{const r=i.useRef(),d=i.useRef(),x=i.useRef(),[j,h]=i.useState(!1),p=()=>{h(!j)},[n,f]=i.useState(!1),N=()=>{f(!n)},[S,b]=i.useState(!1),o=()=>{b(!S)},[v,C]=i.useState(!1),y=()=>{C(!v)},[c,u]=i.useState(!1),k=()=>{u(!c)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Select"}),e.jsx("p",{className:"description",children:"Select 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:r,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`import { Select } from 'nds-ui/component';
// or
import Select from 'nds-ui/component/Select';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:d,children:"Property"}),e.jsxs("p",{className:"description",children:["Select 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"size / radius / defaultValue / list 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Basic"}),e.jsxs("p",{className:"description",children:["기본적인 Select 형태입니다. ",e.jsx("br",{}),"list 속성을 사용해서 옵션의 내용을 설정할 수 있습니다. ",e.jsx("br",{}),"list 속성의 값은 배열(Array)을 사용합니다."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(l,{list:["Option1","Option2","Option3"]})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:p,children:e.jsx("i",{className:"i-code w14 h14"})})}),j?e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Select list={['Option1', 'Option2', 'Option3']} />
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Select list={['Option1', 'Option2', 'Option3']} />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsxs("p",{className:"description",children:["size 속성으로 셀렉트 박스의 크기를 설정할 수 있습니다. ",e.jsx("br",{}),"large / medium / small / extraSmall 4개의 값이 있으며, ",e.jsx("br",{}),"medium이 디폴트 값입니다."]})]}),e.jsxs("div",{className:"layout-example flexColumn",children:[e.jsx(l,{list:["Large1","Large2","Large3"],size:"large"}),e.jsx(l,{list:["Medium1","Medium2","Medium3"]}),e.jsx(l,{list:["Small1","Small2","Small3"],size:"small"}),e.jsx(l,{list:["ExtraSmall1","ExtraSmall2","ExtraSmall3"],size:"extraSmall"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:N,children:e.jsx("i",{className:"i-code w14 h14"})})}),n?e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Select list={['Large1', 'Large2', 'Large3']} size='large' />
      <Select list={['Medium1', 'Medium2', 'Medium3']} />
      <Select list={['Small1', 'Small2', 'Small3']} size='small' />
      <Select list={['ExtraSmall1', 'ExtraSmall2', 'ExtraSmall3']} size='extraSmall' />
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Select list={['Large1', 'Large2', 'Large3']} size='large' />
<Select list={['Medium1', 'Medium2', 'Medium3']} />
<Select list={['Small1', 'Small2', 'Small3']} size='small' />
<Select list={['ExtraSmall1', 'ExtraSmall2', 'ExtraSmall3']} size='extraSmall' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Radius"}),e.jsx("p",{className:"description",children:"radius 속성으로 셀렉트 박스의 굴곡을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(l,{list:["rect1","rect2","rect3"],radius:"rect"}),e.jsx(l,{list:["noraml1","noraml2","noraml3"]}),e.jsx(l,{list:["round1","round2","round3"],radius:"round"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:o,children:e.jsx("i",{className:"i-code w14 h14"})})}),S?e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Select list={['rect1', 'rect2', 'rect3']} radius='rect'/>
      <Select list={['noraml1', 'noraml2', 'noraml3']} />
      <Select list={['round1', 'round2', 'round3']} radius='round'/>
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Select list={['rect1', 'rect2', 'rect3']} radius='rect'/>
<Select list={['noraml1', 'noraml2', 'noraml3']} />
<Select list={['round1', 'round2', 'round3']} radius='round'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"DefaultValue"}),e.jsxs("p",{className:"description",children:["defaultValue 속성으로 셀렉트 박스의 기본 값을 설정할 수 있습니다. ",e.jsx("br",{}),"속성 값은 숫자형으로 0부터 시작합니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(l,{list:["default0","default1","default2"],defaultValue:0}),e.jsx(l,{list:["default0","default1","default2"],defaultValue:1}),e.jsx(l,{list:["default0","default1","default2"],defaultValue:2})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:y,children:e.jsx("i",{className:"i-code w14 h14"})})}),v?e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Select list={['default0', 'default1', 'default2']} defaultValue={0}/>
      <Select list={['default0', 'default1', 'default2']} defaultValue={1}/>
      <Select list={['default0', 'default1', 'default2']} defaultValue={2}/>
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Select list={['default0', 'default1', 'default2']} defaultValue={0}/>
<Select list={['default0', 'default1', 'default2']} defaultValue={1}/>
<Select list={['default0', 'default1', 'default2']} defaultValue={2}/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Dsiabled"}),e.jsx("p",{className:"description",children:"dsiabled 속성으로 셀렉트 박스를 비활성화할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(l,{list:["default0","default1","default2"]}),e.jsx(l,{list:["disabled0","disabled1","disabled2"],disabled:!0})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:k,children:e.jsx("i",{className:"i-code w14 h14"})})}),c?e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Select list={['default0', 'default1', 'default2']} />
      <Select list={['disabled0', 'disabled1', 'disabled2']} disabled/>
    </div>
  )
}

export default Example;`}):e.jsx(a,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Select list={['default0', 'default1', 'default2']} />
<Select list={['disabled0', 'disabled1', 'disabled2']} disabled/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:x,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(g,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:["'large' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'medium'"}),"'small' 'extraSmall'"]}),e.jsx("td",{children:"크기를 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"raidus"}),e.jsxs("td",{children:["'rect' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'normal'"}),"'round'"]}),e.jsx("td",{children:"굴곡을 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultValue"}),e.jsx("td",{children:"number"}),e.jsxs("td",{children:["기본 값을 설정해주는 속성으로 숫자(number) 타입입니다. ",e.jsx("br",{}),"0부터 순서대로 값을 입력하면 됩니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"list"}),e.jsx("td",{children:"array"}),e.jsxs("td",{children:["옵션 값을 설정하는 속성으로 배열(array)를 넣습니다. ",e.jsx("br",{}),"배열 안의 갯수만큼 옵션이 생성됩니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["비활성화 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{r.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{x.current.scrollIntoView()},children:" API"})]})]})})};export{M as default};
