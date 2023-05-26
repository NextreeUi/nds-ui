import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Button, Table } from '@/nds-ui/component';

const RadioPage = () => {
  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Radio</h1>
          <p className='description'>클릭 인터렉션이 있는 Checkbox 컴포넌트입니다.</p>
        </div>

        {/* Basic */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h2>Basic Radio</h2>
          <p className='description'>variant 속성으로 버튼의 종류를 설정할 수 있습니다.</p>
        </div>
        <div className='layout-example'>
          <Button> Noraml </Button>
          <Button variant='outlined'> Outlined  </Button>
          <Button variant='contained'> Contained </Button>
        </div>
        <div className='codeMirror'>
          {
            BasicCode ?
<CodeMirror
            theme='dark'
            extensions={[javascript({ jsx: true })]}
            value=
{`import * as React from 'react';
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button> Noraml </Button>
      <Button variant='outlined'> Outlined  </Button>
      <Button variant='contained'> Contained </Button>
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
<Button> Noraml </Button>
<Button variant='outlined'> Outlined  </Button>
<Button variant='contained'> Contained </Button>
</>`}/>
          }
          <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={BasicCodeClick}>
            <i className='i-code w14 h14'/>
          </Button>
        </div>
      </div>

      </div>
    </>
  )
}

export default RadioPage;