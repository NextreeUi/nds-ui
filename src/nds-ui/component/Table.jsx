import * as React from "react";
import styles from './style.module.scss';

const Table = ({
    ColGroup,
    THead,
    TBody,
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
          {ColGroup}
        </colgroup>
        <thead className={classTHead ? classTHead : ''}>
          {THead}
        </thead>
        <tbody className={classTBody ? classTBody : ''}>
          {TBody}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Table;