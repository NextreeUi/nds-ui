import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { Button, Table } from '@/nds-ui/component';

const ButtonPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const CustomExampleRef = React.useRef();
  const APIRef = React.useRef();
  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [ThemeCode, setThemeCode] = React.useState(false);
  const ThemeCodeClick = () => {
    setThemeCode(!ThemeCode)
  }
  const [SizeCode, setSizeCode] = React.useState(false);
  const SizeCodeClick = () => {
    setSizeCode(!SizeCode)
  }
  const [RadiusCode, setRadiusCode] = React.useState(false);
  const RadiusCodeClick = () => {
    setRadiusCode(!RadiusCode)
  }
  const [SquareCode, setSquareCode] = React.useState(false);
  const SquareCodeClick = () => {
    setSquareCode(!SquareCode)
  }
  const [ShadowCode, setShadowCode] = React.useState(false);
  const ShadowCodeClick = () => {
    setShadowCode(!ShadowCode)
  }
  const [DisabledCode, setDisabledCode] = React.useState(false);
  const DisabledCodeClick = () => {
    setDisabledCode(!DisabledCode)
  }
  const [CustomCode, setCustomCode] = React.useState(false);
  const CustomCodeClick = () => {
    setCustomCode(!CustomCode)
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
  return (
    <div className='layout-all'>
      {/* Title */}
      <div className='layout-title'>
        <h1>Button</h1>
        <p className='description'>클릭 인터렉션이 있는 Button 컴포넌트입니다.</p>
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
{`import { Button } from 'nds-ui/component';
// or
import Button from 'nds-ui/component/Button';`}/>
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
            Button 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
            variant / theme / size / radius / square / shadow / bg / otl / color / ripple / 
            hoverBg / hoverOtl / hoverColor / hoverRadius / disabled 등 다양한 속성들이 있는데,
            그 사용법을 알아보겠습니다.
          </p>
        </div>
      </div>

      {/* Variant */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3>Variant</h3>
          <p className='description'>variant 속성으로 버튼의 종류를 설정할 수 있습니다.</p>
        </div>
        <div className='layout-example'>
          <Button> Noraml </Button>
          <Button variant='outlined'> Outlined  </Button>
          <Button variant='contained'> Contained </Button>
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
        </div>
      </div>

      {/* Theme */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3>Theme</h3>
          <p className='description'>
            theme 속성으로 버튼의 컬러를 설정할 수 있습니다. <br/>
            theme 속성은 bg, otl, color, ripple, hoverBg 5개의 속성을 동시에 바꿉니다.
            디테일한 커스텀을 하려면 다른 속성을 이용하시면 됩니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button theme='primary' variant='contained'> Primary </Button>
          <Button theme='secondary' variant='contained'> Secondary </Button>
          <Button theme='tertiary' variant='contained'> Tertiary </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ThemeCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button theme='primary' variant='contained'> Primary </Button>
      <Button theme='secondary' variant='contained'> Secondary </Button>
      <Button theme='tertiary' variant='contained'> Tertiary </Button>
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
<Button theme='primary' variant='contained'> Primary </Button>
<Button theme='secondary' variant='contained'> Secondary </Button>
<Button theme='tertiary' variant='contained'> Tertiary </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Size */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3>Size</h3>
          <p className='description'>size 속성으로 버튼의 크기 설정할 수 있습니다.</p>
        </div>
        <div className='layout-example'>
          <Button size='large' variant='contained'> Large </Button>
          <Button variant='contained'> Medium </Button>
          <Button size='small' variant='contained'> Small </Button>
          <Button size='extraSmall' variant='contained'> ExtraSmall </Button>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button size='large' variant='contained'> Large </Button>
      <Button variant='contained'> Medium </Button>
      <Button size='small' variant='contained'> Small </Button>
      <Button size='extraSmall' variant='contained'> ExtraSmall </Button>
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
<Button size='large' variant='contained'> Large </Button>
<Button variant='contained'> Medium </Button>
<Button size='small' variant='contained'> Small </Button>
<Button size='extraSmall' variant='contained'> ExtraSmall </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Radius */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3>Radius</h3>
          <p className='description'>radius 속성으로 버튼의 굴곡을 설정할 수 있습니다.</p>
        </div>
        <div className='layout-example'>
          <Button radius='rect' variant='contained'> Rect </Button>
          <Button variant='contained'> Normal </Button>
          <Button radius='round' variant='contained'> Round </Button>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button radius='rect' variant='contained'> Rect </Button>
      <Button variant='contained'> Normal </Button>
      <Button radius='round' variant='contained'> Round </Button>
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
<Button radius='rect' variant='contained'> Rect </Button>
<Button variant='contained'> Normal </Button>
<Button radius='round' variant='contained'> Round </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Square */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3>Square</h3>
          <p className='description'>square 속성으로 버튼의 너비를 높이와 같게 설정할 수 있습니다.</p>
        </div>
        <div className='layout-example'>
          <Button variant='contained'> Normal </Button>
          <Button square variant='contained'> S </Button>
          <Button radius='round' variant='contained'> Normal </Button>
          <Button square radius='round' variant='contained'> S </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={SquareCodeClick}>
              <i className='i-code w14 h14'/>
            </Button>
          </div>
          {
            SquareCode ?
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
      <Button variant='contained'> Normal </Button>
      <Button square variant='contained'> S </Button>
      <Button radius='round' variant='contained'> Normal </Button>
      <Button square radius='round' variant='contained'> S </Button>
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
<Button variant='contained'> Normal </Button>
<Button square variant='contained'> S </Button>
<Button radius='round' variant='contained'> Normal </Button>
<Button square radius='round' variant='contained'> S </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Shadow */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3>Shadow</h3>
          <p className='description'>shadow 속성으로 버튼의 그림자를 설정할 수 있습니다.</p>
        </div>
        <div className='layout-example'>
          <Button> Noraml </Button>
          <Button shadow> Shadow </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ShadowCodeClick}>
              <i className='i-code w14 h14'/>
            </Button>
          </div>
          {
            ShadowCode ?
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
      <Button shadow> Shadow </Button>
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
<Button shadow> Shadow </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Disabled */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3>Disabled</h3>
          <p className='description'>disabled 속성으로 버튼을 비활성화 할 수 있습니다.</p>
        </div>
        <div className='layout-example'>
          <Button variant='outlined'> Normal </Button>
          <Button disabled variant='outlined'> Disabled </Button>
          <Button variant='contained'> Normal </Button>
          <Button disabled variant='contained'> Disabled </Button>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button variant='outlined'> Normal </Button>
      <Button disabled variant='outlined'> Disabled </Button>
      <Button variant='contained'> Normal </Button>
      <Button disabled variant='contained'> Disabled </Button>
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
<Button variant='outlined'> Normal </Button>
<Button disabled variant='outlined'> Disabled </Button>
<Button variant='contained'> Normal </Button>
<Button disabled variant='contained'> Disabled </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Custom */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h2 ref={CustomExampleRef}> Custom Example </h2>
          <p className='description'>
            여러가지 속성을 사용하여 버튼을 원하시는대로 커스텀할 수 있습니다. <br/>
            bg / otl / color / ripple / hoverBg / hoverOtl / hoverColor 등이 있습니다. <br/>
            이 중 bg / otl / color / ripple / hoverBg 속성은 theme 속성을 통해 동시에 컨트롤 가능하지만, 더 세부적인 컨트롤을 원하실 경우 사용하시면 됩니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button 
            variant='contained' 
            bg='white' 
            otl='primary' 
            color='primary' 
            hoverBg='primary' 
            hoverColor='white' 
            hoverRipple='white'
          > 
            Custom 
          </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={CustomCodeClick}>
              <i className='i-code w14 h14'/>
            </Button>
          </div>
          {
            CustomCode ?
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
      <Button 
        variant='contained' 
        bg='white' 
        otl='primary' 
        color='primary' 
        hoverBg='primary' 
        hoverColor='white' 
        hoverRipple='white'
      > 
        Custom 
      </Button>
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
<Button 
  variant='contained' 
  bg='white' 
  otl='primary' 
  color='primary' 
  hoverBg='primary' 
  hoverColor='white' 
  hoverRipple='white'
> 
  Custom 
</Button>
</>`}/>
          }
        </div>
      </div>

      {/* BG */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3> BG </h3>
          <p className='description'>
            bg 속성을 사용하여 배경색을 바꿀 수 있습니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button bg='primary'> BG </Button>
          <Button bg='secondary'> BG </Button>
          <Button bg='tertiary'> BG </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={BgCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button bg='primary'> Custom </Button>
      <Button bg='secondary'> Custom </Button>
      <Button bg='tertiary'> Custom </Button>
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
<Button bg='primary'> Custom </Button>
<Button bg='secondary'> Custom </Button>
<Button bg='tertiary'> Custom </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Otl */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3> Outline </h3>
          <p className='description'>
            otl 속성을 사용하여 외곽선 색을 바꿀 수 있습니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button otl='primary'> Outline </Button>
          <Button otl='secondary'> Outline </Button>
          <Button otl='tertiary'> Outline </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={OtlCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button otl='primary'> Outline </Button>
      <Button otl='secondary'> Outline </Button>
      <Button otl='tertiary'> Outline </Button>
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
<Button otl='primary'> Outline </Button>
<Button otl='secondary'> Outline </Button>
<Button otl='tertiary'> Outline </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Color */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3> Color </h3>
          <p className='description'>
            color 속성을 사용하여 글자색을 바꿀 수 있습니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button color='primary'> Color </Button>
          <Button color='secondary'> Color </Button>
          <Button color='tertiary'> Color </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ColorCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button color='primary'> Color </Button>
      <Button color='secondary'> Color </Button>
      <Button color='tertiary'> Color </Button>
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
<Button color='primary'> Color </Button>
<Button color='secondary'> Color </Button>
<Button color='tertiary'> Color </Button>
</>`}/>
          }
        </div>
      </div>

      {/* Ripple */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3> Ripple </h3>
          <p className='description'>
            ripple 속성을 사용하여 클릭시 인터렉션 색을 바꿀 수 있습니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button ripple='primary'> Click Button </Button>
          <Button ripple='secondary'> Click Button </Button>
          <Button ripple='tertiary'> Click Button </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={RippleCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button ripple='primary'> Click Button </Button>
      <Button ripple='secondary'> Click Button </Button>
      <Button ripple='tertiary'> Click Button </Button>
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
<Button ripple='primary'> Click Button </Button>
<Button ripple='secondary'> Click Button </Button>
<Button ripple='tertiary'> Click Button </Button>
</>`}/>
          }
        </div>
      </div>

      {/* HoverBg */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3> HoverBg </h3>
          <p className='description'>
            hoverBg 속성을 사용하여 호버시 배경색을 바꿀 수 있습니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button hoverBg='primary'> Hover </Button>
          <Button hoverBg='secondary'> Hover </Button>
          <Button hoverBg='tertiary'> Hover </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={HoverBgCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button hoverBg='primary'> Hover </Button>
      <Button hoverBg='secondary'> Hover </Button>
      <Button hoverBg='tertiary'> Hover </Button>
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
<Button hoverBg='primary'> Hover </Button>
<Button hoverBg='secondary'> Hover </Button>
<Button hoverBg='tertiary'> Hover </Button>
</>`}/>
          }
        </div>
      </div>

      {/* HoverOtl */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3> HoverOtl </h3>
          <p className='description'>
            hoverOtl 속성을 사용하여 호버시 외곽선 색을 바꿀 수 있습니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button hoverOtl='primary'> Hover </Button>
          <Button hoverOtl='secondary'> Hover </Button>
          <Button hoverOtl='tertiary'> Hover </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={HoverOtlCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button hoverOtl='primary'> Hover </Button>
      <Button hoverOtl='secondary'> Hover </Button>
      <Button hoverOtl='tertiary'> Hover </Button>
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
<Button hoverOtl='primary'> Hover </Button>
<Button hoverOtl='secondary'> Hover </Button>
<Button hoverOtl='tertiary'> Hover </Button>
</>`}/>
          }
        </div>
      </div>

      {/* HoverColor */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3> HoverColor </h3>
          <p className='description'>
            hoverColor 속성을 사용하여 호버시 글자색을 바꿀 수 있습니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button hoverColor='primary'> Hover </Button>
          <Button hoverColor='secondary'> Hover </Button>
          <Button hoverColor='tertiary'> Hover </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={HoverColorCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button hoverColor='primary'> Hover </Button>
      <Button hoverColor='secondary'> Hover </Button>
      <Button hoverColor='tertiary'> Hover </Button>
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
<Button hoverColor='primary'> Hover </Button>
<Button hoverColor='secondary'> Hover </Button>
<Button hoverColor='tertiary'> Hover </Button>
</>`}/>
          }
        </div>
      </div>

      {/* ClassName Custom */}
      <div className='layout-small'>
        <div className='layout-title'>
          <h3> ClassName Custom </h3>
          <p className='description'>
            className 을 사용하면 기본 제공되는 속성으로 불가능한 디자인 또한 해결 가능합니다.
          </p>
        </div>
        <div className='layout-example'>
          <Button className='custom-button' variant='contained' radius='round'> Custom </Button>
        </div>
        <div className='codeMirror'>
          <div className='btn-wrap'>
            <p>JSX</p>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ClassNameCodeClick}>
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
import { Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Button className='custom-button' variant='contained' radius='round'> Custom </Button>
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
<Button className='custom-button' variant='contained' radius='round'> Custom </Button>
</>`}/>
          }
        </div>
        <div className={`codeMirror ${ClassNameCssCode ? `maxh1000` : 'maxh300'}`}>
          <div className='btn-wrap'>
            <p>CSS</p>
            <Button square radius='round' variant='outlined' size='extraSmall'  onClick={ClassNameCssCodeClick}>
              <i className='i-code w14 h14'/>
            </Button>
          </div>
          <CodeMirror
          theme='dark'
          extensions={[html({ html: true })]}
          value=
{`<style>
.custom-button {
  background-color: transparent !important;
  position: relative !important;
  color: var(--black) !important;
  &:hover {
    color: var(--white) !important;
    &::after  {
      left: 0;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: calc(-100% + 32rem);
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 100rem;
    background-color: var(--primary);
    transition: 0.5s;
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
                <td>size</td>
                <td>
                  'large' <br/>
                  <p className='b'>'medium'</p>
                  'small' <br/>
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
                <td>square</td>
                <td>
                  boolean
                </td>
                <td>
                  너비값을 높이와 같게 정사각형으로 만드는 속성으로 불리언(Boolean) 타입입니다. <br/>
                  속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
                </td>
              </tr>
              <tr>
                <td>shadow</td>
                <td>
                  boolean
                </td>
                <td>
                  그림자를 추가하는 속성으로 불리언(Boolean) 타입입니다. <br/>
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
                  <p className='b'>'primary_light'</p>
                  <p className='b'>'primary_15p'</p>
                  $colors
                </td>
                <td>
                  호버시 배경색을 조절하는 속성입니다. <br/>
                  기본 값은 variant 속성에 따라 달라집니다. <br/>
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
  )
}

export default ButtonPage;
