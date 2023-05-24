import * as React from "react";
import styles from './table.module.scss';
import { Button } from "../component";
//img
import ArrowDown from './image/arrow-down.svg';
const TRFolding = ({
    className,
    children,
    parent,
  }) => {
  const [state, setState] = React.useState(false);
  return (
    <>
    <tr>
      <td style={{textAlign: 'center'}}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Button theme="grayc" variant="outlined" square size="small" radius="round" onClick={()=>{setState(!state)}}>
          <img src={ArrowDown} />
        </Button>
        </div>
      </td>
      {parent}
    </tr>
    {
      state ?
      <>
        {children}
      </>
      :
      <></>
    }
    </>
  );
}

export default TRFolding;