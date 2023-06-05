import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Slide, Button, Table } from '@/nds-ui/component';

const SlidePage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [ContentCode, setContentCode] = React.useState(false);
  const ContentCodeClick = () => {
    setContentCode(!ContentCode)
  }
  const [BtnCode, setBtnCode] = React.useState(false);
  const BtnCodeClick = () => {
    setBtnCode(!BtnCode)
  }
  const [NoNavCode, setNoNavCode] = React.useState(false);
  const NoNavCodeClick = () => {
    setNoNavCode(!NoNavCode)
  }
  const [PauseIconCode, setPauseIconCode] = React.useState(false);
  const PauseIconCodeClick = () => {
    setPauseIconCode(!PauseIconCode)
  }
  const [AutoSlideCode, setAutoSlideCode] = React.useState(false);
  const AutoSlideCodeClick = () => {
    setAutoSlideCode(!AutoSlideCode)
  }
  const [DelayCode, setDelayCode] = React.useState(false);
  const DelayCodeClick = () => {
    setDelayCode(!DelayCode)
  }
  const [NoPauseCode, setNoPauseCode] = React.useState(false);
  const NoPauseCodeClick = () => {
    setNoPauseCode(!NoPauseCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Slide</h1>
          <p className='description'>Slide는 화면을 좌우로 이동시키는 컴포넌트입니다.</p>
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
{`import { Slide } from 'nds-ui/component';
// or
import Slide from 'nds-ui/component/Slide';`}/>
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
              Slide 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              content, leftBtn, rightBtn, noNav, pauseIcon, playIcon, autoSlide, delay, noPause 등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Content</h3>
            <p className='description'>
              content 속성으로 내용을 작성할 수 있습니다. <br/>
              속성값으로 배열이 들어가며, 배열의 각 항목은 width 100% height 100% 를 유지해주어야됩니다. <br/>
              (각 항목에 key 값을 넣어주세요) <br/>
              배열의 갯수만큼 슬라이드에 표시되는 항목이 늘어납니다. <br/>
              자동 슬라이드 기능과 네비게이션 버튼이 기본으로 들어가있습니다. 후에 속성으로 없앨 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Slide
              content={[
                <div key={0} className='bgc-primary width100 height100'/>,
                <div key={1} className='bgc-secondary width100 height100'/>,
                <div key={2} className='bgc-tertiary width100 height100'/>
              ]}
            />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ContentCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              ContentCode ?
            <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      content={[
        <div className='bgc-primary width100 height100'/>,
        <div className='bgc-secondary width100 height100'/>,
        <div className='bgc-tertiary width100 height100'/>
      ]}
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
<Slide
  content={[
    <div className='bgc-primary width100 height100'/>,
    <div className='bgc-secondary width100 height100'/>,
    <div className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`}/>
            }
          </div>
        </div>

        {/* Left Button / Right Button */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Left Button / Right Button</h3>
            <p className='description'>
              leftBtn, rightBtn 속성으로 버튼을 커스텀할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Slide
              leftBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
              rightBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
              content={[
                <div key={0} className='bgc-primary width100 height100'/>,
                <div key={1} className='bgc-secondary width100 height100'/>,
                <div key={2} className='bgc-tertiary width100 height100'/>
              ]}
            />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={BtnCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              BtnCode ?
            <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      leftBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
      rightBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
      content={[
        <div className='bgc-primary width100 height100'/>,
        <div className='bgc-secondary width100 height100'/>,
        <div className='bgc-tertiary width100 height100'/>
      ]}
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
<Slide
  leftBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
  rightBtn={<Button variant='contained' theme={'white'}>Custom</Button>}
  content={[
    <div className='bgc-primary width100 height100'/>,
    <div className='bgc-secondary width100 height100'/>,
    <div className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`}/>
            }
          </div>
        </div>

        {/* No Navigation */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>No Navigation</h3>
            <p className='description'>
              noNav 속성으로 네비게이션을 없앨 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Slide
              noNav
              content={[
                <div key={0} className='bgc-primary width100 height100'/>,
                <div key={1} className='bgc-secondary width100 height100'/>,
                <div key={2} className='bgc-tertiary width100 height100'/>
              ]}
            />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={NoNavCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              NoNavCode ?
            <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      noNav
      content={[
        <div className='bgc-primary width100 height100'/>,
        <div className='bgc-secondary width100 height100'/>,
        <div className='bgc-tertiary width100 height100'/>
      ]}
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
<Slide
  noNav
  content={[
    <div className='bgc-primary width100 height100'/>,
    <div className='bgc-secondary width100 height100'/>,
    <div className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`}/>
            }
          </div>
        </div>

        {/* Pause Icon / Play Icon */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Pause Icon / Play Icon</h3>
            <p className='description'>
              pauseIcon 속성으로 네비게이션의 멈춤 버튼을 커스텀할 수 있습니다. <br/>
              playIcon 속성으로 네비게이션의 시작 버튼을 커스텀할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Slide
              pauseIcon={<p className='b size16'>멈춤</p>}
              playIcon={<p className='b size16'>시작</p>}
              content={[
                <div key={0} className='bgc-primary width100 height100'/>,
                <div key={1} className='bgc-secondary width100 height100'/>,
                <div key={2} className='bgc-tertiary width100 height100'/>
              ]}
            />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={PauseIconCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              PauseIconCode ?
            <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      pauseIcon={<p className='b size16'>멈춤</p>}
      playIcon={<p className='b size16'>시작</p>}
      content={[
        <div key={0} className='bgc-primary width100 height100'/>,
        <div key={1} className='bgc-secondary width100 height100'/>,
        <div key={2} className='bgc-tertiary width100 height100'/>
      ]}
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
<Slide
  pauseIcon={<p className='b size16'>멈춤</p>}
  playIcon={<p className='b size16'>시작</p>}
  content={[
    <div key={0} className='bgc-primary width100 height100'/>,
    <div key={1} className='bgc-secondary width100 height100'/>,
    <div key={2} className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`}/>
            }
          </div>
        </div>

        {/* AutoSlide */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>AutoSlide</h3>
            <p className='description'>
              autoSlide 속성으로 자동 슬라이드를 끄거나 켤 수 있습니다. <br/>
              기본값은 false 입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Slide
              autoSlide={false}
              content={[
                <div key={0} className='bgc-primary width100 height100'/>,
                <div key={1} className='bgc-secondary width100 height100'/>,
                <div key={2} className='bgc-tertiary width100 height100'/>
              ]}
            />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={AutoSlideCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              AutoSlideCode ?
            <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      autoSlide={false}
      content={[
        <div key={0} className='bgc-primary width100 height100'/>,
        <div key={1} className='bgc-secondary width100 height100'/>,
        <div key={2} className='bgc-tertiary width100 height100'/>
      ]}
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
<Slide
  autoSlide={false}
  content={[
    <div key={0} className='bgc-primary width100 height100'/>,
    <div key={1} className='bgc-secondary width100 height100'/>,
    <div key={2} className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`}/>
            }
          </div>
        </div>

        {/* Delay */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Delay</h3>
            <p className='description'>
              delay 속성으로 자동 슬라이드의 시간 간격을 설정할 수 있습니다. <br/>
              단위는 밀리세크(ms) 입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Slide
              delay={1000}
              content={[
                <div key={0} className='bgc-primary width100 height100'/>,
                <div key={1} className='bgc-secondary width100 height100'/>,
                <div key={2} className='bgc-tertiary width100 height100'/>
              ]}
            />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={DelayCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              DelayCode ?
            <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      delay={1000}
      content={[
        <div key={0} className='bgc-primary width100 height100'/>,
        <div key={1} className='bgc-secondary width100 height100'/>,
        <div key={2} className='bgc-tertiary width100 height100'/>
      ]}
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
<Slide
  delay={1000}
  content={[
    <div key={0} className='bgc-primary width100 height100'/>,
    <div key={1} className='bgc-secondary width100 height100'/>,
    <div key={2} className='bgc-tertiary width100 height100'/>
  ]}
/>
</>`}/>
            }
          </div>
        </div>

        {/* No Pause */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>No Pause</h3>
            <p className='description'>
              noPause 속성으로 멈춤 버튼을 없앨 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Slide
              noPause
              content={[
                <div key={0} className='bgc-primary width100 height100'/>,
                <div key={1} className='bgc-secondary width100 height100'/>,
                <div key={2} className='bgc-tertiary width100 height100'/>
              ]}
            />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={NoPauseCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              NoPauseCode ?
            <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Slide } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Slide
      noPause
      content={[
        <div key={0} className='bgc-primary width100 height100'/>,
        <div key={1} className='bgc-secondary width100 height100'/>,
        <div key={2} className='bgc-tertiary width100 height100'/>
      ]}
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
<Slide
  noPause
  content={[
    <div key={0} className='bgc-primary width100 height100'/>,
    <div key={1} className='bgc-secondary width100 height100'/>,
    <div key={2} className='bgc-tertiary width100 height100'/>
  ]}
/>
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
                <td>content</td>
                <td>
                  Array
                </td>
                <td>
                  내용을 작성하는 속성으로 배열(array)이 들어갑니다. <br/>
                  배열의 각 항목엔 width 100% height 100% 가 권장됩니다. <br/>
                  배열의 각 항목에 고유한 키(key)값을 넣어주세요.
                </td>
              </tr>
              <tr>
                <td>leftBtn</td>
                <td>
                  element
                </td>
                <td>
                  왼쪽 슬라이드 버튼을 커스텀하는 속성입니다. 
                </td>
              </tr>
              <tr>
                <td>rightBtn</td>
                <td>
                  element
                </td>
                <td>
                  오른쪽 슬라이드 버튼을 커스텀하는 속성입니다. 
                </td>
              </tr>
              <tr>
                <td>noNav</td>
                <td>
                  boolean
                </td>
                <td>
                  네비게이션을 없애는 속성으로 불리언(Boolean) 타입입니다. <br/>
                  속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
                </td>
              </tr>
              <tr>
                <td>pauseIcon</td>
                <td>
                  element
                </td>
                <td>
                  멈춤 버튼을 커스텀하는 속성입니다.
                </td>
              </tr>
              <tr>
                <td>playIcon</td>
                <td>
                  element
                </td>
                <td>
                  시작 버튼을 커스텀하는 속성입니다.
                </td>
              </tr>
              <tr>
                <td>autoSlide</td>
                <td>
                  <p className='b'> true </p>
                  boolean
                </td>
                <td>
                  자동 슬라이드를 설정하는 속성으로 불리언(Boolean) 타입입니다. <br/>
                </td>
              </tr>
              <tr>
                <td>delay</td>
                <td>
                  <p className='b'> 3000 </p>
                  number
                </td>
                <td>
                  자동 슬라이드의 시간 간격을 설정하는 속성으로 숫자형(number) 타입입니다. <br/>
                  단위는 밀리세크(ms)로 속성값 1000 당 1초를 의미합니다.
                </td>
              </tr>
              <tr>
                <td>noPause</td>
                <td>
                  boolean
                </td>
                <td>
                  멈춤버튼을 없애는 속성으로 불리언(Boolean) 타입입니다. <br/>
                  속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
                </td>
              </tr>
              <tr>
                <td>classSlide</td>
                <td>
                  string
                </td>
                <td>
                  Slide 컴포넌트 전체의 클래스입니다.
                </td>
              </tr>
              <tr>
                <td>classBtn</td>
                <td>
                  string
                </td>
                <td>
                  좌우 버튼을 감싸는 div 태그의 클래스입니다.
                </td>
              </tr>
              <tr>
                <td>classNavWrap</td>
                <td>
                  string
                </td>
                <td>
                  네비게이션 버튼을 감싸는 div 태그의 클래스입니다.
                </td>
              </tr>
              <tr>
                <td>classNav</td>
                <td>
                  string
                </td>
                <td>
                  네비게이션 하나하나의 클래스입니다.
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

export default SlidePage;