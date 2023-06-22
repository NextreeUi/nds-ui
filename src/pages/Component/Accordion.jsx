import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Accordion, Button, Table } from '@/nds-ui/component';

const AccordionPage = () => {
  const ImportRef = React.useRef();
  const PropertyRef = React.useRef();
  const APIRef = React.useRef();

  const [BasicCode, setBasicCode] = React.useState(false);
  const BasicCodeClick = () => {
    setBasicCode(!BasicCode)
  }
  const [IconCode, setIconCode] = React.useState(false);
  const IconCodeClick = () => {
    setIconCode(!IconCode)
  }
  const [IconLocationCode, setIconLocationCode] = React.useState(false);
  const IconLocationCodeClick = () => {
    setIconLocationCode(!IconLocationCode)
  }
  const [IconRotateCode, setIconRotateCode] = React.useState(false);
  const IconRotateCodeClick = () => {
    setIconRotateCode(!IconRotateCode)
  }
  const AcoordionClick = () => {
    console.log('asd')
  }
  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Accordion</h1>
          <p className='description'>Accordion은 클릭시 확장되는 컴포넌트입니다.</p>
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
{`import { Accordion } from 'nds-ui/component';
// or
import Accordion from 'nds-ui/component/Accordion';`}/>
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
              Accordion 컴포넌트는 다양한 속성이 있습니다. <br/>
              wrap / title / icon / iconLocation / iconRotate 등이 있습니다.
            </p>
            
          </div>
        </div>

        {/* Basic Accordion */}
        <div className='layout-small'>
          
          <div className='layout-title'>
            <h3>Basic Accordion</h3>
            <p className='description'>
              기본적인 Accordion 형태입니다. <br/>
              가장 부모 태그에 wrap 속성을 단 Accorion 컴포넌트로 감싸줍니다. <br/>
              자식 Accordion 속성에 title을 달아줍니다. <br/>
              확장된 내용은 자식 Accordion 안에 넣어줍니다.
            </p>
          </div>
          <div className='layout-example'>
            <Accordion wrap >
              <Accordion title='아코디언' onClick={AcoordionClick}>
                <div className='p20'> 아코디언 내용입니다.</div>
              </Accordion>
            </Accordion>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' onClick={BasicCodeClick}>
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
import { Accordion } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Accordion wrap>
      <Accordion title='아코디언'>
        <div className='p20'> 아코디언 내용입니다.</div>
      </Accordion>
    </Accordion>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Accordion wrap>
  <Accordion title='아코디언'>
    <div className='p20'> 아코디언 내용입니다.</div>
  </Accordion>
</Accordion>
</>`}/>
            }
          </div>
        </div>

        {/* wrap */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>wrap</h3>
            <p className='description'>
              wrap 속성은 부모 Accordion 컴포넌트에 사용합니다.
            </p>
          </div>
        </div>

        {/* title */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>title</h3>
            <p className='description'>
              title 속성은 자식 Accordion 컴포넌트에 사용합니다. <br/>
              확장하기 이전의 내용을 설정할 수 있습니다.
            </p>
          </div>
        </div>

        {/* Icon */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Icon</h3>
            <p className='description'>
              icon 속성을 이용하여, 확장 아이콘을 커스텀할 수 있습니다. <br/>
              속성 값으로 원하는 이미지나 문자를 넣을 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Accordion wrap>
              <Accordion title='아이콘이 변경되었습니다.' icon={<Button size='small' variant='outlined'>Custom</Button>}>
                <div className='p20'> 아코디언 내용입니다.</div>
              </Accordion>
            </Accordion>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' onClick={IconCodeClick}>
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
import { Accordion, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Accordion wrap>
      <Accordion title='아코디언' icon={<Button size='small' variant='outlined'>Custom</Button>}>
        <div className='p20'> 아코디언 내용입니다.</div>
      </Accordion>
    </Accordion>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Accordion wrap>
  <Accordion title='아코디언' icon={<Button size='small' variant='outlined'>Custom</Button>}>
    <div className='p20'> 아코디언 내용입니다.</div>
  </Accordion>
</Accordion>
</>`}/>
            }
          </div>
        </div>

        {/* Icon Location */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Icon Location</h3>
            <p className='description'>
              iconLocation 속성을 이용하여, 확장 아이콘 위치를 설정할 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Accordion wrap>
              <Accordion title='아이콘이 왼쪽에 있습니다.' iconLocation='left'>
                <div className='p20'> 아코디언 내용입니다.</div>
              </Accordion>
            </Accordion>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' onClick={IconLocationCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              IconLocationCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Accordion, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Accordion wrap>
      <Accordion title='아코디언' iconLocation='left'>
        <div className='p20'> 아코디언 내용입니다.</div>
      </Accordion>
    </Accordion>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Accordion wrap>
  <Accordion title='아코디언' iconLocation='left'>
    <div className='p20'> 아코디언 내용입니다.</div>
  </Accordion>
</Accordion>
</>`}/>
            }
          </div>
        </div>

        {/* Icon Rotate */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Icon Rotate</h3>
            <p className='description'>
              iconRotate 속성을 이용하여, 확장 아이콘 회전을 설정할 수 있습니다. <br/>
              속성 값은 deg90 / deg180 / deg 270 이 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Accordion wrap >
              <Accordion title='아이콘이 90도 회전합니다.' iconRotate='deg90'>
                <div className='p20'> 아코디언 내용입니다.</div>
              </Accordion>
            </Accordion>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' onClick={IconRotateCodeClick}>
                <i className='i-code w14 h14'/>
              </Button>
            </div>
            {
              IconRotateCode ?
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`import * as React from 'react';
import { Accordion, Button } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Accordion wrap>
      <Accordion title='아코디언' iconRotate='deg90'>
        <div className='p20'> 아코디언 내용입니다.</div>
      </Accordion>
    </Accordion>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Accordion wrap>
  <Accordion title='아코디언' iconRotate='deg90'>
    <div className='p20'> 아코디언 내용입니다.</div>
  </Accordion>
</Accordion>
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
                  <td>wrap</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    Accordion 부모 컴포넌트에 넣는 속성으로 불리언(Boolean) 타입입니다. <br/>
                    속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
                  </td>
                </tr>
                <tr>
                  <td>title</td>
                  <td>
                    string <br/>
                    element
                  </td>
                  <td>
                    Accordion 자식 컴포넌트에 넣는 속성으로 문자형(string) 타입이 들어가거나, html 태그를 넣어도 됩니다.
                  </td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>
                    element
                  </td>
                  <td>
                    확장 아이콘을 변경하는 속성으로 html 태그를 넣습니다.
                  </td>
                </tr>
                <tr>
                  <td>iconLocation</td>
                  <td>
                    'left'
                    <p className='b'>'right'</p>
                  </td>
                  <td>
                    확장 아이콘을 위치를 설정하는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>iconRotate</td>
                  <td>
                    'deg90' 
                    <p className='b'>'deg180'</p>
                    'deg270' 
                  </td>
                  <td>
                    확장 아이콘을 클릭시 회전각도를 설정하는 속성입니다.
                  </td>
                </tr>
                <tr>
                  <td>click</td>
                  <td>
                    func
                  </td>
                  <td>
                    onClick의 속성의 역할을 수행하는 속성으로 클릭시 실행되는 함수가 들어갑니다.
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

export default AccordionPage;