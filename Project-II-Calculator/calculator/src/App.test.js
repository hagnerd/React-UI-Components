import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Calculator from "./App";

afterEach(cleanup);

test("it should default to zero", () => {
  const { getByTestId } = render(<Calculator />);

  expect(getByTestId("calculator-display").innerHTML).toEqual("0");
});

test("it should take multiple numbers", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  fireEvent.click(getByText("1"));
  expect(getByTestId("calculator-display").innerHTML).toEqual("1");

  fireEvent.click(getByText("2"));
  expect(getByTestId("calculator-display").innerHTML).toEqual("12");
});

test("it should add two numbers together", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  fireEvent.click(getByText("1"));

  fireEvent.click(getByText("+"));

  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("="));
  expect(getByTestId("calculator-display").innerHTML).toEqual("3");
});

test("it should subtract two numbers", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  fireEvent.click(getByText("2"));

  fireEvent.click(getByTestId("subtract"));

  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("="));
  expect(getByTestId("calculator-display").innerHTML).toEqual("1");
});

test("it should multiply two numbers", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  fireEvent.click(getByText("2"));

  fireEvent.click(getByTestId("multiply"));

  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("="));
  expect(getByTestId("calculator-display").innerHTML).toEqual("4");
});

test("it should divide two numbers", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("2"));

  fireEvent.click(getByTestId("divide"));

  fireEvent.click(getByText("3"));
  fireEvent.click(getByText("="));
  expect(getByTestId("calculator-display").innerHTML).toEqual("4");
});
