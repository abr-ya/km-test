import React, { useState, useEffect, useCallback } from "react";
import styles from "./control.scss";
import Dnd from "./Dnd";

interface IOrderPanel {
  tableConfig: any;
  orderHandler: (order: string[]) => void;
}

const OrderPanel = ({
  tableConfig,
  orderHandler,
}: IOrderPanel): JSX.Element => {
  console.log(tableConfig);
  const [colsObj, setColsObj] = useState<Array<{ id: string; title: string }>>(
    [],
  );

  useEffect(() => {
    setColsObj(
      tableConfig.columns.map((col) => ({ id: col.key, title: col.title })),
    );
  }, [tableConfig.columns]);

  const handler = useCallback((order: Array<{ id: string; title: string }>) => {
    orderHandler(order.map((el: any) => el.id));
    setColsObj(order);
  }, []);

  return (
    <>
      <div
        className={`${styles.List} ${styles.showList}`}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        role="button"
        aria-hidden
      >
        <div className={styles.header}>Порядок столбцов</div>
        <Dnd startData={colsObj} handler={handler} />
      </div>
    </>
  );
};

export default OrderPanel;
