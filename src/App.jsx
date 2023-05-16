import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// nds-ui
import { Button } from 'nds-ui/component';

// layout
import DefaultLayout from "@/layout/DefaultLayout";
import GuideLayout from "@/layout/GuideLayout";
import NoLayout from "@/layout/NoLayout";

// style
import "nds-ui/css/style.scss";
import "@/assets/css/style.scss";

const Home = () => {
  return (
    <>
      <div className="vw100 vh100 flexColumn">
        <div className='vw100 h70 flexCenter bgc-white_80p blur52 otlb-grayc'>
          <div className='home-content-width flexBetween alignCenter'>
            <a href='/' className='flex w175'>
              <i className='i-logo'/>
            </a>
            <div className='flex gap20 alignCenter'>
              <Button size='large' variant='outlined' radius='round'>User Guide</Button>
              <Button size='large' variant='outlined' radius='round'>Components</Button>
            </div>
            <div className='width175 flex alignCenter gap20'>
              <Button className='minw45 h45' square theme='grayc'>
                <i className='i-gitlab' />
              </Button>
              <Button className='minw45 h45' square theme='grayc'>
                <i className='i-github' />
              </Button>
              <Button className='minw45 h45' square theme='grayc'>
                <i className='i-figma' />
              </Button>
            </div>
          </div>
        </div>
        <div className='vh17' />
        <div className='vw100 flexCenter'>
          <div className='home-content-width flexColumn gap40'>
            <div className='flexColumn'>
              <p className='size60 b txt-black'>For Nextrian</p>
              <p className='size80 b txt-primary'>Design System</p>
              <p className='size80 b txt-gray3'>React UI tools</p>
            </div>
            <div className='flexColumn gap15'>
              <div className='flexColumn'>
                <p className='size14 txt-black'>Version 1</p>
                <p className='size14 txt-black'>2023. 05. 15 배포되었습니다.</p>
              </div>
              <div className='size14 txt-gray6'>
                Welcome! 넥스트리안이시라면 누구에게나 열려있는 디자인 시스템으로 구축 업무를 보다 효율적으로 <br/>
                진행하기 위해 탄생했으며, 디자인에서 퍼블, 개발로 이어지는 업무 프로세스에서 발생되는 <br/>
                불필요한 문제를 해결하고 체계적인 업무 플로우 확립을 위해 제작되었습니다.
              </div>
            </div>
            <div className='flex gap20'>
              <Button size='large' variant='contained'>
                <div className='flexCenter gap10'>
                  <i className='i-arrow-right w20 h20 bgc-white'/>
                  NDS UI
                </div>
                
              </Button>
              <Button size='large' variant='outlined'>
                <div className='flexCenter gap10'>
                  npm install nds-ui@latest
                  <i className='i-check bgc-primary' />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className='absolute vw100 b0 h58 flexCenter'>
          <div className='home-content-width size14 txt-gray6'>
            copyright made by Nextree, All right reserved.
          </div>
        </div>
        <div className='home-bg'/>
      </div>
    </>
  )
}

function App() {
  React.useEffect(()=> {
    document.documentElement.setAttribute("data-theme", "light");
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/DefaultLayout/*' element={<DefaultLayout />} />
          <Route path='/GuideLayout/*' element={<GuideLayout />} />
          <Route path='/NoLayout/*' element={<NoLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;