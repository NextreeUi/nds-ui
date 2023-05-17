import * as React from "react";

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
            <a href='/nds-ui/DefaultLayout/UserGuide/Overview'> 
              <Button className='px20' size="small" radius='round' variant={address1 == 'UserGuide' ? 'contained' : 'outlined'}>User Guide</Button>
            </a>
            <a href='/nds-ui/DefaultLayout/Component/AutocompletePage'> 
              <Button className='px20' size="small" radius='round' variant={address1 == 'Component' ? 'contained' : 'outlined'}>Components</Button>
            </a>
          </div>
          <div className="flexColumn">
            {
              address1 == 'UserGuide' ?
              <>
                <a href='/nds-ui/DefaultLayout/UserGuide/Overview'>
                  <Button bg={address2 == 'Overview' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Overview</p></Button>
                </a>
                <a href='/nds-ui/DefaultLayout/UserGuide/HowtoUse'>
                  <Button bg={address2 == 'HowtoUse' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">How to Use</p></Button>
                </a>
                <a href='/nds-ui/DefaultLayout/UserGuide/Variable'>
                  <Button bg={address2 == 'Variable' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">_variable.scss</p></Button>
                </a>
                <a href='/nds-ui/DefaultLayout/UserGuide/Util'>
                  <Button bg={address2 == 'Util' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">_util.scss</p></Button>
                </a>
              </>
              : address1 == 'Component' ?
              <>
                <div className="flexColumn gap40">
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> INPUT</p>
                    <div className="flexColumn">
                      <a href='/nds-ui/DefaultLayout/Component/AutocompletePage'>
                        <Button bg={address2 == 'AutocompletePage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Autocomplete</p></Button>
                      </a>
                      <a href='/nds-ui/DefaultLayout/Component/ButtonPage'>
                        <Button bg={address2 == 'ButtonPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Button</p></Button>
                      </a>
                      <a href='/nds-ui/DefaultLayout/Component/CheckboxPage'>
                        <Button bg={address2 == 'CheckboxPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Checkbox</p></Button>
                      </a>
                      <a href='/nds-ui/DefaultLayout/Component/RadioPage'>
                        <Button bg={address2 == 'RadioPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Radio</p></Button>
                      </a>
                      <a href='/nds-ui/DefaultLayout/Component/SelectPage'>
                        <Button bg={address2 == 'SelectPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Select</p></Button>
                      </a>
                      <a href='/nds-ui/DefaultLayout/Component/SwitchPage'>
                        <Button bg={address2 == 'SwitchPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">Switch (Toggle)</p></Button>
                      </a>
                      <a href='/nds-ui/DefaultLayout/Component/TextareaPage'>
                        <Button bg={address2 == 'TextareaPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">TextArea</p></Button>
                      </a>
                      <a href='/nds-ui/DefaultLayout/Component/TextfieldPage'>
                        <Button bg={address2 == 'TextfieldPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 txt-black justifyStart">TextField</p></Button>
                      </a>
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
