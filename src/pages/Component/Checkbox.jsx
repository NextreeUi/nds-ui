import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Checkbox, Button, Table } from '@/nds-ui/component';

const CheckboxPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();
  const [ThemeCode, setThemeCode] = React.useState(false);
  const ThemeCodeClick = () => {
    setThemeCode(!ThemeCode)
  }
  const [SizeCode, setSizeCode] = React.useState(false);
  const SizeCodeClick = () => {
    setSizeCode(!SizeCode)
  }
  const [ColorCode, setColorCode] = React.useState(false);
  const ColorCodeClick = () => {
    setColorCode(!ColorCode)
  }
  const [RippleCode, setRippleCode] = React.useState(false);
  const RippleCodeClick = () => {
    setRippleCode(!RippleCode)
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
          <h1>Checkbox</h1>
          <p className='description'>클릭 인터렉션이 있는 Checkbox 컴포넌트입니다.</p>
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
{`import { Checkbox } from 'nds-ui/component';
// or
import Checkbox from 'nds-ui/component/Checkbox';`}/>
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
              Checkbox 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              theme / size / color / ripple / 
              id / name / value / disabled 등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Theme */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Theme</h3>
            <p className='description'>
              theme 속성으로 체크박스의 컬러를 설정할 수 있습니다. <br/>
              theme 속성은 color, ripple 2개의 속성을 동시에 바꿉니다.
              디테일한 커스텀을 하려면 위 2개의 속성을 이용하시면 됩니다.
            </p>
          </div>
          <div className='layout-example'>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked theme='secondary' />
            <Checkbox defaultChecked theme='tertiary' />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={ThemeCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              ThemeCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked theme='secondary' />
      <Checkbox defaultChecked theme='tertiary' />
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
<Checkbox defaultChecked />
<Checkbox defaultChecked theme='secondary' />
<Checkbox defaultChecked theme='tertiary' />
</>`}/>
            }
          </div>
        </div>

        {/* Size */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Size</h3>
            <p className='description'>
              size 속성으로 체크박스의 크기를 설정할 수 있습니다. <br/>
              large / medium / small / extraSmall 4개의 값이 있으며, <br/>
              medium이 디폴트 값입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Checkbox defaultChecked size='large'/>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked size='small'/>
            <Checkbox defaultChecked size='extraSmall'/>
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
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox defaultChecked size='large'/>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked size='small'/>
      <Checkbox defaultChecked size='extraSmall'/>
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
<Checkbox defaultChecked size='large'/>
<Checkbox defaultChecked />
<Checkbox defaultChecked size='small'/>
<Checkbox defaultChecked size='extraSmall'/>
</>`}/>
            }
          </div>
        </div>

        {/* Color */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Color</h3>
            <p className='description'>
              color 속성으로 체크박스의 색상을 설정할 수 있습니다. <br/>
              theme와는 다르게 클릭 시 인터렉션 색은 설정되지 않고 체크 시 아이콘 색만 설정됩니다.
            </p>
          </div>
          <div className='layout-example'>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked color='secondary' />
            <Checkbox defaultChecked color='tertiary' />
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
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked color='secondary' />
      <Checkbox defaultChecked color='tertiary' />
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
<Checkbox defaultChecked />
<Checkbox defaultChecked color='secondary' />
<Checkbox defaultChecked color='tertiary' />
</>`}/>
            }
          </div>
        </div>

        {/* Ripple */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Ripple</h3>
            <p className='description'>
              ripple 속성으로 체크박스의 인터렉션 색상을 설정할 수 있습니다. <br/>
              theme와는 다르게 클릭 시 인터렉션 색만 설정됩니다.
            </p>
          </div>
          <div className='layout-example'>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked ripple='secondary' />
            <Checkbox defaultChecked ripple='tertiary' />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={RippleCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              RippleCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked ripple='secondary' />
      <Checkbox defaultChecked ripple='tertiary' />
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
<Checkbox defaultChecked />
<Checkbox defaultChecked ripple='secondary' />
<Checkbox defaultChecked ripple='tertiary' />
</>`}/>
            }
          </div>
        </div>

        {/* Disabled */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Disabled</h3>
            <p className='description'>
              disabled 속성으로 체크박스를 비활성화 할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Checkbox />
            <Checkbox disabled />
            <Checkbox defaultChecked />
            <Checkbox disabled defaultChecked />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={DisabledCodeClick}>
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
import { Checkbox } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Checkbox />
      <Checkbox disabled />
      <Checkbox defaultChecked />
      <Checkbox disabled defaultChecked />
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
<Checkbox />
<Checkbox disabled />
<Checkbox defaultChecked />
<Checkbox disabled defaultChecked />
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
                  <td>theme</td>
                  <td>
                    <p className='b'>'primary'</p>
                    $colors
                  </td>
                  <td>
                    theme 속성은 color, ripple 2가지 속성에 영향을 미칩니다. <br/>
                    더 상세한 커스텀을 원할 경우 theme 대신 위 2가지 속성을 조절하시면 됩니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>
                    'large'
                    <p className='b'>'medium'</p>
                    'small' <br/>
                    'extraSmall'
                  </td>
                  <td>
                    크기를 조절하는 값입니다.
                  </td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>
                    <p className='b'>'primary'</p>
                    $colors
                  </td>
                  <td>
                    체크 시 아이콘 색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>ripple</td>
                  <td>
                    <p className='b'>'primary'</p>
                    $colors
                  </td>
                  <td>
                    클릭 시 인터렉션 색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
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

export default CheckboxPage;