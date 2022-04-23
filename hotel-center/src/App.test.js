import Sign_up from "../src/components/Sign_up/sign_up"
import Footer from "./components/Homepage/layouts/Footer";
import Filter from "./components/Homepage/layouts/Filter";
import ResponsiveDatePickers from "../src/components/HotelPage/ResponsiveDatePickers" ;
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SimpleAccordion from "../src/components/HotelPage/accordion";

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




const mockFn = jest.fn();


it('should render input element', () => {
		render(
			<BrowserRouter>
				<Sign_up v={''} f={mockFn} />
			</BrowserRouter>
		);
		const inputElement = screen.getByLabelText(/Email Address/i);
		expect(inputElement).toBeInTheDocument();
	});
 
it('functionality of button when is cliked', () => {
        render(
			<BrowserRouter>
				{' '}
				<Sign_up v={''} f={mockFn} />
			</BrowserRouter>
		);
		const inputElement = screen.getByLabelText(/Email Address/i);

        fireEvent.change(inputElement, { target: { value: "fatima@gmail.com" } });
	    const buttonElement = screen.getByRole("button", { name: /Sign Up/i});
	    fireEvent.click(buttonElement)
	    expect(inputElement.value).toBe("fatima@gmail.com")
	});


const MockList = () => {
    return (
        <BrowserRouter>
            <ResponsiveDatePickers />
        </BrowserRouter>
    )
}

afterAll(() => {
        console.log("RUNS ONCE AFTER ALL TESTS")
    })

    it('should fetch and render input element', async () => {
        render(
            <MockList />
        );

        
        const followerDivElement = await screen.queryByText(/animals/i) ;
        expect(followerDivElement).not.toBeInTheDocument();
    });

    it('should render same text ', () => {
      render(<SimpleAccordion />);
      const h1Element = screen.getByTitle(/accordion/i);
      expect(h1Element).toBeInTheDocument();
    });
  
const Mockq = () => {
	return (
		<BrowserRouter>
			<ResponsiveDatePickers />
		</BrowserRouter>
	);
};

it('shodduld ', async () => {
	render(<Mockq />);

	const ollowerDivElement = await screen.findByRole('button');
	expect(ollowerDivElement).toBeInTheDocument();
});

it('should fetch and render input element', async () => {
	render(
		<BrowserRouter>
			<SimpleAccordion />
		</BrowserRouter>
	);

	const followerDivElement = await screen.findByTestId('test');
	expect(followerDivElement).toBeInTheDocument();
});




	it('should be able to type into input', () => {
		render(
			<BrowserRouter>
				{' '}
				<Sign_up v={''} f={mockFn} />
			</BrowserRouter>
		);
		const inputElement = screen.getByLabelText(/Email Address/i);

		fireEvent.click(inputElement);
		fireEvent.change(inputElement, { target: { value: 'Fatima@gmail.com' } });
		expect(inputElement.value).toBe('Fatima@gmail.com');
    
    
    });