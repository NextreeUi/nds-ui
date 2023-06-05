import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Backdrop, Button, Table, Loading } from '@/nds-ui/component';

const BackdropPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }

  const [BasicOpen, setBasicOpen] = React.useState(false);
  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Backdrop</h1>
          <p className='description'>Backdrop 일정시간 배경을 어둡게 처리하고 새로운 화면을 띄우는 컴포넌트입니다.</p>
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
{`import { Backdrop } from 'nds-ui/component';
// or
import Backdrop from 'nds-ui/component/Backdrop';`}/>
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
              Backdrop 컴포넌트 안에는 2가지 속성이 있습니다. <br/>
              open, onClose 속성이 있는데,그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Basic Backdrop */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic Backdrop</h3>
            <p className='description'>
              기본적인 Backdrop 형태입니다. <br/>
              버튼을 누르면 Backdrop이 나옵니다.
            </p>
          </div>
          <div className='layout-example'>
            <Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Backdrop </Button>
            <Backdrop open={BasicOpen} onClose={()=>{setBasicOpen(false)}}>
              <Loading />
            </Backdrop>
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
import { Backdrop, Loading } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicOpen, setBasicOpen] = React.useState(false);
  return (
    <div className='flexColumn gap10'>
      <Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Backdrop </Button>
      <Backdrop open={BasicOpen} onClose={()=>{setBasicOpen(false)}}>
        <Loading />
      </Backdrop>
    </div>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Backdrop </Button>
<Backdrop open={BasicOpen} onClose={()=>{setBasicOpen(false)}}>
  <Loading />
</Backdrop>
</>`}/>
            }
          </div>
        </div>

        {/* open */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>open</h3>
            <p className='description'>
              open 속성을 이용하여, Backdrop 을 나타낼 수 있습니다. <br/>
              open 속성의 값이 true 이면 나타나고, false 이면 사라집니다. <br/>
              React의 state를 사용하여 open의 값을 변경시킬 수 있습니다.
            </p>
          </div>
        </div>

        {/* onClose */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>onClose</h3>
            <p className='description'>
              onClose 속성을 이용하여, Backdrop 을 사라지게 할 수 있습니다. <br/>
              open에 들어가는 값을 false 로 변경시키는 함수를 넣어주세요.
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
                  <td>open</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    Backdrop을 나타내는 속성으로 불리언(Boolean) 타입입니다. <br/>
                    속성값은 true / false 를 자유자재로 변경 가능한 state를 넣어주세요.
                  </td>
                </tr>
                <tr>
                  <td>onClose</td>
                  <td>
                    func
                  </td>
                  <td>
                    Backdrop을 사라지게 하는 속성으로 함수 명령어가 들어갑니다. <br/>
                    속성값은 open에 들어간 state 값이 false가 되도록 명령어를 넣어주세요.
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

export default BackdropPage;