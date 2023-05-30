import{j as e,s as o,r as n,B as x}from"./index-6e651d48.js";import{R as d,j as l}from"./index-83089489.js";import{T as N}from"./Table-c7133f92.js";const r=({theme:i="primary",size:c="medium",color:a,ripple:s,defaultChecked:j,id:u,name:h,value:y,disabled:f,className:m})=>{i=="primary"?(a=a||"primary",s=s||"primary"):i=="primary_light"?(a=a||"primary_light",s=s||"primary_light"):i=="primary_deep"?(a=a||"primary_deep",s=s||"primary_deep"):i=="secondary"?(a=a||"secondary",s=s||"secondary"):i=="secondary_light"?(a=a||"secondary_light",s=s||"secondary_light"):i=="secondary_deep"?(a=a||"secondary_deep",s=s||"secondary_deep"):i=="tertiary"?(a=a||"tertiary",s=s||"tertiary"):i=="tertiary_ligth"?(a=a||"tertiary_ligth",s=s||"tertiary_ligth"):i=="tertiary_deep"?(a=a||"tertiary_deep",s=s||"tertiary_deep"):i=="black"?(a=a||"black",s=s||"black"):i=="gray1"?(a=a||"gray1",s=s||"black"):i=="gray2"?(a=a||"gray2",s=s||"black"):i=="gray3"?(a=a||"gray3",s=s||"black"):i=="gray4"?(a=a||"gray4",s=s||"black"):i=="gray5"?(a=a||"gray5",s=s||"black"):i=="gray6"?(a=a||"gray6",s=s||"black"):i=="gray7"?(a=a||"gray7",s=s||"black"):i=="gray8"?(a=a||"gray8",s=s||"black"):i=="gray9"?(a=a||"gray9",s=s||"black"):i=="graya"?(a=a||"graya",s=s||"black"):i=="grayb"?(a=a||"grayb",s=s||"black"):i=="grayc"?(a=a||"grayc",s=s||"black"):i=="grayd"?(a=a||"grayd",s=s||"black"):i=="graye"?(a=a||"graye",s=s||"black"):i=="grayf5"?(a=a||"grayf5",s=s||"black"):i=="grayf8"?(a=a||"grayf8",s=s||"black"):i=="white"&&(a=a||"white",s=s||"white");const v=t=>t?o[`color-${t}`]:"",b=t=>t?o[`ripple-${t}`]:"";return e.jsx(e.Fragment,{children:e.jsx("input",{type:"radio",className:o.radio+" "+v(a)+" "+b(s)+" "+(c=="large"?o.large:c=="medium"?o.medium:c=="small"?o.small:c=="extraSmall"?o.extraSmall:"")+" "+(m||""),disabled:f,id:u,name:h,value:y,defaultChecked:j})})},_=()=>{const i=n.useRef(),c=n.useRef(),a=n.useRef(),[s,j]=n.useState(!1),u=()=>{j(!s)},[h,y]=n.useState(!1),f=()=>{y(!h)},[m,v]=n.useState(!1),b=()=>{v(!m)},[t,p]=n.useState(!1),g=()=>{p(!t)},[R,k]=n.useState(!1),C=()=>{k(!R)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Radio"}),e.jsx("p",{className:"description",children:"클릭 인터렉션이 있는 Radio 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`import { Radio } from 'nds-ui/component';
// or
import Radio from 'nds-ui/component/Radio';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:c,children:"Property"}),e.jsxs("p",{className:"description",children:["Radio 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"theme / size / color / ripple / defaultChecked / id / name / value / disabled 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Theme"}),e.jsxs("p",{className:"description",children:["theme 속성으로 라디오박스의 컬러를 설정할 수 있습니다. ",e.jsx("br",{}),"theme 속성은 color, ripple 2개의 속성을 동시에 바꿉니다. 디테일한 커스텀을 하려면 위 2개의 속성을 이용하시면 됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{name:"radioTheme",defaultChecked:!0}),e.jsx(r,{name:"radioTheme",theme:"secondary"}),e.jsx(r,{name:"radioTheme",theme:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:u,children:e.jsx("i",{className:"i-code w14 h14"})})}),s?e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Radio } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Radio name='radioTheme' defaultChecked />
      <Radio name='radioTheme' theme='secondary' />
      <Radio name='radioTheme' theme='tertiary' />
    </div>
  )
}

export default Example;`}):e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio name='radioTheme' defaultChecked />
<Radio name='radioTheme' theme='secondary' />
<Radio name='radioTheme' theme='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsxs("p",{className:"description",children:["size 속성으로 라디오박스의 크기를 설정할 수 있습니다. ",e.jsx("br",{}),"large / medium / small / extraSmall 4개의 값이 있으며, ",e.jsx("br",{}),"medium이 디폴트 값입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{name:"radioSize",defaultChecked:!0,size:"large"}),e.jsx(r,{name:"radioSize"}),e.jsx(r,{name:"radioSize",size:"small"}),e.jsx(r,{name:"radioSize",size:"extraSmall"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:f,children:e.jsx("i",{className:"i-code w14 h14"})})}),h?e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Radio } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Radio name='radioSize' defaultChecked size='large'/>
      <Radio name='radioSize' />
      <Radio name='radioSize' size='small'/>
      <Radio name='radioSize' size='extraSmall'/>
    </div>
  )
}

