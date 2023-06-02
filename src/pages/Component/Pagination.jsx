import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Pagination, Button, Table } from '@/nds-ui/component';

const PaginationPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [ColorCode, setColorCode] = React.useState(false);
  const ColorCodeClick = () => {
    setColorCode(!ColorCode)
  }
  const [SizeCode, setSizeCode] = React.useState(false);
  const SizeCodeClick = () => {
    setSizeCode(!SizeCode)
  }
  const [MaxCode, setMaxCode] = React.useState(false);
  const MaxCodeClick = () => {
    setMaxCode(!MaxCode)
  }
  const [EndBtnCode, setEndBtnCode] = React.useState(false);
  const EndBtnCodeClick = () => {
    setEndBtnCode(!EndBtnCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Pagination</h1>
          <p className='description'>Pagination은 여러 범위가 있는 페이지에서 특정 페이지로 이동할 수 있는 컴포넌트입니다.</p>
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
{`import { Pagination } from 'nds-ui/component';
// or
import Pagination from 'nds-ui/component/Pagination';`}/>
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
              Pagination 컴포넌트는 다양한 속성이 있습니다. <br/>
              color / size / max / endBtn  등이 있습니다.
            </p>
          </div>
        </div>

        {/* Basic Pagination */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic Pagination</h3>
            <p className='description'>
              기본적인 Pagination 형태입니다. <br/>
              Pagination은 5개의 페이지가 출력되며, 현재 페이지 위치에 액티브된 숫자가 변경됩니다.
            </p>
          </div>
          <div className='layout-example'>
            <Pagination />
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
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Pagination />
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Pagination />
</>`}/>
            }
          </div>
        </div>

        {/* Color */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Color</h3>
            <p className='description'>
              color 속성은 색상을 설정하는 속성입니다. <br/>
              기본값은 primary입니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Pagination />
            <Pagination color='secondary'/>
            <Pagination color='tertiary'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={ColorCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              ColorCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Pagination />
      <Pagination color='secondary'/>
      <Pagination color='tertiary'/>
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
  <Pagination />
  <Pagination color='secondary'/>
  <Pagination color='tertiary'/>
</div>
</>`}/>
            }
          </div>
        </div>

        {/* Size */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Size</h3>
            <p className='description'>
              size 속성은 크기를 설정하는 속성입니다. <br/>
              기본값은 large 입니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Pagination />
            <Pagination size='medium'/>
            <Pagination size='small'/>
            <Pagination size='extraSmall'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={SizeCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              SizeCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Pagination />
      <Pagination size='medium'/>
      <Pagination size='small'/>
      <Pagination size='extraSmall'/>
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
  <Pagination />
  <Pagination size='medium'/>
  <Pagination size='small'/>
  <Pagination size='extraSmall'/>
</div>
</>`}/>
            }
          </div>
        </div>

        {/* Max */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Max</h3>
            <p className='description'>
              max 속성은 총 페이지 수를 설정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Pagination max={10}/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={MaxCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              MaxCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Pagination max={10}/>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Pagination max={10}/>
</>`}/>
            }
          </div>
        </div>

        {/* End Button */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>End Button</h3>
            <p className='description'>
              endBtn 속성은 좌우 맨끝으로 버튼을 나타내거나 없애는 속성입니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Pagination endBtn={false}/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={EndBtnCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              EndBtnCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Pagination } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Pagination endBtn={false}/>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Pagination endBtn={false}/>
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
                  <td>color</td>
                  <td>
                    <p className='b'>'primary'</p>
                    $colors
                  </td>
                  <td>
                    색상을 설정하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>
                    <p className='b'>'large'</p>
                    'medium' <br/>
                    'small'  <br/>
                    'extraSmall' <br/>
                  </td>
                  <td>
                    크기를 조절하는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>max</td>
                  <td>
                    <p className='b'>5</p>
                    number
                  </td>
                  <td>
                    페이지 수를 설정하는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>endBtn</td>
                  <td>
                    <p className='b'>true</p>
                    Boolean
                  </td>
                  <td>
                    맨 끝으로 버튼을 나타내거나 없애는 속성으로 불리언(Boolean) 타입입니다.
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

export default PaginationPage;