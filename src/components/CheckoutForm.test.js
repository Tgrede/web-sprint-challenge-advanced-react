import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
     render(<CheckoutForm />)

     const heading = screen.getByText(/checkout form/i)

     expect(heading).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {

     render(<CheckoutForm />)

     const firstNameInput = screen.getByLabelText(/first name/i)
     const lastNameInput = screen.getByLabelText(/last name/i)
     const addressInput = screen.getByLabelText(/address/i)
     const cityInput = screen.getByLabelText(/city/i)
     const stateInput = screen.getByLabelText(/state/i)
     const zipInput = screen.getByLabelText(/zip/i)
     const checkoutButton = screen.getByRole('button', {name: /checkout/i})
     
     userEvent.type(firstNameInput, 'Trenten')
     userEvent.type(lastNameInput, 'Grede')
     userEvent.type(addressInput, '1234 Test St')
     userEvent.type(cityInput, 'Madison')
     userEvent.type(stateInput, 'WI')
     userEvent.type(zipInput, '53713')

     expect(firstNameInput).toHaveValue('Trenten')
     expect(lastNameInput).toHaveValue('Grede')
     expect(addressInput).toHaveValue('1234 Test St')
     expect(cityInput).toHaveValue('Madison')
     expect(stateInput).toHaveValue('WI')
     expect(zipInput).toHaveValue('53713')

     userEvent.click(checkoutButton)

     const successMessage = screen.getByTestId('successMessage')

     expect(successMessage).toBeInTheDocument()
});