export default Example;`}):e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio name='radioSize' defaultChecked size='large'/>
<Radio name='radioSize' />
<Radio name='radioSize' size='small'/>
<Radio name='radioSize' size='extraSmall'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Color"}),e.jsxs("p",{className:"description",children:["color 속성으로 라디오박스의 색상을 설정할 수 있습니다. ",e.jsx("br",{}),"theme와는 다르게 클릭 시 인터렉션 색은 설정되지 않고 체크 시 아이콘 색만 설정됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{name:"radioColor",defaultChecked:!0}),e.jsx(r,{name:"radioColor",color:"secondary"}),e.jsx(r,{name:"radioColor",color:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:b,children:e.jsx("i",{className:"i-code w14 h14"})})}),m?e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Radio } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Radio name='radioColor' defaultChecked />
      <Radio name='radioColor'  color='secondary' />
      <Radio name='radioColor'  color='tertiary' />
    </div>
  )
}

export default Example;`}):e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio name='radioColor' defaultChecked />
<Radio name='radioColor'  color='secondary' />
<Radio name='radioColor'  color='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Ripple"}),e.jsxs("p",{className:"description",children:["ripple 속성으로 라디오박스의 인터렉션 색상을 설정할 수 있습니다. ",e.jsx("br",{}),"theme와는 다르게 클릭 시 인터렉션 색만 설정됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{name:"radioRipple",defaultChecked:!0}),e.jsx(r,{name:"radioRipple",ripple:"secondary"}),e.jsx(r,{name:"radioRipple",ripple:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:g,children:e.jsx("i",{className:"i-code w14 h14"})})}),t?e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Radio } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Radio name='radioRipple' defaultChecked />
      <Radio name='radioRipple' ripple='secondary' />
      <Radio name='radioRipple' ripple='tertiary' />
    </div>
  )
}

export default Example;`}):e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio name='radioRipple' defaultChecked />
<Radio name='radioRipple' ripple='secondary' />
<Radio name='radioRipple' ripple='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Disabled"}),e.jsx("p",{className:"description",children:"disabled 속성으로 라디오박스를 비활성화 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(r,{}),e.jsx(r,{disabled:!0}),e.jsx(r,{defaultChecked:!0}),e.jsx(r,{disabled:!0,defaultChecked:!0})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:C,children:e.jsx("i",{className:"i-code w14 h14"})})}),R?e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Radio } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Radio />
      <Radio disabled />
      <Radio defaultChecked />
      <Radio disabled defaultChecked />
    </div>
  )
}

export default Example;`}):e.jsx(d,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio />
<Radio disabled />
<Radio defaultChecked />
<Radio disabled defaultChecked />
</>`})]})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"ID / Name / Value"}),e.jsx("p",{className:"description",children:"id / name / value 속성은 html과 사용방법이 같습니다."})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:a,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(N,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"theme"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["theme 속성은 color, ripple 2가지 속성에 영향을 미칩니다. ",e.jsx("br",{}),"더 상세한 커스텀을 원할 경우 theme 대신 위 2가지 속성을 조절하시면 됩니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:["'large'",e.jsx("p",{className:"b",children:"'medium'"}),"'small' ",e.jsx("br",{}),"'extraSmall'"]}),e.jsx("td",{children:"크기를 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["체크 시 아이콘 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ripple"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["클릭 시 인터렉션 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["비활성화 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"id"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["id 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"name"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["name 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["value 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{a.current.scrollIntoView()},children:" API"})]})]})})};export{_ as default};
