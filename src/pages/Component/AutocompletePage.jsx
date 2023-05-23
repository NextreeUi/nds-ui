import * as React from 'react';

// nds-ui
import { Button, Popup, Hidden, Avatar, Tooltip } from '@/nds-ui/component';

const AutocompletePage = () => {
  const ItemList = [
    
  ]
  return (
    <>
      <p className='size24'>Autocomplete 페이지입니다.</p>
      <Hidden min={1300} max={1600}>
        <div className='flexCenter size24 bgc-primary_30p r10w400 h300'>
          반응형 Hidden 입니다.
        </div>
      </Hidden>
      <div className='flex gap10'>
        <Tooltip title='tooltip' bg='gray9' size='large'      > <Button variant='outlined' size='large'> asd </Button> </Tooltip>
        <Tooltip title='tooltip' size='medium'     > <Button variant='outlined' size='large'> asd </Button> </Tooltip>
        <Tooltip title='tooltip' size='small'      > <Button variant='outlined' size='large'> asd </Button> </Tooltip>
        <Tooltip title='tooltip' size='extraSmall' > <Button variant='outlined' size='large'> asd </Button> </Tooltip>
      </div>
    </>
  )
}

export default AutocompletePage;