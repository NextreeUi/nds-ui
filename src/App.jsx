import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layout
import DefaultLayout from "@/layout/DefaultLayout";
import GuideLayout from "@/layout/GuideLayout";
import NoLayout from "@/layout/NoLayout";
import LoadingPage from "@/layout/components/LoadingPage";

// nds-ui
import { Button, Popup } from '@/nds-ui/component';

// component
import { Logo } from '@/component';

//img
import homeBg from '@/assets/images/home-bg.svg';

// style
import "@/nds-ui/css/style.scss";
import "@/assets/css/style.scss";

const Home = () => {
  const Copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
    }
  };
  return (
    <>
      <div className="vw100 vh100 flexColumn">
        <div className='vw100 h70 flexCenter bgc-white_80p blur-back52 otlb-grayc'>
          <div className='home-content-width flexBetween alignCenter'>
            <div className='flex w175' >
              <Logo />
            </div>
            <div className='flex gap20 alignCenter'>
              <a href='/nds-ui/DefaultLayout/UserGuide/Overview'> <Button size='large' variant='outlined' radius='round'>User Guide</Button> </a>
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
        <div className='vw100 vh100-128 flexCenter'>
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
              <Button size='large' variant='outlined' onClick={() => Copy('npm i nds-ui@latest sass')}>
                <div className='flexCenter gap10' >
                  npm i nds-ui sass
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
        <div className='home-bg'>
          <img src={homeBg} />
        </div>
      </div>
      <div className='fixed width100 hegith100 bgc-black_10p'></div>

      <LoadingPage />
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
          <Route path='/nds-ui/*' element={<Home/>} />
          <Route path='/nds-ui/DefaultLayout/:type/:id' element={<DefaultLayout />} />
          <Route path='/nds-ui/GuideLayout/*' element={<GuideLayout />} />
          <Route path='/nds-ui/NoLayout/*' element={<NoLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;