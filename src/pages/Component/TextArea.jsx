import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { TextArea, Button, Table } from '@/nds-ui/component';

const TextAreaPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [RectCode, setRectCode] = React.useState(false);
  const RectCodeClick = () => {
    setRectCode(!RectCode)
  }
  const [DefaultValueCode, setDefaultValueCode] = React.useState(false);
  const DefaultValueCodeClick = () => {
    setDefaultValueCode(!DefaultValueCode)
  }
  const [PlaceholderCode, setPlaceholderCode] = React.useState(false);
  const PlaceholderCodeClick = () => {
    setPlaceholderCode(!PlaceholderCode)
  }
  const [RowsCode, setRowsCode] = React.useState(false);
  const RowsCodeClick = () => {
    setRowsCode(!RowsCode)
  }
  const [MaxLengthCode, setMaxLengthCode] = React.useState(false);
  const MaxLengthCodeClick = () => {
    setMaxLengthCode(!MaxLengthCode)
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
          <h1>TextArea</h1>
          <p className='description'>TextArea 컴포넌트입니다.</p>
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
{`import { TextArea } from 'nds-ui/component';
// or
import TextArea from 'nds-ui/component/TextArea';`}/>
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
              TextArea 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              rect / defaultValue / rows / maxLength / readOnly / disabled 등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Basic */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic</h3>
            <p className='description'>
              기본적인 TextArea 형태입니다. <br/>
              박스 내부에 글을 입력할 수 있습니다. <br/>
              TextField와 다른 점은 여러 줄의 글을 쓸 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <TextArea/>
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
      <TextArea/>
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
<TextArea/>
</>`}/>
            }
          </div>
        </div>

        {/* Rect */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Rect</h3>
            <p className='description'>
              rect 속성으로 박스의 굴곡을 각지게 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <TextArea rect/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={RectCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              RectCode ?
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
      <TextArea rect/>
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
<TextArea rect/>
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
          <div className='layout-example flexColumn'>
            <TextArea defaultValue='기본값입니다.'/>
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
      <TextArea defaultValue='기본값입니다.'/>
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
<TextArea defaultValue='기본값입니다.'/>
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
          <div className='layout-example flexColumn'>
            <TextArea placeholder='아이디를 입력하세요'/>
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
      <TextArea placeholder='아이디를 입력하세요'/>
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
<TextArea placeholder='아이디를 입력하세요'/>
</>`}/>
            }
          </div>
        </div>

        {/* Rows */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Rows</h3>
            <p className='description'>
              rows 속성으로 박스의 높이를 라인 갯수만큼 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <TextArea rows={10}/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={RowsCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              RowsCode ?
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
      <TextArea rows={10}/>
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
<TextArea rows={10}/>
</>`}/>
            }
          </div>
        </div>

        {/* MaxLength */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>MaxLength</h3>
            <p className='description'>
              maxLength 속성으로 최대 글자 수를 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <TextArea maxLength={10}/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={MaxLengthCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              MaxLengthCode ?
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
      <TextArea maxLength={10}/>
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
<TextArea maxLength={10}/>
</>`}/>
            }
          </div>
        </div>

        {/* ReadOnly */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>ReadOnly</h3>
            <p className='description'>
              readOnly 속성으로 읽기전용으로 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <TextArea defaultValue='기본값입니다.'/>
            <TextArea readOnly defaultValue='읽기전용입니다.'/>
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
    <div className='flexColumn gap10'>
      <TextArea defaultValue='기본값입니다.'/>
      <TextArea readOnly defaultValue='읽기전용입니다.'/>
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
<TextArea defaultValue='기본값입니다.'/>
<TextArea readOnly defaultValue='읽기전용입니다.'/>
</>`}/>
            }
          </div>
        </div>

        {/* Disabled */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Disabled</h3>
            <p className='description'>
              disabled 속성으로 비활성화 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <TextArea defaultValue='기본값입니다.'/>
            <TextArea disabled defaultValue='비활성화입니다.'/>
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
    <div className='flexColumn gap10'>
      <TextArea defaultValue='기본값입니다.'/>
      <TextArea disabled defaultValue='비활성화입니다.'/>
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
<TextArea defaultValue='기본값입니다.'/>
<TextArea disabled defaultValue='비활성화입니다.'/>
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
                  <td>rect</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    굴곡을 설정하는 속성으로 불리언(Boolean) 타입입니다. <br/>
                    속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
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
                  <td>rows</td>
                  <td>
                    number
                  </td>
                  <td>
                    박스의 높이를 라인 갯수에 따라 설정합니다. 숫자(number) 타입입니다.
                  </td>
                </tr>

                <tr>
                  <td>maxLength</td>
                  <td>
                    number
                  </td>
                  <td>
                    최대 글자수를 설정합니다. 숫자(number) 타입입니다.
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
                  <td>onChange</td>
                  <td>
                    func
                  </td>
                  <td>
                    JavaScript와 사용법이 같습니다.
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

export default TextAreaPage;