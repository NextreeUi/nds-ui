import * as React from 'react';

import LogoImg from '@/assets/images/logo.svg'

const Logo = () => {
  return (
    <>
      <a href='/'>
        <img src={LogoImg} className='w106 h45' />
      </a>
    </>
  )
}

export default Logo;