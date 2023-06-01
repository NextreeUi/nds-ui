import{j as e,s as n,r as c,B as h}from"./index-e28265ce.js";import{R as t,j as r}from"./index-72ddc5e7.js";import{T as R}from"./Table-b9031823.js";const d=({theme:l="primary",size:x="medium",color:s,ripple:a,defaultChecked:m,id:j,name:u,value:k,disabled:C,className:o})=>{l=="primary"?(s=s||"primary",a=a||"primary"):l=="primary_light"?(s=s||"primary_light",a=a||"primary_light"):l=="primary_deep"?(s=s||"primary_deep",a=a||"primary_deep"):l=="secondary"?(s=s||"secondary",a=a||"secondary"):l=="secondary_light"?(s=s||"secondary_light",a=a||"secondary_light"):l=="secondary_deep"?(s=s||"secondary_deep",a=a||"secondary_deep"):l=="tertiary"?(s=s||"tertiary",a=a||"tertiary"):l=="tertiary_ligth"?(s=s||"tertiary_ligth",a=a||"tertiary_ligth"):l=="tertiary_deep"?(s=s||"tertiary_deep",a=a||"tertiary_deep"):l=="black"?(s=s||"black",a=a||"black"):l=="gray1"?(s=s||"gray1",a=a||"black"):l=="gray2"?(s=s||"gray2",a=a||"black"):l=="gray3"?(s=s||"gray3",a=a||"black"):l=="gray4"?(s=s||"gray4",a=a||"black"):l=="gray5"?(s=s||"gray5",a=a||"black"):l=="gray6"?(s=s||"gray6",a=a||"black"):l=="gray7"?(s=s||"gray7",a=a||"black"):l=="gray8"?(s=s||"gray8",a=a||"black"):l=="gray9"?(s=s||"gray9",a=a||"black"):l=="graya"?(s=s||"graya",a=a||"black"):l=="grayb"?(s=s||"grayb",a=a||"black"):l=="grayc"?(s=s||"grayc",a=a||"black"):l=="grayd"?(s=s||"grayd",a=a||"black"):l=="graye"?(s=s||"graye",a=a||"black"):l=="grayf5"?(s=s||"grayf5",a=a||"black"):l=="grayf8"?(s=s||"grayf8",a=a||"black"):l=="white"&&(s=s||"white",a=a||"white");const b=i=>i?n[`color-${i}`]:"",f=i=>i?n[`ripple-${i}`]:"";return e.jsx(e.Fragment,{children:e.jsx("input",{type:"checkbox",className:n.checkbox+" "+b(s)+" "+f(a)+" "+(x=="large"?n.large:x=="medium"?n.medium:x=="small"?n.small:x=="extraSmall"?n.extraSmall:"")+" "+(o||""),disabled:C,id:j,name:u,value:k,defaultChecked:m})})},I=()=>{const l=c.useRef(),x=c.useRef(),s=c.useRef(),[a,m]=c.useState(!1),j=()=>{m(!a)},[u,k]=c.useState(!1),C=()=>{k(!u)},[o,b]=c.useState(!1),f=()=>{b(!o)},[i,N]=c.useState(!1),g=()=>{N(!i)},[y,p]=c.useState(!1),w=()=>{p(!y)},[v,S]=c.useState(!1),z=()=>{S(!v)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Checkbox"}),e.jsx("p",{className:"description",children:"클릭 인터렉션이 있는 Checkbox 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:l,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`import { Checkbox } from 'nds-ui/component';
// or
import Checkbox from 'nds-ui/component/Checkbox';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:x,children:"Property"}),e.jsxs("p",{className:"description",children:["Checkbox 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"theme / size / color / ripple / defaultChecked / id / name / value / disabled 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Theme"}),e.jsxs("p",{className:"description",children:["theme 속성으로 체크박스의 컬러를 설정할 수 있습니다. ",e.jsx("br",{}),"theme 속성은 color, ripple 2개의 속성을 동시에 바꿉니다. 디테일한 커스텀을 하려면 위 2개의 속성을 이용하시면 됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{defaultChecked:!0}),e.jsx(d,{defaultChecked:!0,theme:"secondary"}),e.jsx(d,{defaultChecked:!0,theme:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(h,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:j,children:e.jsx("i",{className:"i-code w14 h14"})})}),a?e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked theme='secondary' />
      <Checkbox defaultChecked theme='tertiary' />
    </div>
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Checkbox defaultChecked />
<Checkbox defaultChecked theme='secondary' />
<Checkbox defaultChecked theme='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsxs("p",{className:"description",children:["size 속성으로 체크박스의 크기를 설정할 수 있습니다. ",e.jsx("br",{}),"large / medium / small / extraSmall 4개의 값이 있으며, ",e.jsx("br",{}),"medium이 디폴트 값입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{defaultChecked:!0,size:"large"}),e.jsx(d,{defaultChecked:!0}),e.jsx(d,{defaultChecked:!0,size:"small"}),e.jsx(d,{defaultChecked:!0,size:"extraSmall"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(h,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:C,children:e.jsx("i",{className:"i-code w14 h14"})})}),u?e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox defaultChecked size='large'/>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked size='small'/>
      <Checkbox defaultChecked size='extraSmall'/>
    </div>
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Checkbox defaultChecked size='large'/>
<Checkbox defaultChecked />
<Checkbox defaultChecked size='small'/>
<Checkbox defaultChecked size='extraSmall'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Color"}),e.jsxs("p",{className:"description",children:["color 속성으로 체크박스의 색상을 설정할 수 있습니다. ",e.jsx("br",{}),"theme와는 다르게 클릭 시 인터렉션 색은 설정되지 않고 체크 시 아이콘 색만 설정됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{defaultChecked:!0}),e.jsx(d,{defaultChecked:!0,color:"secondary"}),e.jsx(d,{defaultChecked:!0,color:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(h,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:f,children:e.jsx("i",{className:"i-code w14 h14"})})}),o?e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked color='secondary' />
      <Checkbox defaultChecked color='tertiary' />
    </div>
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Checkbox defaultChecked />
<Checkbox defaultChecked color='secondary' />
<Checkbox defaultChecked color='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Ripple"}),e.jsxs("p",{className:"description",children:["ripple 속성으로 체크박스의 인터렉션 색상을 설정할 수 있습니다. ",e.jsx("br",{}),"theme와는 다르게 클릭 시 인터렉션 색만 설정됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{defaultChecked:!0}),e.jsx(d,{defaultChecked:!0,ripple:"secondary"}),e.jsx(d,{defaultChecked:!0,ripple:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(h,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:g,children:e.jsx("i",{className:"i-code w14 h14"})})}),i?e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked ripple='secondary' />
      <Checkbox defaultChecked ripple='tertiary' />
    </div>
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Checkbox defaultChecked />
<Checkbox defaultChecked ripple='secondary' />
<Checkbox defaultChecked ripple='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"DefaultChecked"}),e.jsx("p",{className:"description",children:"defaultChecked 속성으로 체크박스를 기본체크 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{}),e.jsx(d,{defaultChecked:!0})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(h,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:w,children:e.jsx("i",{className:"i-code w14 h14"})})}),y?e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox />
      <Checkbox defaultChecked />
    </div>
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Checkbox />
<Checkbox defaultChecked />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Disabled"}),e.jsx("p",{className:"description",children:"disabled 속성으로 체크박스를 비활성화 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{}),e.jsx(d,{disabled:!0}),e.jsx(d,{defaultChecked:!0}),e.jsx(d,{disabled:!0,defaultChecked:!0})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(h,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:z,children:e.jsx("i",{className:"i-code w14 h14"})})}),v?e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`import * as React from 'react';
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox />
      <Checkbox disabled />
      <Checkbox defaultChecked />
      <Checkbox disabled defaultChecked />
    </div>
  )
}

export default Example;`}):e.jsx(t,{theme:"dark",extensions:[r({jsx:!0})],value:`<>
<Checkbox />
<Checkbox disabled />
<Checkbox defaultChecked />
<Checkbox disabled defaultChecked />
</>`})]})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"ID / Name / Value"}),e.jsx("p",{className:"description",children:"id / name / value 속성은 html과 사용방법이 같습니다."})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:s,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(R,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"theme"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["theme 속성은 color, ripple 2가지 속성에 영향을 미칩니다. ",e.jsx("br",{}),"더 상세한 커스텀을 원할 경우 theme 대신 위 2가지 속성을 조절하시면 됩니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:["'large'",e.jsx("p",{className:"b",children:"'medium'"}),"'small' ",e.jsx("br",{}),"'extraSmall'"]}),e.jsx("td",{children:"크기를 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["체크 시 아이콘 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ripple"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["클릭 시 인터렉션 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultChecked"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["기본체크 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["비활성화 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"id"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["id 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"name"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["name 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["value 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{l.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{x.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{s.current.scrollIntoView()},children:" API"})]})]})})};export{I as default};
