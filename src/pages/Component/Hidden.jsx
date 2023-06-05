import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Hidden, Button, Table } from '@/nds-ui/component';

const HiddenPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [MaxCode, setMaxCode] = React.useState(false);
  const MaxCodeClick = () => {
    setMaxCode(!MaxCode)
  }
  const [MinCode, setMinCode] = React.useState(false);
  const MinCodeClick = () => {
    setMinCode(!MinCode)
  }
  const [ExampleCode, setExampleCode] = React.useState(false);
  const ExampleCodeClick = () => {
    setExampleCode(!ExampleCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Hidden</h1>
          <p className='description'>Hidden 컴포넌트입니다.</p>
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
{`import { Hidden } from 'nds-ui/component';
// or
import Hidden from 'nds-ui/component/Hidden';`}/>
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
              Hidden 컴포넌트는 스크린의 사이즈에 따라 화면에 나타나게 하고 없어지게 하는 기능입니다. 반응형 웹에 특화된 컴포넌트라고 볼 수 있습니다. <br/>
              Hidden 컴포넌트 안에는 2가지 속성이 있습니다. <br/>
              max와 min이 있는데, 그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Max */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Max</h3>
            <p className='description'>
              max 속성을 이용하여 max 이상의 내용을 사라지게 할 수 있습니다. <br/>
              화면을 줄였다가 늘려보세요.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
            <Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
            <Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={MaxCodeClick}>
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
import { Hidden } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
      <Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
      <Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
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
<Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
<Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
<Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
</>`}/>
            }
          </div>
        </div>
        
        {/* Min */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Min</h3>
            <p className='description'>
              min 속성을 이용하여 min 이하의 내용을 사라지게 할 수 있습니다. <br/>
              화면을 줄였다가 늘려보세요.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Hidden min={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Min 1600 </Hidden>
            <Hidden min={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Min 1800 </Hidden>
            <Hidden min={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Min 2000 </Hidden>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={MinCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              MinCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Hidden } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
      <Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
      <Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
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
<Hidden max={1600} className='flexCenter width100 r10 h30  bgc-primary txt-white size20 b'> Max 1600 </Hidden>
<Hidden max={1800} className='flexCenter width100 r10 h30  bgc-secondary txt-white size20 b'> Max 1800 </Hidden>
<Hidden max={2000} className='flexCenter width100 r10 h30  bgc-tertiary txt-white size20 b'> Max 2000 </Hidden>
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
                  <td>max</td>
                  <td>
                    number
                  </td>
                  <td>
                    스크린에 나타나는 최대 너비를 설정하는 속성입니다. <br/>
                    숫자형(number) 타입입니다.
                  </td>
                </tr>
                <tr>
                  <td>min</td>
                  <td>
                    number
                  </td>
                  <td>
                    스크린에 나타나는 최소 너비를 설정하는 속성입니다. <br/>
                    숫자형(number) 타입입니다.
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

export default HiddenPage;