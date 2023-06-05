import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { javascript } from '@codemirror/lang-javascript';

// nds-ui
import { Button, Popup } from '@/nds-ui/component';

//img
import ReactImg from '@/assets/images/react.png';

const HowtoUse = () => {
  const InstallRef = React.useRef();
  const FrameworkRef = React.useRef();
  const SettingRef = React.useRef();

  const Copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
    }
  };

  const [CopyClickState, setCopyClickState] = React.useState(false);
  const CopyClick = () => {
    setCopyClickState(true);
    setTimeout(()=>{
      setCopyClickState(false)
    }, 2000)
  }
  

  return (
    <>
      {/* CopyClick */}
      <div className={`copyclick ${CopyClickState ? 'open' : ''}`}>
        복사되었습니다.
      </div>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>How to Use</h1>
        </div>

        {/* Framework */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={FrameworkRef}>Framework</h2>
            <div className='flex justifyCenter radius otl-grayc'>
              <img src={ReactImg} className='w200 h200'/>
            </div>
            <p className='description'>
              NDS-UI는 리액트 기반 라이브러리입니다. <br/>
              리액트를 설치해주세요. 
            </p>
            <div className='codeMirror'>
              <div className='btn-wrap shell'>
                <Button 
                  square radius='round' variant='outlined' size='extraSmall' 
                  onClick={() => {
                    Copy('npx create-react-app my-app')
                    CopyClick()
                  }}
                >
                  <i className='i-copy w14 h14'/>
                </Button>
              </div>
              <CodeMirror
                theme='dark'
                extensions={[markdown({ markdown: true })]}
                value=
{`npx create-react-app my-app`}/>
            </div>
            <p className='description flex gap10'>
              더 자세한 리액트 설치 방법은 리액트 홈페이지를 참고바랍니다.
              <a className='link' href='https://reactjs-kr.firebaseapp.com/docs/installation.html'>
                React Homepage
              </a>
            </p>
          </div>
        </div>

        {/* Install */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={InstallRef}>Install</h2>
            <div className='codeMirror'>
              <div className='btn-wrap shell'>
                <Button 
                  square radius='round' variant='outlined' size='extraSmall' 
                  onClick={() => {
                    Copy('npm i nds-ui sass')
                    CopyClick()
                  }}
                >
                  <i className='i-copy w14 h14'/>
                </Button>
              </div>
              <CodeMirror
                theme='dark'
                extensions={[markdown({ markdown: true })]}
                value=
{`npm i nds-ui sass`}/>
            </div>
            <p className='description'>
              설치는 nds-ui와 sass를 설치해주시면 됩니다.
            </p>
          </div>
        </div>

        {/* Setting */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={SettingRef}>Setting</h2>
            <div className='flex justifyCenter p30 radius otl-grayc'>
              <div className='flex alignCenter'>
                <div className='size40 txt-primary b txtCenter w400'>
                  React <br/>
                  UI Component
                </div>
                <div className='h50 w5 bgc-primary'/>
                <div className='size40 txt-primary b txtCenter w400'>
                  CSS <br/>
                  Utility Class
                </div>
              </div>
            </div>
            <p className='description'>
              NDS-UI는 크게 React UI Component와 CSS Utility Class를 제공합니다. <br/>
              (자세한 사용법은 Component페이지와 Variable, Util페이지를 참고하세요)
            </p>
          </div>
        </div>

        {/* Theme */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Theme</h3>
            <p className='description'>
              NDS-UI를 사용하기 전에 먼저 Theme 설정이 필요합니다. <br/>
              가장 상위 JSX 파일에 data-theme 속성의 값을 ligth나 dark로 설정해줍니다.
            </p>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[javascript({ jsx: true })]}
                value=
{`// 가장 상위 JSX 파일
function App() {
  React.useEffect(()=> {
    document.documentElement.setAttribute("data-theme", "light");
  }, [])
  return (
    <>
      가장 상위 JSX 파일 내용
    </>
  );
}

export default App;`}/>
            </div>
            
          </div>
        </div>

        {/* React */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>React - UI Component</h3>
            <p className='description'>
              컴포넌트 임포트 방법은 단순합니다.<br/>
              여러 개를 한번에 임포트하려면 중괄호로 감싸주시면 되고, 임포트 주소는 폴더까지만 입력합니다. <br/>
              한 개만 임포트하려면 중괄호로 감쌀 필요없고, 임포트 주소는 폴더 내부 컴포넌트 파일까지 입력한니다. <br/>
              (매 파일마다 컴포넌트 사용시 <b>'매 번'</b> 임포트가 필요합니다.)
            </p>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[javascript({ jsx: true })]}
                value=
{`import { Button, Popup } from 'nds-ui/component';
// or
import Button from 'nds-ui/component/Button';`}/>
            </div>
            
          </div>
        </div>


        {/* SCSS */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>SCSS - Utility Class</h3>
            <p className='description'>
              기본 Css와 Utility Class를 사용하기 위한 scss파일 임포트입니다. <br/>
              (가장 상위 JSX 파일에 <b>'한 번만'</b> 임포트해도 하위 파일에서 사용가능합니다.)
            </p>
            <div className='codeMirror'>
              <div className='btn-wrap shell'>
                <Button 
                  square radius='round' variant='outlined' size='extraSmall' 
                  onClick={() => {
                    Copy('import "nds-ui/css/style.scss";')
                    CopyClick()
                  }}
                >
                  <i className='i-copy w14 h14'/>
                </Button>
              </div>
              <CodeMirror
                theme='dark'
                extensions={[javascript({ jsx: true })]}
                value=
{`import "nds-ui/css/style.scss";`}/>
            </div>
            
          </div>
        </div>

        <div className='layout-scroll'>
          <p>Content</p>
          <a onClick={()=>{InstallRef.current.scrollIntoView()}}> Install</a>
          <a onClick={()=>{FrameworkRef.current.scrollIntoView()}}> Framework</a>
          <a onClick={()=>{SettingRef.current.scrollIntoView()}}> Setting</a>
        </div>
      </div>
    </>
  )
}
export default HowtoUse;