import * as React from 'react';

// nds-ui
import { Button, Popup, Hidden, Avatar } from '@/nds-ui/component';

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
        <Avatar number={3} radius='rect' name='choiwonho'/><Avatar radius='normal'/><Avatar /><Avatar /><Avatar />
        <Avatar size='large' name='lee'/>
        <Avatar size='small'/>
        <Avatar size='extraSmall'/>
        <Button>asd</Button>
      </div>
    </>
  )
}

export default AutocompletePage;