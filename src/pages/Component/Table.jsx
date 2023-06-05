import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Button, Table } from '@/nds-ui/component';

const TablePage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();
  
  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [ColGroupCode, setColGroupCode] = React.useState(false);
  const ColGroupCodeClick = () => {
    setColGroupCode(!ColGroupCode)
  }
  const [THeadCode, setTHeadCode] = React.useState(false);
  const THeadCodeClick = () => {
    setTHeadCode(!THeadCode)
  }
  const [TBodyCode, setTBodyCode] = React.useState(false);
  const TBodyCodeClick = () => {
    setTBodyCode(!TBodyCode)
  }
  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Table</h1>
          <p className='description'>Table 컴포넌트입니다.</p>
        </div>

        {/* Import */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={ImportRef}>Import</h2>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[javascript({ jsx: true })]}
                value=
{`import { Table } from 'nds-ui/component';
// or
import Table from 'nds-ui/component/Table';`}/>
            </div>
            <p className='description'>
              임포트 방법은 2가지가 있습니다. <br/>
              첫번째 방식은 여러개의 컴포넌트를 임포트하는데 유리합니다. <br/>
              임포트 방식은 취향에 맞게 사용하시면 됩니다.
            </p>
          </div>
        </div>

        {/* Property */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={PropertyRef}>Property</h2>
            <p className='description'>
              Table 컴포넌트 안에는 3가지 속성이 있습니다. <br/>
              colGroup / tHead / tBody 속성이 있는데, 그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Basic */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic</h3>
            <p className='description'>
              기본적인 Table 형태입니다. <br/>
              colGroup 속성을 열의 너비를 설정할 수 있습니다. <br/>
              tHead 속성을 이용하여 테이블 상단의 제목을 입력할 수 있습니다. <br />
              tBody 속성을 이용하여 테이블 중간의 내용을 입력할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
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
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={BasicCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              BasicCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
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

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
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
</>`}/>
            }
          </div>
        </div>

        {/* ColGroup */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>ColGroup</h3>
            <p className='description'>
              colGroup은 각 열의 너비를 정하는 속성입니다. <br/>
              속성 값으로는 col 태그가 들어가며, col 태그의 스타일을 정의해 너비를 정할 수 있습니다. <br/>
              col 태그의 순서대로 Table의 왼쪽 1번째 열부터 스타일이 반영됩니다. <br />
              해당 태그에 들어가는 스타일은 Util 클래스를 참고하세요. <br/>
              (classColGroup 속성으로 colGroup에 클래스를 지정할 수 있습니다.)
            </p>
          </div>
        </div>

        {/* THead */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>THead</h3>
            <p className='description'>
              tHead는 Table의 상단 제목부분을 관리하는 속성입니다. <br/>
              속성 값으로는 tr 태그, th 태그가 들어가며, 기본 운영 방식은 html의 thead 태그와 동일합니다. <br/>
              (classTHead 속성으로 tHead에 클래스를 지정할 수 있습니다.)
            </p>
          </div>
        </div>
        
        {/* TBody */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>TBody</h3>
            <p className='description'>
              tbody는 Table의 중간 내용부분을 관리하는 속성입니다. <br/>
              속성 값으로는 tr 태그, td 태그가 들어가며, 기본 운영 방식은 html의 thead 태그와 동일합니다. <br/>
              (classTBody 속성으로 tBody에 클래스를 지정할 수 있습니다.)
            </p>
          </div>
        </div>

        {/* API */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={APIRef}> API </h2>
            <p className='description'>
              속성들을 정리한 테이블입니다.
            </p>
          </div>
          <Table 
            classWrap='table-props'
            colGroup={
              <>
                <col className='table-props-col1' />
                <col className='table-props-col2' />
              </>
            }
            tHead={
              <>
                <tr>
                  <th>props</th>
                  <th><div className='table-props-value'>value</div></th>
                  <th>description</th>
                </tr>
              </>
            }
            classTBody='table-props'
            tBody= {
              <>
                <tr>
                  <td>colGroup</td>
                  <td>
                    element
                  </td>
                  <td>
                    열의 너비를 관리합니다. col 태그를 값으로 넣습니다.
                  </td>
                </tr>

                <tr>
                  <td>tHead</td>
                  <td>
                    element
                  </td>
                  <td>
                    상단 제목부분을 관리합니다. tr, th 태그를 값으로 넣습니다.
                  </td>
                </tr>

                <tr>
                  <td>tBody</td>
                  <td>
                    element
                  </td>
                  <td>
                    중간 내용부분을 관리합니다. tr, td 태그를 값으로 넣습니다.
                  </td>
                </tr>

                <tr>
                  <td>classWrap</td>
                  <td>
                    string
                  </td>
                  <td>
                    table 전체를 감싸는 div 태그에 클래스를 지정합니다. <br/>
                    Table의 클래스를 관리하는 속성의 크기입니다. <br/>
                    classWrap &#62; classTable &#62; classColGroup = classTHead = classTBody
                  </td>
                </tr>
                <tr>
                  <td>classTable</td>
                  <td>
                    string
                  </td>
                  <td>
                    table에 클래스를 지정합니다. <br/>
                  </td>
                </tr>
                <tr>
                  <td>classColGroup</td>
                  <td>
                    string
                  </td>
                  <td>
                    table안의 colgroup에 클래스를 지정합니다. <br/>
                  </td>
                </tr>
                <tr>
                  <td>classTHead</td>
                  <td>
                    string
                  </td>
                  <td>
                    table안의 thead에 클래스를 지정합니다. <br/>
                  </td>
                </tr>
                <tr>
                  <td>classTBody</td>
                  <td>
                    string
                  </td>
                  <td>
                    table안의 tbody에 클래스를 지정합니다. <br/>
                  </td>
                </tr>
              </>
            }
          />
        </div>

        <div className='layout-scroll'>
          <p>Content</p>
          <a onClick={()=>{ImportRef.current.scrollIntoView()}}> Import</a>
          <a onClick={()=>{PropertyRef.current.scrollIntoView()}}> Property</a>
          <a onClick={()=>{APIRef.current.scrollIntoView()}}> API</a>
        </div>

      </div>
    </>
  )
}

export default TablePage;