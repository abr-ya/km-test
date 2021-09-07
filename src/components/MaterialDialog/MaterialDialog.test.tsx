import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MaterialDialog from "./MaterialDialog";

const setOpenHandler = jest.fn();
const yesHandler = jest.fn();
const noHandler = jest.fn();
const props = {
  isOpen: true,
  setIsOpen: setOpenHandler,
  title: "Dialog Title",
  yesButton: "yesButton",
  noButton: "noButton",
  yesFunc: yesHandler,
  noFunc: noHandler,
};

describe("MaterialDialog - результаты рендера", () => {
  let getByRole, getByTestId, getByText, getAllByRole;
  beforeEach(() => {
    const renderResult = render(
      <MaterialDialog {...props}>Dialog Content</MaterialDialog>,
      {},
    );
    if (renderResult) {
      ({ getByRole, getByTestId, getByText, getAllByRole } = renderResult);
    }
  });

  test("Dialog выводится, класс основного блока - MuiDialog-root", () => {
    const Dialog = getByTestId("Dialog");
    expect(Dialog).toBeEnabled();
    expect(Dialog).toHaveClass("MuiDialog-root");
  });

  test("Wrapper (paper) диалога выводится и имеет классы MuiPaper-root и MuiDialog-paper", () => {
    const Paper = getByRole("dialog");
    expect(Paper).toBeEnabled();
    expect(Paper).toHaveClass("MuiPaper-root");
    expect(Paper).toHaveClass("MuiDialog-paper");
  });

  test("Выводится заголовок диалога", () => {
    const Title = getByText("Dialog Title");
    expect(Title).toBeEnabled();
  });

  test("Выводится содержимое диалога", () => {
    const Content = getByText("Dialog Content");
    expect(Content).toBeEnabled();
  });

  test("Выводятся две кнопки", () => {
    const Buttons = getAllByRole("button");
    expect(Buttons).toHaveLength(2);
  });
});

describe("Поведение управляющих кнопок и обработчиков", () => {
  let getByRole;
  beforeEach(() => {
    const renderResult = render(
      <MaterialDialog {...props}>Dialog Content</MaterialDialog>,
      {},
    );
    if (renderResult) {
      ({ getByRole } = renderResult);
    }
  });

  test("Кнопка yes вызывает соответствующий хэндлер", () => {
    const Button = getByRole("button", { name: "yesButton" });
    expect(Button).toBeEnabled();
    fireEvent.click(Button);
    expect(yesHandler).toHaveBeenCalled();
    expect(yesHandler).toHaveBeenCalledTimes(1);
  });

  test("Кнопка no вызывает соответствующий хэндлер", () => {
    const Button = getByRole("button", { name: "noButton" });
    expect(Button).toBeEnabled();
    fireEvent.click(Button);
    expect(yesHandler).toHaveBeenCalled();
    expect(yesHandler).toHaveBeenCalledTimes(1);
  });

  test("Кнопки yes и no вызывают хэндлер закрытия", () => {
    expect(setOpenHandler).toHaveBeenCalled();
    expect(setOpenHandler).toHaveBeenCalledTimes(2);
    expect(setOpenHandler).toHaveBeenCalledWith(false);
  });
});
