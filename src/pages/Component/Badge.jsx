import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Badge, Button, Avatar, Table } from '@/nds-ui/component';

const BadgePage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [ColorCode, setColorCode] = React.useState(false);
  const ColorCodeClick = () => {
    setColorCode(!ColorCode)
  }
  const [RadiusCode, setRadiusCode] = React.useState(false);
  const RadiusCodeClick = () => {
    setRadiusCode(!RadiusCode)
  }
  const [VerticalCode, setVerticalCode] = React.useState(false);
  const VerticalCodeClick = () => {
    setVerticalCode(!VerticalCode)
  }
  const [MaxCode, setMaxCode] = React.useState(false);
  const MaxCodeClick = () => {
    setMaxCode(!MaxCode)
  }
  const [DotCode, setDotCode] = React.useState(false);
  const DotCodeClick = () => {
    setDotCode(!DotCode)
  }
  const [ContentCode, setContentCode] = React.useState(false);
  const ContentCodeClick = () => {
    setContentCode(!ContentCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Badge</h1>
          <p className='description'>Badge 컴포넌트입니다.</p>
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
{`import { Badge } from 'nds-ui/component';
// or
import Badge from 'nds-ui/component/Badge';`}/>
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

        {/* Basic */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic</h3>
            <p className='description'>
              기본적인 Badge 형태입니다. <br/>
              Badge는 다른 컴포넌트를 감싸는 형태로 작성합니다. <br/>
              화면상에는 모서리쪽 알림형태로 표시됩니다.
            </p>
          </div>
          <div className='layout-example'>
            <Badge content={1}>
              <Button variant='contained'>메세지</Button>
            </Badge>
            <Badge dot>
              <Avatar color='primary' name='nds'/>
            </Badge>
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
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={1}>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge dot>
        <Avatar color='primary' name='nds'/>
      </Badge>
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
<Badge content={1}>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge dot>
  <Avatar color='primary' name='nds'/>
</Badge>
</>`}/>
            }
          </div>
        </div>

        {/* Color */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Color</h3>
            <p className='description'>
              color 속성으로 색상을 설정할 수 있습니다. <br/>
              color 속성의 값은 Variable의 $colors 변수값을 넣을 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Badge content={1} color='notification'>
              <Button variant='contained'>메세지</Button>
            </Badge>
            <Badge content={1} color='success'>
              <Button variant='contained'>메세지</Button>
            </Badge>
            <Badge content={1} color='warning'>
              <Button variant='contained'>메세지</Button>
            </Badge>
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
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={1} color='notification'>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={1} color='success'>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={1} color='warning'>
        <Button variant='contained'>메세지</Button>
      </Badge>
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
<Badge content={1} color='notification'>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={1} color='success'>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={1} color='warning'>
  <Button variant='contained'>메세지</Button>
</Badge>
</>`}/>
            }
          </div>
        </div>

        {/* Radius */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Radius</h3>
            <p className='description'>
              radius 속성으로 굴곡을 설정할 수 있습니다. <br/>
              rect / normal / round 값이 있고 round가 기본 값입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Badge content={9} radius='rect'>
              <Button variant='contained'>메세지</Button>
            </Badge>
            <Badge content={9} radius='normal'>
              <Button variant='contained'>메세지</Button>
            </Badge>
            <Badge content={9} >
              <Button variant='contained'>메세지</Button>
            </Badge>
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
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={9} radius='rect'>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={9} radius='normal'>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={9} >
        <Button variant='contained'>메세지</Button>
      </Badge>
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
<Badge content={9} radius='rect'>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={9} radius='normal'>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={9} >
  <Button variant='contained'>메세지</Button>
</Badge>
</>`}/>
            }
          </div>
        </div>

        {/* Vertical */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Vertical / Horizontal</h3>
            <p className='description'>
              vertical 속성으로 위치(수직)를 정할 수 있습니다. <br/>
              top / bottom 값이 있고 top이 기본 값입니다.<br/>
              horizontal 속성으로 위치(수평)를 정할 수 있습니다. <br/>
              right / left 값이 있고 right가 기본 값입니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <div className='flex gap10'>
              <Badge content={1} horizontal='left'>
                <Button variant='contained'>메세지</Button>
              </Badge>
              <Badge content={1}>
                <Button variant='contained'>메세지</Button>
              </Badge>
            </div>
            <div className='flex gap10'>
              <Badge content={1} horizontal='left' vertical='bottom'>
                <Button variant='contained'>메세지</Button>
              </Badge>
              <Badge content={1} vertical='bottom'>
                <Button variant='contained'>메세지</Button>
              </Badge>
            </div>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={VerticalCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              VerticalCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <div className='flex gap10'>
        <Badge content={1} horizontal='left'>
          <Button variant='contained'>메세지</Button>
        </Badge>
        <Badge content={1}>
          <Button variant='contained'>메세지</Button>
        </Badge>
      </div>
      <div className='flex gap10'>
        <Badge content={1} horizontal='left' vertical='bottom'>
          <Button variant='contained'>메세지</Button>
        </Badge>
        <Badge content={1} vertical='bottom'>
          <Button variant='contained'>메세지</Button>
        </Badge>
      </div>
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
<div className='flex gap10'>
  <Badge content={1} horizontal='left'>
    <Button variant='contained'>메세지</Button>
  </Badge>
  <Badge content={1}>
    <Button variant='contained'>메세지</Button>
  </Badge>
</div>
<div className='flex gap10'>
  <Badge content={1} horizontal='left' vertical='bottom'>
    <Button variant='contained'>메세지</Button>
  </Badge>
  <Badge content={1} vertical='bottom'>
    <Button variant='contained'>메세지</Button>
  </Badge>
</div>
</>`}/>
            }
          </div>
        </div>

        {/* Content */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Content</h3>
            <p className='description'>
              content 속성으로 현재 숫자를 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Badge content={1}>
              <Button variant='contained'>메세지</Button>
            </Badge>
            <Badge content={2}>
              <Button variant='contained'>메세지</Button>
            </Badge>
            <Badge content={3}>
              <Button variant='contained'>메세지</Button>
            </Badge>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={ContentCodeClick}>
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
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={1}>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={2}>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge content={3}>
        <Button variant='contained'>메세지</Button>
      </Badge>
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
<Badge content={1}>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={2}>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge content={3}>
  <Button variant='contained'>메세지</Button>
</Badge>
</>`}/>
            }
          </div>
        </div>

        {/* Max */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Max</h3>
            <p className='description'>
              max 속성으로 최대 숫자를 설정할 수 있습니다. <br/>
              content가 max보다 높을 경우 content대신 max가 표기되고 옆에 + 표시가 붙습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Badge content={100} max={99}>
              <Button variant='contained'>메세지</Button>
            </Badge>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={MaxCodeClick}>
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
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Badge content={100} max={99}>
        <Button variant='contained'>메세지</Button>
      </Badge>
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
<Badge content={100} max={99}>
  <Button variant='contained'>메세지</Button>
</Badge>
</>`}/>
            }
          </div>
        </div>

        {/* Dot */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Dot</h3>
            <p className='description'>
              dot 속성으로 숫자 대신 점으로 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example flexColumn'>
            <Badge content={'New'}>
              <Button variant='contained'>메세지</Button>
            </Badge>
            <Badge dot>
              <Button variant='contained'>메세지</Button>
            </Badge>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={DotCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              DotCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Badge } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flexColumn gap10'>
      <Badge content={100} max={99}>
        <Button variant='contained'>메세지</Button>
      </Badge>
      <Badge dot>
        <Button variant='contained'>메세지</Button>
      </Badge>
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
<Badge content={100} max={99}>
  <Button variant='contained'>메세지</Button>
</Badge>
<Badge dot>
  <Button variant='contained'>메세지</Button>
</Badge>
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
                  <td>color</td>
                  <td>
                    <p className='b'>'notification'</p>
                    $colors
                  </td>
                  <td>
                    배경색을 설정하는 속성입니다. <br/>
                    Variable의 $colors 값을 넣을 수 있습니다. 
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
                    굴곡을 설정하는 속성입니다. <br/>
                    rect / normal / round 3가지 값이 있고 round 가 기본값입니다.
                  </td>
                </tr>
                <tr>
                  <td>vertical</td>
                  <td>
                    <p className='b'>'top'</p>
                    'bottom'
                  </td>
                  <td>
                    위치(수직)를 설정하는 속성입니다. <br/>
                    top / bottom 2가지 값이 있고 top 이 기본값입니다.
                  </td>
                </tr>
                <tr>
                  <td>horizontal</td>
                  <td>
                    <p className='b'>'right'</p>
                    'left'
                  </td>
                  <td>
                    위치(수평)를 설정하는 속성입니다. <br/>
                    right / left 2가지 값이 있고 right 가 기본값입니다.
                  </td>
                </tr>
                <tr>
                  <td>content</td>
                  <td>
                    number <br/>
                    string
                  </td>
                  <td>
                    내용을 설정하는 속성입니다. <br/>
                    문자열 혹은 숫자 타입의 데이터가 들어갑니다.
                  </td>
                </tr>
                <tr>
                  <td>max</td>
                  <td>
                    number
                  </td>
                  <td>
                    content의 최대치를 설정하는 속성입니다. <br/>
                    content의 값이 max값보다 크면 max가 표기되고 옆에 +가 붙습니다.
                  </td>
                </tr>
                <tr>
                  <td>dot</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    내용 대신 점으로 표현하는 속성으로 불리언(Boolean) 타입입니다. <br/>
                    속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
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

export default BadgePage;