import{r as e,j as s,B as x}from"./index-39fb6c20.js";import{R as l}from"./index-55296878.js";import{j as t}from"./index-b8dc7194.js";import{T as i}from"./Table-e2701c69.js";const u=()=>{const r=e.useRef(),d=e.useRef(),c=e.useRef(),[a,n]=e.useState(!1),o=()=>{n(!a)};return e.useState(!1),e.useState(!1),e.useState(!1),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"layout-all",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h1",{children:"Table"}),s.jsx("p",{className:"description",children:"Table 컴포넌트입니다."})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:r,children:"Import"}),s.jsx("div",{className:"codeMirror",children:s.jsx(l,{theme:"dark",extensions:[t({jsx:!0})],value:`import { Table } from 'nds-ui/component';
// or
import Table from 'nds-ui/component/Table';`})}),s.jsxs("p",{className:"description",children:["임포트 방법은 2가지가 있습니다. ",s.jsx("br",{}),"첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. ",s.jsx("br",{}),"임포트 방식은 취향에 맞게 사용하시면 됩니다."]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:d,children:"Property"}),s.jsxs("p",{className:"description",children:["Table 컴포넌트 안에는 3가지 속성이 있습니다. ",s.jsx("br",{}),"colGroup / tHead / tBody 속성이 있는데, 그 사용법을 알아보겠습니다."]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"Basic"}),s.jsxs("p",{className:"description",children:["기본적인 Table 형태입니다. ",s.jsx("br",{}),"colGroup 속성을 열의 너비를 설정할 수 있습니다. ",s.jsx("br",{}),"tHead 속성을 이용하여 테이블 상단의 제목을 입력할 수 있습니다. ",s.jsx("br",{}),"tBody 속성을 이용하여 테이블 중간의 내용을 입력할 수 있습니다."]})]}),s.jsx("div",{className:"layout-example flexColumn",children:s.jsx(i,{colGroup:s.jsxs(s.Fragment,{children:[s.jsx("col",{className:"w100"}),s.jsx("col",{className:"w200"})]}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"제목"}),s.jsx("th",{children:"제목"}),s.jsx("th",{children:"제목"})]})}),tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"내용"}),s.jsx("td",{children:"내용"}),s.jsx("td",{children:"내용"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"내용"}),s.jsx("td",{children:"내용"}),s.jsx("td",{children:"내용"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"내용"}),s.jsx("td",{children:"내용"}),s.jsx("td",{children:"내용"})]})]})})}),s.jsxs("div",{className:"codeMirror",children:[s.jsx("div",{className:"btn-wrap",children:s.jsx(x,{square:!0,radius:"round",variant:"outlined",size:"extraSmall",onClick:o,children:s.jsx("i",{className:"i-code w14 h14"})})}),a?s.jsx(l,{theme:"dark",extensions:[t({jsx:!0})],value:`import * as React from 'react';
import { Table } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Table 
      colGroup={
        <>
          <col className='w100' />
          <col className='w200' />
        </>
      }
      tHead={
        <>
          <tr>
            <th>제목</th>
            <th>제목</th>
            <th>제목</th>
          </tr>
        </>
      }
      tBody= {
        <>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>내용</td>
            <td>내용</td>
          </tr>
        </>
      }
    />
  )
}

export default Example;`}):s.jsx(l,{theme:"dark",extensions:[t({jsx:!0})],value:`<>
<Table 
  colGroup={
    <>
      <col className='w100' />
      <col className='w200' />
    </>
  }
  tHead={
    <>
      <tr>
        <th>제목</th>
        <th>제목</th>
        <th>제목</th>
      </tr>
    </>
  }
  tBody= {
    <>
      <tr>
        <td>내용</td>
        <td>내용</td>
        <td>내용</td>
      </tr>
      <tr>
        <td>내용</td>
        <td>내용</td>
        <td>내용</td>
      </tr>
      <tr>
        <td>내용</td>
        <td>내용</td>
        <td>내용</td>
      </tr>
    </>
  }
