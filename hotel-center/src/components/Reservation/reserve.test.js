// // import { login, logout } from "../../actions/auth";

// // test("should generate set user action object", () => {
// //   const user = {
// //     token: "123",
// //     email: "email",
// //     username: "username",
// //   };
// //   const action = login(user);
// //   expect(action).toEqual({
// //     type: "LOGIN",
// //     user,
// //   });
// // });

// // test("should generate login action object", () => {
// //   const user = {
// //     token: "123",
// //     email: "email",
// //     username: "username",
// //   };
// //   const action = login(user);
// //   expect(action).toEqual({
// //     type: "LOGIN",
// //     user,
// //   });
// // });

// // test("should generate logout action object", () => {
// //   const action = logout();
// //   expect(action).toEqual({
// //     type: "LOGOUT",
// //   });
// // });

// import React from "react";

// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

// // import Toggle from "./toggle";
// import reservation from "../Reservation/reservation" ;
// import HotelPage from "../HotelPage/hotelPage";
// import Hotelpage from "../Homepage/layouts/Hotelpage2";

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

// it("changes value when clicked", () => {
//   const onChange = jest.fn();
//   act(() => {
//     render(

//       <HotelPage  onChange={onchange} ></HotelPage>, container);
//   });

//   // get a hold of the button element, and trigger some clicks on it
//   const button = document.querySelector("[data-testid= button1]");

//   // expect(button.innerHTML).toBe("Turn on");

//   act(() => {
//     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   expect(onChange).toHaveBeenCalledTimes(1);
//   // expect(button.innerHTML).toBe("Turn off");

//   act(() => {
//     for (let i = 0; i < 5; i++) {
//       button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     }
//   });

//   expect(onChange).toHaveBeenCalledTimes(6);
//   // expect(button.innerHTML).toBe("Turn on");

//  })
