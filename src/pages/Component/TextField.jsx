import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { TextField, Button, Table } from '@/nds-ui/component';

const TextFieldPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [SizeCode, setSizeCode] = React.useState(false);
  const SizeCodeClick = () => {
    setSizeCode(!SizeCode)
  }
  const [RadiusCode, setRadiusCode] = React.useState(false);
  const RadiusCodeClick = () => {
    setRadiusCode(!RadiusCode)
  }
  const [DefaultValueCode, setDefaultValueCode] = React.useState(false);
  const DefaultValueCodeClick = () => {
    setDefaultValueCode(!DefaultValueCode)
  }
  const [PlaceholderCode, setPlaceholderCode] = React.useState(false);
  const PlaceholderCodeClick = () => {
    setPlaceholderCode(!PlaceholderCode)
  }
  const [HelperTextCode, setHelperTextCode] = React.useState(false);
  const HelperTextCodeClick = () => {
    setHelperTextCode(!HelperTextCode)
  }
  const [ErrorCode, setErrorCode] = React.useState(false);
  const ErrorCodeClick = () => {
    setErrorCode(!ErrorCode)
  }
  const [ReadOnlyCode, setReadOnlyCode] = React.useState(false);
  const ReadOnlyCodeClick = () => {
    setReadOnlyCode(!ReadOnlyCode)
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
          <h1>TextField</h1>
          <p className='description'>TextField 컴포넌트입니다.</p>
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
{`import { TextField } from 'nds-ui/component';
// or
import TextField from 'nds-ui/component/TextField';`}/>
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
              TextField 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              size / radius / disabled / readOnly / placeholder / defaultValue / helperText / error 등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Basic */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic</h3>
            <p className='description'>
              기본적인 TextFieald 형태입니다. <br/>
              박스 내부에 글을 입력할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <TextField/>
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
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField/>
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
<TextField/>
</>`}/>
            }
          </div>
        </div>

        {/* Size */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Size</h3>
            <p className='description'>
              size 속성으로 박스의 크기를 설정할 수 있습니다. <br/>
              기본 값은 medium 입니다.
            </p>
          </div>
          <div className='layout-example'>
            <TextField placeholder='large' size='large'/>
            <TextField placeholder='medium' />
            <TextField placeholder='small' size='small'/>
            <TextField placeholder='extraSmall' size='extraSmall'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={SizeCodeClick}>
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
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <TextField placeholder='large' size='large'/>
      <TextField placeholder='medium' />
      <TextField placeholder='small' size='large'/>
      <TextField placeholder='extraSmall' size='large'/>
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
<TextField placeholder='large' size='large'/>
<TextField placeholder='medium' />
<TextField placeholder='small' size='large'/>
<TextField placeholder='extraSmall' size='large'/>
</>`}/>
            }
          </div>
        </div>

        {/* Radius */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Radius</h3>
            <p className='description'>
              radius 속성으로 박스의 굴곡을 설정할 수 있습니다. <br/>
              기본 값은 normal 입니다.
            </p>
          </div>
          <div className='layout-example'>
            <TextField placeholder='rect' radius='rect'/>
            <TextField placeholder='normal' />
            <TextField placeholder='round' radius='round'/>
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
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <TextField placeholder='rect' radius='rect'/>
      <TextField placeholder='normal' />
      <TextField placeholder='round' radius='round'/>
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
<TextField placeholder='rect' radius='rect'/>
<TextField placeholder='normal' />
<TextField placeholder='round' radius='round'/>
</>`}/>
            }
          </div>
        </div>
        
        {/* DefaultValue */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>DefaultValue</h3>
            <p className='description'>
              defaultValue 속성으로 박스를 기본값을 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <TextField defaultValue='기본값입니다.'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={DefaultValueCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              DefaultValueCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField defaultValue='기본값입니다.'/>
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
<TextField defaultValue='기본값입니다.'/>
</>`}/>
            }
          </div>
        </div>

        {/* Placeholder */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Placeholder</h3>
            <p className='description'>
            placeholder 속성으로 입력시 자동삭제되는 값을 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <TextField placeholder='아이디를 입력하세요'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={PlaceholderCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              PlaceholderCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField placeholder='아이디를 입력하세요'/>
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
<TextField placeholder='아이디를 입력하세요'/>
</>`}/>
            }
          </div>
        </div>

        {/* HelperText */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>HelperText</h3>
            <p className='description'>
              helperText 속성으로 하단의 도움말을 넣을 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <TextField placeholder='아이디를 입력하세요' helperText='도움말'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={HelperTextCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              HelperTextCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField placeholder='아이디를 입력하세요' helperText='도움말'/>
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
<TextField placeholder='아이디를 입력하세요' helperText='도움말'/>
</>`}/>
            }
          </div>
        </div>

        {/* Error */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Error</h3>
            <p className='description'>
              error 속성으로 경고표시를 할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <TextField error defaultValue='error!@#' helperText='특수문자 제외'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ErrorCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              ErrorCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <TextField error defaultValue='error!@#' helperText='특수문자 제외'/>
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
<TextField error defaultValue='error!@#' helperText='특수문자 제외'/>
</>`}/>
            }
          </div>
        </div>

        {/* ReadOnly */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>ReadOnly</h3>
            <p className='description'>
              readOnly 속성으로 읽기전용 설정 할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <TextField defaultValue='기본값'/>
            <TextField readOnly defaultValue='읽기전용'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ReadOnlyCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              ReadOnlyCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <TextField defaultValue='기본값'/>
      <TextField readOnly defaultValue='읽기전용'/>
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
<TextField defaultValue='기본값'/>
<TextField readOnly defaultValue='읽기전용'/>
</>`}/>
            }
          </div>
        </div>

        {/* Disabled */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Disabled</h3>
            <p className='description'>
              disabled 속성으로 비활성화 설정 할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <TextField defaultValue='기본값'/>
            <TextField disabled defaultValue='비활성화'/>
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
import { TextArea } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <TextField defaultValue='기본값'/>
      <TextField disabled defaultValue='비활성화'/>
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
<TextField defaultValue='기본값'/>
<TextField disabled defaultValue='비활성화'/>
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
                  <td>size</td>
                  <td>
                    'large' <br/>
                    <p className='b'>'medium'</p>
                    'small' <br/>
                    'extraSmall'
                  </td>
                  <td>
                    크기를 조절하는 값입니다.
                  </td>
                </tr>
                <tr>
                  <td>radius</td>
                  <td>
                    'rect' <br/>
                    <p className='b'>'normal'</p>
                    'round'
                  </td>
                  <td>
                    굴곡을 조절하는 값입니다.
                  </td>
                </tr>
                <tr>
                  <td>defaultValue</td>
                  <td>
                    string
                  </td>
                  <td>
                    기본 값을 설정해주는 속성으로 문자열(string)을 넣습니다.
                  </td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>
                    string
                  </td>
                  <td>
                    입력시 사라지는 값을 설정하는 속성으로 문자열(string)을 넣습니다. 
                  </td>
                </tr>
                <tr>
                  <td>helperText</td>
                  <td>
                    string
                  </td>
                  <td>
                    도움말 내용을 설정하는 속성으로 문자열(string)을 넣습니다. 
                  </td>
                </tr>
                <tr>
                  <td>error</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    에러 속성으로 불리언(Boolean) 타입입니다. <br/>
                    속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
                  </td>
                </tr>
                <tr>
                  <td>readOnly</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    읽기전용 속성으로 불리언(Boolean) 타입입니다. <br/>
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
                  <td>onClick</td>
                  <td>
                    func
                  </td>
                  <td>
                    JavaScript와 사용법이 같습니다.
                  </td>
                </tr>

                <tr>
                  <td>onFocus</td>
                  <td>
                    func
                  </td>
                  <td>
                    JavaScript와 사용법이 같습니다.
                  </td>
                </tr>

                <tr>
                  <td>onKeyDown</td>
                  <td>
                    func
                  </td>
                  <td>
                    JavaScript와 사용법이 같습니다.
                  </td>
                </tr>

                <tr>
                  <td>className</td>
                  <td>
                    string
                  </td>
                  <td>
                    TextField의 클래스를 설정하는 속성입니다.
                  </td>
                </tr>

                <tr>
                  <td>classHelper</td>
                  <td>
                    string
                  </td>
                  <td>
                    helperText의 클래스를 설정하는 속성입니다.
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

export default TextFieldPage;