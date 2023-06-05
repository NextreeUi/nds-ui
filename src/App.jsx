import * as React from 'react';
import { BrowserRouter, Route, Routes, Link, HashRouter } from "react-router-dom";

// layout
import DefaultLayout from "@/layout/DefaultLayout";
import GuideLayout from "@/layout/GuideLayout";
import NoLayout from "@/layout/NoLayout";
// import LoadingPage from "@/layout/components/LoadingPage";

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
        <div className='vw100 h70 flexCenter bgc-white_30p blur-back52 otlb-grayc'>
          <div className='content-width-home flexBetween alignCenter'>
            <div className='flex w175' >
              <Logo />
            </div>
            <div className='flex gap20 alignCenter'>
              <Link to='/DefaultLayout/UserGuide/Overview'> <Button size='large' variant='outlined' radius='round'>User Guide</Button> </Link>
              <Link to='/DefaultLayout/Component/Button'> <Button size='large' variant='outlined' radius='round'>Components</Button> </Link>
            </div>
            <div className='w175 flex alignCenter gap20'>
              <a target="_blank" href='https://gitlab.com/nextree3/DesignSystem'>
                <Button className='minw45 h45' square theme='grayc'>
                  <p className='i-gitlab' />
                </Button>
              </a>
              <a target="_blank" href='https://github.com/NextreeUi/nds-ui'>
                <Button className='minw45 h45' square theme='grayc'>
                  <p className='i-github' />
                </Button>
              </a>
              <a target="_blank" href="https://www.figma.com/file/jCBnGvhUAlmTTukGpuFAVX/NDS-Figam?type=design&node-id=0%3A1&t=TpYdfcBFTTYvvVuI-1">
                <Button className='minw45 h45' square theme='grayc'>
                  <p className='i-figma' />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className='vw100 vh100-128 flexCenter'>
          <div className='content-width-home flexColumn gap40'>
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
              <Link to='/DefaultLayout/UserGuide/Overview'> 
                <Button size='large' variant='contained'>
                  <div className='flexCenter gap10'>
                    <i className='i-arrow-right w20 h20 bgc-white'/>
                    NDS UI
                  </div>
                </Button>
              </Link>
              <Button size='large' variant='outlined' onClick={() => Copy('npm i nds-ui sass')}>
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

      {/* <LoadingPage /> */}
    </>
  )
}

function App() {
  React.useEffect(()=> {
    document.documentElement.setAttribute("data-theme", "light");
  }, [])
  return (
    <>
      <HashRouter
        // basename='https://nextreeui.github.io/nds-ui'
      >
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/DefaultLayout/:type/:id' element={<DefaultLayout />} />
          <Route path='/GuideLayout/*' element={<GuideLayout />} />
          <Route path='/NoLayout/*' element={<NoLayout />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;