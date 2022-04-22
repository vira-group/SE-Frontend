import * as React from "react";
import { render, screen } from "@testing-library/react";
import Newhotelcard from "../src/components/Homepage/layouts/Newhotelcard";

it("should check whether the content renders correctly or not", async () => {
  render(<Newhotelcard />);
  const cardElement = screen.queryAllByRole("button");
  expect(cardElement.length).toBe(1);
});
