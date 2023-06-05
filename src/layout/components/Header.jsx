import * as React from "react";

import { Button, TextField, Location } from "@/nds-ui/component";

function Header({address1, address2}) {
  let address2Default
  let middle
  let middleAddress
  if(address1 == 'UserGuide') {
    address2Default = 'Overview'
    middle = address2
    middleAddress = address2
  } else if (address1 == 'Component') {
    address2Default = 'Button'
  } 
  if (address2 == 'Autocomplete' ||
  address2 == 'Button' ||
  address2 == 'Checkbox' ||
  address2 == 'DatePicker' ||
  address2 == 'DateTimePicker' ||
  address2 == 'TimePicker' ||
  address2 == 'Radio' ||
  address2 == 'Select' ||
  address2 == 'Switch' ||
  address2 == 'TextArea' ||
  address2 == 'TextField') {
    middle = 'INPUT'
    middleAddress = 'Button'
  } else if ( address2 == 'Avatar' || 
  address2 == 'Badge' || 
  address2 == 'Controller' || 
  address2 == 'Chip' || 
  address2 == 'Hidden' || 
  address2 == 'Table' || 
  address2 == 'Tooltip' ) {
    middle = 'DATA DISPLAY'
    middleAddress = 'Avatar'
  } else if ( address2 == 'Backdrop' ||
  address2 == 'Loading' ||
  address2 == 'Popover' ||
  address2 == 'Popup' ) {
    middle = 'FEEDBACK'
    middleAddress = 'Backdrop'
  } else if ( address2 == 'Accordion' ||
  address2 == 'Tree' ) {
    middle = 'SURFACE'
    middleAddress = 'Accordion'
  } else if ( address2 == 'Location' ||
  address2 == 'Pagination' ||
  address2 == 'Slide' ||
  address2 == 'Tab' ) {
    middle = 'NAVIGATION'
    middleAddress = 'Location'
  } 
  return (
    <>
      <div className="flexBetween flex1 px40 alignCenter h70 otlb-grayc">
        {/* <div className="flex mr14 alignCenter">
          <TextField className='mr-48 pl20 pr48 size12 w300' radius='round' size='large' placeholder='Search Bar'/>
          <Button className='' square radius='round' size='medium' theme='grayc'> <i className="i-search w20 h20 bgc-gray6" /></Button>
        </div> */}
        <div>
          <Location
            depth1={<p className='bb'> {address1} </p>}
            link1={`/DefaultLayout/${address1}/${address2Default}`}
            depthLast={<p className=''>{middle}</p>}
            linkLast={`/DefaultLayout/${address1}/${middleAddress}`}
            icon={<i className='i-location-arrow bgc-gray6'/>}
          />
        </div>
        <div className="flexCenter">
          <a target="_blank" href='https://gitlab.com/nextree3/DesignSystem'>
            <Button className='minw45 h45' square theme='grayc'>
              <p className='i-gitlab' />
            </Button>
          </a>
          <a target="_blank" href='https://github.com/NextreeUi/nds-ui'>
            <Button className='minw45 h45' square theme='grayc'>
              <p className='i-github' />
            </Button>
          </a>
          <a target="_blank" href="https://www.figma.com/file/jCBnGvhUAlmTTukGpuFAVX/NDS-Figam?type=design&node-id=0%3A1&t=TpYdfcBFTTYvvVuI-1">
            <Button className='minw45 h45 alignCenter' square theme='grayc'>
              <p className='i-figma' />
            </Button>
          </a>

          
        </div>
      </div>
    </>
  );
}

export default Header;
