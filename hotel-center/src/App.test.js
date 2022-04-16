import React from 'react';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';

let container = null;

beforeEach(() => {

  // setup a DOM element as a render target

  container = document.createElement("div");

  document.body.appendChild(container);

});

afterEach(() => {

  // cleanup on exiting

  unmountComponentAtNode(container);

  container.remove();

  container = null;

});


test('renders learn react link', () => {
  const { getByText } = render(<App />); //render is from @testing-library/react
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); //expect assertion is from Jest
});

