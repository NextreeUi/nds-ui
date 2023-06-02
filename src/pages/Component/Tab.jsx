import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { Tab, Button, Table } from '@/nds-ui/component';

const TabPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const CustomExampleRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [VariantCode, setVariantCode] = React.useState(false);
  const VariantCodeClick = () => {
    setVariantCode(!VariantCode)
  }
  const [RadiusCode, setRadiusCode] = React.useState(false);
  const RadiusCodeClick = () => {
    setRadiusCode(!RadiusCode)
  }
  const [SizeCode, setSizeCode] = React.useState(false);
  const SizeCodeClick = () => {
    setSizeCode(!SizeCode)
  }
  const [ThemeCode, setThemeCode] = React.useState(false);
  const ThemeCodeClick = () => {
    setThemeCode(!ThemeCode)
  }
  const [BgCode, setBgCode] = React.useState(false);
  const BgCodeClick = () => {
    setBgCode(!BgCode)
  }
  const [OtlCode, setOtlCode] = React.useState(false);
  const OtlCodeClick = () => {
    setOtlCode(!OtlCode)
  }
  const [ColorCode, setColorCode] = React.useState(false);
  const ColorCodeClick = () => {
    setColorCode(!ColorCode)
  }
  const [RippleCode, setRippleCode] = React.useState(false);
  const RippleCodeClick = () => {
    setRippleCode(!RippleCode)
  }
  const [HoverBgCode, setHoverBgCode] = React.useState(false);
  const HoverBgCodeClick = () => {
    setHoverBgCode(!HoverBgCode)
  }
  const [HoverOtlCode, setHoverOtlCode] = React.useState(false);
  const HoverOtlCodeClick = () => {
    setHoverOtlCode(!HoverOtlCode)
  }
  const [HoverColorCode, setHoverColorCode] = React.useState(false);
  const HoverColorCodeClick = () => {
    setHoverColorCode(!HoverColorCode)
  }
  const [ClassNameCode, setClassNameCode] = React.useState(false);
  const ClassNameCodeClick = () => {
    setClassNameCode(!ClassNameCode)
  }
  const [ClassNameCssCode, setClassNameCssCode] = React.useState(false);
  const ClassNameCssCodeClick = () => {
    setClassNameCssCode(!ClassNameCssCode)
  }

  const [BasicState, setBasicState] = React.useState(0);
  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Tab</h1>
          <p className='description'>Tab은 여러페이지를 모아서 클릭한 내용에 따라 화면이 달라지는 컴포넌트입니다.</p>
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
{`import { Tab } from 'nds-ui/component';
// or
import Tab from 'nds-ui/component/Tab';`}/>
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
              Tab 컴포넌트는 다양한 속성이 있습니다. <br/>
              state, setState, tabName, theme, bg, otl, color, radius, ripple, hoverBg, hoverOtl, hoverColor, variant, size 등이 있습니다.
            </p>
          </div>
        </div>

        {/* Basic Tab */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic Tab</h3>
            <p className='description'>
              기본적인 Tab 형태입니다. <br/>
              state 문법의 state와 setState를 state속성과 setState속성에 전달해줍니다. <br/>
              tabName 속성에 배열을 넣어 탭의 갯수만큼 내용을 입력해줍니다. <br/>
              children(태그 안)에 처음에 만든 state가 0인지 1인지 각 경우에 따라 표출될 화면을 작성합니다. <br/>
              (state는 0부터 시작합니다.)
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
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
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* Variant */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Variant</h3>
            <p className='description'>
              variant 속성은 탭 버튼의 타입을 설정하는 속성입니다.<br/>
              normal / outlined / contained 중 선택할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              variant='outlined'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={VariantCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              VariantCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      variant='outlined'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  variant='outlined'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* Radius */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Radius</h3>
            <p className='description'>
              radius 속성은 탭 버튼의 굴곡을 설정하는 속성입니다.<br/>
              rect / normal / round 중 선택할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              radius='round'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
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
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      radius='round'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  radius='round'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* Size */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Size</h3>
            <p className='description'>
              size 속성은 탭 버튼의 크기를 설정하는 속성입니다.<br/>
              large / medium / small / extraSmall 중 선택할 수 있습니다. 
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              size='small'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
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
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      size='small'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  size='small'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* Theme */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Theme</h3>
            <p className='description'>
              theme 속성은 탭 버튼의 컬러를 설정하는 속성입니다.<br/>
              bg / otl / color / ripple / hoverBg 5가지 속성에 영향을 미칩니다. <br/>
              더 섬세한 커스텀을 원할 경우 위 5가지 속성을 이용할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              theme='secondary'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={ThemeCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              ThemeCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      theme='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  theme='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* Bg */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Background</h3>
            <p className='description'>
              bg 속성은 탭 버튼의 배경색을 설정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              bg='black'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={BgCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              BgCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      bg='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  bg='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* Otl */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Outlined</h3>
            <p className='description'>
              otl 속성은 탭 버튼의 외곽선 색을 설정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              otl='black'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={OtlCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              OtlCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      otl='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  otl='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* Color */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Color</h3>
            <p className='description'>
              color 속성은 탭 버튼의 글자색을 설정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              color='black'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={ColorCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              ColorCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      color='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  color='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* Ripple */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Ripple</h3>
            <p className='description'>
              ripple 속성은 탭 버튼의 인터렉션 색을 설정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              ripple='black'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={RippleCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              RippleCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      ripple='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  ripple='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* HoverBg */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>HoverBg</h3>
            <p className='description'>
              hoverBg 속성은 탭 버튼의 호버시 배경색을 설정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              hoverBg='black'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={HoverBgCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              HoverBgCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      hoverBg='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  hoverBg='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* HoverOtl */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>HoverOtl</h3>
            <p className='description'>
              hoverOtl 속성은 탭 버튼의 호버시 외곽선 색을 설정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              hoverOtl='black'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={HoverOtlCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              HoverOtlCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      hoverOtl='black'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  hoverOtl='black'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* HoverColor */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>HoverColor</h3>
            <p className='description'>
              hoverColor 속성은 탭 버튼의 호버시 글자색을 설정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              hoverColor='secondary'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
            }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={HoverColorCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              HoverColorCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      hoverColor='secondary'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
    }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  hoverColor='secondary'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
}
</Tab>
</>`}/>
            }
          </div>
        </div>

        {/* ClassName Custom */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2 ref={CustomExampleRef}> ClassName Custom </h2>
            <p className='description'>
              className 을 사용하면 기본 제공되는 속성으로 불가능한 디자인 또한 해결 가능합니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tab
              variant='normal'
              classCustom='tab-custom'
              state={BasicState}
              setState={setBasicState}
              tabName={['Tab1', 'Tab2', 'Tab3']}
            >
              {BasicState == 0 ?
              <div className='width100 h300 bgc-primary'/> :
              BasicState == 1 ?
              <div className='width100 h300 bgc-secondary'/> :
              BasicState == 2 ?
              <div className='width100 h300 bgc-tertiary'/> : <></>
              }
            </Tab>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <p>JSX</p>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={ClassNameCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              ClassNameCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tab } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  const [BasicState, setBasicState] = React.useState(0);
  return (
    <Tab
      variant='normal'
      classCustom='tab-custom'
      state={BasicState}
      setState={setBasicState}
      tabName={['Tab1', 'Tab2', 'Tab3']}
    >
      {BasicState == 0 ?
      <div className='width100 h300 bgc-primary'/> :
      BasicState == 1 ?
      <div className='width100 h300 bgc-secondary'/> :
      BasicState == 2 ?
      <div className='width100 h300 bgc-tertiary'/> : <></>
      }
    </Tab>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tab
  variant='normal'
  classCustom='tab-custom'
  state={BasicState}
  setState={setBasicState}
  tabName={['Tab1', 'Tab2', 'Tab3']}
>
  {BasicState == 0 ?
  <div className='width100 h300 bgc-primary'/> :
  BasicState == 1 ?
  <div className='width100 h300 bgc-secondary'/> :
  BasicState == 2 ?
  <div className='width100 h300 bgc-tertiary'/> : <></>
  }
</Tab>
</>`}/>
            }
          </div>
          <div className={`codeMirror ${ClassNameCssCode ? `maxh1000` : 'maxh300'}`}>
            <div className='btn-wrap'>
              <p>CSS</p>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={ClassNameCssCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            <CodeMirror
            theme='dark'
            extensions={[html({ html: true })]}
            value=
{`<style>
.tab-custom {
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: var(--primary);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  &.close {
    width: 0;
  }
}
</style>`}/>
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
                  <td>variant</td>
                  <td>
                    <p className='b'>'noarmal'</p>
                    'outlined' <br/>
                    'contained'
                  </td>
                  <td>
                    'normal' : 외곽선과 배경색이 없는 버튼입니다. <br/>
                    'outlined' : 외곽선은 있고 배경색은 없는 버튼입니다. <br/>
                    'contained' : 외곽선은 없고 배경색은 있는 버튼입니다.
                  </td>
                </tr>
                <tr>
                  <td>raidus</td>
                  <td>
                    <p className='b'>'rect'</p>
                    'normal' <br/>
                    'round'
                  </td>
                  <td>
                    굴곡을 조절하는 값입니다.
                  </td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>
                    <p className='b'>'large'</p>
                    'medium' <br/>
                    'small' <br/>
                    'extraSmall'
                  </td>
                  <td>
                    크기를 조절하는 값입니다.
                  </td>
                </tr>
                <tr>
                <td>theme</td>
                  <td>
                    <p className='b'>'primary'</p>
                    $colors
                  </td>
                  <td>
                    theme 속성은 bg, color, otl, ripple, hoverBg 5가지 속성에 영향을 미칩니다. <br/>
                    더 상세한 커스텀을 원할 경우 theme 대신 위 5가지 속성을 조절하시면 됩니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                <td>bg</td>
                  <td>
                    <p className='b'>'primary'</p>
                    <p className='b'>'transparent'</p>
                    $colors
                  </td>
                  <td>
                    배경색을 조절하는 속성입니다. <br/>
                    기본 값은 variant 속성에 따라 달라집니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                <td>otl</td>
                  <td>
                    <p className='b'>'primary'</p>
                    <p className='b'>'transparent'</p>
                    $colors
                  </td>
                  <td>
                    외곽선 색을 조절하는 속성입니다. <br/>
                    기본 값은 variant 속성에 따라 달라집니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                <td>color</td>
                  <td>
                    <p className='b'>'primary'</p>
                    <p className='b'>'white'</p>
                    $colors
                  </td>
                  <td>
                    글자색을 조절하는 속성입니다. <br/>
                    기본 값은 variant 속성에 따라 달라집니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>ripple</td>
                  <td>
                    <p className='b'>'primary'</p>
                    <p className='b'>'white'</p>
                    $colors
                  </td>
                  <td>
                    클릭시 인터렉션 색을 조절하는 속성입니다. <br/>
                    기본 값은 variant 속성에 따라 달라집니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>hoverBg</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    호버시 배경색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>hoverOtl</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    호버시 외곽선 색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>hoverColor</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    호버시 글자색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>classTabWrap</td>
                  <td>
                    string
                  </td>
                  <td>
                    Tab 컴포넌트 전체를 감싸는 div의 클래스입니다.
                  </td>
                </tr>
                <tr>
                  <td>classTab</td>
                  <td>
                    string
                  </td>
                  <td>
                    Tab 부분의 클래스입니다.
                  </td>
                </tr>
                <tr>
                  <td>classBtnWrap</td>
                  <td>
                    string
                  </td>
                  <td>
                    탭 버튼을 감싸는 div의 클래스입니다.
                  </td>
                </tr>
                <tr>
                  <td>classBtn</td>
                  <td>
                    string
                  </td>
                  <td>
                    탭 버튼의 클래스입니다.
                  </td>
                </tr>
                <tr>
                  <td>classCustom</td>
                  <td>
                    string
                  </td>
                  <td>
                    탭 버튼을 따로 커스텀할 때 쓰는 클래스입니다.
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
          <a onClick={()=>{CustomExampleRef.current.scrollIntoView()}}> Custom Example</a>
          <a onClick={()=>{APIRef.current.scrollIntoView()}}> API</a>
        </div>

      </div>
    </>
  )
}

export default TabPage;