import * as React from 'react';

import { Link } from 'react-router-dom';
import LogoImg from '@/assets/images/logo.svg'

const Logo = () => {
  return (
    <>
      <Link to='/'> 
        <p className='size36 b txt-primary'> NDS</p>
      </Link>
    </>
  )
}

export default Logo;