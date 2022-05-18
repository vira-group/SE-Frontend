import Sign_up from "../src/components/Sign_up/sign_up";
import Footer from "./components/Homepage/layouts/Footer";
import Filter from "./components/Homepage/layouts/Filter";
import ResponsiveDatePickers from "../src/components/HotelPage/ResponsiveDatePickers";
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SimpleAccordion from "../src/components/HotelPage/accordion";
import SearchForm from "../src/components/Homepage/layouts/SearchForm";
import EditProfile from "../src/components/Profile/Editprofile";
import IncreaseCredit from "../src/components/Profile/IncreaseCredit";
import Sidebar from "../src/components/Profile/Sidebar";
import Favorites from "../src/components/Profile/Favorites";
import Reservation from "./components/Reservation/Reservation";



it("should render the correct content", async () => {
  render(<Reservation />);
});





// describe("Favorites", () => {
//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <Favorites />
//       </BrowserRouter>
//     );
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.queryAllByRole("button");
//     expect(CreditElements.length).toBe(4);
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.queryAllByRole("heading");
//     expect(CreditElements.length).toBe(4);
//   });
// });

// describe("Edit profile", () => {
//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <EditProfile />
//       </BrowserRouter>
//     );
//   });
// });

// const mockedProfile = jest.fn();

// describe("Edit profile", () => {
//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <EditProfile />
//       </BrowserRouter>
//     );
//   });

//   it("should render correct birthdate", async () => {
//     render(
//       <BrowserRouter>
//         <EditProfile birthdate={null} setBirthdate={mockedProfile} />
//       </BrowserRouter>
//     );
//     const ProfileElement = screen.getByLabelText(/Birthdate/i);
//     fireEvent.select(ProfileElement, { target: { value: "09/11/2022" } });
//     expect(ProfileElement.value).toBe("09/11/2022");
//   });

//   it("should render correct gender", async () => {
//     render(
//       <BrowserRouter>
//         <EditProfile genValue={null} setGenValue={mockedProfile} />
//       </BrowserRouter>
//     );
//     const ProfileElement = screen.getByLabelText(/Female/i);
//     fireEvent.select(ProfileElement, { target: { value: "Female" } });
//     expect(ProfileElement.value).toBe("Female");
//   });
// });

// const mockedIncreaseCredit = jest.fn();

// describe("Increase credit", () => {
//   it("should fetch and render input element", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//   });

//   it("should render correct amount of money", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit
//           amountOfMoney={null}
//           setAmountOfMoney={mockedIncreaseCredit}
//         />
//       </BrowserRouter>
//     );
//     const CreditElement = screen.getByLabelText(/Amount of money/i);
//     fireEvent.select(CreditElement, { target: { value: "300" } });
//     expect(CreditElement.value).toBe("300");
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.queryAllByRole("heading");
//     expect(CreditElements.length).toBe(2);
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.queryAllByRole("button");
//     expect(CreditElements.length).toBe(4);
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.getByText(/Increase credit/i);
//     expect(CreditElements).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.getByText(/Select one of these options:/i);
//     expect(CreditElements).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.getByText(
//       /or enter your desired amount of money here:/i
//     );
//     expect(CreditElements).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.getByText(/Pay/i);
//     expect(CreditElements).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.getByText(/Your wallet balance/i);
//     expect(CreditElements).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(
//       <BrowserRouter>
//         <IncreaseCredit />
//       </BrowserRouter>
//     );
//     const CreditElements = screen.getByText(/Account balance:/i);
//     expect(CreditElements).toBeInTheDocument();
//   });
// });

