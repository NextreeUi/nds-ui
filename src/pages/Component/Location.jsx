import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Location, Button, Table } from '@/nds-ui/component';

const LocationPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [NumberCode, setNumberCode] = React.useState(false);
  const NumberCodeClick = () => {
    setNumberCode(!NumberCode)
  }
  const [LinkCode, setLinkCode] = React.useState(false);
  const LinkCodeClick = () => {
    setLinkCode(!LinkCode)
  }
  const [DepthCode, setDepthCode] = React.useState(false);
  const DepthCodeClick = () => {
    setDepthCode(!DepthCode)
  }
  const [IconCode, setIconCode] = React.useState(false);
  const IconCodeClick = () => {
    setIconCode(!IconCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Location</h1>
          <p className='description'>
            Location은 현재 페이지까지의 사이트 구조를 링크로 표시한 컴포넌트입니다.
          </p>
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
{`import { Location } from 'nds-ui/component';
// or
import Location from 'nds-ui/component/Location';`}/>
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
              Location 컴포넌트는 다양한 속성이 있습니다. <br/>
              number / link1~4 / linkLast / depth1~4 / depthLast / icon 등이 있습니다.
            </p>
          </div>
        </div>

        {/* Basic Location */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic Location</h3>
            <p className='description'>
              기본적인 Location 형태입니다. <br/>
              Locationa은 현재 페이지까지 관련된 사이트의 구조를 나열한 링크들입니다. <br/>
              링크를 누르면 해당 페이지로 넘어가는 기능을 만들 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Location />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={BasicCodeClick}>
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
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location />
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Location />
</>`}/>
            }
          </div>
        </div>

        {/* Number */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Number</h3>
            <p className='description'>
              Number 속성은 링크의 갯수를 표시합니다. <br/>
              기본값은 2이며 5까지 넣을 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <div className='flexColumn'>
              <Location />
              <Location number={3}/>
              <Location number={4}/>
              <Location number={5}/>
            </div>
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
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn'>
      <Location />
      <Location number={3}/>
      <Location number={4}/>
      <Location number={5}/>
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
<div className='flexColumn'>
  <Location />
  <Location number={3}/>
  <Location number={4}/>
  <Location number={5}/>
</div>
</>`}/>
            }
          </div>
        </div>

        {/* Link1~4, linkLast */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>link1~4 / linkLast</h3>
            <p className='description'>
              link 속성은 해당 링크의 주소를 설정하는 속성입니다. <br/>
              link만 있고 눌렀을 때 아무 반응이 없으면 무용지물입니다. 주소를 넣어서 이동할 수 있게 만들 수 있습니다. <br/>
              link1 은 첫번째 링크의 주소를 <br/>
              link2 는 두번째 링크의 주소를 <br/>
              .<br/>.<br/>.<br/>
              linkLast 는 마지막 링크의 주소를 설정합니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Location link1='https://nextreeui.github.io/nds-ui/' />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={LinkCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              LinkCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location link1='https://nextreeui.github.io/nds-ui/' />
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Location link1='https://nextreeui.github.io/nds-ui/' />
</>`}/>
            }
          </div>
        </div>

        {/* Depath1~4, lLast */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>depth1~4 / depthLast</h3>
            <p className='description'>
              depth 속성은 해당 링크의 내용을 설정하는 속성입니다. <br/>
              depth1 은 첫번째 링크의 내용을 <br/>
              depth2 는 두번째 링크의 내용을 <br/>
              .<br/>.<br/>.<br/>
              depthLast 는 마지막 링크의 내용을 설정합니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Location 
              number={4} 
              depth1='Home'
              depth2='Component'
              depth3='Navigation'
              depthLast='Location'
            />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={DepthCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              DepthCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location 
      number={4} 
      depth1='Home'
      depth2='Component'
      depth3='Navigation'
      depthLast='Location'
    />
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Location 
  number={4} 
  depth1='Home'
  depth2='Component'
  depth3='Navigation'
  depthLast='Location'
/>
</>`}/>
            }
          </div>
        </div>

        {/* Icon */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Icon</h3>
            <p className='description'>
              icon 속성은 해당 링크의 사이의 화살표아이콘을 커스텀하는 속성입니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Location icon={<p>|</p>} />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={IconCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              IconCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Location } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Location icon={<p>|</p>} />
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Location icon={<p>|</p>} />
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
                  <td>number</td>
                  <td>
                    <p className='b'>2</p>
                    3 <br/>
                    4<br/>
                    5
                  </td>
                  <td>
                    링크의 갯수를 설정하는 속성으로 2~5까지의 숫자가 들어갑니다.
                  </td>
                </tr>
                <tr>
                  <td>link1~4, <br/>linkLast</td>
                  <td>
                    string
                  </td>
                  <td>
                    링크의 주소를 넣는 속성으로 문자형(string) 타입이 들어갑니다. <br/>
                    링크를 눌렀을 때                                  다른 주소로 넘어가는 기능을 합니다. <br/>
                    link1 / link2 / link3 / link4 / linkLast 가 있으며 각 속성별로 링크의 순서를 의미합니다.
                  </td>
                </tr>
                <tr>
                  <td>depth1~4,<br/> last</td>
                  <td>
                    string
                  </td>
                  <td>
                    링크의 내용을 설정하는 속성으로 문자형(string) 타입이 들어갑니다. <br/>
                    depth1 / depth2 / depth3 / depth4 / depthLast 가 있으며 각 속성별로 링크의 순서를 의미합니다.
                  </td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>
                    element
                  </td>
                  <td>
                    화살표 아이콘을 변경하는 속성으로 html 태그를 넣습니다.
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

export default LocationPage;