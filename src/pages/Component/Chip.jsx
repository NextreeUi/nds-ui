import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Chip, Button, Table } from '@/nds-ui/component';

const ChipPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [LabelCode, setLabelCode] = React.useState(false);
  const LabelCodeClick = () => {
    setLabelCode(!LabelCode)
  }
  const [ThemeCode, setThemeCode] = React.useState(false);
  const ThemeCodeClick = () => {
    setThemeCode(!ThemeCode)
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
  const [BtnThemeCode, setBtnThemeCode] = React.useState(false);
  const BtnThemeCodeClick = () => {
    setBtnThemeCode(!BtnThemeCode)
  }
  const [IconBgCode, setIconBgCode] = React.useState(false);
  const IconBgCodeClick = () => {
    setIconBgCode(!IconBgCode)
  }
  const [DeletableCode, setDeletableCode] = React.useState(false);
  const DeletableCodeClick = () => {
    setDeletableCode(!DeletableCode)
  }
  const [DeleteIconCode, setDeleteIconCode] = React.useState(false);
  const DeleteIconCodeClick = () => {
    setDeleteIconCode(!DeleteIconCode)
  }
  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Chip</h1>
          <p className='description'>클릭 인터렉션이 있는 Checkbox 컴포넌트입니다.</p>
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
{`import { Chip } from 'nds-ui/component';
// or
import Chip from 'nds-ui/component/Chip';`}/>
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
              Chip 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              label / size / theme / variant / bg / otl / color / btnTheme / iconBg / radius / deletable / deleteIcon 등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Label */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Label</h3>
            <p className='description'>
              기본적인 Chip 형태입니다. <br/>
              label 속성을 이용하여 내용을 입력할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Chip label='chip'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={LabelCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              LabelCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Chip label='chip'/>
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
<Chip label='chip'/>
</>`}/>
            }
          </div>
        </div>

        {/* Theme */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Theme</h3>
            <p className='description'>
              theme 속성을 이용하여 색상을 설정할 수 있습니다.
              theme 속성은 bt / otl / color / btnTheme / iconBg 5개의 속성에 영향을 줍니다.
              더 자세한 커스텀을 원하는 경우 위 5개의 속성을 추가적으로 사용하시면 됩니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' theme='gray3'/>
            <Chip label='chip' theme='gray6'/>
            <Chip label='chip' theme='grayc'/>
            <Chip label='chip' theme='graye'/>
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
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' theme='gray3'/>
      <Chip label='chip' theme='gray6'/>
      <Chip label='chip' theme='grayc'/>
      <Chip label='chip' theme='graye'/>
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
<Chip label='chip' theme='gray3'/>
<Chip label='chip' theme='gray6'/>
<Chip label='chip' theme='grayc'/>
<Chip label='chip' theme='graye'/>
</>`}/>
            }
          </div>
        </div>

        {/* Variant */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Variant</h3>
            <p className='description'>
              variant 속성을 이용하여 타입을 설정할 수 있습니다. <br/>
              normal / contained / outlined 3가지 값이 있으며 기본 값은 normal 입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' />
            <Chip label='chip' variant='outlined'/>
            <Chip label='chip' variant='contained'/>
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
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' />
      <Chip label='chip' variant='outlined'/>
      <Chip label='chip' variant='contained'/>
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
<Chip label='chip' />
<Chip label='chip' variant='outlined'/>
<Chip label='chip' variant='contained'/>
</>`}/>
            }
          </div>
        </div>

        {/* Radius */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Radius</h3>
            <p className='description'>
              radius 속성을 이용하여 굴곡을 설정할 수 있습니다. <br/>
              rect / normal / round 3가지 값이 있으며 기본 값은 round 입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' radius='rect'/>
            <Chip label='chip' radius='normal'/>
            <Chip label='chip' />
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
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' />
      <Chip label='chip' variant='outlined'/>
      <Chip label='chip' variant='contained'/>
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
<Chip label='chip' />
<Chip label='chip' variant='outlined'/>
<Chip label='chip' variant='contained'/>
</>`}/>
            }
          </div>
        </div>

        {/* Size */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Size</h3>
            <p className='description'>
              size 속성을 이용하여 크기를 설정할 수 있습니다. <br/>
              large / medium / small / extraSmall 4가지 값이 있으며 기본 값은 medium 입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' size='large'/>
            <Chip label='chip' />
            <Chip label='chip' size='small'/>
            <Chip label='chip' size='extraSmall'/>
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
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' size='large'/>
      <Chip label='chip' />
      <Chip label='chip' size='small'/>
      <Chip label='chip' size='extraSmall'/>
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
<Chip label='chip' size='large'/>
<Chip label='chip' />
<Chip label='chip' size='small'/>
<Chip label='chip' size='extraSmall'/>
</>`}/>
            }
          </div>
        </div>

        {/* Deletable */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Deletable</h3>
            <p className='description'>
              deletable 속성을 이용하여 삭제버튼을 나타낼 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' />
            <Chip label='chip' deletable='right'/>
            <Chip label='chip' deletable='left'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={DeletableCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              DeletableCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' />
      <Chip label='chip' deletable='right'/>
      <Chip label='chip' deletable='left'/>
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
<Chip label='chip' />
<Chip label='chip' deletable='right'/>
<Chip label='chip' deletable='left'/>
</>`}/>
            }
          </div>
        </div>

        {/* Bg */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Bg</h3>
            <p className='description'>
              bg 속성을 이용하여 배경색을 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' bg='gray6'/>
            <Chip label='chip' bg='grayc'/>
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
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' bg='gray6'/>
      <Chip label='chip' bg='grayc'/>
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
<Chip label='chip' bg='gray6'/>
<Chip label='chip' bg='grayc'/>
</>`}/>
            }
          </div>
        </div>

        {/* Outlined */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Outlined</h3>
            <p className='description'>
              otl 속성을 이용하여 외곽선을 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' otl='gray6'/>
            <Chip label='chip' otl='grayc'/>
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
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' otl='gray6'/>
      <Chip label='chip' otl='grayc'/>
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
<Chip label='chip' otl='gray6'/>
<Chip label='chip' otl='grayc'/>
</>`}/>
            }
          </div>
        </div>

        {/* Color */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Color</h3>
            <p className='description'>
              color 속성을 이용하여 글자색을 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' color='black'/>
            <Chip label='chip' color='grayc'/>
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
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' color='gray6'/>
      <Chip label='chip' color='grayc'/>
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
<Chip label='chip' color='gray6'/>
<Chip label='chip' color='grayc'/>
</>`}/>
            }
          </div>
        </div>

        {/* Button Theme */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Button Theme</h3>
            <p className='description'>
              btnTheme 속성을 이용하여 삭제버튼의 인터렉션을 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' deletable='right' btnTheme='primary'/>
            <Chip label='chip' deletable='right' btnTheme='white'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={BtnThemeCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              BtnThemeCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' deletable='right' btnTheme='primary'/>
      <Chip label='chip' deletable='right' btnTheme='white'/>
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
<Chip label='chip' deletable='right' btnTheme='primary'/>
<Chip label='chip' deletable='right' btnTheme='white'/>
</>`}/>
            }
          </div>
        </div>

        {/* Icon Background */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Icon Background</h3>
            <p className='description'>
              iconBg 속성을 이용하여 삭제버튼의 색상을 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' deletable='right' iconBg='grayc'/>
            <Chip label='chip' deletable='right' iconBg='black'/>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={IconBgCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              IconBgCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' deletable='right' iconBg='grayc'/>
      <Chip label='chip' deletable='right' iconBg='black'/>
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
<Chip label='chip' deletable='right' iconBg='grayc'/>
<Chip label='chip' deletable='right' iconBg='black'/>
</>`}/>
            }
          </div>
        </div>

        {/* Delete Icon */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Delete Icon</h3>
            <p className='description'>
              deleteIcon 속성을 이용하여 삭제버튼 아이콘을 커스텀 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Chip label='chip' deletable='right' deleteIcon={<p className='size14 txt-black'>O</p>}/>
            <Chip label='chip' deletable='right' />
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={DeleteIconCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              DeleteIconCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Chip } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Chip label='chip' deletable='right' deleteIcon={<p className='size14 txt-black'>O</p>}/>
      <Chip label='chip' deletable='right' />
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
<Chip label='chip' deletable='right' deleteIcon={<p className='size14 txt-black'>O</p>}/>
<Chip label='chip' deletable='right' />
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
                  <td>lable</td>
                  <td>
                    string
                  </td>
                  <td>
                    내용을 설정합니다. 문자열(string) 타입입니다.
                  </td>
                </tr>

                <tr>
                  <td>theme</td>
                  <td>
                    $grays
                  </td>
                  <td>
                    색상을 설정합니다.<br/>
                    theme 속성은 bg / otl / color / btnTheme / iconBg 5가지 속성에 영향을 줍니다. <br/>
                    더 자세한 색상 설정은 위 5가지 속성을 이용하시면 됩니다. <br/>
                    Variable의 $grays 값을 넣을 수 있습니다. 
                  </td>
                </tr>

                <tr>
                  <td>variant</td>
                  <td>
                    <p className='b'>'noraml'</p>
                    'outlined' <br/>
                    'contained'
                  </td>
                  <td>
                  'normal' : 외곽선과 배경색이 있습니다. <br/>
                  'outlined' : 외곽선은 있고 배경색은 없습니다. <br/>
                  'contained' : 외곽선은 없고 배경색은 있습니다.
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
                   굴곡을 설정하는 값입니다.
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
                    크기를 설정하는 값입니다.
                  </td>
                </tr>

                <tr>
                  <td>deletable</td>
                  <td>
                    <p className='b'>null</p>
                    'right' <br/>
                    'left' 
                  </td>
                  <td>
                    삭제버튼을 나타내는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>bg</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    배경색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>otl</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    외곽선 색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    글자색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>btnTheme</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    삭제버튼의 인터렉션 색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>iconBg</td>
                  <td>
                    $colors
                  </td>
                  <td>
                    삭제버튼 아이콘의 색을 조절하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
                  </td>
                </tr>
                <tr>
                  <td>deleteIcon</td>
                  <td>
                    element
                  </td>
                  <td>
                    삭제버튼 아이콘을 커스텀 설정하는 속성입니다. <br/>
                    html 태그를 삽입할 수 있습니다.
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

export default ChipPage;