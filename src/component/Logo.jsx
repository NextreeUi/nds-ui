import * as React from 'react';

import { Link } from 'react-router-dom';
import LogoImg from '@/assets/images/logo.svg'

const Logo = () => {
  return (
    <>
      <Link to='/'> 
        <img src={LogoImg} className='w106 h45' />
      </Link>
    </>
  )
}

export default Logo;