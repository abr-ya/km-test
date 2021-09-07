import React, { useState } from "react";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";
import MaterialDialog from "../components/MaterialDialog/MaterialDialog";

const Home = (): JSX.Element => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialogYesHandler = () => {
    console.log("Dialog said yes!");
  };

  const dialogNoHandler = () => {
    console.log("Dialog said no!");
  };

  return (
    <div className="container">
      <h1 className="title">Home</h1>
      <h2>Material Dialog</h2>
      <ButtonPrim
        text="Показать диалог"
        handler={() => setIsDialogOpen(true)}
      />
      <MaterialDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        title="Я - диалог!"
        yesButton="Да!"
        noButton="нет("
        yesFunc={dialogYesHandler}
        noFunc={dialogNoHandler}
      >
        Здесь контент диалога!
      </MaterialDialog>
    </div>
  );
};

export default Home;
