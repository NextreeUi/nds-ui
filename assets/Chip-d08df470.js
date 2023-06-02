import{j as e,s as c,B as y,r as p}from"./index-22156145.js";import{R as h,j as x}from"./index-10abc73d.js";import{T as Q}from"./Table-f0ee0c43.js";const d=({label:C,theme:t,variant:u="normal",radius:m="round",size:n="medium",deletable:o,bg:i,otl:r,color:l,btnTheme:a,iconBg:s,deleteIcon:v,id:g,className:f})=>{u=="normal"?(t=t||"graye",t=="black"?(i=i||"black",r=r||"black",l=l||"white",a=a||"white",s=s||"white9"):t=="gray1"?(i=i||"gray1",r=r||"gray1",l=l||"white",a=a||"white",s=s||"white9"):t=="gray2"?(i=i||"gray2",r=r||"gray2",l=l||"white",a=a||"white",s=s||"white9"):t=="gray3"?(i=i||"gray3",r=r||"gray3",l=l||"white",a=a||"white",s=s||"white9"):t=="gray4"?(i=i||"gray4",r=r||"gray4",l=l||"white",a=a||"white",s=s||"white9"):t=="gray5"?(i=i||"gray5",r=r||"gray5",l=l||"white",a=a||"white",s=s||"white9"):t=="gray6"?(i=i||"gray6",r=r||"gray6",l=l||"white",a=a||"white",s=s||"white9"):t=="gray7"?(i=i||"gray7",r=r||"gray7",l=l||"white",a=a||"white",s=s||"white9"):t=="gray8"?(i=i||"gray8",r=r||"gray8",l=l||"white",a=a||"white",s=s||"white9"):t=="gray9"?(i=i||"gray9",r=r||"gray9",l=l||"white",a=a||"white",s=s||"white9"):t=="graya"?(i=i||"graya",r=r||"graya",l=l||"gray3",a=a||"black",s=s||"grayc"):t=="grayb"?(i=i||"grayb",r=r||"grayb",l=l||"gray3",a=a||"black",s=s||"grayc"):t=="grayc"?(i=i||"grayc",r=r||"grayc",l=l||"gray3",a=a||"black",s=s||"grayc"):t=="grayd"?(i=i||"grayd",r=r||"grayd",l=l||"gray6",a=a||"black",s=s||"grayc"):t=="graye"?(i=i||"graye",r=r||"graye",l=l||"gray6",a=a||"black",s=s||"grayc"):t=="grayf5"?(i=i||"grayf5",r=r||"grayf5",l=l||"gray6",a=a||"black",s=s||"grayc"):t=="grayf8"&&(i=i||"grayf8",r=r||"grayf8",l=l||"gray6",a=a||"black",s=s||"grayc")):u=="contained"?(t=t||"graye",t=="black"?(i=i||"black",l=l||"white",a=a||"white",s=s||"white9"):t=="gray1"?(i=i||"gray1",l=l||"white",a=a||"white",s=s||"white9"):t=="gray2"?(i=i||"gray2",l=l||"white",a=a||"white",s=s||"white9"):t=="gray3"?(i=i||"gray3",l=l||"white",a=a||"white",s=s||"white9"):t=="gray4"?(i=i||"gray4",l=l||"white",a=a||"white",s=s||"white9"):t=="gray5"?(i=i||"gray5",l=l||"white",a=a||"white",s=s||"white9"):t=="gray6"?(i=i||"gray6",l=l||"white",a=a||"white",s=s||"white9"):t=="gray7"?(i=i||"gray7",l=l||"white",a=a||"white",s=s||"white9"):t=="gray8"?(i=i||"gray8",l=l||"white",a=a||"white",s=s||"white9"):t=="gray9"?(i=i||"gray9",l=l||"white",a=a||"white",s=s||"white9"):t=="graya"?(i=i||"graya",l=l||"gray3",a=a||"black",s=s||"grayc"):t=="grayb"?(i=i||"grayb",l=l||"gray3",a=a||"black",s=s||"grayc"):t=="grayc"?(i=i||"grayc",l=l||"gray3",a=a||"black",s=s||"grayc"):t=="grayd"?(i=i||"grayd",l=l||"gray6",a=a||"black",s=s||"grayc"):t=="graye"?(i=i||"graye",l=l||"gray6",a=a||"black",s=s||"grayc"):t=="grayf5"?(i=i||"grayf5",l=l||"gray6",a=a||"black",s=s||"grayc"):t=="grayf8"&&(i=i||"grayf8",l=l||"gray6",a=a||"black",s=s||"grayc")):u=="outlined"&&(t=t||"gray9",t=="black"?(r=r||"black",l=l||"black",a=a||"black",s=s||"black"):t=="gray1"?(r=r||"gray1",l=l||"gray1",a=a||"gray1",s=s||"gray1"):t=="gray2"?(r=r||"gray2",l=l||"gray2",a=a||"gray2",s=s||"gray2"):t=="gray3"?(r=r||"gray3",l=l||"gray3",a=a||"gray3",s=s||"gray3"):t=="gray4"?(r=r||"gray4",l=l||"gray4",a=a||"gray4",s=s||"gray4"):t=="gray5"?(r=r||"gray5",l=l||"gray5",a=a||"gray5",s=s||"gray5"):t=="gray6"?(r=r||"gray6",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="gray7"?(r=r||"gray7",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="gray8"?(r=r||"gray8",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="gray9"?(r=r||"gray9",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="graya"?(r=r||"graya",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="grayb"?(r=r||"grayb",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="grayc"?(r=r||"grayc",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="grayd"?(r=r||"grayd",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="graye"?(r=r||"graye",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="grayf5"?(r=r||"grayf5",l=l||"gray6",a=a||"gray6",s=s||"gray6"):t=="grayf8"&&(r=r||"grayf8",l=l||"gray6",a=a||"gray6",s=s||"gray6"));const k=j=>j?c[`bg-${j}`]:"",N=j=>j?c[`otl-${j}`]:"",b=j=>j?c[`color-${j}`]:"",w=j=>j?c[`bg-${j}`]:"";return e.jsx(e.Fragment,{children:e.jsxs("div",{className:c.chip+" "+(o=="right"?c["deletable-right"]:o=="left"?c["deletable-left"]:"")+" "+(m=="rect"?c["radius-rect"]:m=="normal"?c["radius-normal"]:m=="round"?c["radius-round"]:"")+" "+k(i)+" "+N(r)+" "+b(l)+" "+(n=="large"?c["size-large"]:n=="medium"?c["size-medium"]:n=="small"?c["size-small"]:n=="extraSmall"?c["size-extraSmall"]:"")+" "+(f||""),id:g,children:[o=="left"?e.jsx(y,{variant:u=="outlined"?"outlined":"normal",className:c["chip-btn"]+" "+(n=="large"?c["size-large"]:n=="medium"?c["size-medium"]:n=="small"?c["size-small"]:n=="extraSmall"?c["size-extraSmall"]:""),theme:a,children:v||e.jsx("i",{className:c.icon+" "+(u=="outlined"?c.outlined:"")+" "+w(s)})}):e.jsx(e.Fragment,{}),C,o=="right"?e.jsx(y,{variant:u=="outlined"?"outlined":"normal",className:c["chip-btn"]+" "+(n=="large"?c["size-large"]:n=="medium"?c["size-medium"]:n=="small"?c["size-small"]:n=="extraSmall"?c["size-extraSmall"]:""),theme:a,children:v||e.jsx("i",{className:c.icon+" "+(u=="outlined"?c.outlined:"")+" "+w(s)})}):e.jsx(e.Fragment,{})]})})},Z=()=>{const C=p.useRef(),t=p.useRef(),u=p.useRef(),[m,n]=p.useState(!1),o=()=>{n(!m)},[i,r]=p.useState(!1),l=()=>{r(!i)},[a,s]=p.useState(!1),v=()=>{s(!a)},[g,f]=p.useState(!1),k=()=>{f(!g)},[N,b]=p.useState(!1),w=()=>{b(!N)},[j,M]=p.useState(!1),V=()=>{M(!j)},[S,q]=p.useState(!1),D=()=>{q(!S)},[z,F]=p.useState(!1),O=()=>{F(!z)},[E,P]=p.useState(!1),L=()=>{P(!E)},[R,A]=p.useState(!1),G=()=>{A(!R)},[I,H]=p.useState(!1),W=()=>{H(!I)},[$,J]=p.useState(!1),K=()=>{J(!$)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"layout-all",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h1",{children:"Chip"}),e.jsx("p",{className:"description",children:"클릭 인터렉션이 있는 Checkbox 컴포넌트입니다."})]}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:C,children:"Import"}),e.jsx("div",{className:"codeMirror",children:e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import { Chip } from 'nds-ui/component';
// or
import Chip from 'nds-ui/component/Chip';`})}),e.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",e.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",e.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),e.jsx("div",{className:"layout-small",children:e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:t,children:"Property"}),e.jsxs("p",{className:"description",children:["Chip 컴포넌트 안에는 다양한 속성들이 있습니다. ",e.jsx("br",{}),"label / size / theme / variant / bg / otl / color / btnTheme / iconBg / radius / deletable / deleteIcon 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Label"}),e.jsxs("p",{className:"description",children:["기본적인 Chip 형태입니다. ",e.jsx("br",{}),"label 속성을 이용하여 내용을 입력할 수 있습니다."]})]}),e.jsx("div",{className:"layout-example flexColumn",children:e.jsx(d,{label:"chip"})}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:o,children:e.jsx("i",{className:"i-code w14 h14"})})}),m?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Chip label='chip'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Theme"}),e.jsx("p",{className:"description",children:"theme 속성을 이용하여 색상을 설정할 수 있습니다. theme 속성은 bt / otl / color / btnTheme / iconBg 5개의 속성에 영향을 줍니다. 더 자세한 커스텀을 원하는 경우 위 5개의 속성을 추가적으로 사용하시면 됩니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",theme:"gray3"}),e.jsx(d,{label:"chip",theme:"gray6"}),e.jsx(d,{label:"chip",theme:"grayc"}),e.jsx(d,{label:"chip",theme:"graye"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:l,children:e.jsx("i",{className:"i-code w14 h14"})})}),i?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' theme='gray3'/>
      <Chip label='chip' theme='gray6'/>
      <Chip label='chip' theme='grayc'/>
      <Chip label='chip' theme='graye'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' theme='gray3'/>
<Chip label='chip' theme='gray6'/>
<Chip label='chip' theme='grayc'/>
<Chip label='chip' theme='graye'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Variant"}),e.jsxs("p",{className:"description",children:["variant 속성을 이용하여 타입을 설정할 수 있습니다. ",e.jsx("br",{}),"normal / contained / outlined 3가지 값이 있으며 기본 값은 normal 입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip"}),e.jsx(d,{label:"chip",variant:"outlined"}),e.jsx(d,{label:"chip",variant:"contained"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:v,children:e.jsx("i",{className:"i-code w14 h14"})})}),a?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' />
      <Chip label='chip' variant='outlined'/>
      <Chip label='chip' variant='contained'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' />
<Chip label='chip' variant='outlined'/>
<Chip label='chip' variant='contained'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Radius"}),e.jsxs("p",{className:"description",children:["radius 속성을 이용하여 굴곡을 설정할 수 있습니다. ",e.jsx("br",{}),"rect / normal / round 3가지 값이 있으며 기본 값은 round 입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",radius:"rect"}),e.jsx(d,{label:"chip",radius:"normal"}),e.jsx(d,{label:"chip"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:k,children:e.jsx("i",{className:"i-code w14 h14"})})}),g?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' />
      <Chip label='chip' variant='outlined'/>
      <Chip label='chip' variant='contained'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' />
<Chip label='chip' variant='outlined'/>
<Chip label='chip' variant='contained'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Size"}),e.jsxs("p",{className:"description",children:["size 속성을 이용하여 크기를 설정할 수 있습니다. ",e.jsx("br",{}),"large / medium / small / extraSmall 4가지 값이 있으며 기본 값은 medium 입니다."]})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",size:"large"}),e.jsx(d,{label:"chip"}),e.jsx(d,{label:"chip",size:"small"}),e.jsx(d,{label:"chip",size:"extraSmall"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:w,children:e.jsx("i",{className:"i-code w14 h14"})})}),N?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' size='large'/>
      <Chip label='chip' />
      <Chip label='chip' size='small'/>
      <Chip label='chip' size='extraSmall'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' size='large'/>
<Chip label='chip' />
<Chip label='chip' size='small'/>
<Chip label='chip' size='extraSmall'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Deletable"}),e.jsx("p",{className:"description",children:"deletable 속성을 이용하여 삭제버튼을 나타낼 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip"}),e.jsx(d,{label:"chip",deletable:"right"}),e.jsx(d,{label:"chip",deletable:"left"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:W,children:e.jsx("i",{className:"i-code w14 h14"})})}),I?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' />
      <Chip label='chip' deletable='right'/>
      <Chip label='chip' deletable='left'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' />
<Chip label='chip' deletable='right'/>
<Chip label='chip' deletable='left'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Bg"}),e.jsx("p",{className:"description",children:"bg 속성을 이용하여 배경색을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",bg:"gray6"}),e.jsx(d,{label:"chip",bg:"grayc"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:V,children:e.jsx("i",{className:"i-code w14 h14"})})}),j?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' bg='gray6'/>
      <Chip label='chip' bg='grayc'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' bg='gray6'/>
<Chip label='chip' bg='grayc'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Outlined"}),e.jsx("p",{className:"description",children:"otl 속성을 이용하여 외곽선을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",otl:"gray6"}),e.jsx(d,{label:"chip",otl:"grayc"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:D,children:e.jsx("i",{className:"i-code w14 h14"})})}),S?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' otl='gray6'/>
      <Chip label='chip' otl='grayc'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' otl='gray6'/>
<Chip label='chip' otl='grayc'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Color"}),e.jsx("p",{className:"description",children:"color 속성을 이용하여 글자색을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",color:"black"}),e.jsx(d,{label:"chip",color:"grayc"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:O,children:e.jsx("i",{className:"i-code w14 h14"})})}),z?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' color='gray6'/>
      <Chip label='chip' color='grayc'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' color='gray6'/>
<Chip label='chip' color='grayc'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Button Theme"}),e.jsx("p",{className:"description",children:"btnTheme 속성을 이용하여 삭제버튼의 인터렉션을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",deletable:"right",btnTheme:"primary"}),e.jsx(d,{label:"chip",deletable:"right",btnTheme:"white"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:L,children:e.jsx("i",{className:"i-code w14 h14"})})}),E?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' deletable='right' btnTheme='primary'/>
      <Chip label='chip' deletable='right' btnTheme='white'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' deletable='right' btnTheme='primary'/>
<Chip label='chip' deletable='right' btnTheme='white'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Icon Background"}),e.jsx("p",{className:"description",children:"iconBg 속성을 이용하여 삭제버튼의 색상을 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",deletable:"right",iconBg:"grayc"}),e.jsx(d,{label:"chip",deletable:"right",iconBg:"black"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:G,children:e.jsx("i",{className:"i-code w14 h14"})})}),R?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' deletable='right' iconBg='grayc'/>
      <Chip label='chip' deletable='right' iconBg='black'/>
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' deletable='right' iconBg='grayc'/>
<Chip label='chip' deletable='right' iconBg='black'/>
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h3",{children:"Delete Icon"}),e.jsx("p",{className:"description",children:"deleteIcon 속성을 이용하여 삭제버튼 아이콘을 커스텀 설정할 수 있습니다."})]}),e.jsxs("div",{className:"layout-example",children:[e.jsx(d,{label:"chip",deletable:"right",deleteIcon:e.jsx("p",{className:"size14 txt-black",children:"O"})}),e.jsx(d,{label:"chip",deletable:"right"})]}),e.jsxs("div",{className:"codeMirror",children:[e.jsx("div",{className:"btn-wrap",children:e.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",hoverBg:"white",hoverColor:"black",theme:"white",onClick:K,children:e.jsx("i",{className:"i-code w14 h14"})})}),$?e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' deletable='right' deleteIcon={<p className='size14 txt-black'>O</p>}/>
      <Chip label='chip' deletable='right' />
    </div>
  )
}

export default Example;`}):e.jsx(h,{theme:"dark",extensions:[x({jsx:!0})],value:`<>
<Chip label='chip' deletable='right' deleteIcon={<p className='size14 txt-black'>O</p>}/>
<Chip label='chip' deletable='right' />
</>`})]})]}),e.jsxs("div",{className:"layout-small",children:[e.jsxs("div",{className:"layout-title",children:[e.jsx("h2",{ref:u,children:" API "}),e.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),e.jsx(Q,{classWrap:"table-props",colGroup:e.jsxs(e.Fragment,{children:[e.jsx("col",{className:"table-props-col1"}),e.jsx("col",{className:"table-props-col2"})]}),tHead:e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"props"}),e.jsx("th",{children:e.jsx("div",{className:"table-props-value",children:"value"})}),e.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"lable"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"내용을 설정합니다. 문자열(string) 타입입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"theme"}),e.jsx("td",{children:"$grays"}),e.jsxs("td",{children:["색상을 설정합니다.",e.jsx("br",{}),"theme 속성은 bg / otl / color / btnTheme / iconBg 5가지 속성에 영향을 줍니다. ",e.jsx("br",{}),"더 자세한 색상 설정은 위 5가지 속성을 이용하시면 됩니다. ",e.jsx("br",{}),"Variable의 $grays 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"variant"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"'noraml'"}),"'outlined' ",e.jsx("br",{}),"'contained'"]}),e.jsxs("td",{children:["'normal' : 외곽선과 배경색이 있습니다. ",e.jsx("br",{}),"'outlined' : 외곽선은 있고 배경색은 없습니다. ",e.jsx("br",{}),"'contained' : 외곽선은 없고 배경색은 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"radius"}),e.jsxs("td",{children:["'rect' ",e.jsx("br",{}),"'normal' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'round'"})]}),e.jsx("td",{children:"굴곡을 설정하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"size"}),e.jsxs("td",{children:["'large' ",e.jsx("br",{}),e.jsx("p",{className:"b",children:"'medium'"}),"'small' ",e.jsx("br",{}),"'extraSmall'"]}),e.jsx("td",{children:"크기를 설정하는 값입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deletable"}),e.jsxs("td",{children:[e.jsx("p",{className:"b",children:"null"}),"'right' ",e.jsx("br",{}),"'left'"]}),e.jsx("td",{children:"삭제버튼을 나타내는 속성입니다."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"bg"}),e.jsx("td",{children:"$colors"}),e.jsxs("td",{children:["배경색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"otl"}),e.jsx("td",{children:"$colors"}),e.jsxs("td",{children:["외곽선 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"color"}),e.jsx("td",{children:"$colors"}),e.jsxs("td",{children:["글자색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"btnTheme"}),e.jsx("td",{children:"$colors"}),e.jsxs("td",{children:["삭제버튼의 인터렉션 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"iconBg"}),e.jsx("td",{children:"$colors"}),e.jsxs("td",{children:["삭제버튼 아이콘의 색을 조절하는 속성입니다. ",e.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deleteIcon"}),e.jsx("td",{children:"element"}),e.jsxs("td",{children:["삭제버튼 아이콘을 커스텀 설정하는 속성입니다. ",e.jsx("br",{}),"html 태그를 삽입할 수 있습니다."]})]})]})})]}),e.jsxs("div",{className:"layout-scroll",children:[e.jsx("p",{children:"Content"}),e.jsx("a",{onClick:()=>{C.current.scrollIntoView()},children:" Import"}),e.jsx("a",{onClick:()=>{t.current.scrollIntoView()},children:" Property"}),e.jsx("a",{onClick:()=>{u.current.scrollIntoView()},children:" API"})]})]})})};export{Z as default};
