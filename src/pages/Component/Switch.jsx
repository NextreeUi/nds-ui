import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Switch, Button, Table } from '@/nds-ui/component';

const SwitchPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [ColorCode, setColorCode] = React.useState(false);
  const ColorCodeClick = () => {
    setColorCode(!ColorCode)
  }
  const [RadiusCode, setRadiusCode] = React.useState(false);
  const RadiusCodeClick = () => {
    setRadiusCode(!RadiusCode)
  }
  const [DefaultCheckedCode, setDefaultCheckedCode] = React.useState(false);
  const DefaultCheckedCodeClick = () => {
    setDefaultCheckedCode(!DefaultCheckedCode)
  }
  const [DisabledCode, setDisabledCode] = React.useState(false);
  const DisabledCodeClick = () => {
    setDisabledCode(!DisabledCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Switch</h1>
          <p className='description'>Switch 컴포넌트입니다.</p>
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
{`import { Switch } from 'nds-ui/component';
// or
import Switch from 'nds-ui/component/Switch';`}/>
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
              Select 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              size / radius / defaultValue / list 등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Color */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Color</h3>
            <p className='description'>
              color 속성으로 스위치의 색상을 설정할 수 있습니다. <br/>
            </p>
          </div>
          <div className='layout-example'>
            <Switch defaultChecked />
            <Switch defaultChecked color='secondary'/>
            <Switch defaultChecked color='tertiary'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ColorCodeClick}>
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
import { Switch } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Switch defaultChecked />
      <Switch defaultChecked color='secondary'/>
      <Switch defaultChecked color='tertiary'/>
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
<Switch defaultChecked />
<Switch defaultChecked color='secondary'/>
<Switch defaultChecked color='tertiary'/>
</>`}/>
            }
          </div>
        </div>

        {/* Radius */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Radius</h3>
            <p className='description'>radius 속성으로 스위치의 굴곡을 설정할 수 있습니다.</p>
          </div>
          <div className='layout-example'>
            <Switch defaultChecked radius='rect' />
            <Switch defaultChecked />
            <Switch defaultChecked radius='round' />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={RadiusCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              RadiusCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Switch } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Switch defaultChecked radius='rect' />
      <Switch defaultChecked />
      <Switch defaultChecked radius='round' />
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
<Switch defaultChecked radius='rect' />
<Switch defaultChecked />
<Switch defaultChecked radius='round' />
</>`}/>
            }
          </div>
        </div>

        {/* DefaultChecked */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>DefaultChecked</h3>
            <p className='description'>
              defaultChecked 속성으로 기본체크를 할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Switch />
            <Switch defaultChecked />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={DefaultCheckedCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              DefaultCheckedCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Switch } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Switch />
      <Switch defaultChecked />
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
<Switch />
<Switch defaultChecked />
</>`}/>
            }
          </div>
        </div>

        {/* Disabled */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Disabled</h3>
            <p className='description'>
              disabled 속성으로 스위치를 비활성화 할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Switch defaultChecked />
            <Switch disabled defaultChecked />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={DisabledCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              DisabledCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Switch } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
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
<Switch defaultChecked />
<Switch disabled defaultChecked />
</>`}/>
            }
          </div>
        </div>

        {/* id, name, value */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>ID / Name / Value</h3>
            <p className='description'>
              id / name / value 속성은 html과 사용방법이 같습니다.
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
                  <td>color</td>
                  <td>
                    <p className='b'>'primary'</p>
                    $colors
                  </td>
                  <td>
                    체크 시 배경 색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>radius</td>
                  <td>
                    'rect' <br/>
                    'normal'
                    <p className='b'>'round'</p>
                  </td>
                  <td>
                    굴곡을 조절하는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>defaultChecked</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    기본체크 속성으로 불리언(Boolean) 타입입니다. <br/>
                    속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
                  </td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    비활성화 속성으로 불리언(Boolean) 타입입니다. <br/>
                    속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
                  </td>
                </tr>
                <tr>
                  <td>id</td>
                  <td>
                    string
                  </td>
                  <td>
                    id 값을 부여하는 속성입니다. <br/>
                    문자열 타입으로 자유롭게 부여 가능합니다.
                  </td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>
                    string
                  </td>
                  <td>
                    name 값을 부여하는 속성입니다. <br/>
                    문자열 타입으로 자유롭게 부여 가능합니다.
                  </td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>
                    string
                  </td>
                  <td>
                    value 값을 부여하는 속성입니다. <br/>
                    문자열 타입으로 자유롭게 부여 가능합니다.
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

export default SwitchPage;