// it('should render same text ', () => {
// 	render(
// 		<BrowserRouter>
// 			<SimpleAccordion />
// 		</BrowserRouter>
// 	);
// 	const h1Element = screen.getByTestId('accordion');
// 	expect(h1Element).toBeInTheDocument();
// });
// it('should render same text ', () => {
// 	render(
// 		<BrowserRouter>
// 			<SimpleAccordion />
// 		</BrowserRouter>
// 	);
// 	const h1Element = screen.getByTestId("expand");
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(
// 		<BrowserRouter>
// 			<SimpleAccordion />
// 		</BrowserRouter>
// 	);
// 	const h1Element = screen.getByTestId("typo");
// 	expect(h1Element).toBeInTheDocument();
// });







// it('should render same text ', () => {
// 	render(
// 		<BrowserRouter>
// 			<SimpleAccordion />
// 		</BrowserRouter>
// 	);
// 	const h1Element = screen.getByTestId("accordion1");
// 	expect(h1Element).toBeInTheDocument();
// });



// it('should render same text ', () => {
// 	render(
// 		<BrowserRouter>
// 			<SimpleAccordion />
// 		</BrowserRouter>
// 	);
// 	const h1Element = screen.getByTestId("a");
// 	expect(h1Element).toBeInTheDocument();
// });

// const mockedSearchForm = jest.fn();

// describe("Search form", () => {
//   it("should render correct city", async () => {
//     render(<SearchForm destination={null} setDestination={mockedSearchForm} />);
//     const SearchElement = screen.getByLabelText(/Destination/i);
//     fireEvent.select(SearchElement, { target: { value: "Tehran" } });
//     expect(SearchElement.value).toBe("Tehran");
//   });

//   it("should render correct check in date", async () => {
//     render(<SearchForm checkinDate={null} setCheckinDate={mockedSearchForm} />);
//     const SearchElement = screen.getByLabelText(/Check in/i);
//     fireEvent.submit(SearchElement, { target: { value: "05/19/2022" } });
//     expect(SearchElement.value).toBe("05/19/2022");
//   });

//   it("should render correct check out date", async () => {
//     render(<SearchForm Check out={null} setCheckoutDate={mockedSearchForm} />);
//     const SearchElement = screen.getByLabelText(/Check out/i);
//     fireEvent.submit(SearchElement, { target: { value: "05/19/2022" } });
//     expect(SearchElement.value).toBe("05/19/2022");
//   });

//   it("should render correct city", async () => {
//     render(<SearchForm destination={null} setDestination={mockedSearchForm} />);
//     const SearchElement = screen.getByPlaceholderText(/0 adults - 0 children/i);
//     fireEvent.click(SearchElement, {
//       target: { value: "1 adults - 0 children" },
//     });
//     fireEvent.click(SearchElement, {
//       target: { value: "2 adults - 0 children" },
//     });
//     fireEvent.click(SearchElement, {
//       target: { value: "2 adults - 1 children" },
//     });
//     expect(SearchElement.value).toBe("2 adults - 1 children");
//   });

//   it("should render the correct content", async () => {
//     render(<SearchForm />);
//     const SearchElement = screen.getByPlaceholderText(/0 adults - 0 children/i);
//     expect(SearchElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<SearchForm />);
//     const SearchElement = screen.getByLabelText(/Number of guests/i);
//     expect(SearchElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<SearchForm />);
//     const SearchElement = screen.getByLabelText(/Check out/i);
//     expect(SearchElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<SearchForm />);
//     const SearchElement = screen.getByLabelText(/Check in/i);
//     expect(SearchElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<SearchForm />);
//     const SearchElement = screen.getByLabelText(/Destination/i);
//     expect(SearchElement).toBeInTheDocument();
//   });
// });

// describe("Footer", () => {
//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Support/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Help center/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Safety information/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/How to register a hotel/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Booking tutorial/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Hotel reservation guidance/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Payment methods/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Cancellation options/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/About Us/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Rules/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Magazine/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByText(/Contact us/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = screen.getByTitle("header2");
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElement = await screen.findByText(/Magazine/i);
//     expect(FooterElement).toBeInTheDocument();
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElements = screen.queryAllByRole("button");
//     expect(FooterElements.length).toBe(0);
//   });

//   it("should render the correct content", async () => {
//     render(<Footer />);
//     const FooterElements = screen.queryByText(/cars/i);
//     expect(FooterElements).not.toBeInTheDocument();
//   });
// });

// describe("Filter", () => {
//   it("should render the correct content", async () => {
//     render(<Filter />);
//     const FilterElements = screen.queryAllByRole("button");
//     expect(FilterElements.length).toBe(3);
//   });

//   it("should render the correct content", async () => {
//     render(<Filter />);
//     const FilterElement = screen.getByTitle("stars");
//     expect(FilterElement).toBeInTheDocument();
//   });
// });

// const mockFn = jest.fn();

// it("should render input element", () => {
//   render(
//     <BrowserRouter>
//       <Sign_up v={""} f={mockFn} />
//     </BrowserRouter>
//   );
//   const inputElement = screen.getByLabelText(/Email Address/i);
//   expect(inputElement).toBeInTheDocument();
// });

// it("functionality of button when is cliked", () => {
//   render(
//     <BrowserRouter>
//       {" "}
//       <Sign_up v={""} f={mockFn} />
//     </BrowserRouter>
//   );
//   const inputElement = screen.getByLabelText(/Email Address/i);

//   fireEvent.change(inputElement, { target: { value: "fatima@gmail.com" } });
//   const buttonElement = screen.getByRole("button", { name: /Sign Up/i });
//   fireEvent.click(buttonElement);
//   expect(inputElement.value).toBe("fatima@gmail.com");
// });

// const MockList = () => {
//   return (
//     <BrowserRouter>
//       <ResponsiveDatePickers />
//     </BrowserRouter>
//   );
// };

// afterAll(() => {
//   console.log("RUNS ONCE AFTER ALL TESTS");
// });

// it("should fetch and render input element", async () => {
//   render(<MockList />);

//   const followerDivElement = await screen.queryByText(/animals/i);
//   expect(followerDivElement).not.toBeInTheDocument();
// });

// it("should render same text ", () => {
//   render(<SimpleAccordion />);
//   const h1Element = screen.getByTitle(/accordion/i);
//   expect(h1Element).toBeInTheDocument();
// });

// const Mockq = () => {
//   return (
//     <BrowserRouter>
//       <ResponsiveDatePickers />
//     </BrowserRouter>
//   );
// };

// it('should fetch and render input element', async () => {
// 	render(
// 		<BrowserRouter>
// 			<SimpleAccordion />
// 		</BrowserRouter>
// 	);

// 	const followerDivElement = await screen.getByTestId('test');
// 	expect(followerDivElement).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(<SimpleAccordion />);
// 	const h1Element = screen.getByTitle(/accordion1/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(<SimpleAccordion />);
// 	const h1Element = screen.getByTitle(/AccordionSummery/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(<SimpleAccordion />);
// 	const h1Element = screen.getByTitle(/expandMoreIcon/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(<SimpleAccordion />);
// 	const h1Element = screen.getByTitle(/Typography/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(<SimpleAccordion />);
// 	const h1Element = screen.getByTitle(/AccordionDetails/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(
// 		<BrowserRouter>
// 			<SimpleAccordion />
// 		</BrowserRouter>
// 	);
// 	const h1Element = screen.getByTitle(/href/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(<ResponsiveDatePickers />);
// 	const h1Element = screen.getByTitle(/AccordionSummery/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(<ResponsiveDatePickers />);
// 	const h1Element = screen.getByTitle(/btn-dark/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// it('should render same text ', () => {
// 	render(<ResponsiveDatePickers />);
// 	const h1Element = screen.getByTitle(/GoldenTextField/i);
// 	expect(h1Element).toBeInTheDocument();
// });

// // it("shodduld ", async () => {
// //   render(<Mockq />);

// //   const ollowerDivElement = await screen.findByRole("button");
// //   expect(ollowerDivElement).toBeInTheDocument();
// // });

// // it("should fetch and render input element", async () => {
// //   render(
// //     <BrowserRouter>
// //       <SimpleAccordion />
// //     </BrowserRouter>
// //   );

// //   const followerDivElement = await screen.findByTestId("test");
// //   expect(followerDivElement).toBeInTheDocument();
// // });

// it("should be able to type into input", () => {
//   render(
//     <BrowserRouter>
//       {" "}
//       <Sign_up v={""} f={mockFn} />
//     </BrowserRouter>
//   );
//   const inputElement = screen.getByLabelText(/Email Address/i);

//   fireEvent.click(inputElement);
//   fireEvent.change(inputElement, { target: { value: "Fatima@gmail.com" } });
//   expect(inputElement.value).toBe("Fatima@gmail.com");
// });
