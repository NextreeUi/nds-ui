import{j as a,s as x,B as c,r as i}from"./index-3a58b41f.js";import{R as e}from"./index-be815c0a.js";import{j as t}from"./index-ac5f5498.js";import{h as sa}from"./index-c11fff35.js";import{T as ea}from"./Table-df068c7f.js";import"./index-e32e7ab4.js";const l=({state:o,setState:b,tabName:j=["탭을 입력해주세요"],variant:u="contained",radius:N="rect",size:n="large",theme:g="primary",bg:v,otl:w,color:C,ripple:p="ripple",hoverBg:k,hoverOtl:f,hoverColor:S,children:R,classTabWrap:T,classTab:m,classBtnWrap:y,classBtn:B,classCustom:h})=>{const E=j;return a.jsx(a.Fragment,{children:a.jsxs("div",{className:x["tab-wrap"]+" "+(T||""),children:[a.jsx("div",{className:x.tab+" "+(m||""),children:E.map((z,d)=>a.jsxs("div",{className:x["tab-btn-wrap"]+" "+(y||""),children:[a.jsx(c,{className:(B||"")+" "+(o==d?"select":""),size:n=="large"?"large":n=="medium"?"medium":n=="small"?"small":n=="extraSmall"?"extraSmall":"",theme:g,bg:v,otl:w,color:C,radius:N,ripple:p,hoverBg:k,hoverOtl:f,hoverColor:S,variant:o==d?u:"normal",onClick:()=>{b(d)},children:z}),a.jsx("div",{className:x["tab-custom"]+" "+(h||"")+" "+(o==d?"":x.close)+" "+(o==d?"":"close")})]},d))}),R]})})},oa=()=>{const o=i.useRef(),b=i.useRef(),j=i.useRef(),u=i.useRef(),[N,n]=i.useState(!1),g=()=>{n(!N)},[v,w]=i.useState(!1),C=()=>{w(!v)},[p,k]=i.useState(!1),f=()=>{k(!p)},[S,R]=i.useState(!1),T=()=>{R(!S)},[m,y]=i.useState(!1),B=()=>{y(!m)},[h,E]=i.useState(!1),z=()=>{E(!h)},[d,I]=i.useState(!1),P=()=>{I(!d)},[F,A]=i.useState(!1),X=()=>{A(!F)},[$,G]=i.useState(!1),J=()=>{G(!$)},[M,L]=i.useState(!1),W=()=>{L(!M)},[V,D]=i.useState(!1),K=()=>{D(!V)},[q,Q]=i.useState(!1),U=()=>{Q(!q)},[O,Y]=i.useState(!1),Z=()=>{Y(!O)},[H,_]=i.useState(!1),aa=()=>{_(!H)},[s,r]=i.useState(0);return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"layout-all",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h1",{children:"Tab"}),a.jsx("p",{className:"description",children:"Tab은 여러페이지를 모아서 클릭한 내용에 따라 화면이 달라지는 컴포넌트입니다."})]}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:o,children:"Import"}),a.jsx("div",{className:"codeMirror",children:a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import { Tab } from 'nds-ui/component';
// or
import Tab from 'nds-ui/component/Tab';`})}),a.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",a.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",a.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:b,children:"Property"}),a.jsxs("p",{className:"description",children:["Tab 컴포넌트는 다양한 속성이 있습니다. ",a.jsx("br",{}),"state, setState, tabName, theme, bg, otl, color, radius, ripple, hoverBg, hoverOtl, hoverColor, variant, size 등이 있습니다."]})]})}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Basic Tab"}),a.jsxs("p",{className:"description",children:["기본적인 Tab 형태입니다. ",a.jsx("br",{}),"state 문법의 state와 setState를 state속성과 setState속성에 전달해줍니다. ",a.jsx("br",{}),"tabName 속성에 배열을 넣어 탭의 갯수만큼 내용을 입력해줍니다. ",a.jsx("br",{}),"children(태그 안)에 처음에 만든 state가 0인지 1인지 각 경우에 따라 표출될 화면을 작성합니다. ",a.jsx("br",{}),"(state는 0부터 시작합니다.)"]})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:g,children:a.jsx("i",{className:"i-code w14 h14"})})}),N?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Variant"}),a.jsxs("p",{className:"description",children:["variant 속성은 탭 버튼의 타입을 설정하는 속성입니다.",a.jsx("br",{}),"normal / outlined / contained 중 선택할 수 있습니다."]})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{variant:"outlined",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:C,children:a.jsx("i",{className:"i-code w14 h14"})})}),v?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      variant='outlined'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  variant='outlined'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Radius"}),a.jsxs("p",{className:"description",children:["radius 속성은 탭 버튼의 굴곡을 설정하는 속성입니다.",a.jsx("br",{}),"rect / normal / round 중 선택할 수 있습니다."]})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{radius:"round",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:f,children:a.jsx("i",{className:"i-code w14 h14"})})}),p?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      radius='round'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  radius='round'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Size"}),a.jsxs("p",{className:"description",children:["size 속성은 탭 버튼의 크기를 설정하는 속성입니다.",a.jsx("br",{}),"large / medium / small / extraSmall 중 선택할 수 있습니다."]})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{size:"small",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:T,children:a.jsx("i",{className:"i-code w14 h14"})})}),S?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      size='small'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  size='small'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Theme"}),a.jsxs("p",{className:"description",children:["theme 속성은 탭 버튼의 컬러를 설정하는 속성입니다.",a.jsx("br",{}),"bg / otl / color / ripple / hoverBg 5가지 속성에 영향을 미칩니다. ",a.jsx("br",{}),"더 섬세한 커스텀을 원할 경우 위 5가지 속성을 이용할 수 있습니다."]})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{theme:"secondary",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:B,children:a.jsx("i",{className:"i-code w14 h14"})})}),m?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      theme='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  theme='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Background"}),a.jsx("p",{className:"description",children:"bg 속성은 탭 버튼의 배경색을 설정하는 속성입니다."})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{bg:"black",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:z,children:a.jsx("i",{className:"i-code w14 h14"})})}),h?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      bg='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  bg='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Outlined"}),a.jsx("p",{className:"description",children:"otl 속성은 탭 버튼의 외곽선 색을 설정하는 속성입니다."})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{otl:"black",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:P,children:a.jsx("i",{className:"i-code w14 h14"})})}),d?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      otl='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  otl='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Color"}),a.jsx("p",{className:"description",children:"color 속성은 탭 버튼의 글자색을 설정하는 속성입니다."})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{color:"black",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:X,children:a.jsx("i",{className:"i-code w14 h14"})})}),F?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      color='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  color='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"Ripple"}),a.jsx("p",{className:"description",children:"ripple 속성은 탭 버튼의 인터렉션 색을 설정하는 속성입니다."})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{ripple:"black",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:J,children:a.jsx("i",{className:"i-code w14 h14"})})}),$?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      ripple='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  ripple='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"HoverBg"}),a.jsx("p",{className:"description",children:"hoverBg 속성은 탭 버튼의 호버시 배경색을 설정하는 속성입니다."})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{hoverBg:"black",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:W,children:a.jsx("i",{className:"i-code w14 h14"})})}),M?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      hoverBg='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  hoverBg='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"HoverOtl"}),a.jsx("p",{className:"description",children:"hoverOtl 속성은 탭 버튼의 호버시 외곽선 색을 설정하는 속성입니다."})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{hoverOtl:"black",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:K,children:a.jsx("i",{className:"i-code w14 h14"})})}),V?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      hoverOtl='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  hoverOtl='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"HoverColor"}),a.jsx("p",{className:"description",children:"hoverColor 속성은 탭 버튼의 호버시 글자색을 설정하는 속성입니다."})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{hoverColor:"secondary",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsx("div",{className:"btn-wrap",children:a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:U,children:a.jsx("i",{className:"i-code w14 h14"})})}),q?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      hoverColor='secondary'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  hoverColor='secondary'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:j,children:" ClassName Custom "}),a.jsx("p",{className:"description",children:"className 을 사용하면 기본 제공되는 속성으로 불가능한 디자인 또한 해결 가능합니다."})]}),a.jsx("div",{className:"layout-example",children:a.jsx(l,{variant:"normal",classCustom:"tab-custom",state:s,setState:r,tabName:["Tab1","Tab2","Tab3"],children:s==0?a.jsx("div",{className:"width100 h300 bgc-primary"}):s==1?a.jsx("div",{className:"width100 h300 bgc-secondary"}):s==2?a.jsx("div",{className:"width100 h300 bgc-tertiary"}):a.jsx(a.Fragment,{})})}),a.jsxs("div",{className:"codeMirror",children:[a.jsxs("div",{className:"btn-wrap",children:[a.jsx("p",{children:"JSX"}),a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:Z,children:a.jsx("i",{className:"i-code w14 h14"})})]}),O?a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      variant='normal'
      classCustom='tab-custom'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
      }
    </Tab>
  )
}

export default Example;`}):a.jsx(e,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Tab
  variant='normal'
  classCustom='tab-custom'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
  }
