import * as React from 'react';

// nds-ui
import { Button, Popup, Hidden } from '@/nds-ui/component';

const AutocompletePage = () => {
  return (
    <>
      <p className='size24'>Autocomplete 페이지입니다.</p>
      <Hidden min={1300} max={1600}>
        <div className='flexCenter size24 bgc-primary_30p r10 w400 h300'>
          반응형 Hidden 입니다.
        </div>
      </Hidden>
    </>
  )
}

export default AutocompletePage;