import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Select, Button, Table } from '@/nds-ui/component';

const SelectPage = () => {
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
  const [DisabledCode, setDisabledCode] = React.useState(false);
  const DisabledCodeClick = () => {
    setDisabledCode(!DisabledCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Select</h1>
          <p className='description'>Select 컴포넌트입니다.</p>
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
{`import { Select } from 'nds-ui/component';
// or
import Select from 'nds-ui/component/Select';`}/>
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
        
        {/* Basic */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic</h3>
            <p className='description'>
              기본적인 Select 형태입니다. <br/>
              list 속성을 사용해서 옵션의 내용을 설정할 수 있습니다. <br/>
              list 속성의 값은 배열(Array)을 사용합니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Select list={['Option1', 'Option2', 'Option3']} />
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
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Select list={['Option1', 'Option2', 'Option3']} />
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
<Select list={['Option1', 'Option2', 'Option3']} />
</>`}/>
            }
          </div>
        </div>

        {/* Size */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Size</h3>
            <p className='description'>
              size 속성으로 셀렉트 박스의 크기를 설정할 수 있습니다. <br/>
              large / medium / small / extraSmall 4개의 값이 있으며, <br/>
              medium이 디폴트 값입니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Select list={['Large1', 'Large2', 'Large3']} size='large' />
            <Select list={['Medium1', 'Medium2', 'Medium3']} />
            <Select list={['Small1', 'Small2', 'Small3']} size='small' />
            <Select list={['ExtraSmall1', 'ExtraSmall2', 'ExtraSmall3']} size='extraSmall' />
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
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Select list={['Large1', 'Large2', 'Large3']} size='large' />
      <Select list={['Medium1', 'Medium2', 'Medium3']} />
      <Select list={['Small1', 'Small2', 'Small3']} size='small' />
      <Select list={['ExtraSmall1', 'ExtraSmall2', 'ExtraSmall3']} size='extraSmall' />
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
<Select list={['Large1', 'Large2', 'Large3']} size='large' />
<Select list={['Medium1', 'Medium2', 'Medium3']} />
<Select list={['Small1', 'Small2', 'Small3']} size='small' />
<Select list={['ExtraSmall1', 'ExtraSmall2', 'ExtraSmall3']} size='extraSmall' />
</>`}/>
            }
          </div>
        </div>

        {/* Radius */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Radius</h3>
            <p className='description'>radius 속성으로 셀렉트 박스의 굴곡을 설정할 수 있습니다.</p>
          </div>
          <div className='layout-example'>
            <Select list={['rect1', 'rect2', 'rect3']} radius='rect'/>
            <Select list={['noraml1', 'noraml2', 'noraml3']} />
            <Select list={['round1', 'round2', 'round3']} radius='round'/>
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
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Select list={['rect1', 'rect2', 'rect3']} radius='rect'/>
      <Select list={['noraml1', 'noraml2', 'noraml3']} />
      <Select list={['round1', 'round2', 'round3']} radius='round'/>
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
<Select list={['rect1', 'rect2', 'rect3']} radius='rect'/>
<Select list={['noraml1', 'noraml2', 'noraml3']} />
<Select list={['round1', 'round2', 'round3']} radius='round'/>
</>`}/>
            }
          </div>
        </div>

        {/* DefaultValue */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>DefaultValue</h3>
            <p className='description'>
              defaultValue 속성으로 셀렉트 박스의 기본 값을 설정할 수 있습니다. <br/>
              속성 값은 숫자형으로 0부터 시작합니다.
            </p>
          </div>
          <div className='layout-example'>
            <Select list={['default0', 'default1', 'default2']} defaultValue={0}/>
            <Select list={['default0', 'default1', 'default2']} defaultValue={1}/>
            <Select list={['default0', 'default1', 'default2']} defaultValue={2}/>
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
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Select list={['default0', 'default1', 'default2']} defaultValue={0}/>
      <Select list={['default0', 'default1', 'default2']} defaultValue={1}/>
      <Select list={['default0', 'default1', 'default2']} defaultValue={2}/>
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
<Select list={['default0', 'default1', 'default2']} defaultValue={0}/>
<Select list={['default0', 'default1', 'default2']} defaultValue={1}/>
<Select list={['default0', 'default1', 'default2']} defaultValue={2}/>
</>`}/>
            }
          </div>
        </div>

        {/* Dsiabled */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Dsiabled</h3>
            <p className='description'>
              dsiabled 속성으로 셀렉트 박스를 비활성화할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Select list={['default0', 'default1', 'default2']} />
            <Select list={['disabled0', 'disabled1', 'disabled2']} disabled/>
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
import { Select } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Select list={['default0', 'default1', 'default2']} />
      <Select list={['disabled0', 'disabled1', 'disabled2']} disabled/>
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
<Select list={['default0', 'default1', 'default2']} />
<Select list={['disabled0', 'disabled1', 'disabled2']} disabled/>
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
                    'small'
                    'extraSmall'
                  </td>
                  <td>
                    크기를 조절하는 값입니다.
                  </td>
                </tr>
                <tr>
                  <td>raidus</td>
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
                    number
                  </td>
                  <td>
                    기본 값을 설정해주는 속성으로 숫자(number) 타입입니다. <br/>
                    0부터 순서대로 값을 입력하면 됩니다.
                  </td>
                </tr>

                <tr>
                  <td>list</td>
                  <td>
                    array
                  </td>
                  <td>
                    옵션 값을 설정하는 속성으로 배열(array)를 넣습니다. <br/>
                    배열 안의 갯수만큼 옵션이 생성됩니다.
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

export default SelectPage;