import React from "react";
// @ts-ignore
import ReactDragListView from "react-drag-listview/lib/index.js";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import styles from "./dnd.module.scss";
import { moveInArray } from "./utils";

interface IElement {
  id: string;
  title: string;
}
interface IDnd {
  startData: IElement[];
  handler: (data: any) => void;
}

const Dnd = ({ startData, handler }: IDnd): JSX.Element => {
  const dragHandler = (from: number, to: number) => {
    const newOrder = moveInArray({ array: startData, from, to });
    handler(newOrder);
  };

  return (
    <ReactDragListView
      nodeSelector="div.item"
      handleSelector="div.drag"
      lineClassName={styles.line}
      onDragEnd={dragHandler}
    >
      {startData.map((item: IElement) => (
        <div className={`item ${styles.item}`} key={`${item.id}_key`}>
          <div className={`drag ${styles.drag}`}>
            <DragIndicatorIcon color="primary" />
          </div>
          <div className={`title ${styles.title}`}>{item.title}</div>
        </div>
      ))}
    </ReactDragListView>
  );
};

export default Dnd;
