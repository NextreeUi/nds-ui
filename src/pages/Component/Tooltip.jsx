import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Tooltip, Button, Table } from '@/nds-ui/component';

const TooltipPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [ContentCode, setContentCode] = React.useState(false);
  const ContentCodeClick = () => {
    setContentCode(!ContentCode)
  }
  const [PlacementCode, setPlacementCode] = React.useState(false);
  const PlacementCodeClick = () => {
    setPlacementCode(!PlacementCode)
  }
  const [BgCode, setBgCode] = React.useState(false);
  const BgCodeClick = () => {
    setBgCode(!BgCode)
  }
  const [ColorCode, setColorCode] = React.useState(false);
  const ColorCodeClick = () => {
    setColorCode(!ColorCode)
  }
  const [RadiusCode, setRadiusCode] = React.useState(false);
  const RadiusCodeClick = () => {
    setRadiusCode(!RadiusCode)
  }
  const [SizeCode, setSizeCode] = React.useState(false);
  const SizeCodeClick = () => {
    setSizeCode(!SizeCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Tooltip</h1>
          <p className='description'>Tooltip 컴포넌트는 호버시 나타나는 안내문입니다.</p>
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
{`import { Tooltip } from 'nds-ui/component';
// or
import Tooltip from 'nds-ui/component/Tooltip';`}/>
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
              Tooltip 컴포넌트 안에는 다양한 속성들이 있습니다. <br/>
              content / placement / bg / color / radius / size 등 다양한 속성들이 있는데,
              그 사용법을 알아보겠습니다.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Content</h3>
            <p className='description'>
              content 속성은 Tooltip의 내용을 정하는 속성입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tooltip content='Tooltip'>
              <Button variant='contained'>Hover</Button>
            </Tooltip>
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
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Tooltip content='Tooltip'>
      <Button variant='contained'>Hover</Button>
    </Tooltip>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tooltip content='Tooltip'>
  <Button variant='contained'>Hover</Button>
</Tooltip>
</>`}/>
            }
          </div>
        </div>

        {/* Placement */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Placement</h3>
            <p className='description'>
              placement 속성으로 Tooltip의 위치를 정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tooltip placement='top' content='Top'> 
              <Button className='w50 h50' variant='contained'>Top</Button> 
            </Tooltip>
            <Tooltip placement='bottom' content='Bottom'> 
              <Button className='w50 h50' variant='contained'>Bottom</Button> 
            </Tooltip>
            <Tooltip placement='left' content='Left'> 
              <Button className='w50 h50' variant='contained'>Left</Button> 
            </Tooltip>
            <Tooltip placement='right' content='Right'> 
              <Button className='w50 h50' variant='contained'>Right</Button> 
            </Tooltip>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall'  onClick={PlacementCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              PlacementCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip placement='top' content='Top'> 
        <Button className='w50 h50' variant='contained'>Top</Button> 
      </Tooltip>
      <Tooltip placement='bottom' content='Bottom'> 
        <Button className='w50 h50' variant='contained'>Bottom</Button> 
      </Tooltip>
      <Tooltip placement='left' content='Left'> 
        <Button className='w50 h50' variant='contained'>Left</Button> 
      </Tooltip>
      <Tooltip placement='right' content='Right'> 
        <Button className='w50 h50' variant='contained'>Right</Button> 
      </Tooltip>
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
<Tooltip placement='top' content='Top'> 
  <Button className='w50 h50' variant='contained'>Top</Button> 
</Tooltip>
<Tooltip placement='bottom' content='Bottom'> 
  <Button className='w50 h50' variant='contained'>Bottom</Button> 
</Tooltip>
<Tooltip placement='left' content='Left'> 
  <Button className='w50 h50' variant='contained'>Left</Button> 
</Tooltip>
<Tooltip placement='right' content='Right'> 
  <Button className='w50 h50' variant='contained'>Right</Button> 
</Tooltip>
</>`}/>
            }
          </div>
        </div>

        {/* Background */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Background</h3>
            <p className='description'>
              bg 속성으로 Tooltip의 배경색을 설정할 수 있습니다. <br/>
              색상은 Variable의 $grays 를 참고하세요.
            </p>
          </div>
          <div className='layout-example'>
            <Tooltip bg='black' content='Black'> 
              <Button variant='contained'>Black</Button> 
            </Tooltip>
            <Tooltip bg='grayc' content='GrayC'> 
              <Button variant='contained'>GrayC</Button> 
            </Tooltip>
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
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip bg='black' content='Black'> 
        <Button variant='contained'>Black</Button> 
      </Tooltip>
      <Tooltip bg='grayc' content='GrayC'> 
        <Button variant='contained'>GrayC</Button> 
      </Tooltip>
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
<Tooltip bg='black' content='Black'> 
  <Button variant='contained'>Black</Button> 
</Tooltip>
<Tooltip bg='grayc' content='GrayC'> 
  <Button variant='contained'>GrayC</Button> 
</Tooltip>
</>`}/>
            }
          </div>
        </div>
        
        {/* Color */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Color</h3>
            <p className='description'>
              color 속성으로 Tooltip의 글자색을 설정할 수 있습니다. <br/>
              색상은 black / white 2가지입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tooltip color='black' content='Black'> 
              <Button variant='contained'>Black</Button> 
            </Tooltip>
            <Tooltip color='white' content='White'> 
              <Button variant='contained'>White</Button> 
            </Tooltip>
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
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip color='black' content='Black'> 
        <Button variant='contained'>Black</Button> 
      </Tooltip>
      <Tooltip color='white' content='White'> 
        <Button variant='contained'>White</Button> 
      </Tooltip>
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
<Tooltip color='black' content='Black'> 
  <Button variant='contained'>Black</Button> 
</Tooltip>
<Tooltip color='white' content='White'> 
  <Button variant='contained'>White</Button> 
</Tooltip>
</>`}/>
            }
          </div>
        </div>

        {/* Radius */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Radius</h3>
            <p className='description'>
              radius 속성으로 Tooltip의 굴곡을 설정할 수 있습니다. <br/>
              rect / normal / round 3가지 값이 있으며 기본값은 norml입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tooltip radius='rect' content='rect'> 
              <Button variant='contained'>rect</Button> 
            </Tooltip>
            <Tooltip content='normal'> 
              <Button variant='contained'>normal</Button> 
            </Tooltip>
            <Tooltip radius='round' content='round'> 
              <Button variant='contained'>round</Button> 
            </Tooltip>
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
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip radius='rect' content='rect'> 
        <Button variant='contained'>rect</Button> 
      </Tooltip>
      <Tooltip content='normal'> 
        <Button variant='contained'>normal</Button> 
      </Tooltip>
      <Tooltip radius='round' content='round'> 
        <Button variant='contained'>round</Button> 
      </Tooltip>
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
<Tooltip radius='rect' content='rect'> 
  <Button variant='contained'>rect</Button> 
</Tooltip>
<Tooltip content='normal'> 
  <Button variant='contained'>normal</Button> 
</Tooltip>
<Tooltip radius='round' content='round'> 
  <Button variant='contained'>round</Button> 
</Tooltip>
</>`}/>
            }
          </div>
        </div>

        {/* Size */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Size</h3>
            <p className='description'>
              size 속성으로 Tooltip의 크기를 설정할 수 있습니다. <br/>
              large / medium / small / extraSmall 4가지 값이 있으며 기본값은 medium 입니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tooltip size='large' content='large'> 
              <Button variant='contained'>large</Button> 
            </Tooltip>
            <Tooltip content='medium'> 
              <Button variant='contained'>medium</Button> 
            </Tooltip>
            <Tooltip size='small' content='small'> 
              <Button variant='contained'>small</Button> 
            </Tooltip>
            <Tooltip size='extraSmall' content='extraSmall'> 
              <Button variant='contained'>extraSmall</Button> 
            </Tooltip>
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
import { Tooltip, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <div className='flex gap10'>
      <Tooltip size='large' content='large'> 
        <Button variant='contained'>large</Button> 
      </Tooltip>
      <Tooltip content='medium'> 
        <Button variant='contained'>medium</Button> 
      </Tooltip>
      <Tooltip size='small' content='small'> 
        <Button variant='contained'>small</Button> 
      </Tooltip>
      <Tooltip size='extraSmall' content='extraSmall'> 
        <Button variant='contained'>extraSmall</Button> 
      </Tooltip>
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
<Tooltip size='large' content='large'> 
  <Button variant='contained'>large</Button> 
</Tooltip>
<Tooltip content='medium'> 
  <Button variant='contained'>medium</Button> 
</Tooltip>
<Tooltip size='small' content='small'> 
  <Button variant='contained'>small</Button> 
</Tooltip>
<Tooltip size='extraSmall' content='extraSmall'> 
  <Button variant='contained'>extraSmall</Button> 
</Tooltip>
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
                    string
                  </td>
                  <td>
                    내용을 설정합니다. 문자열(string) 타입입니다.
                  </td>
                </tr>
                <tr>
                  <td>placement</td>
                  <td>
                    'top-start' <br/>
                    'top' <br/>
                    'top-end' <br/>
                    'right-start' <br/>
                    'right' <br/>
                    'right-end' <br/>
                    'bottom-start' <br/>
                    <p className='b'>'bottom'</p>
                    'bottom-end' <br/>
                    'left-start' <br/>
                    'left' <br/>
                    'left-end'
                  </td>
                  <td>
                    위치를 설정합니다.
                  </td>
                </tr>

                <tr>
                  <td>bg</td>
                  <td>
                    <p className='b'>'grayc'</p>
                    $grays
                  </td>
                  <td>
                    배경색을 설정합니다.<br/>
                    Variable의 $grays 값을 넣을 수 있습니다.  <br/>
                    기본값은 grayc 입니다
                  </td>
                </tr>

                <tr>
                  <td>color</td>
                  <td>
                    'white' <br/>
                    'black'
                  </td>
                  <td>
                    글자색을 설정합니다.<br/>
                    'white' / 'black' 2가지 값이 있습니다.
                  </td>
                </tr>

                <tr>
                  <td>radius</td>
                  <td>
                    'rect' <br/>
                    <p className='b'>'normal'</p>
                    'round'
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

export default TooltipPage;