import * as React from 'react';

// nds-ui
import { Tab } from '@/nds-ui/component';

const AutocompletePage = () => {
  const [state, setState] = React.useState(0);
  return (
    <>
      <p className='size24'>Autocomplete 페이지입니다.</p>
      <div className='flexColumn gap10'>
        <Tab 
          state={state}
          setState={setState} 
          variant='contained'
          tabName={['Tab1','Tab2','Tab3','Tab4']}
          classTabWrap={''}
          classTab={'gap-1'}
          classBtnWrap='width100 flexCenter'
          classBtn='width100'
        >
        {
          state == 0 ?
          <div className="bgc-black h100"/>
          : state == 1 ?
          <div className="bgc-primary h100"/>
          : state == 2 ?
          <div className="bgc-secondary h100"/>
          : state == 3 ?
          <div className="bgc-tertiary h100"/>
          : <></>
        }
        </Tab>        
        
      </div>
    </>
  )
}

export default AutocompletePage;