</Tab>
</>`})]}),a.jsxs("div",{className:`codeMirror ${H?"maxh1000":"maxh300"}`,children:[a.jsxs("div",{className:"btn-wrap",children:[a.jsx("p",{children:"CSS"}),a.jsx(c,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:aa,children:a.jsx("i",{className:"i-code w14 h14"})})]}),a.jsx(e,{theme:"dark",extensions:[sa({html:!0})],value:`<style>
.tab-custom {
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: var(--primary);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  &.close {
    width: 0;
  }
}
</style>`})]})]}),a.jsxs("div",{className:"layout-small",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:u,children:" API "}),a.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),a.jsx(ea,{classWrap:"table-props",colGroup:a.jsxs(a.Fragment,{children:[a.jsx("col",{className:"table-props-col1"}),a.jsx("col",{className:"table-props-col2"})]}),tHead:a.jsx(a.Fragment,{children:a.jsxs("tr",{children:[a.jsx("th",{children:"props"}),a.jsx("th",{children:a.jsx("div",{className:"table-props-value",children:"value"})}),a.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:a.jsxs(a.Fragment,{children:[a.jsxs("tr",{children:[a.jsx("td",{children:"variant"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'noarmal'"}),"'outlined' ",a.jsx("br",{}),"'contained'"]}),a.jsxs("td",{children:["'normal' : 외곽선과 배경색이 없는 버튼입니다. ",a.jsx("br",{}),"'outlined' : 외곽선은 있고 배경색은 없는 버튼입니다. ",a.jsx("br",{}),"'contained' : 외곽선은 없고 배경색은 있는 버튼입니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"raidus"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'rect'"}),"'normal' ",a.jsx("br",{}),"'round'"]}),a.jsx("td",{children:"굴곡을 조절하는 값입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"size"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'large'"}),"'medium' ",a.jsx("br",{}),"'small' ",a.jsx("br",{}),"'extraSmall'"]}),a.jsx("td",{children:"크기를 조절하는 값입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"theme"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'primary'"}),"$colors"]}),a.jsxs("td",{children:["theme 속성은 bg, color, otl, ripple, hoverBg 5가지 속성에 영향을 미칩니다. ",a.jsx("br",{}),"더 상세한 커스텀을 원할 경우 theme 대신 위 5가지 속성을 조절하시면 됩니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"bg"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'primary'"}),a.jsx("p",{className:"b",children:"'transparent'"}),"$colors"]}),a.jsxs("td",{children:["배경색을 조절하는 속성입니다. ",a.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"otl"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'primary'"}),a.jsx("p",{className:"b",children:"'transparent'"}),"$colors"]}),a.jsxs("td",{children:["외곽선 색을 조절하는 속성입니다. ",a.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"color"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'primary'"}),a.jsx("p",{className:"b",children:"'white'"}),"$colors"]}),a.jsxs("td",{children:["글자색을 조절하는 속성입니다. ",a.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"ripple"}),a.jsxs("td",{children:[a.jsx("p",{className:"b",children:"'primary'"}),a.jsx("p",{className:"b",children:"'white'"}),"$colors"]}),a.jsxs("td",{children:["클릭시 인터렉션 색을 조절하는 속성입니다. ",a.jsx("br",{}),"기본 값은 variant 속성에 따라 달라집니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"hoverBg"}),a.jsx("td",{children:"$colors"}),a.jsxs("td",{children:["호버시 배경색을 조절하는 속성입니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"hoverOtl"}),a.jsx("td",{children:"$colors"}),a.jsxs("td",{children:["호버시 외곽선 색을 조절하는 속성입니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"hoverColor"}),a.jsx("td",{children:"$colors"}),a.jsxs("td",{children:["호버시 글자색을 조절하는 속성입니다. ",a.jsx("br",{}),"Variable의 $colors 값을 넣을 수 있습니다."]})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"classTabWrap"}),a.jsx("td",{children:"string"}),a.jsx("td",{children:"Tab 컴포넌트 전체를 감싸는 div의 클래스입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"classTab"}),a.jsx("td",{children:"string"}),a.jsx("td",{children:"Tab 부분의 클래스입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"classBtnWrap"}),a.jsx("td",{children:"string"}),a.jsx("td",{children:"탭 버튼을 감싸는 div의 클래스입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"classBtn"}),a.jsx("td",{children:"string"}),a.jsx("td",{children:"탭 버튼의 클래스입니다."})]}),a.jsxs("tr",{children:[a.jsx("td",{children:"classCustom"}),a.jsx("td",{children:"string"}),a.jsx("td",{children:"탭 버튼을 따로 커스텀할 때 쓰는 클래스입니다."})]})]})})]}),a.jsxs("div",{className:"layout-scroll",children:[a.jsx("p",{children:"Content"}),a.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" Import"}),a.jsx("a",{onClick:()=>{b.current.scrollIntoView()},children:" Property"}),a.jsx("a",{onClick:()=>{j.current.scrollIntoView()},children:" Custom Example"}),a.jsx("a",{onClick:()=>{u.current.scrollIntoView()},children:" API"})]})]})})};export{oa as default};
