// hello.test.js, again

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import pretty from "pretty";

// import Hello from "./hello";

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("should render a greeting", () => {
//   act(() => {
//     render(<Hello />, container);
//   });

//   expect(
// pretty(container.innerHTML)).
// toMatchInlineSnapshot(`"<span>Hey, stranger</span>"`); /* ... gets filled automatically by jest ... */

//   act(() => {
//     render(<Hello name="Jenny" />, container);
//   });

//   expect(
// pretty(container.innerHTML)).
// toMatchInlineSnapshot(`"<h1>Hello, Jenny!</h1>"`); /* ... gets filled automatically by jest ... */

//   act(() => {
//     render(<Hello name="Margaret" />, container);
//   });

//   expect(
// pretty(container.innerHTML)).
// toMatchInlineSnapshot(`"<h1>Hello, Margaret!</h1>"`); /* ... gets filled automatically by jest ... */
// });

import * as React from "react";
import * as ReactDom from "react-dom";
import Hotelpage2 from "./components/Homepage/layouts/Hotelpage2";
import Footer from "./components/Homepage/layouts/Footer";
import Filter from "./components/Homepage/layouts/Filter";
import { render, screen } from "@testing-library/react";
// import { faParagraph } from "@fortawesome/free-solid-svg-icons";
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";

// test("renders the correct content", () => {
//   //Render a React component to the DOM
//   const root = document.createElement("div");
//   ReactDom.render(<Footer />, root);

//   //Use DOM APIs (querySelector) to make assertions
//   expect(root.querySelector("p").textContent).toBe("Support");
// });

it("should render the correct content", async () => {
  render(<Footer />);
  const FooterElement = screen.getByText(/Support/i);
  expect(FooterElement).toBeInTheDocument();
});

it("should render the correct content", async () => {
  render(<Footer />);
  const FooterElement = screen.getByTitle("header2");
  expect(FooterElement).toBeInTheDocument();
});

it("should render the correct content", async () => {
  render(<Footer />);
  const FooterElement = await screen.findByText(/Magazine/i);
  expect(FooterElement).toBeInTheDocument();
});

it("should render the correct content", async () => {
  render(<Footer />);
  const FooterElements = screen.queryAllByRole("button");
  expect(FooterElements.length).toBe(0);
});

it("should render the correct content", async () => {
  render(<Footer />);
  const FooterElements = screen.queryByText(/cars/i);
  expect(FooterElements).not.toBeInTheDocument();
});

it("should render the correct content", async () => {
  render(<Filter />);
  const FilterElements = screen.queryAllByRole("button");
  expect(FilterElements.length).toBe(3);
});

it("should render the correct content", async () => {
  render(<Filter />);
  const FilterElement = screen.getByTitle("stars");
  expect(FilterElement).toBeInTheDocument();
});
