import React, { ReactNode } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import cn from "classnames";

import styles from "./MaterialDialog.scss";

export interface IDialog {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
  title?: string;
  yesButton: string;
  noButton: string;
  yesFunc: () => void;
  noFunc: () => void;
  isMobile?: boolean;
}

const MaterialDialog = ({
  isOpen,
  setIsOpen,
  children,
  title,
  yesButton,
  noButton,
  yesFunc,
  noFunc,
  isMobile,
}: IDialog): JSX.Element => {
  const handleCloseYes = () => {
    setIsOpen(false);
    yesFunc();
  };
  const handleCloseNo = () => {
    setIsOpen(false);
    noFunc();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseNo}
      className={styles.dialog}
      data-testid="Dialog"
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <div
          className={cn(styles.buttons, { [styles.mobileButtons]: isMobile })}
        >
          <Button
            onClick={handleCloseYes}
            variant="contained"
            color="primary"
            size="small"
          >
            {yesButton}
          </Button>
          <Button
            onClick={handleCloseNo}
            className={styles.cancel}
            variant="outlined"
            size="small"
          >
            {noButton}
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default MaterialDialog;
