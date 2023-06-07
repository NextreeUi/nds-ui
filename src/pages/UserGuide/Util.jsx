import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { html } from '@codemirror/lang-html';
import { sass } from '@codemirror/lang-sass';
import { javascript } from '@codemirror/lang-javascript';

// nds-ui
import { Button, Table } from '@/nds-ui/component';

const Util = () => {
  const WHRef = React.useRef();
  const LHRef = React.useRef();
  const LSRef = React.useRef();
  const MPRef = React.useRef();
  const FlexRef = React.useRef();
  const TableRef = React.useRef();
  const RRef = React.useRef();
  const GapRef = React.useRef();
  const BlurRef = React.useRef();
  const ScrollRef = React.useRef();
  const DisplayRef = React.useRef();
  const PositionRef = React.useRef();
  const CursorRef = React.useRef();
  const EllipsisRef = React.useRef();

  const Copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
    }
  };

  const [CopyClickState, setCopyClickState] = React.useState(false);
  const CopyClick = () => {
    setCopyClickState(true);
    setTimeout(()=>{
      setCopyClickState(false)
    }, 2000)
  }

  return (
    <>
      {/* CopyClick */}
      <div className={`copyclick ${CopyClickState ? 'open' : ''}`}>
        복사되었습니다.
      </div>
      <div className='layout-all'>
        {/* Title */}
        <div className='layout-title'>
          <h1>Utility Classes</h1>
        </div>

        {/* What is Utility Classes? */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2>What is Utility Classes?</h2>
            <p className='description'>
              유틸리티 클래스란? 자주쓰는 스타일을 이름(클래스)을 정해서 사용하는 것입니다. <br/>
              예를 들어 padding 값이 10rem인 스타일을 자주 쓴다고 가정해봅시다. <br/>
              매 번 클래스를 만들어 padding: 10rem 을 주기는 너무 번거로울 것입니다. <br/>
              (불필요하게 반복되는 CSS도 있을것입니다. - 아래 참조)
            </p>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[html({ html: true })]}
                value=
{`<html>
  <head>
    <style>
      .class1 { padding: 10rem }
      .class2 { padding: 10rem }
      .class3 { padding: 10rem }
      .class4 { padding: 10rem }
      .class5 { padding: 10rem }
    </style>
  </head>
  <body>
    <div class='class1'> </div>
    <div class='class2'> </div>
    <div class='class3'> </div>
    <div class='class4'> </div>
    <div class='class5'> </div>
  </body>
</html>`}/>
            </div>
            <p className='description'>
              그렇다면 그냥 'p10'이라는 CSS를 하나 만들어서 HTML에 p10이라는 클래스를 붙여주기만 한다면 어떨까요? <br/>
              유틸리티 클래스는 자주쓰는 스타일을 네이밍해서 HTML에서 바로 스타일링 할 수 있습니다.
            </p>
            <div className='codeMirror'>
              <CodeMirror
                theme='dark'
                extensions={[html({ html: true })]}
                value=
{`<html>
  <head>
    <style>
      .p10 { padding: 10rem }
    </style>
  </head>
  <body>
    <div class='p10'> </div>
    <div class='p10'> </div>
    <div class='p10'> </div>
    <div class='p10'> </div>
    <div class='p10'> </div>
  </body>
</html>`}/>
            </div>
          </div>
        </div>
        
        {/* Setting */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2>Setting</h2>
            <p className='description'>
              React 프로젝트를 만드셨다면 가장 상위 JSX 파일이 있을 것입니다. (예를 들어 App.jsx) <br/>
              해당 파일을 열고 아래의 코드를 복사해 넣어줍니다. <br/>
              (가장 상위 JSX 파일에 <b>'한 번만'</b> 임포트해도 하위 파일에서 사용가능합니다.)
            </p>
            <div className='codeMirror'>
              <div className='btn-wrap shell'>
                <Button 
                  square radius='round' variant='outlined' size='extraSmall' 
                  onClick={() => {
                    Copy('import "nds-ui/css/style.scss";')
                    CopyClick()
                  }}
                >
                  <i className='i-copy w14 h14'/>
                </Button>
              </div>
              <CodeMirror
                theme='dark'
                extensions={[javascript({ jsx: true })]}
                value=
{`import "nds-ui/css/style.scss";`}/>
            </div>
          </div>
        </div>

        {/* Classes */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h2>Classes</h2>
            <p className='description'>
              유틸리티 클래스에는 다양한 종류들이 있습니다. <br/>
              NDS-UI에선 레이아웃과 색에 관련된 클래스만 사용합니다. <br/>
              어떤 클래스를 사용하는지 알아보겠습니다. <br/>
              (소스코드는 'nds-ui/css/_util.scss'를 참고하세요)
            </p>
          </div>
        </div>

        {/* width / height */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={WHRef} >Width / Height</h3>
            <p className='description'>
              너비와 높이에 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>w1 ~ w3000</td>
                    <td>
                      너비 1rem ~ 3000rem 
                    </td>
                  </tr>
                  <tr>
                    <td>h1 ~ h3001</td>
                    <td>
                      높이 1rem ~ 3000rem 
                    </td>
                  </tr>
                  <tr>
                    <td>width1 ~ width3000</td>
                    <td>
                      너비 1% ~ 3000% 
                    </td>
                  </tr>
                  <tr>
                    <td>height1 ~ hegiht3000</td>
                    <td>
                      높이 1% ~ 3000%
                    </td>
                  </tr>
                  <tr>
                    <td>minw1 ~ minw3000</td>
                    <td>
                      최소너비 1rem ~ 3000rem 
                    </td>
                  </tr>
                  <tr>
                    <td>minh1 ~ minh3000</td>
                    <td>
                      최소높이 1rem ~ 3000rem 
                    </td>
                  </tr>
                  <tr>
                    <td>maxw1 ~ maxw3000</td>
                    <td>
                      최대너비 1rem ~ 3000rem 
                    </td>
                  </tr>
                  <tr>
                    <td>maxh1 ~ maxh3000</td>
                    <td>
                      최대높이 1rem ~ 3000rem 
                    </td>
                  </tr>
                  <tr>
                    <td>vw1 ~ vw3000</td>
                    <td>
                      뷰포트 너비 1 ~ 3000 
                    </td>
                  </tr>
                  <tr>
                    <td>vh1 ~ vh3000</td>
                    <td>
                      뷰포트 높이 1 ~ 3000
                    </td>
                  </tr>
                  <tr>
                    <td>vw100-1 ~ vw100-3000</td>
                    <td>
                      뷰포트 너비 100에서  1~3000rem 만큼 뺸값
                    </td>
                  </tr>
                  <tr>
                    <td>vh100-1 ~ vh100-3000</td>
                    <td>
                      뷰포트 높이 100에서  1~3000rem 만큼 뺸값
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* LineHeight */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={LHRef}>Line Height </h3>
            <p className='description'>
              문자높이와 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>lh60 ~ lh200</td>
                    <td>
                      문자 높이 60% ~ 200%
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Letter Spacing */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={LSRef}>Letter Spacing </h3>
            <p className='description'>
              문자여백과 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>ls1 ~ ls100</td>
                    <td>
                      문자 여백 1rem ~ 100rem
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/*  Margin / Padding */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={MPRef}> Margin / Padding </h3>
            <p className='description'>
              여백과 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>m1 ~ m300</td>
                    <td>
                      외부 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>my1 ~ my300</td>
                    <td>
                      외부 상하 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>mx1 ~ mx300</td>
                    <td>
                      외부 좌우 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>mt1 ~ mt300</td>
                    <td>
                      외부 윗 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>mr1 ~ mr300</td>
                    <td>
                      외부 오른쪽 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>mb1 ~ mb300</td>
                    <td>
                      외부 아래 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>ml1 ~ ml300</td>
                    <td>
                      외부 왼쪽 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>mr-1 ~ mr-300</td>
                    <td>
                      외부 오른쪽 여백 -1rem ~ -300rem
                    </td>
                  </tr>
                  <tr>
                    <td>mb-1 ~ mb-300</td>
                    <td>
                      외부 아래 여백 -1rem ~ -300rem
                    </td>
                  </tr>
                  <tr>
                    <td>ml-1 ~ ml-300</td>
                    <td>
                      외부 왼쪽 여백 -1rem ~ -300rem
                    </td>
                  </tr>
                  <tr>
                    <td>mr1 ~ mr300</td>
                    <td>
                      외부 오른쪽 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>mb1 ~ mb300</td>
                    <td>
                      외부 아래 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>p1 ~ p300</td>
                    <td>
                      내부 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>py1 ~ py300</td>
                    <td>
                      내부 상하 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>px1 ~ px300</td>
                    <td>
                      내부 좌우 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>pt1 ~ pt300</td>
                    <td>
                      내부 윗 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>pr1 ~ pr300</td>
                    <td>
                      내부 오른쪽 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>pb1 ~ pb300</td>
                    <td>
                      내부 아래 여백 1rem ~ 300rem
                    </td>
                  </tr>
                  <tr>
                    <td>pl1 ~ pl300</td>
                    <td>
                      내부 왼쪽 여백 1rem ~ 300rem
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/*  Flex */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={FlexRef}> Flex </h3>
            <p className='description'>
              flex와 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>flex</td>
                    <td>
                      display: flex
                    </td>
                  </tr>
                  <tr>
                    <td>flexColumn</td>
                    <td>
                      display: flex <br/>
                      flex-direction: column
                    </td>
                  </tr>
                  <tr>
                    <td>flexBetween</td>
                    <td>
                      display: flex <br/>
                      justify-content: space-between
                    </td>
                  </tr>
                  <tr>
                    <td>flexCenter</td>
                    <td>
                      display: flex <br/>
                      justify-content: center <br/>
                      align-items: center
                    </td>
                  </tr>
                  <tr>
                    <td>justifyStart</td>
                    <td>
                      display: flex <br/>
                      justify-content: flex-start
                    </td>
                  </tr>
                  <tr>
                    <td>justifyCenter</td>
                    <td>
                      display: flex <br/>
                      justify-content: center
                    </td>
                  </tr>
                  <tr>
                    <td>justifyEnd</td>
                    <td>
                      display: flex <br/>
                      justify-content: flex-end
                    </td>
                  </tr>
                  <tr>
                    <td>alignStart</td>
                    <td>
                      display: flex <br/>
                      align-items: flex-start
                    </td>
                  </tr>
                  <tr>
                    <td>alignCenter</td>
                    <td>
                      display: flex <br/>
                      align-items: center
                    </td>
                  </tr>
                  <tr>
                    <td>alignEnd</td>
                    <td>
                      display: flex <br/>
                      align-items: flex-end
                    </td>
                  </tr>
                  <tr>
                    <td>flexColumnCenter</td>
                    <td>
                      display: flex <br/>
                      flex-direction: column <br/>
                      align-items: center <br/>
                      justify-content: center
                    </td>
                  </tr>
                  <tr>
                    <td>txtCenter</td>
                    <td>
                      text-align: center
                    </td>
                  </tr>
                  <tr>
                    <td>flexNone</td>
                    <td>
                      flex: none;
                    </td>
                  </tr>
                  <tr>
                    <td>flex1 ~ flex10</td>
                    <td>
                      flex-grow: 1 ~ 10
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/*  Table */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={TableRef}> Table </h3>
            <p className='description'>
              표와 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      col(n)-align-start <br/>
                      col-last-align-start
                    </td>
                    <td>
                      n번째 열 좌측 정렬 (최대 100번째 열까지) <br/>
                      마지막 열 좌측 정렬
                    </td>
                  </tr>
                  <tr>
                    <td>
                      col(n)-align-center<br/>
                      col-last-align-center
                    </td>
                    <td>
                      n번째 열 가운데 정렬 (최대 100번째 열까지) <br/>
                      마지막 열 가운데 정렬
                    </td>
                  </tr>
                  <tr>
                    <td>
                      col(n)-align-end <br/>
                      col-last-align-end
                    </td>
                    <td>
                      n번째 열 우측 정렬 (최대 100번째 열까지) <br/>
                      마지막 열 우측 정렬
                    </td>
                  </tr>

                  <tr>
                    <td>
                      col(n)-vertical-top <br/>
                      col-last-vertical-top
                    </td>
                    <td>
                      n번째 열 수직으로 위쪽 정렬 (최대 100번째 열까지) <br/>
                      마지막 열 수직으로 위쪽 정렬
                    </td>
                  </tr>
                  <tr>
                    <td>
                      col(n)-vertical-middle<br/>
                      col-last-vertical-middle
                    </td>
                    <td>
                      n번째 열 수직으로 가운데 정렬 (최대 100번째 열까지) <br/>
                      마지막 열 수직으로 가운데 정렬
                    </td>
                  </tr>
                  <tr>
                    <td>
                      col(n)-vertical-bottom <br/>
                      col-last-vertical-bottom
                    </td>
                    <td>
                      n번째 열 수직으로 아래쪽 정렬 (최대 100번째 열까지) <br/>
                      마지막 열 수직으로 아래쪽 정렬
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Radius  */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={RRef}> Radius </h3>
            <p className='description'>
              굴곡과 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      radius
                    </td>
                    <td>
                      Variable의 --radius 값만큼 굴곡을 줍니다. (기본값 : 5rem)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      r1 ~ r300
                    </td>
                    <td>
                      굴곡을 1 ~ 300 만큼 줍니다.
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Gap  */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={GapRef}> Gap </h3>
            <p className='description'>
              간격과 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      gap1 ~ gap100
                    </td>
                    <td>
                      간격을 1rem ~ 100rem 만큼 줍니다.
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Blur  */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={BlurRef}> Blur </h3>
            <p className='description'>
              번짐과 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      blur1 ~ blur100
                    </td>
                    <td>
                      번짐을 1rem ~ 100rem 만큼 줍니다.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      blur-back1 ~ blur-back100
                    </td>
                    <td>
                      뒷배경 번짐을 1rem ~ 100rem 만큼 줍니다.
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Overflow / Scroll  */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={ScrollRef}> Overflow / Scroll </h3>
            <p className='description'>
              스크롤과 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      scroll
                    </td>
                    <td>
                      overflow: scroll
                    </td>
                  </tr>
                  <tr>
                    <td>
                      scrollY
                    </td>
                    <td>
                      overflow-y: scroll <br/>
                      overflow-x: hidden
                    </td>
                  </tr>
                  <tr>
                    <td>
                      scrollYAuto
                    </td>
                    <td>
                      overflow-y: auto <br/>
                      overflow-x: hidden
                    </td>
                  </tr>
                  <tr>
                    <td>
                      overHidden
                    </td>
                    <td>
                      overflow: hidden
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Display / Visibility  */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={DisplayRef}> Display / Visibility </h3>
            <p className='description'>
              화면 표시와 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      displayNone
                    </td>
                    <td>
                      display: none
                    </td>
                  </tr>
                  <tr>
                    <td>
                      hidden
                    </td>
                    <td>
                      visibility: hidden
                    </td>
                  </tr>
                  <tr>
                    <td>
                      visible
                    </td>
                    <td>
                      visibility: visible
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Position  */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={PositionRef}> Position </h3>
            <p className='description'>
              위치와 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      relative
                    </td>
                    <td>
                      position: relative
                    </td>
                  </tr>
                  <tr>
                    <td>
                      absolute
                    </td>
                    <td>
                      position: absolute
                    </td>
                  </tr>
                  <tr>
                    <td>
                      fixed
                    </td>
                    <td>
                      position: fixed
                    </td>
                  </tr>
                  <tr>
                    <td>
                      t0
                    </td>
                    <td>
                      top: 0
                    </td>
                  </tr>
                  <tr>
                    <td>
                      r0
                    </td>
                    <td>
                      right: 0
                    </td>
                  </tr>
                  <tr>
                    <td>
                      b0
                    </td>
                    <td>
                      bottom: 0
                    </td>
                  </tr>
                  <tr>
                    <td>
                      l0
                    </td>
                    <td>
                      left: 0
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Cursor  */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={CursorRef}> Cursor </h3>
            <p className='description'>
              커서와 관련된 유틸리티 클래스입니다.
            </p>
            
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      cursor
                    </td>
                    <td>
                      cursor: pointer
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        {/* Ellipsis  */}
        <div className='layout-small'>
          <div className='layout-title'>
            <h3 ref={EllipsisRef}> Ellipsis </h3>
            <p className='description'>
              말줄임과 관련된 유틸리티 클래스입니다.
            </p>
            <Table 
              classWrap='table-css'
              colGroup={
                <>
                  <col className='table-css-col1' />
                </>
              }
              tHead={
                <>
                  <tr>
                    <th>classes</th>
                    <th>description</th>
                  </tr>
                </>
              }
              classTBody='table-css'
              tBody= {
                <>
                  <tr>
                    <td>
                      ellipsis1 ~ ellipsis5
                    </td>
                    <td>
                      말줄임 1줄 ~ 5줄부터 ... 표시 됩니다.
                    </td>
                  </tr>
                </>
              }
            />
          </div>
        </div>

        <div className='layout-scroll'>
          <p>Classes</p>
          <a onClick={()=>{WHRef.current.scrollIntoView()}}> Width / Height</a>
          <a onClick={()=>{LHRef.current.scrollIntoView()}}> Line Height</a>
          <a onClick={()=>{LSRef.current.scrollIntoView()}}> Letter Sapcing</a>
          <a onClick={()=>{MPRef.current.scrollIntoView()}}> Margin / Padding</a>
          <a onClick={()=>{FlexRef.current.scrollIntoView()}}> Flex</a>
          <a onClick={()=>{TableRef.current.scrollIntoView()}}> Table</a>
          <a onClick={()=>{RRef.current.scrollIntoView()}}> Radius</a>
          <a onClick={()=>{GapRef.current.scrollIntoView()}}> Gap</a>
          <a onClick={()=>{BlurRef.current.scrollIntoView()}}> Blur</a>
          <a onClick={()=>{ScrollRef.current.scrollIntoView()}}> Scroll</a>
          <a onClick={()=>{DisplayRef.current.scrollIntoView()}}> Display</a>
          <a onClick={()=>{PositionRef.current.scrollIntoView()}}> Position</a>
          <a onClick={()=>{CursorRef.current.scrollIntoView()}}> Cursor</a>
          <a onClick={()=>{EllipsisRef.current.scrollIntoView()}}> Ellipsis</a>
        </div>

      </div>
    </>
  )
}
export default Util;