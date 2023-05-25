import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Location, Button } from '@/nds-ui/component';

const ButtonPage = () => {
  return (
    <div className='layout-all'>
      {/* Title */}
      <div className='layout-title'>
        <Location
          depth1={<p className='bb'>Components</p>}
          link1='/DefaultLayout/Component/ButtonPage'
          last={<p className=''>INPUT</p>}
          linkLast='/DefaultLayout/Component/ButtonPage'
          icon={<i className='i-location-arrow bgc-gray6'/>}
        />
        <h1>Button</h1>
        <p className='description'>클릭 인터렉션이 있는 Button 컴포넌트입니다.</p>
      </div>
      {/* Basic */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h2>Basic Button</h2>
          <p className='description'>Button 컴포넌트는 3가지 variant 속성값을 가집니다.</p>
        </div>
        <div className='layout-example'>
          <Button> Noraml </Button>
          <Button variant='outlined'> Outlined </Button>
          <Button variant='contained'> Contained </Button>
        </div>
        <div className='codeMirror'>
          <CodeMirror
            theme='dark'
            extensions={[javascript({ jsx: true })]}
            value=
{`<>
<Button> Noraml </Button>
<Button variant='outlined'> Outlined </Button>
<Button variant='contained'> Contained </Button>
</>`}/>
        </div>
      </div>
      {/* Theme */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h2>Theme</h2>
          <p className='description'>Theme 속성으로 버튼의 컬러를 설정할 수 있습니다.</p>
        </div>
        <div className='layout-example'>
          <Button theme='primary' variant='contained'> Noraml </Button>
          <Button theme='secondary' variant='contained'> Outlined </Button>
          <Button theme='tertiary' variant='contained'> Contained </Button>
        </div>
        <div className='codeMirror'>
          <CodeMirror
            theme='dark'
            extensions={[javascript({ jsx: true })]}
            value=
{`<>
<Button> Noraml </Button>
<Button> Noraml </Button>
<Button> Noraml </Button>
<Button variant='outlined'> Outlined </Button>
<Button variant='contained'> Contained </Button>
</>`}/>
        </div>
      </div>
    </div>
  )
}

export default ButtonPage;

const Example = () => {
  return(
    <div className='flexColumn gap10'>
      <div className='flex gap10'>
        <Button className='w150' radius='round' size='small' variant='contained' >
          <p className='t' >노토산스 </p>
        </Button>
        <Button className='w150' radius='round' size='small' variant='contained' >
          <p className='b' >Inter </p>
        </Button>
        <Button className='w150' radius='round' size='small' variant='contained' >
          <p className='m' >프리텐다드 </p>
        </Button>
        <Button className='w150' radius='round' size='small' variant='contained' >
          <p className='m' >Pretendard </p>
        </Button>
      </div>
      <div className='flex gap10'>
        <Button className='w150' radius='round' size='large' variant='contained' >
          <p className='t' >노토산스 </p>
        </Button>
        <Button className='w150' radius='round' size='large' variant='contained' >
          <p className='b' >Inter </p>
        </Button>
        <Button className='w180' radius='round' size='large' variant='contained' >
          <p className='m' >프리텐다드 한글 </p>
        </Button>
        <Button className='w180' radius='round' size='large' variant='contained' >
          <p className='m' >Pretendard</p>
        </Button>
      </div>
      </div>
  )
}