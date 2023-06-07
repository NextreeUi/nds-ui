import{j as e,s as o,r as t,B as m}from"./index-cbb411db.js";import{R as r}from"./index-b4f47d22.js";import{j as l}from"./index-ae8f212b.js";import{T as w}from"./Table-e110d49d.js";const d=({theme:i="primary",size:c="medium",color:s,ripple:a,defaultChecked:h,id:u,name:j,value:y,disabled:f,className:x})=>{i=="primary"?(s=s||"primary",a=a||"primary"):i=="primary_light"?(s=s||"primary_light",a=a||"primary_light"):i=="primary_deep"?(s=s||"primary_deep",a=a||"primary_deep"):i=="secondary"?(s=s||"secondary",a=a||"secondary"):i=="secondary_light"?(s=s||"secondary_light",a=a||"secondary_light"):i=="secondary_deep"?(s=s||"secondary_deep",a=a||"secondary_deep"):i=="tertiary"?(s=s||"tertiary",a=a||"tertiary"):i=="tertiary_ligth"?(s=s||"tertiary_ligth",a=a||"tertiary_ligth"):i=="tertiary_deep"?(s=s||"tertiary_deep",a=a||"tertiary_deep"):i=="black"?(s=s||"black",a=a||"black"):i=="gray1"?(s=s||"gray1",a=a||"black"):i=="gray2"?(s=s||"gray2",a=a||"black"):i=="gray3"?(s=s||"gray3",a=a||"black"):i=="gray4"?(s=s||"gray4",a=a||"black"):i=="gray5"?(s=s||"gray5",a=a||"black"):i=="gray6"?(s=s||"gray6",a=a||"black"):i=="gray7"?(s=s||"gray7",a=a||"black"):i=="gray8"?(s=s||"gray8",a=a||"black"):i=="gray9"?(s=s||"gray9",a=a||"black"):i=="graya"?(s=s||"graya",a=a||"black"):i=="grayb"?(s=s||"grayb",a=a||"black"):i=="grayc"?(s=s||"grayc",a=a||"black"):i=="grayd"?(s=s||"grayd",a=a||"black"):i=="graye"?(s=s||"graye",a=a||"black"):i=="grayf5"?(s=s||"grayf5",a=a||"black"):i=="grayf8"?(s=s||"grayf8",a=a||"black"):i=="white"&&(s=s||"white",a=a||"white");const p=n=>n?o[`color-${n}`]:"",v=n=>n?o[`ripple-${n}`]:"";return e.jsx(e.Fragment,{children:e.jsx("input",{type:"radio",className:o.radio+" "+p(s)+" "+v(a)+" "+(c=="large"?o.large:c=="medium"?o.medium:c=="small"?o.small:c=="extraSmall"?o.extraSmall:"")+" "+(x||""),disabled:f,id:u,name:j,value:y,defaultChecked:h})})},D=()=>{const i=t.useRef(),c=t.useRef(),s=t.useRef(),[a,h]=t.useState(!1),u=()=>{h(!a)},[j,y]=t.useState(!1),f=()=>{y(!j)},[x,p]=t.useState(!1),v=()=>{p(!x)},[n,k]=t.useState(!1),b=()=>{k(!n)},[R,N]=t.useState(!1),g=()=>{N(!R)},[C,S]=t.useState(!1),z=()=>{S(!C)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Radio"}),e.jsx("p",{className:"description",children:"클릭 인터렉션이 있는 Radio 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:i,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`import { Radio } from 'nds-ui/component';
// or
import Radio from 'nds-ui/component/Radio';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:c,children:"Property"}),e.jsxs("p",{className:"description",children:["Radio 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"theme / size / color / ripple / defaultChecked / id / name / value / disabled 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Theme"}),e.jsxs("p",{className:"description",children:["theme 속성으로 라디오박스의 컬러를 설정할 수 있습니다. ",e.jsx("br",{}),"theme 속성은 color, ripple 2개의 속성을 동시에 바꿉니다. 디테일한 커스텀을 하려면 위 2개의 속성을 이용하시면 됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{name:"radioTheme",defaultChecked:!0}),e.jsx(d,{name:"radioTheme",theme:"secondary"}),e.jsx(d,{name:"radioTheme",theme:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:u,children:e.jsx("i",{className:"i-code w14 h14"})})}),a?e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio name='radioTheme' defaultChecked />
<Radio name='radioTheme' theme='secondary' />
<Radio name='radioTheme' theme='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsxs("p",{className:"description",children:["size 속성으로 라디오박스의 크기를 설정할 수 있습니다. ",e.jsx("br",{}),"large / medium / small / extraSmall 4개의 값이 있으며, ",e.jsx("br",{}),"medium이 디폴트 값입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{name:"radioSize",defaultChecked:!0,size:"large"}),e.jsx(d,{name:"radioSize"}),e.jsx(d,{name:"radioSize",size:"small"}),e.jsx(d,{name:"radioSize",size:"extraSmall"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:f,children:e.jsx("i",{className:"i-code w14 h14"})})}),j?e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio name='radioSize' defaultChecked size='large'/>
<Radio name='radioSize' />
<Radio name='radioSize' size='small'/>
<Radio name='radioSize' size='extraSmall'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Color"}),e.jsxs("p",{className:"description",children:["color 속성으로 라디오박스의 색상을 설정할 수 있습니다. ",e.jsx("br",{}),"theme와는 다르게 클릭 시 인터렉션 색은 설정되지 않고 체크 시 아이콘 색만 설정됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{name:"radioColor",defaultChecked:!0}),e.jsx(d,{name:"radioColor",color:"secondary"}),e.jsx(d,{name:"radioColor",color:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:v,children:e.jsx("i",{className:"i-code w14 h14"})})}),x?e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio name='radioColor' defaultChecked />
<Radio name='radioColor'  color='secondary' />
<Radio name='radioColor'  color='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Ripple"}),e.jsxs("p",{className:"description",children:["ripple 속성으로 라디오박스의 인터렉션 색상을 설정할 수 있습니다. ",e.jsx("br",{}),"theme와는 다르게 클릭 시 인터렉션 색만 설정됩니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{name:"radioRipple",defaultChecked:!0}),e.jsx(d,{name:"radioRipple",ripple:"secondary"}),e.jsx(d,{name:"radioRipple",ripple:"tertiary"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:b,children:e.jsx("i",{className:"i-code w14 h14"})})}),n?e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio name='radioRipple' defaultChecked />
<Radio name='radioRipple' ripple='secondary' />
<Radio name='radioRipple' ripple='tertiary' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"DefaultChecked"}),e.jsx("p",{className:"description",children:"defaultChecked 속성으로 라디오박스를 기본체크 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{}),e.jsx(d,{defaultChecked:!0})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:g,children:e.jsx("i",{className:"i-code w14 h14"})})}),R?e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
import { Radio } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Radio />
      <Radio defaultChecked />
    </div>
  )
}

export default Example;`}):e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio />
<Radio defaultChecked />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Disabled"}),e.jsx("p",{className:"description",children:"disabled 속성으로 라디오박스를 비활성화 할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{}),e.jsx(d,{disabled:!0}),e.jsx(d,{defaultChecked:!0}),e.jsx(d,{disabled:!0,defaultChecked:!0})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(m,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:z,children:e.jsx("i",{className:"i-code w14 h14"})})}),C?e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):e.jsx(r,{theme:"dark",extensions:[l({jsx:!0})],value:`<>
<Radio />
<Radio disabled />
<Radio defaultChecked />
<Radio disabled defaultChecked />
</>`})]})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"ID / Name / Value"}),e.jsx("p",{className:"description",children:"id / name / value 속성은 html과 사용방법이 같습니다."})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:s,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(w,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"theme"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["theme 속성은 color, ripple 2가지 속성에 영향을 미칩니다. ",e.jsx("br",{}),"더 상세한 커스텀을 원할 경우 theme 대신 위 2가지 속성을 조절하시면 됩니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:["'large'",e.jsx("p",{className:"b",children:"'medium'"}),"'small' ",e.jsx("br",{}),"'extraSmall'"]}),e.jsx("td",{children:"크기를 조절하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["체크 시 아이콘 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ripple"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),e.jsxs("td",{children:["클릭 시 인터렉션 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultChecked"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["기본체크 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"disabled"}),e.jsx("td",{children:"boolean"}),e.jsxs("td",{children:["비활성화 속성으로 불리언(Boolean) 타입입니다. ",e.jsx("br",{}),"속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"id"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["id 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"name"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["name 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["value 값을 부여하는 속성입니다. ",e.jsx("br",{}),"문자열 타입으로 자유롭게 부여 가능합니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{s.current.scrollIntoView()},children:" API"})]})]})})};export{D as default};
