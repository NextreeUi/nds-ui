import * as React from "react";
import { Link } from "react-router-dom";

import { Logo } from "@/component";
import { Button } from "@/nds-ui/component";

function Lnb({address1, address2}) {
  return (
    <>
      <div className="flexColumn w340 otlr-grayc">
        <div className="width100 h70 px40 flex alignCenter otlb-grayc">
          <Logo />
        </div>
        <div className="width100 vh100-70 scrollYAuto p40 flexColumn gap40">
          <div className="flex gap10">
            <Link to='/DefaultLayout/UserGuide/Overview'> 
              <Button className='px20' size="small" radius='round' variant={address1 == 'UserGuide' ? 'contained' : 'outlined'}>User Guide</Button>
            </Link>
            <Link to='/DefaultLayout/Component/AutocompletePage'> 
              <Button className='px20' size="small" radius='round' variant={address1 == 'Component' ? 'contained' : 'outlined'}>Components</Button>
            </Link>
          </div>
          <div className="flexColumn">
            {
              address1 == 'UserGuide' ?
              <>
                <Link to='/DefaultLayout/UserGuide/Overview'>
                  <Button bg={address2 == 'Overview' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Overview</p></Button>
                </Link>
                <Link to='/DefaultLayout/UserGuide/HowtoUse'>
                  <Button bg={address2 == 'HowtoUse' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">How to Use</p></Button>
                </Link>
                <Link to='/DefaultLayout/UserGuide/Variable'>
                  <Button bg={address2 == 'Variable' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">_variable.scss</p></Button>
                </Link>
                <Link to='/DefaultLayout/UserGuide/Util'>
                  <Button bg={address2 == 'Util' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">_util.scss</p></Button>
                </Link>
              </>
              : address1 == 'Component' ?
              <>
                <div className="flexColumn gap40">
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> INPUT</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/AutocompletePage'>
                        <Button bg={address2 == 'AutocompletePage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Autocomplete</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/ButtonPage'>
                        <Button bg={address2 == 'ButtonPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Button</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/CheckboxPage'>
                        <Button bg={address2 == 'CheckboxPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Checkbox</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/RadioPage'>
                        <Button bg={address2 == 'RadioPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Radio</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/SelectPage'>
                        <Button bg={address2 == 'SelectPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Select</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/SwitchPage'>
                        <Button bg={address2 == 'SwitchPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Switch (Toggle)</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TextareaPage'>
                        <Button bg={address2 == 'TextareaPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">TextArea</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TextfieldPage'>
                        <Button bg={address2 == 'TextfieldPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">TextField</p></Button>
                      </Link>
                    </div>
                    
                  </div>
                </div>
                
              </>
              : <></>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Lnb;
