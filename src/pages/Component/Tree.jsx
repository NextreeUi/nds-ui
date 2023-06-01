import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Tree, Button, Table } from '@/nds-ui/component';

const TreePage = () => {
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
  const [IconRotateCode, setIconRotateCode] = React.useState(false);
  const IconRotateCodeClick = () => {
    setIconRotateCode(!IconRotateCode)
  }

  return (
    <>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Tree</h1>
          <p className='description'>Tree는 폴더 구조를 나타내는 컴포넌트입니다.</p>
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
{`import { Tree } from 'nds-ui/component';
// or
import Tree from 'nds-ui/component/Tree';`}/>
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
              Tree 컴포넌트는 다양한 속성이 있습니다. <br/>
              title / item / icon / iconRotate 등이 있습니다.
            </p>
          </div>
        </div>

        {/* Basic Tree */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Basic Tree</h3>
            <p className='description'>
              기본적인 Tree 형태입니다. <br/>
              title 속성으로 해당 폴더의 제목을 붙여줍니다. <br/>
              하위 폴더 내용이 더 이상 없을 경우 item 속성을 붙여줍니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tree title='Tree Depth1'>
              <Tree title='Tree Depth2'>
                <Tree item title='Tree Depth3'/>
                <Tree item title='Tree Depth3'/>
                <Tree item title='Tree Depth3'/>
              </Tree>
              <Tree title='Tree Depth2'>
                <Tree item title='Tree Depth3'/>
                <Tree item title='Tree Depth3'/>
                <Tree item title='Tree Depth3'/>
              </Tree>
              <Tree item title='Tree Depth2'/>
              <Tree item title='Tree Depth2'/>
            </Tree>
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
import { Tree } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Tree title='Tree Depth1'>
      <Tree title='Tree Depth2'>
        <Tree item title='Tree Depth3'/>
        <Tree item title='Tree Depth3'/>
        <Tree item title='Tree Depth3'/>
      </Tree>
      <Tree title='Tree Depth2'>
        <Tree item title='Tree Depth3'/>
        <Tree item title='Tree Depth3'/>
        <Tree item title='Tree Depth3'/>
      </Tree>
      <Tree item title='Tree Depth2'/>
      <Tree item title='Tree Depth2'/>
    </Tree>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tree title='Tree Depth1'>
  <Tree title='Tree Depth2'>
    <Tree item title='Tree Depth3'/>
    <Tree item title='Tree Depth3'/>
    <Tree item title='Tree Depth3'/>
  </Tree>
  <Tree title='Tree Depth2'>
    <Tree item title='Tree Depth3'/>
    <Tree item title='Tree Depth3'/>
    <Tree item title='Tree Depth3'/>
  </Tree>
  <Tree item title='Tree Depth2'/>
  <Tree item title='Tree Depth2'/>
</Tree>
</>`}/>
            }
          </div>
        </div>

        {/* title */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>title</h3>
            <p className='description'>
              title 속성은 해당 폴더/파일의 제목을 설정합니다.
            </p>
          </div>
        </div>

        {/* item */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>item</h3>
            <p className='description'>
              item 속성은 하위 폴더의 내용이 더 이상 없을 경우 붙여줍니다.
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
            <Tree icon={<Button size='extraSmall' square variant='outlined'> O </Button>} title='Custom Icon'>
              <Tree item title='Tree Depth2'/>
              <Tree item title='Tree Depth2'/>
            </Tree>
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
import { Tree } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Tree icon={<Button size='extraSmall' square variant='outlined'> O </Button>} title='Custom Icon'>
      <Tree item title='Tree Depth2'/>
      <Tree item title='Tree Depth2'/>
    </Tree>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tree icon={<Button size='extraSmall' square variant='outlined'> O </Button>} title='Custom Icon'>
  <Tree item title='Tree Depth2'/>
  <Tree item title='Tree Depth2'/>
</Tree>
</>`}/>
            }
          </div>
        </div>

        {/* Icon Rotate */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3>Icon Rotate</h3>
            <p className='description'>
              iconRotate 속성을 이용하여, 확장 아이콘의 회전각도를 수정할 수 있습니다. <br/>
              속성 값으로 deg90 / deg180 / deg270 을 넣을 수 있습니다.
            </p>
          </div>
          <div className='layout-example'>
            <Tree iconRotate='deg180' title='180도 회전됩니다.'>
              <Tree item title='Tree Depth2'/>
              <Tree item title='Tree Depth2'/>
            </Tree>
          </div>
          <div className='codeMirror'>
            <div className='btn-wrap'>
              <Button square radius='round' variant='outlined' size='extraSmall' hoverBg='white' hoverColor='black' theme='white' onClick={IconRotateCodeClick}>
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
import { Tree } from 'nds-ui/component';
import 'nds-ui/css/style.scss';

const Example = () => {
  return (
    <Tree iconRotate='deg180' title='180도 회전됩니다.'>
      <Tree item title='Tree Depth2'/>
      <Tree item title='Tree Depth2'/>
    </Tree>
  )
}

export default Example;`}/>
              :
              <CodeMirror
              theme='dark'
              extensions={[javascript({ jsx: true })]}
              value=
{`<>
<Tree iconRotate='deg180' title='180도 회전됩니다.'>
  <Tree item title='Tree Depth2'/>
  <Tree item title='Tree Depth2'/>
</Tree>
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
                  <td>title</td>
                  <td>
                    string <br/>
                    element
                  </td>
                  <td>
                    제목을 설정하는 속성으로 문자형(string) 타입이 들어가거나, html 태그를 넣어도 됩니다.
                  </td>
                </tr>
                <tr>
                  <td>item</td>
                  <td>
                    boolean
                  </td>
                  <td>
                    가장 하위에 속하는 Tree에 넣는 속성으로 불리언(Boolean) 타입입니다. <br/>
                    속성값은 따로 없고, 속성을 추가할 시 기본값인 false에서 true로 바뀝니다.
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
                  <td>iconRotate</td>
                  <td>
                    <p className='b'>'deg90'</p>
                    'deg180' <br/> 
                    'deg270' 
                  </td>
                  <td>
                    확장 아이콘을 클릭시 회전각도를 설정하는 속성입니다.
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

export default TreePage;