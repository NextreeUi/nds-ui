import * as React from "react";

import { Button, TextField } from "@/nds-ui/component";

function Header() {
  return (
    <>
      <div className="flex width100 justifyEnd px40 alignCenter h70 otlb-grayc">
        <div className="flex mr14 alignCenter">
          <TextField className='mr-48 pl20 pr48 size12 w300' radius='round' size='large' placeholder='Search Bar'/>
          <Button className='' square radius='round' size='medium' theme='grayc'> <i className="i-search w20 h20 bgc-gray6" /></Button>
        </div>
        <Button className='minw45 h45' square theme='grayc'>
          <i className='i-gitlab' />
        </Button>
        <Button className='minw45 h45' square theme='grayc'>
          <i className='i-github' />
        </Button>
        <Button className='minw45 h45 alignCenter' square theme='grayc'>
          <i className='i-figma' />
        </Button>
      </div>
    </>
  );
}

export default Header;
