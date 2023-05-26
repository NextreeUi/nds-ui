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
            <Link to='/DefaultLayout/Component/Button'> 
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
                      {/* <Link to='/DefaultLayout/Component/AutocompletePage'> */}
                        <Button disabled bg={address2 == 'Autocomplete' ? 'graye' : ''} className='r5 px10 width100' size='medium' ><p className="flex flex1 size14 justifyStart">Autocomplete (추후 예정)</p></Button>
                      {/* </Link> */}
                      <Link to='/DefaultLayout/Component/Button'>
                        <Button bg={address2 == 'Button' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Button</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Checkbox'>
                        <Button bg={address2 == 'Checkbox' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Checkbox</p></Button>
                      </Link>
                      {/* <Link to='/DefaultLayout/Component/DatePickerPage'> */}
                        <Button disabled bg={address2 == 'DatePicker' ? 'graye' : ''} className='r5 px10 width100' size='medium'><p className="flex flex1 size14 justifyStart">Date&TimePicker (추후 예정)</p></Button>
                      {/* </Link> */}
                      <Link to='/DefaultLayout/Component/Radio'>
                        <Button bg={address2 == 'Radio' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Radio</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Select'>
                        <Button bg={address2 == 'Select' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Select (ComboBox)</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Switch'>
                        <Button bg={address2 == 'Switch' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Switch (Toggle)</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TextArea'>
                        <Button bg={address2 == 'TextArea' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">TextArea</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TextField'>
                        <Button bg={address2 == 'TextField' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">TextField</p></Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> DATA DISPLAY</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/Avatar'>
                        <Button bg={address2 == 'Avatar' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Avatar</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Badge'>
                        <Button bg={address2 == 'Badge' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Badge (Notification)</p></Button>
                      </Link>
                      {/* <Link to='/DefaultLayout/Component/Controller'> */}
                        <Button disabled bg={address2 == 'Controller' ? 'graye' : ''} className='r5 px10 width100' size='medium'><p className="flex flex1 size14 justifyStart">Controller(Slider) (추후 예정)</p></Button>
                      {/* </Link> */}
                      <Link to='/DefaultLayout/Component/Chip'>
                        <Button bg={address2 == 'Chip' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Chip</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Hidden'>
                        <Button bg={address2 == 'Hidden' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Hidden</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Table'>
                        <Button bg={address2 == 'Table' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Table</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Tooltip'>
                        <Button bg={address2 == 'Tooltip' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Tooltip</p></Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> FEEDBACK</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/Backdrop'>
                        <Button bg={address2 == 'Backdrop' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Backdrop</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Loading'>
                        <Button bg={address2 == 'Loading' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Loading</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Popover'>
                        <Button bg={address2 == 'Popover' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Popover</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Popup'>
                        <Button bg={address2 == 'Popup' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Popup (Modal)</p></Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> SURFACE</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/Accordion'>
                        <Button bg={address2 == 'Accordion' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Accordion</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Tree'>
                        <Button bg={address2 == 'Tree' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Tree (Folder)</p></Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> NAVIGATION</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/Location'>
                        <Button bg={address2 == 'Location' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Location (Breadcrumbs)</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Pagination'>
                        <Button bg={address2 == 'Pagination' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Pagination</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Slide'>
                        <Button bg={address2 == 'Slide' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Slide</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/Tab'>
                        <Button bg={address2 == 'Tab' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Tab</p></Button>
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
