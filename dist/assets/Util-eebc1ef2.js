import{r as e,j as s,B as w}from"./index-cbb411db.js";import{R as r}from"./index-b4f47d22.js";import{h as f}from"./index-c517364d.js";import{j as C}from"./index-ae8f212b.js";import{T as l}from"./Table-e110d49d.js";import"./index-7d50f57c.js";const G=()=>{const c=e.useRef(),d=e.useRef(),i=e.useRef(),t=e.useRef(),n=e.useRef(),a=e.useRef(),x=e.useRef(),h=e.useRef(),j=e.useRef(),o=e.useRef(),m=e.useRef(),p=e.useRef(),u=e.useRef(),y=e.useRef(),v=async F=>{try{await navigator.clipboard.writeText(F)}catch{}},[g,b]=e.useState(!1),N=()=>{b(!0),setTimeout(()=>{b(!1)},2e3)};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:`copyclick ${g?"open":""}`,children:"복사되었습니다."}),s.jsxs("div",{className:"layout-all",children:[s.jsx("div",{className:"layout-title",children:s.jsx("h1",{children:"Utility Classes"})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{children:"What is Utility Classes?"}),s.jsxs("p",{className:"description",children:["유틸리티 클래스란? 자주쓰는 스타일을 이름(클래스)을 정해서 사용하는 것입니다. ",s.jsx("br",{}),"예를 들어 padding 값이 10rem인 스타일을 자주 쓴다고 가정해봅시다. ",s.jsx("br",{}),"매 번 클래스를 만들어 padding: 10rem 을 주기는 너무 번거로울 것입니다. ",s.jsx("br",{}),"(불필요하게 반복되는 CSS도 있을것입니다. - 아래 참조)"]}),s.jsx("div",{className:"codeMirror",children:s.jsx(r,{theme:"dark",extensions:[f({html:!0})],value:`<html>
  <head>
    <style>
      .class1 { padding: 10rem }
      .class2 { padding: 10rem }
      .class3 { padding: 10rem }
      .class4 { padding: 10rem }
      .class5 { padding: 10rem }
    </style>
  </head>
  <body>
    <div class='class1'> </div>
    <div class='class2'> </div>
    <div class='class3'> </div>
    <div class='class4'> </div>
    <div class='class5'> </div>
  </body>
</html>`})}),s.jsxs("p",{className:"description",children:["그렇다면 그냥 'p10'이라는 CSS를 하나 만들어서 HTML에 p10이라는 클래스를 붙여주기만 한다면 어떨까요? ",s.jsx("br",{}),"유틸리티 클래스는 자주쓰는 스타일을 네이밍해서 HTML에서 바로 스타일링 할 수 있습니다."]}),s.jsx("div",{className:"codeMirror",children:s.jsx(r,{theme:"dark",extensions:[f({html:!0})],value:`<html>
  <head>
    <style>
      .p10 { padding: 10rem }
    </style>
  </head>
  <body>
    <div class='p10'> </div>
    <div class='p10'> </div>
    <div class='p10'> </div>
    <div class='p10'> </div>
    <div class='p10'> </div>
  </body>
</html>`})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{children:"Setting"}),s.jsxs("p",{className:"description",children:["React 프로젝트를 만드셨다면 가장 상위 JSX 파일이 있을 것입니다. (예를 들어 App.jsx) ",s.jsx("br",{}),"해당 파일을 열고 아래의 코드를 복사해 넣어줍니다. ",s.jsx("br",{}),"(가장 상위 JSX 파일에 ",s.jsx("b",{children:"'한 번만'"})," 임포트해도 하위 파일에서 사용가능합니다.)"]}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap shell",children:s.jsx(w,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:()=>{v('import "nds-ui/css/style.scss";'),N()},children:s.jsx("i",{className:"i-copy w14 h14"})})}),s.jsx(r,{theme:"dark",extensions:[C({jsx:!0})],value:'import "nds-ui/css/style.scss";'})]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{children:"Classes"}),s.jsxs("p",{className:"description",children:["유틸리티 클래스에는 다양한 종류들이 있습니다. ",s.jsx("br",{}),"NDS-UI에선 레이아웃과 색에 관련된 클래스만 사용합니다. ",s.jsx("br",{}),"어떤 클래스를 사용하는지 알아보겠습니다. ",s.jsx("br",{}),"(소스코드는 'nds-ui/css/_util.scss'를 참고하세요)"]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:c,children:"Width / Height"}),s.jsx("p",{className:"description",children:"너비와 높이에 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"w1 ~ w3000"}),s.jsx("td",{children:"너비 1rem ~ 3000rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"h1 ~ h3001"}),s.jsx("td",{children:"높이 1rem ~ 3000rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"width1 ~ width3000"}),s.jsx("td",{children:"너비 1% ~ 3000%"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"height1 ~ hegiht3000"}),s.jsx("td",{children:"높이 1% ~ 3000%"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"minw1 ~ minw3000"}),s.jsx("td",{children:"최소너비 1rem ~ 3000rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"minh1 ~ minh3000"}),s.jsx("td",{children:"최소높이 1rem ~ 3000rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"maxw1 ~ maxw3000"}),s.jsx("td",{children:"최대너비 1rem ~ 3000rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"maxh1 ~ maxh3000"}),s.jsx("td",{children:"최대높이 1rem ~ 3000rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"vw1 ~ vw3000"}),s.jsx("td",{children:"뷰포트 너비 1 ~ 3000"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"vh1 ~ vh3000"}),s.jsx("td",{children:"뷰포트 높이 1 ~ 3000"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"vw100-1 ~ vw100-3000"}),s.jsx("td",{children:"뷰포트 너비 100에서  1~3000rem 만큼 뺸값"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"vh100-1 ~ vh100-3000"}),s.jsx("td",{children:"뷰포트 높이 100에서  1~3000rem 만큼 뺸값"})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:d,children:"Line Height "}),s.jsx("p",{className:"description",children:"문자높이와 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{children:"lh60 ~ lh200"}),s.jsx("td",{children:"문자 높이 60% ~ 200%"})]})})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:i,children:"Letter Spacing "}),s.jsx("p",{className:"description",children:"문자여백과 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{children:"ls1 ~ ls100"}),s.jsx("td",{children:"문자 여백 1rem ~ 100rem"})]})})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:t,children:" Margin / Padding "}),s.jsx("p",{className:"description",children:"여백과 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"m1 ~ m300"}),s.jsx("td",{children:"외부 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"my1 ~ my300"}),s.jsx("td",{children:"외부 상하 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"mx1 ~ mx300"}),s.jsx("td",{children:"외부 좌우 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"mt1 ~ mt300"}),s.jsx("td",{children:"외부 윗 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"mr1 ~ mr300"}),s.jsx("td",{children:"외부 오른쪽 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"mb1 ~ mb300"}),s.jsx("td",{children:"외부 아래 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ml1 ~ ml300"}),s.jsx("td",{children:"외부 왼쪽 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"mr-1 ~ mr-300"}),s.jsx("td",{children:"외부 오른쪽 여백 -1rem ~ -300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"mb-1 ~ mb-300"}),s.jsx("td",{children:"외부 아래 여백 -1rem ~ -300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ml-1 ~ ml-300"}),s.jsx("td",{children:"외부 왼쪽 여백 -1rem ~ -300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"mr1 ~ mr300"}),s.jsx("td",{children:"외부 오른쪽 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"mb1 ~ mb300"}),s.jsx("td",{children:"외부 아래 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"p1 ~ p300"}),s.jsx("td",{children:"내부 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"py1 ~ py300"}),s.jsx("td",{children:"내부 상하 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"px1 ~ px300"}),s.jsx("td",{children:"내부 좌우 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"pt1 ~ pt300"}),s.jsx("td",{children:"내부 윗 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"pr1 ~ pr300"}),s.jsx("td",{children:"내부 오른쪽 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"pb1 ~ pb300"}),s.jsx("td",{children:"내부 아래 여백 1rem ~ 300rem"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"pl1 ~ pl300"}),s.jsx("td",{children:"내부 왼쪽 여백 1rem ~ 300rem"})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:n,children:" Flex "}),s.jsx("p",{className:"description",children:"flex와 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"flex"}),s.jsx("td",{children:"display: flex"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"flexColumn"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"flex-direction: column"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"flexBetween"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"justify-content: space-between"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"flexCenter"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"justify-content: center ",s.jsx("br",{}),"align-items: center"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"justifyStart"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"justify-content: flex-start"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"justifyCenter"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"justify-content: center"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"justifyEnd"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"justify-content: flex-end"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"alignStart"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"align-items: flex-start"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"alignCenter"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"align-items: center"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"alignEnd"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"align-items: flex-end"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"flexColumnCenter"}),s.jsxs("td",{children:["display: flex ",s.jsx("br",{}),"flex-direction: column ",s.jsx("br",{}),"align-items: center ",s.jsx("br",{}),"justify-content: center"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"txtCenter"}),s.jsx("td",{children:"text-align: center"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"flexNone"}),s.jsx("td",{children:"flex: none;"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"flex1 ~ flex10"}),s.jsx("td",{children:"flex-grow: 1 ~ 10"})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:a,children:" Table "}),s.jsx("p",{className:"description",children:"표와 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsxs("td",{children:["col(n)-align-start ",s.jsx("br",{}),"col-last-align-start"]}),s.jsxs("td",{children:["n번째 열 좌측 정렬 (최대 100번째 열까지) ",s.jsx("br",{}),"마지막 열 좌측 정렬"]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:["col(n)-align-center",s.jsx("br",{}),"col-last-align-center"]}),s.jsxs("td",{children:["n번째 열 가운데 정렬 (최대 100번째 열까지) ",s.jsx("br",{}),"마지막 열 가운데 정렬"]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:["col(n)-align-end ",s.jsx("br",{}),"col-last-align-end"]}),s.jsxs("td",{children:["n번째 열 우측 정렬 (최대 100번째 열까지) ",s.jsx("br",{}),"마지막 열 우측 정렬"]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:["col(n)-vertical-top ",s.jsx("br",{}),"col-last-vertical-top"]}),s.jsxs("td",{children:["n번째 열 수직으로 위쪽 정렬 (최대 100번째 열까지) ",s.jsx("br",{}),"마지막 열 수직으로 위쪽 정렬"]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:["col(n)-vertical-middle",s.jsx("br",{}),"col-last-vertical-middle"]}),s.jsxs("td",{children:["n번째 열 수직으로 가운데 정렬 (최대 100번째 열까지) ",s.jsx("br",{}),"마지막 열 수직으로 가운데 정렬"]})]}),s.jsxs("tr",{children:[s.jsxs("td",{children:["col(n)-vertical-bottom ",s.jsx("br",{}),"col-last-vertical-bottom"]}),s.jsxs("td",{children:["n번째 열 수직으로 아래쪽 정렬 (최대 100번째 열까지) ",s.jsx("br",{}),"마지막 열 수직으로 아래쪽 정렬"]})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:x,children:" Radius "}),s.jsx("p",{className:"description",children:"굴곡과 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"radius"}),s.jsx("td",{children:"Variable의 --radius 값만큼 굴곡을 줍니다. (기본값 : 5rem)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"r1 ~ r300"}),s.jsx("td",{children:"굴곡을 1 ~ 300 만큼 줍니다."})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:h,children:" Gap "}),s.jsx("p",{className:"description",children:"간격과 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{children:"gap1 ~ gap100"}),s.jsx("td",{children:"간격을 1rem ~ 100rem 만큼 줍니다."})]})})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:j,children:" Blur "}),s.jsx("p",{className:"description",children:"번짐과 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"blur1 ~ blur100"}),s.jsx("td",{children:"번짐을 1rem ~ 100rem 만큼 줍니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"blur-back1 ~ blur-back100"}),s.jsx("td",{children:"뒷배경 번짐을 1rem ~ 100rem 만큼 줍니다."})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:o,children:" Overflow / Scroll "}),s.jsx("p",{className:"description",children:"스크롤과 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"scroll"}),s.jsx("td",{children:"overflow: scroll"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"scrollY"}),s.jsxs("td",{children:["overflow-y: scroll ",s.jsx("br",{}),"overflow-x: hidden"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"scrollYAuto"}),s.jsxs("td",{children:["overflow-y: auto ",s.jsx("br",{}),"overflow-x: hidden"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"overHidden"}),s.jsx("td",{children:"overflow: hidden"})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:m,children:" Display / Visibility "}),s.jsx("p",{className:"description",children:"화면 표시와 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"displayNone"}),s.jsx("td",{children:"display: none"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"hidden"}),s.jsx("td",{children:"visibility: hidden"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"visible"}),s.jsx("td",{children:"visibility: visible"})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:p,children:" Position "}),s.jsx("p",{className:"description",children:"위치와 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"relative"}),s.jsx("td",{children:"position: relative"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"absolute"}),s.jsx("td",{children:"position: absolute"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"fixed"}),s.jsx("td",{children:"position: fixed"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"t0"}),s.jsx("td",{children:"top: 0"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"r0"}),s.jsx("td",{children:"right: 0"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"b0"}),s.jsx("td",{children:"bottom: 0"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"l0"}),s.jsx("td",{children:"left: 0"})]})]})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:u,children:" Cursor "}),s.jsx("p",{className:"description",children:"커서와 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{children:"cursor"}),s.jsx("td",{children:"cursor: pointer"})]})})})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{ref:y,children:" Ellipsis "}),s.jsx("p",{className:"description",children:"말줄임과 관련된 유틸리티 클래스입니다."}),s.jsx(l,{classWrap:"table-css",colGroup:s.jsx(s.Fragment,{children:s.jsx("col",{className:"table-css-col1"})}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"classes"}),s.jsx("th",{children:"description"})]})}),classTBody:"table-css",tBody:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("td",{children:"ellipsis1 ~ ellipsis5"}),s.jsx("td",{children:"말줄임 1줄 ~ 5줄부터 ... 표시 됩니다."})]})})})]})}),s.jsxs("div",{className:"layout-scroll",children:[s.jsx("p",{children:"Classes"}),s.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" Width / Height"}),s.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Line Height"}),s.jsx("a",{onClick:()=>{i.current.scrollIntoView()},children:" Letter Sapcing"}),s.jsx("a",{onClick:()=>{t.current.scrollIntoView()},children:" Margin / Padding"}),s.jsx("a",{onClick:()=>{n.current.scrollIntoView()},children:" Flex"}),s.jsx("a",{onClick:()=>{a.current.scrollIntoView()},children:" Table"}),s.jsx("a",{onClick:()=>{x.current.scrollIntoView()},children:" Radius"}),s.jsx("a",{onClick:()=>{h.current.scrollIntoView()},children:" Gap"}),s.jsx("a",{onClick:()=>{j.current.scrollIntoView()},children:" Blur"}),s.jsx("a",{onClick:()=>{o.current.scrollIntoView()},children:" Scroll"}),s.jsx("a",{onClick:()=>{m.current.scrollIntoView()},children:" Display"}),s.jsx("a",{onClick:()=>{p.current.scrollIntoView()},children:" Position"}),s.jsx("a",{onClick:()=>{u.current.scrollIntoView()},children:" Cursor"}),s.jsx("a",{onClick:()=>{y.current.scrollIntoView()},children:" Ellipsis"})]})]})]})};export{G as default};