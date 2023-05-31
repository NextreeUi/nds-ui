import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Avatar, Button, Table } from '@/nds-ui/component';

const AvatarPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [NameCode, setNameCode] = React.useState(false);
  const NameCodeClick = () => {
    setNameCode(!NameCode)
  }
  const [SizeCode, setSizeCode] = React.useState(false);
  const SizeCodeClick = () => {
    setSizeCode(!SizeCode)
  }
  const [ColorCode, setColorCode] = React.useState(false);
  const ColorCodeClick = () => {
    setColorCode(!ColorCode)
  }
  const [RadiusCode, setRadiusCode] = React.useState(false);
  const RadiusCodeClick = () => {
    setRadiusCode(!RadiusCode)
  }
  const [NumberCode, setNumberCode] = React.useState(false);
  const NumberCodeClick = () => {
    setNumberCode(!NumberCode)
  }
  
  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Avatar</h1>
          <p className='description'>Avatar 컴포넌트입니다.</p>
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
{`import { Avatar } from 'nds-ui/component';
// or
import Avatar from 'nds-ui/component/Avatar';`}/>
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
              Avatar 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              name / size / color / radius / number  등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Name */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Name</h3>
            <p className='description'>
              기본적인 Avatar 형태입니다. <br/>
              name 속성에 이름을 표기하면, 맨 앞글자를 대문자로 표기해줍니다. <br/>
              색상 설정을 안할 경우 Variable의 $avatar1~10까지 10가지 색상중 랜덤으로 선택됩니다.
            </p>
          </div>
          <div className='layout-example'>
            <Avatar name='nds'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={NameCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              NameCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds'/>
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
<Avatar name='nds'/>
</>`}/>
            }
          </div>
        </div>

        {/* Size */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Size</h3>
            <p className='description'>
              size 속성으로 크기를 설정할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Avatar name='nds' size='large'/>
            <Avatar name='nds' />
            <Avatar name='nds' size='small'/>
            <Avatar name='nds' size='extraSmall'/>
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
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds' size='large'/>
      <Avatar name='nds' />
      <Avatar name='nds' size='small'/>
      <Avatar name='nds' size='extraSmall'/>
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
<Avatar name='nds' size='large'/>
<Avatar name='nds' />
<Avatar name='nds' size='small'/>
<Avatar name='nds' size='extraSmall'/>
</>`}/>
            }
          </div>
        </div>

        {/* Radius */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Radius</h3>
            <p className='description'>
              radius 속성으로 굴곡을 설정할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Avatar name='nds' radius='rect'/>
            <Avatar name='nds' radius='normal'/>
            <Avatar name='nds' />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={RadiusCodeClick}>
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
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds' radius='rect'/>
      <Avatar name='nds' radius='normal'/>
      <Avatar name='nds' />
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
<Avatar name='nds' radius='rect'/>
<Avatar name='nds' radius='normal'/>
<Avatar name='nds' />
</>`}/>
            }
          </div>
        </div>

        {/* Number */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Number</h3>
            <p className='description'>
              number 속성으로 랜덤 색상을 고정으로 설정할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Avatar name='nds' number={1}/>
            <Avatar name='nds' number={2}/>
            <Avatar name='nds' number={3}/>
            <Avatar name='nds' number={4}/>
            <Avatar name='nds' number={5}/>
            <Avatar name='nds' number={6}/>
            <Avatar name='nds' number={7}/>
            <Avatar name='nds' number={8}/>
            <Avatar name='nds' number={9}/>
            <Avatar name='nds' number={10}/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={NumberCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              NumberCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds' number={1}/>
      <Avatar name='nds' number={2}/>
      <Avatar name='nds' number={3}/>
      <Avatar name='nds' number={4}/>
      <Avatar name='nds' number={5}/>
      <Avatar name='nds' number={6}/>
      <Avatar name='nds' number={7}/>
      <Avatar name='nds' number={8}/>
      <Avatar name='nds' number={9}/>
      <Avatar name='nds' number={10}/>
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
<Avatar name='nds' number={1}/>
<Avatar name='nds' number={2}/>
<Avatar name='nds' number={3}/>
<Avatar name='nds' number={4}/>
<Avatar name='nds' number={5}/>
<Avatar name='nds' number={6}/>
<Avatar name='nds' number={7}/>
<Avatar name='nds' number={8}/>
<Avatar name='nds' number={9}/>
<Avatar name='nds' number={10}/>
</>`}/>
            }
          </div>
        </div>

        {/* Color */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Color</h3>
            <p className='description'>
              color 속성으로 아바타 색상 10가지 외의 색상으로 설정할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Avatar name='nds' color='primary'/>
            <Avatar name='nds' color='secondary'/>
            <Avatar name='nds' color='tertiary'/>
            <Avatar name='nds' color='primary_light'/>
            <Avatar name='nds' color='secondary_light'/>
            <Avatar name='nds' color='tertiary_light'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={NumberCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              NumberCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Avatar } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Avatar name='nds' color='primary'/>
      <Avatar name='nds' color='secondary'/>
      <Avatar name='nds' color='tertiary'/>
      <Avatar name='nds' color='primary_light'/>
      <Avatar name='nds' color='secondary_light'/>
      <Avatar name='nds' color='tertiary_light'/>
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
<Avatar name='nds' color='primary'/>
<Avatar name='nds' color='secondary'/>
<Avatar name='nds' color='tertiary'/>
<Avatar name='nds' color='primary_light'/>
<Avatar name='nds' color='secondary_light'/>
<Avatar name='nds' color='tertiary_light'/>
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
                  <td>name</td>
                  <td>
                    string
                  </td>
                  <td>
                    닉네임의 대표문자를 설정하는 속성입니다. <br/>
                    설장한 문자의 맨 앞글자가 대문자로 출력됩니다.
                  </td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>
                    'large' <br/>
                    <p className='b'>'medium'</p>
                    'small' <br/>
                    'extraSmall'
                  </td>
                  <td>
                    크기를 설정하는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>radius</td>
                  <td>
                    'rect' <br/>
                    'normal' <br/>
                    <p className='b'>'round'</p>
                  </td>
                  <td>
                    굴곡을 설정하는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>number</td>
                  <td>
                    1~10 <br/>
                    number
                  </td>
                  <td>
                    배경색을 아바타 색상 1~10가지 중에서 1가지를 설정하는 속성입니다. <br/>
                    아바타 색상 수정을 원할경우 10가지는 Variable의 변수 $avatar1~10을 변경하시면 됩니다.
                  </td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    배경색을 설정하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
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

export default AvatarPage;