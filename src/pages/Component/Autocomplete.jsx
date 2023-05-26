import * as React from 'react';

// nds-ui
import { Tab, Slide, TextField, TextArea, Button } from '@/nds-ui/component';

const AutocompletePage = () => {
  return (
    <>
      <p className='size24'>Autocomplete 페이지입니다.</p>
      <div className='flexColumn gap10'>
        <TextField error helperText='이것은 도움말입니다.'/>
        <TextField helperText='이것은 도움말입니다.'/>
        <TextArea />
        <p className='t size14'>안녕하세요</p>
        <Button variant='contained'> 안녕하세요 !@#$%</Button>
      </div>
    </>
  )
}

export default AutocompletePage;

const TabExample = () => {
  const [state, setState] = React.useState(0);
  return (
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
  )
}

const SlideExample = () => {
  return (
    <Slide
      classSlide='h300'
      classBtn='w500'
      delay={1000}
      content= {[
        <div key={0} className='width100 height100 size32 txt-white b flexCenter bgc-black_30p'>
          안녕하세요 </div>,
        <div key={1} className='width100 height100 bgc-primary'/>,
        <div key={2} className='width100 height100 bgc-secondary'/>,
        <div key={3} className='width100 height100 bgc-tertiary'/>,
      ]}
    />
  )
}