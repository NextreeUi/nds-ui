import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Popover, Button, Table } from '@/nds-ui/component';

const PopoverPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [XYCode, setXYCode] = React.useState(false);
  const XYCodeClick = () => {
    setXYCode(!XYCode)
  }

  const [BasicOpen, setBasicOpen] = React.useState(false);
  const [XOpen, setXOpen] = React.useState(false);
  const [YOpen, setYOpen] = React.useState(false);
  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Popover</h1>
          <p className='description'>Popover는 클릭시 주변에 나타나는 소규모 페이지입니다.</p>
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
{`import { Popover } from 'nds-ui/component';
// or
import Popover from 'nds-ui/component/Popover';`}/>
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
              Popover 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              X / Y / open / onClose 등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Basic Popover */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic Popover</h3>
            <p className='description'>
              기본적인 Popover 형태입니다. <br/>
              버튼을 누르면 Popover가 나옵니다. <br/>
              * 부모의 포지션이 relative인 태그로 꼭 감싸주세요.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <div className='relative'>
              <Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Popover </Button>
              <Popover 
                open={BasicOpen} 
                onClose={()=>{setBasicOpen(false)}} 
                className='p20 w300 size14 txt-black flexBetween alignCenter'
              >
                팝오버 페이지입니다.
              </Popover>
            </div>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={BasicCodeClick}>
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
import { Popover, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicOpen, setBasicOpen] = React.useState(false);
  return (
    <div className='relative'>
      <Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Popover </Button>
      <Popover 
        open={BasicOpen} 
        onClose={()=>{setBasicOpen(false)}} 
        className='p20 w300 size14 txt-black flexBetween alignCenter'
      >
        팝오버 페이지입니다.
      </Popover>
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
<div className='relative'>
  <Button variant='contained' onClick={()=>{setBasicOpen(true)}}> Popover </Button>
  <Popover 
    open={BasicOpen} 
    onClose={()=>{setBasicOpen(false)}} 
    className='p20 w300 size14 txt-black flexBetween alignCenter'
  >
    팝오버 페이지입니다.
  </Popover>
</div>
</>`}/>
            }
          </div>
        </div>

        {/* open */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>open</h3>
            <p className='description'>
              open 속성을 이용하여, Popover 를 나타낼 수 있습니다. <br/>
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
              onClose 속성을 이용하여, Popover 를 사라지게 할 수 있습니다. <br/>
              open에 들어가는 값을 false 로 변경시키는 함수를 넣어주세요.
            </p>
          </div>
        </div>

        {/* X / Y */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>X / Y</h3>
            <p className='description'>
              X 속성과 Y 속성은 위치를 설정하는 속성입니다. <br/>
              X 속성의 속성값은 leftEnd / left / center / right / rightEnd 가 있습니다. <br/>
              Y 속성의 속성값은 topEnd / top / center / bottom / bottomEnd 가 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <div className='relative width100'>
              <Button className='width100' variant='contained' onClick={()=>{setXOpen(true)}}> Popover X</Button>
              <Popover 
                X='leftEnd'
                Y='bottomEnd'
                open={XOpen} 
                onClose={()=>{setXOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                leftEnd
              </Popover>
              <Popover 
                X='left'
                Y='bottomEnd'
                open={XOpen} 
                onClose={()=>{setXOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                left
              </Popover>
              <Popover 
                X='center'
                Y='bottomEnd'
                open={XOpen} 
                onClose={()=>{setXOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                center
              </Popover>
              <Popover 
                X='right'
                Y='bottomEnd'
                open={XOpen} 
                onClose={()=>{setXOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                right
              </Popover>
              <Popover 
                X='rightEnd'
                Y='bottomEnd'
                open={XOpen} 
                onClose={()=>{setXOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                rightEnd
              </Popover>
            </div>
            <div className='relative'>
              <Button className='h300' variant='contained' onClick={()=>{setYOpen(true)}}> Popover Y</Button>
              <Popover 
                X='rightEnd'
                Y='topEnd'
                open={YOpen} 
                onClose={()=>{setYOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                topEnd
              </Popover>
              <Popover 
                X='rightEnd'
                Y='top'
                open={YOpen} 
                onClose={()=>{setYOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                top
              </Popover>
              <Popover 
                X='rightEnd'
                Y='center'
                open={YOpen} 
                onClose={()=>{setYOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                center
              </Popover>
              <Popover 
                X='rightEnd'
                Y='bottom'
                open={YOpen} 
                onClose={()=>{setYOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                bottom
              </Popover>
              <Popover 
                X='rightEnd'
                Y='bottomEnd'
                open={YOpen} 
                onClose={()=>{setYOpen(false)}} 
                className='p20 size14 w100 flexCenter txt-black '
              >
                bottomEnd
              </Popover>
            </div>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={XYCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              XYCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Popover, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [XOpen, setXOpen] = React.useState(false);
  const [YOpen, setYOpen] = React.useState(false);
  return (
    <div className='flexColumn gap10'>
      <div className='relative width100'>
        <Button className='width100' variant='contained' onClick={()=>{setXOpen(true)}}> Popover X</Button>
        <Popover 
          X='leftEnd'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          leftEnd
        </Popover>
        <Popover 
          X='left'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          left
        </Popover>
        <Popover 
          X='center'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          center
        </Popover>
        <Popover 
          X='right'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          right
        </Popover>
        <Popover 
          X='rightEnd'
          Y='bottomEnd'
          open={XOpen} 
          onClose={()=>{setXOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          rightEnd
        </Popover>
      </div>
      <div className='relative'>
        <Button className='h300' variant='contained' onClick={()=>{setYOpen(true)}}> Popover Y</Button>
        <Popover 
          X='rightEnd'
          Y='topEnd'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          topEnd
        </Popover>
        <Popover 
          X='rightEnd'
          Y='top'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          top
        </Popover>
        <Popover 
          X='rightEnd'
          Y='center'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          center
        </Popover>
        <Popover 
          X='rightEnd'
          Y='bottom'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          bottom
        </Popover>
        <Popover 
          X='rightEnd'
          Y='bottomEnd'
          open={YOpen} 
          onClose={()=>{setYOpen(false)}} 
          className='p20 size14 w100 flexCenter txt-black '
        >
          bottomEnd
        </Popover>
      </div>
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
<div className='flexColumn gap10'>
  <div className='relative width100'>
    <Button className='width100' variant='contained' onClick={()=>{setXOpen(true)}}> Popover X</Button>
    <Popover 
      X='leftEnd'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      leftEnd
    </Popover>
    <Popover 
      X='left'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      left
    </Popover>
    <Popover 
      X='center'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      center
    </Popover>
    <Popover 
      X='right'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      right
    </Popover>
    <Popover 
      X='rightEnd'
      Y='bottomEnd'
      open={XOpen} 
      onClose={()=>{setXOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      rightEnd
    </Popover>
  </div>
  <div className='relative'>
    <Button className='h300' variant='contained' onClick={()=>{setYOpen(true)}}> Popover Y</Button>
    <Popover 
      X='rightEnd'
      Y='topEnd'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      topEnd
    </Popover>
    <Popover 
      X='rightEnd'
      Y='top'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      top
    </Popover>
    <Popover 
      X='rightEnd'
      Y='center'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      center
    </Popover>
    <Popover 
      X='rightEnd'
      Y='bottom'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      bottom
    </Popover>
    <Popover 
      X='rightEnd'
      Y='bottomEnd'
      open={YOpen} 
      onClose={()=>{setYOpen(false)}} 
      className='p20 size14 w100 flexCenter txt-black '
    >
      bottomEnd
    </Popover>
  </div>
</div>
</>`}/>
            }
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
                <tr>
                  <td>X</td>
                  <td>
                    'leftEnd' <br/>
                    <p className='b'>'left'</p>
                    'center' <br />
                    'right' <br/>
                    'rightEnd'
                  </td>
                  <td>
                    가로 위치를 정하는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>X</td>
                  <td>
                    'topEnd' <br/>
                    'top' <br/>
                    'center' <br />
                    'bottom'
                    <p className='b'>'bottomEnd'</p>
                  </td>
                  <td>
                    세로 위치를 정하는 속성입니다.
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

export default PopoverPage;