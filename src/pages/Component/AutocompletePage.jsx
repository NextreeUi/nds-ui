import * as React from 'react';

// nds-ui
import { Button, Popup, Hidden, Select } from '@/nds-ui/component';

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
        <Select size='large'  />
        <Select size='large' defaultValue={1} list={ItemList} radius='rect'/>
        <Select size='large' defaultValue={1} list={ItemList} radius='round'/>
      </div>
      <div className='flex gap10'>
        <Select defaultValue={1} list={ItemList}/>
        <Select defaultValue={1} list={ItemList} radius='rect'/>
        <Select defaultValue={1} list={ItemList} radius='round'/>
      </div>
      <div className='flex gap10'>
        <Select size='small' defaultValue={1} list={ItemList}/>
        <Select size='small' defaultValue={1} list={ItemList} radius='rect'/>
        <Select size='small' defaultValue={1} list={ItemList} radius='round'/>
      </div>
      <div className='flex gap10'>
        <Select size='extraSmall' defaultValue={1} list={ItemList}/>
        <Select size='extraSmall' defaultValue={1} list={ItemList} radius='rect'/>
        <Select size='extraSmall' defaultValue={1} list={ItemList} radius='round'/>
      </div>
      
      <p className='size24'>Autocomplete 페이지입니다.</p>
      <select>
        <option>asd</option>
        <option>asd</option>
        <option>asd</option>
        <option>asd</option>
        <option>asd</option>
        <option>asd</option>
      </select>
    </>
  )
}

export default AutocompletePage;