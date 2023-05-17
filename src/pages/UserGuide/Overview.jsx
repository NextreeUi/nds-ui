import * as React from 'react';

// nds-ui
import { Button, Popup } from '@/nds-ui/component';

const Overview = () => {
  
  return (
    <>
    <div className='flexColumn gap50'>
      <div className='flexColumn gap10'>
        <p className='size60 txt-black b'>Nextree UI - Overview</p>
        <p className='size18 txt-black'>
          프로젝트를 진행하면서 그간 발생했던 다양한 문제점을 해결하기 위한 고민에서 출발하여 넥스트리만의 디자인, 퍼블, 프론트 개발에까지 <br/>
          진행되는 프로세스에서 혼선을 줄이고 효율적인 업무 수행을 위한 출발점입니다.
        </p>
      </div>
      <div className='flexColumn gap10'>
        <div className='flex gap10'>
          <div className='flexCenter flexColumn gap10 width100 h235 r20 bgc-primary_10p'>
            <p className='size24 b txt-black'>문제점 감소</p>
            <p className='size18 txt-gray3 txtCenter'>
              퍼블과 개발에서 발생하는 <br/>
              퍼블 소스 적용 문제 <br/>
              해결
            </p>
          </div>
          <div className='flexCenter flexColumn gap10 width100 h235 r20 bgc-primary_70p'>
            <p className='size24 b txt-white'>만족도 향상</p>            
            <p className='size18 txt-white txtCenter'>
              클라이언트의 요구에  <br/>
              부합하는 UI/UX 디자인 <br/>
              개발 가능
            </p>
          </div>
          <div className='flexCenter flexColumn gap10 width100 h235 r20 bgc-primary_10p'>
            <p className='size24 b txt-black'>통합된 체계</p>            
            <p className='size18 txt-gray3 txtCenter'>
              디자인과 퍼블, 퍼블과 개발로 <br/>
              연결되는 통합적인 업무 <br/>
              프로세서 확립
            </p>
          </div>
        </div>
        <div className='flex gap10'>
          <div className='flexCenter flexColumn gap10 width100 h235 r20 bgc-primary_70p'>
            <p className='size24 b txt-white'>혼선 감소</p>
            <p className='size18 txt-white txtCenter'>
              디자인 시스템의 부재로 <br/>
              발생하는 디자인-퍼블-개발의 <br/>
              혼선 및 고민거리 해결
            </p>
          </div>
          <div className='flexCenter flexColumn gap10 width100 h235 r20 bgc-primary_10p'>
            <p className='size24 b txt-black'>MUI 탈피</p>            
            <p className='size18 txt-gray3 txtCenter'>
              MUI 기반에서 <br/>
              해결하기 번거롭고 <br/>
              불필요한 작업 감소
            </p>
          </div>
          <div className='flexCenter flexColumn gap10 width100 h235 r20 bgc-primary_70p'>
            <p className='size24 b txt-white'>디자인/기획 시스템</p>            
            <p className='size18 txt-white txtCenter'>
              디자인 자율도 향상 (퀄리티 업) <br/>
              편리한 디자인 / 기획 시스템 <br/>
              구축
            </p>
          </div>
        </div>
      </div>
      <div className='size18 txt-black'>
      결론적으로는 디자인시스템이 단순히 디자인 및 퍼블에서 벗어나 개발과 기획 단계에까지 영향을 주는 중대한 시스템으로 업무를 보다 효율적으로 진행하기 위함으로 지속적으로 <br/>
      개발팀과 내용을 공유하여 디자인에서 퍼블 그리고 개발에 이르기까지 업무 진행시에 발생하는 문제점 개선하고 업무 효율을 높이기 위한 목적으로 만들어졌습니다. <br/>
      <br/>
      1차 구축 후에 개발자와의 소통을 통해 보완해야 할 점은 최대한 보완하여 추후 완성도는 물론 다양한 컴포넌트 조합을 통한 디자인 및 퍼블이 보다 효율적으로 <br/>
      진행될 수 있을 것으로 전망합니다.
      </div>
    </div>

    </>
  )
}
export default Overview;