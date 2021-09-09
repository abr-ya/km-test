import React from "react";
import ButtonPrim from "../components/ButtonPrim/ButtonPrim";
import OrderPanel from "../components/OrderPanel/OrderPanel";
import tableConfig from "../components/OrderPanel/tConfig";

const Components = (): JSX.Element => {
  const butonClickHandler = () => {
    console.log("Это был клик по кнопке!");
  };

  const orderHandler = (order: any) => {
    console.log("new order", order);
  };

  return (
    <div className="container">
      <h1>Components page</h1>
      <h2>Кастомная кнопка</h2>
      <ButtonPrim text="Я кнопка!" handler={butonClickHandler} />

      <h2>Панель сортировки</h2>
      <OrderPanel tableConfig={tableConfig} orderHandler={orderHandler} />
    </div>
  );
};

export default Components;
