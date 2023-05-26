import * as React from "react";
import styles from './style.module.scss';

const Table = ({
    colGroup,
    tHead,
    tBody,
    classWrap,
    classTable,
    classTHead,
    classTBody,
    classColGroup,
  }) => {
  const [state, setState] = React.useState(false);
  return (
    <>
    <div className={styles['table-wrap'] + ' ' + (classWrap ? classWrap : '')}>
      <table className={styles.table + ' ' + (classTable ? classTable : '')}>
        <colgroup className={classColGroup ? classColGroup : ''}>
          {colGroup}
        </colgroup>
        <thead className={classTHead ? classTHead : ''}>
          {tHead}
        </thead>
        <tbody className={classTBody ? classTBody : ''}>
          {tBody}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Table;