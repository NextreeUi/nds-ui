import{j as a,s as c,B as y,r as p}from"./index-f25ddf3a.js";import{R as x,j as h}from"./index-2a00b8a8.js";import{T as Q}from"./Table-7ce808f9.js";const t=({label:f,theme:d,variant:u="normal",radius:m="round",size:n="medium",deletable:o,bg:i,otl:r,color:l,btnTheme:e,iconBg:s,deleteIcon:C,id:v,className:g})=>{u=="normal"?(d=d||"graye",d=="black"?(i=i||"black",r=r||"black",l=l||"white",e=e||"white",s=s||"white9"):d=="gray1"?(i=i||"gray1",r=r||"gray1",l=l||"white",e=e||"white",s=s||"white9"):d=="gray2"?(i=i||"gray2",r=r||"gray2",l=l||"white",e=e||"white",s=s||"white9"):d=="gray3"?(i=i||"gray3",r=r||"gray3",l=l||"white",e=e||"white",s=s||"white9"):d=="gray4"?(i=i||"gray4",r=r||"gray4",l=l||"white",e=e||"white",s=s||"white9"):d=="gray5"?(i=i||"gray5",r=r||"gray5",l=l||"white",e=e||"white",s=s||"white9"):d=="gray6"?(i=i||"gray6",r=r||"gray6",l=l||"white",e=e||"white",s=s||"white9"):d=="gray7"?(i=i||"gray7",r=r||"gray7",l=l||"white",e=e||"white",s=s||"white9"):d=="gray8"?(i=i||"gray8",r=r||"gray8",l=l||"white",e=e||"white",s=s||"white9"):d=="gray9"?(i=i||"gray9",r=r||"gray9",l=l||"white",e=e||"white",s=s||"white9"):d=="graya"?(i=i||"graya",r=r||"graya",l=l||"gray3",e=e||"black",s=s||"grayc"):d=="grayb"?(i=i||"grayb",r=r||"grayb",l=l||"gray3",e=e||"black",s=s||"grayc"):d=="grayc"?(i=i||"grayc",r=r||"grayc",l=l||"gray3",e=e||"black",s=s||"grayc"):d=="grayd"?(i=i||"grayd",r=r||"grayd",l=l||"gray6",e=e||"black",s=s||"grayc"):d=="graye"?(i=i||"graye",r=r||"graye",l=l||"gray6",e=e||"black",s=s||"grayc"):d=="grayf5"?(i=i||"grayf5",r=r||"grayf5",l=l||"gray6",e=e||"black",s=s||"grayc"):d=="grayf8"&&(i=i||"grayf8",r=r||"grayf8",l=l||"gray6",e=e||"black",s=s||"grayc")):u=="contained"?(d=d||"graye",d=="black"?(i=i||"black",l=l||"white",e=e||"white",s=s||"white9"):d=="gray1"?(i=i||"gray1",l=l||"white",e=e||"white",s=s||"white9"):d=="gray2"?(i=i||"gray2",l=l||"white",e=e||"white",s=s||"white9"):d=="gray3"?(i=i||"gray3",l=l||"white",e=e||"white",s=s||"white9"):d=="gray4"?(i=i||"gray4",l=l||"white",e=e||"white",s=s||"white9"):d=="gray5"?(i=i||"gray5",l=l||"white",e=e||"white",s=s||"white9"):d=="gray6"?(i=i||"gray6",l=l||"white",e=e||"white",s=s||"white9"):d=="gray7"?(i=i||"gray7",l=l||"white",e=e||"white",s=s||"white9"):d=="gray8"?(i=i||"gray8",l=l||"white",e=e||"white",s=s||"white9"):d=="gray9"?(i=i||"gray9",l=l||"white",e=e||"white",s=s||"white9"):d=="graya"?(i=i||"graya",l=l||"gray3",e=e||"black",s=s||"grayc"):d=="grayb"?(i=i||"grayb",l=l||"gray3",e=e||"black",s=s||"grayc"):d=="grayc"?(i=i||"grayc",l=l||"gray3",e=e||"black",s=s||"grayc"):d=="grayd"?(i=i||"grayd",l=l||"gray6",e=e||"black",s=s||"grayc"):d=="graye"?(i=i||"graye",l=l||"gray6",e=e||"black",s=s||"grayc"):d=="grayf5"?(i=i||"grayf5",l=l||"gray6",e=e||"black",s=s||"grayc"):d=="grayf8"&&(i=i||"grayf8",l=l||"gray6",e=e||"black",s=s||"grayc")):u=="outlined"&&(d=d||"gray9",d=="black"?(r=r||"black",l=l||"black",e=e||"black",s=s||"black"):d=="gray1"?(r=r||"gray1",l=l||"gray1",e=e||"gray1",s=s||"gray1"):d=="gray2"?(r=r||"gray2",l=l||"gray2",e=e||"gray2",s=s||"gray2"):d=="gray3"?(r=r||"gray3",l=l||"gray3",e=e||"gray3",s=s||"gray3"):d=="gray4"?(r=r||"gray4",l=l||"gray4",e=e||"gray4",s=s||"gray4"):d=="gray5"?(r=r||"gray5",l=l||"gray5",e=e||"gray5",s=s||"gray5"):d=="gray6"?(r=r||"gray6",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="gray7"?(r=r||"gray7",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="gray8"?(r=r||"gray8",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="gray9"?(r=r||"gray9",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="graya"?(r=r||"graya",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="grayb"?(r=r||"grayb",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="grayc"?(r=r||"grayc",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="grayd"?(r=r||"grayd",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="graye"?(r=r||"graye",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="grayf5"?(r=r||"grayf5",l=l||"gray6",e=e||"gray6",s=s||"gray6"):d=="grayf8"&&(r=r||"grayf8",l=l||"gray6",e=e||"gray6",s=s||"gray6"));const k=j=>j?c[`bg-${j}`]:"",N=j=>j?c[`otl-${j}`]:"",b=j=>j?c[`color-${j}`]:"",w=j=>j?c[`bg-${j}`]:"";return a.jsx(a.Fragment,{children:a.jsxs("div",{className:c.chip+" "+(o=="right"?c["deletable-right"]:o=="left"?c["deletable-left"]:"")+" "+(m=="rect"?c["radius-rect"]:m=="normal"?c["radius-normal"]:m=="round"?c["radius-round"]:"")+" "+k(i)+" "+N(r)+" "+b(l)+" "+(n=="large"?c["size-large"]:n=="medium"?c["size-medium"]:n=="small"?c["size-small"]:n=="extraSmall"?c["size-extraSmall"]:"")+" "+(g||""),id:v,children:[o=="left"?a.jsx(y,{variant:u=="outlined"?"outlined":"normal",className:c["chip-btn"]+" "+(n=="large"?c["size-large"]:n=="medium"?c["size-medium"]:n=="small"?c["size-small"]:n=="extraSmall"?c["size-extraSmall"]:""),theme:e,children:C||a.jsx("i",{className:c.icon+" "+(u=="outlined"?c.outlined:"")+" "+w(s)})}):a.jsx(a.Fragment,{}),f,o=="right"?a.jsx(y,{variant:u=="outlined"?"outlined":"normal",className:c["chip-btn"]+" "+(n=="large"?c["size-large"]:n=="medium"?c["size-medium"]:n=="small"?c["size-small"]:n=="extraSmall"?c["size-extraSmall"]:""),theme:e,children:C||a.jsx("i",{className:c.icon+" "+(u=="outlined"?c.outlined:"")+" "+w(s)})}):a.jsx(a.Fragment,{})]})})},Z=()=>{const f=p.useRef(),d=p.useRef(),u=p.useRef(),[m,n]=p.useState(!1),o=()=>{n(!m)},[i,r]=p.useState(!1),l=()=>{r(!i)},[e,s]=p.useState(!1),C=()=>{s(!e)},[v,g]=p.useState(!1),k=()=>{g(!v)},[N,b]=p.useState(!1),w=()=>{b(!N)},[j,M]=p.useState(!1),V=()=>{M(!j)},[S,q]=p.useState(!1),D=()=>{q(!S)},[z,F]=p.useState(!1),O=()=>{F(!z)},[E,P]=p.useState(!1),L=()=>{P(!E)},[R,A]=p.useState(!1),G=()=>{A(!R)},[I,H]=p.useState(!1),W=()=>{H(!I)},[$,J]=p.useState(!1),K=()=>{J(!$)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"layout-all",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h1",{children:"Chip"}),a.jsx("p",{className:"description",children:"클릭 인터렉션이 있는 Checkbox 컴포넌트입니다."})]}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:f,children:"Import"}),a.jsx("div",{className:"codeMirror",children:a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import { Chip } from 'nds-ui/component';
// or
import Chip from 'nds-ui/component/Chip';`})}),a.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",a.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",a.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:d,children:"Property"}),a.jsxs("p",{className:"description",children:["Chip 컴포넌트 안에는 다양한 속성들이 있습니다. ",a.jsx("br",{}),"label / size / theme / variant / bg / otl / color / btnTheme / iconBg / radius / deletable / deleteIcon 등 다양한 속성들이 있는데, 그 사용법을 알아보겠습니다."]})]})}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Label"}),a.jsxs("p",{className:"description",children:["기본적인 Chip 형태입니다. ",a.jsx("br",{}),"label 속성을 이용하여 내용을 입력할 수 있습니다."]})]}),a.jsx("div",{className:"layout-example flexColumn",children:a.jsx(t,{label:"chip"})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:o,children:a.jsx("i",{className:"i-code w14 h14"})})}),m?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Chip label='chip'/>
    </div>
  )
}

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Theme"}),a.jsx("p",{className:"description",children:"theme 속성을 이용하여 색상을 설정할 수 있습니다. theme 속성은 bt / otl / color / btnTheme / iconBg 5개의 속성에 영향을 줍니다. 더 자세한 커스텀을 원하는 경우 위 5개의 속성을 추가적으로 사용하시면 됩니다."})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",theme:"gray3"}),a.jsx(t,{label:"chip",theme:"gray6"}),a.jsx(t,{label:"chip",theme:"grayc"}),a.jsx(t,{label:"chip",theme:"graye"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:l,children:a.jsx("i",{className:"i-code w14 h14"})})}),i?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' theme='gray3'/>
<Chip label='chip' theme='gray6'/>
<Chip label='chip' theme='grayc'/>
<Chip label='chip' theme='graye'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Variant"}),a.jsxs("p",{className:"description",children:["variant 속성을 이용하여 타입을 설정할 수 있습니다. ",a.jsx("br",{}),"normal / contained / outlined 3가지 값이 있으며 기본 값은 normal 입니다."]})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip"}),a.jsx(t,{label:"chip",variant:"outlined"}),a.jsx(t,{label:"chip",variant:"contained"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:C,children:a.jsx("i",{className:"i-code w14 h14"})})}),e?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' />
<Chip label='chip' variant='outlined'/>
<Chip label='chip' variant='contained'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Radius"}),a.jsxs("p",{className:"description",children:["radius 속성을 이용하여 굴곡을 설정할 수 있습니다. ",a.jsx("br",{}),"rect / normal / round 3가지 값이 있으며 기본 값은 round 입니다."]})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",radius:"rect"}),a.jsx(t,{label:"chip",radius:"normal"}),a.jsx(t,{label:"chip"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:k,children:a.jsx("i",{className:"i-code w14 h14"})})}),v?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' />
<Chip label='chip' variant='outlined'/>
<Chip label='chip' variant='contained'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Size"}),a.jsxs("p",{className:"description",children:["size 속성을 이용하여 크기를 설정할 수 있습니다. ",a.jsx("br",{}),"large / medium / small / extraSmall 4가지 값이 있으며 기본 값은 medium 입니다."]})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",size:"large"}),a.jsx(t,{label:"chip"}),a.jsx(t,{label:"chip",size:"small"}),a.jsx(t,{label:"chip",size:"extraSmall"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:w,children:a.jsx("i",{className:"i-code w14 h14"})})}),N?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' size='large'/>
<Chip label='chip' />
<Chip label='chip' size='small'/>
<Chip label='chip' size='extraSmall'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Deletable"}),a.jsx("p",{className:"description",children:"deletable 속성을 이용하여 삭제버튼을 나타낼 수 있습니다."})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip"}),a.jsx(t,{label:"chip",deletable:"right"}),a.jsx(t,{label:"chip",deletable:"left"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:W,children:a.jsx("i",{className:"i-code w14 h14"})})}),I?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' />
<Chip label='chip' deletable='right'/>
<Chip label='chip' deletable='left'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Bg"}),a.jsx("p",{className:"description",children:"bg 속성을 이용하여 배경색을 설정할 수 있습니다."})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",bg:"gray6"}),a.jsx(t,{label:"chip",bg:"grayc"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:V,children:a.jsx("i",{className:"i-code w14 h14"})})}),j?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' bg='gray6'/>
<Chip label='chip' bg='grayc'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Outlined"}),a.jsx("p",{className:"description",children:"otl 속성을 이용하여 외곽선을 설정할 수 있습니다."})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",otl:"gray6"}),a.jsx(t,{label:"chip",otl:"grayc"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:D,children:a.jsx("i",{className:"i-code w14 h14"})})}),S?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' otl='gray6'/>
<Chip label='chip' otl='grayc'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Color"}),a.jsx("p",{className:"description",children:"color 속성을 이용하여 글자색을 설정할 수 있습니다."})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",color:"black"}),a.jsx(t,{label:"chip",color:"grayc"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:O,children:a.jsx("i",{className:"i-code w14 h14"})})}),z?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' color='gray6'/>
<Chip label='chip' color='grayc'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Button Theme"}),a.jsx("p",{className:"description",children:"btnTheme 속성을 이용하여 삭제버튼의 인터렉션을 설정할 수 있습니다."})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",deletable:"right",btnTheme:"primary"}),a.jsx(t,{label:"chip",deletable:"right",btnTheme:"white"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:L,children:a.jsx("i",{className:"i-code w14 h14"})})}),E?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' deletable='right' btnTheme='primary'/>
<Chip label='chip' deletable='right' btnTheme='white'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Icon Background"}),a.jsx("p",{className:"description",children:"iconBg 속성을 이용하여 삭제버튼의 색상을 설정할 수 있습니다."})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",deletable:"right",iconBg:"grayc"}),a.jsx(t,{label:"chip",deletable:"right",iconBg:"black"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:G,children:a.jsx("i",{className:"i-code w14 h14"})})}),R?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' deletable='right' iconBg='grayc'/>
<Chip label='chip' deletable='right' iconBg='black'/>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Delete Icon"}),a.jsx("p",{className:"description",children:"deleteIcon 속성을 이용하여 삭제버튼 아이콘을 커스텀 설정할 수 있습니다."})]}),a.jsxs("div",{className:"layout-example",children:[a.jsx(t,{label:"chip",deletable:"right",deleteIcon:a.jsx("p",{className:"size14 txt-black",children:"O"})}),a.jsx(t,{label:"chip",deletable:"right"})]}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(y,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:K,children:a.jsx("i",{className:"i-code w14 h14"})})}),$?a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`import * as React from 'react';
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

export default Example;`}):a.jsx(x,{theme:"dark",extensions:[h({jsx:!0})],value:`<>
<Chip label='chip' deletable='right' deleteIcon={<p className='size14 txt-black'>O</p>}/>
<Chip label='chip' deletable='right' />
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:u,children:" API "}),a.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),a.jsx(Q,{classWrap:"table-props",colGroup:a.jsxs(a.Fragment,{children:[a.jsx("col",{className:"table-props-col1"}),a.jsx("col",{className:"table-props-col2"})]}),tHead:a.jsx(a.Fragment,{children:a.jsxs("tr",{children:[a.jsx("th",{children:"props"}),a.jsx("th",{children:a.jsx("div",{className:"table-props-value",children:"value"})}),a.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:a.jsxs(a.Fragment,{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"lable"}),a.jsx("td",{children:"string"}),a.jsx("td",{children:"내용을 설정합니다. 문자열(string) 타입입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"theme"}),a.jsx("td",{children:"$grays"}),a.jsxs("td",{children:["색상을 설정합니다.",a.jsx("br",{}),"theme 속성은 bg / otl / color / btnTheme / iconBg 5가지 속성에 영향을 줍니다. ",a.jsx("br",{}),"더 자세한 색상 설정은 위 5가지 속성을 이용하시면 됩니다. ",a.jsx("br",{}),"Variable의 $grays 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"variant"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'noraml'"}),"'outlined' ",a.jsx("br",{}),"'contained'"]}),a.jsxs("td",{children:["'normal' : 외곽선과 배경색이 있습니다. ",a.jsx("br",{}),"'outlined' : 외곽선은 있고 배경색은 없습니다. ",a.jsx("br",{}),"'contained' : 외곽선은 없고 배경색은 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"radius"}),a.jsxs("td",{children:["'rect' ",a.jsx("br",{}),"'normal' ",a.jsx("br",{}),a.jsx("p",{className:"b",children:"'round'"})]}),a.jsx("td",{children:"굴곡을 설정하는 값입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"size"}),a.jsxs("td",{children:["'large' ",a.jsx("br",{}),a.jsx("p",{className:"b",children:"'medium'"}),"'small' ",a.jsx("br",{}),"'extraSmall'"]}),a.jsx("td",{children:"크기를 설정하는 값입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"deletable"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"null"}),"'right' ",a.jsx("br",{}),"'left'"]}),a.jsx("td",{children:"삭제버튼을 나타내는 속성입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"bg"}),a.jsx("td",{children:"$colors"}),a.jsxs("td",{children:["배경색을 조절하는 속성입니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"otl"}),a.jsx("td",{children:"$colors"}),a.jsxs("td",{children:["외곽선 색을 조절하는 속성입니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"color"}),a.jsx("td",{children:"$colors"}),a.jsxs("td",{children:["글자색을 조절하는 속성입니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"btnTheme"}),a.jsx("td",{children:"$colors"}),a.jsxs("td",{children:["삭제버튼의 인터렉션 색을 조절하는 속성입니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"iconBg"}),a.jsx("td",{children:"$colors"}),a.jsxs("td",{children:["삭제버튼 아이콘의 색을 조절하는 속성입니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"deleteIcon"}),a.jsx("td",{children:"element"}),a.jsxs("td",{children:["삭제버튼 아이콘을 커스텀 설정하는 속성입니다. ",a.jsx("br",{}),"html 태그를 삽입할 수 있습니다."]})]})]})})]}),a.jsxs("div",{className:"layout-scroll",children:[a.jsx("p",{children:"Content"}),a.jsx("a",{onClick:()=>{f.current.scrollIntoView()},children:" Import"}),a.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Property"}),a.jsx("a",{onClick:()=>{u.current.scrollIntoView()},children:" API"})]})]})})};export{Z as default};