/>
</>`})]})]}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"ColGroup"}),s.jsxs("p",{className:"description",children:["colGroup은 각 열의 너비를 정하는 속성입니다. ",s.jsx("br",{}),"속성 값으로는 col 태그가 들어가며, col 태그의 스타일을 정의해 너비를 정할 수 있습니다. ",s.jsx("br",{}),"col 태그의 순서대로 Table의 왼쪽 1번째 열부터 스타일이 반영됩니다. ",s.jsx("br",{}),"해당 태그에 들어가는 스타일은 Util 클래스를 참고하세요. ",s.jsx("br",{}),"(classColGroup 속성으로 colGroup에 클래스를 지정할 수 있습니다.)"]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"THead"}),s.jsxs("p",{className:"description",children:["tHead는 Table의 상단 제목부분을 관리하는 속성입니다. ",s.jsx("br",{}),"속성 값으로는 tr 태그, th 태그가 들어가며, 기본 운영 방식은 html의 thead 태그와 동일합니다. ",s.jsx("br",{}),"(classTHead 속성으로 tHead에 클래스를 지정할 수 있습니다.)"]})]})}),s.jsx("div",{className:"layout-small",children:s.jsxs("div",{className:"layout-title",children:[s.jsx("h3",{children:"TBody"}),s.jsxs("p",{className:"description",children:["tbody는 Table의 중간 내용부분을 관리하는 속성입니다. ",s.jsx("br",{}),"속성 값으로는 tr 태그, td 태그가 들어가며, 기본 운영 방식은 html의 thead 태그와 동일합니다. ",s.jsx("br",{}),"(classTBody 속성으로 tBody에 클래스를 지정할 수 있습니다.)"]})]})}),s.jsxs("div",{className:"layout-small",children:[s.jsxs("div",{className:"layout-title",children:[s.jsx("h2",{ref:c,children:" API "}),s.jsx("p",{className:"description",children:"속성들을 정리한 테이블입니다."})]}),s.jsx(i,{classWrap:"table-props",colGroup:s.jsxs(s.Fragment,{children:[s.jsx("col",{className:"table-props-col1"}),s.jsx("col",{className:"table-props-col2"})]}),tHead:s.jsx(s.Fragment,{children:s.jsxs("tr",{children:[s.jsx("th",{children:"props"}),s.jsx("th",{children:s.jsx("div",{className:"table-props-value",children:"value"})}),s.jsx("th",{children:"description"})]})}),classTBody:"table-props",tBody:s.jsxs(s.Fragment,{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"colGroup"}),s.jsx("td",{children:"element"}),s.jsx("td",{children:"열의 너비를 관리합니다. col 태그를 값으로 넣습니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"tHead"}),s.jsx("td",{children:"element"}),s.jsx("td",{children:"상단 제목부분을 관리합니다. tr, th 태그를 값으로 넣습니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"tBody"}),s.jsx("td",{children:"element"}),s.jsx("td",{children:"중간 내용부분을 관리합니다. tr, td 태그를 값으로 넣습니다."})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"classWrap"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["table 전체를 감싸는 div 태그에 클래스를 지정합니다. ",s.jsx("br",{}),"Table의 클래스를 관리하는 속성의 크기입니다. ",s.jsx("br",{}),"classWrap > classTable > classColGroup = classTHead = classTBody"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"classTable"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["table에 클래스를 지정합니다. ",s.jsx("br",{})]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"classColGroup"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["table안의 colgroup에 클래스를 지정합니다. ",s.jsx("br",{})]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"classTHead"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["table안의 thead에 클래스를 지정합니다. ",s.jsx("br",{})]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"classTBody"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["table안의 tbody에 클래스를 지정합니다. ",s.jsx("br",{})]})]})]})})]}),s.jsxs("div",{className:"layout-scroll",children:[s.jsx("p",{children:"Content"}),s.jsx("a",{onClick:()=>{r.current.scrollIntoView()},children:" Import"}),s.jsx("a",{onClick:()=>{d.current.scrollIntoView()},children:" Property"}),s.jsx("a",{onClick:()=>{c.current.scrollIntoView()},children:" API"})]})]})})};export{u as default};
