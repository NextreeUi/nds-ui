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
                      {/* <Link to='/DefaultLayout/Component/AutocompletePage'> */}
                        <Button disabled bg={address2 == 'AutocompletePage' ? 'graye' : ''} className='r5 px10 width100' size='medium' ><p className="flex flex1 size14 justifyStart">Autocomplete (추후 예정)</p></Button>
                      {/* </Link> */}
                      <Link to='/DefaultLayout/Component/ButtonPage'>
                        <Button bg={address2 == 'ButtonPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Button</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/CheckboxPage'>
                        <Button bg={address2 == 'CheckboxPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Checkbox</p></Button>
                      </Link>
                      {/* <Link to='/DefaultLayout/Component/DatePickerPage'> */}
                        <Button disabled bg={address2 == 'DatePickerPage' ? 'graye' : ''} className='r5 px10 width100' size='medium'><p className="flex flex1 size14 justifyStart">Date&TimePicker (추후 예정)</p></Button>
                      {/* </Link> */}
                      <Link to='/DefaultLayout/Component/RadioPage'>
                        <Button bg={address2 == 'RadioPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Radio</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/SelectPage'>
                        <Button bg={address2 == 'SelectPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Select (ComboBox)</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/SwitchPage'>
                        <Button bg={address2 == 'SwitchPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Switch (Toggle)</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TextareaPage'>
                        <Button bg={address2 == 'TextareaPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">TextArea</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TextfieldPage'>
                        <Button bg={address2 == 'TextfieldPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">TextField</p></Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> DATA DISPLAY</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/AvatarPage'>
                        <Button bg={address2 == 'AvatarPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Avatar</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/BadgePage'>
                        <Button bg={address2 == 'BadgePage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Badge (Notification)</p></Button>
                      </Link>
                      {/* <Link to='/DefaultLayout/Component/ControllerPage'> */}
                        <Button disabled bg={address2 == 'ControllerPage' ? 'graye' : ''} className='r5 px10 width100' size='medium'><p className="flex flex1 size14 justifyStart">Controller(Slider) (추후 예정)</p></Button>
                      {/* </Link> */}
                      <Link to='/DefaultLayout/Component/ChipPage'>
                        <Button bg={address2 == 'ChipPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Chip</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/HiddenPage'>
                        <Button bg={address2 == 'HiddenPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Hidden</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TablePage'>
                        <Button bg={address2 == 'TablePage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Table</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TooltipPage'>
                        <Button bg={address2 == 'TooltipPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Tooltip</p></Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> FEEDBACK</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/BackdropPage'>
                        <Button bg={address2 == 'BackdropPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Backdrop</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/LoadingPage'>
                        <Button bg={address2 == 'LoadingPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Loading</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/PopoverPage'>
                        <Button bg={address2 == 'PopoverPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Popover</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/PopupPage'>
                        <Button bg={address2 == 'PopupPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Popup (Modal)</p></Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> SURFACE</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/AccordionPage'>
                        <Button bg={address2 == 'AccordionPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Accordion</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TreePage'>
                        <Button bg={address2 == 'TreePage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Tree (Folder)</p></Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flexColumn gap10">
                    <p className="size12 b txt-gray6 ls2"> NAVIGATION</p>
                    <div className="flexColumn">
                      <Link to='/DefaultLayout/Component/LocationPage'>
                        <Button bg={address2 == 'LocationPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Location (Breadcrumbs)</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/PaginationPage'>
                        <Button bg={address2 == 'PaginationPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Pagination</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/SlidePage'>
                        <Button bg={address2 == 'SlidePage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Slide</p></Button>
                      </Link>
                      <Link to='/DefaultLayout/Component/TabPage'>
                        <Button bg={address2 == 'TabPage' ? 'graye' : ''} className='r5 px10 width100' size='medium' theme='black' ripple='black' hoverBg='grayc'><p className="flex flex1 size14 justifyStart">Tab</p></Button>
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
