import * as React from "react";
import styles from './table.module.scss';
import { Button } from ".";

//img
import ArrowDown from './image/arrow-down.svg';

const TableFold = ({
    children,
    parent,
  }) => {
  const [state, setState] = React.useState(false);
  return (
    <>
    <tr>
      <td style={{textAlign: 'center'}}>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Button className={styles['table-fold'] + ' ' + (state ? styles.open : '')} theme="grayc" variant="outlined" square size="small" radius="round" onClick={()=>{setState(!state)}}>
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

export default TableFold;