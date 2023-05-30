import * as React from 'react';

// nds-ui
import { Button, Popup } from '@/nds-ui/component';

const Overview = () => {
  
  return (
    <>
    <div className='layout-all'>
      {/* Title */}
      
      <div className='layout-title'>
        <h1>NDS - Overview</h1>
      </div>

      <div className='flexColumn gap100'>
        <div className='flexColumn gap30'>
          <div className='flexColumn flexCenter gap20 p20 bgc-primary_10p size30 b txt-primary r10'>
            프로세스 혼선 감소 / 효율적인 업무 수행
            <div className='flex width100 gap10 alignCenter'>
              <div className='flex1 h80 r10 flexCenter bgc-primary txt-white size24 b'>
                <div className='w150 txtCenter'>디자인</div>
              </div>
              <i className='i-process-arrow bgc-primary'/>
              <div className='flex1 h80 r10 flexCenter bgc-primary txt-white size24 b'>
                <div className='w150 txtCenter'>퍼블리싱</div>
              </div>
              <i className='i-process-arrow bgc-primary'/>
              <div className='flex1 h80 r10 flexCenter bgc-primary txt-white size24 b'>
                <div className='w150 txtCenter'>개발</div>
              </div>
            </div>
          </div>
          <p className='size16 txt-black t lh160 txtCenter'>
            프로젝트를 진행하면서 그간 발생했던 다양한 문제점을 해결하기 위한 고민에서 출발하여 <br/>
            넥스트리만의 디자인, 퍼블, 프론트 개발에까지 진행되는 <br/>
            프로세스에서 혼선을 줄이고 효율적인 업무 수행을 위한 출발점입니다.
          </p>
        </div>

        <div className='flexColumn gap30'>
          <div className='flexColumn flexCenter gap10'>
            <div className='flex gap10 alignCenter'>
              <div className='flexColumn gap10 width100 w250 h250 r150 flexCenter bgc-primary_10p txt-black size24 b'>
                문제점 감소
                <p className='size16 txt-black t'>퍼블 소스 적용 문제 해결</p>
              </div>
              <div className='flexColumn gap10 width100 w250 h250 r150 flexCenter bgc-primary_70p txt-white size24 b'>
                만족도 향상
                <p className='size16 txt-white t'>클라이언트 요구 반영</p>
              </div>
              <div className='flexColumn gap10 width100 w250 h250 r150 flexCenter bgc-primary_10p txt-black size24 b'>
                통합된 체계
                <p className='size16 txt-black t'>통합적인 업무 프로세스</p>
              </div>
            </div>
            <div className='flex gap10 alignCenter'>
              <div className='flexColumn gap10 width100 w250 h250 r150 flexCenter bgc-primary_70p txt-white size24 b'>
                혼선 감소
                <p className='size16 txt-white t'>업무 과정의 간소화</p>
              </div>
              <div className='flexColumn gap10 width100 w250 h250 r150 flexCenter bgc-primary_10p txt-black size24 b'>
                MUI 탈피
                <p className='size16 txt-black t'>외부 라이브러리로부터 탈피</p>
              </div>
              <div className='flexColumn gap10 width100 w250 h250 r150 flexCenter bgc-primary_70p txt-white size24 b'>
                디자인/기획 시스템
                <p className='size16 txt-white t'>디자인 자율도 향상</p>
              </div>
            </div>
          </div>
          <p className='size16 txt-black t lh160 txtCenter'>
          결론적으로 디자인시스템은 단순히 디자인 및 퍼블에서 벗어나 개발과 기획 단계에까지 영향을 주는 중대한 시스템입니다. <br/>
          디자인 / 퍼블 / 개발에 업무 진행시에 발생하는 문제점 개선하고 효율을 높이기 위한 목적으로 만들어졌습니다. <br/>
          다양한 컴포넌트 조합을 통한 디자인 및 퍼블이 보다 효율적으로 진행될 수 있을 것으로 전망합니다.
          </p>
        </div>
      </div>
      
    </div>

    </>
  )
}
export default Overview;