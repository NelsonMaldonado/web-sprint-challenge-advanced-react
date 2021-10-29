import React from "react"
import MutationObserver from "mutationobserver-shim"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm"

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />)
})

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />)

  const firstNameInput = screen.getByLabelText("First Name:")
  userEvent.type(firstNameInput, "Jason")

  const lastNameInput = screen.getByLabelText("Last Name:")
  userEvent.type(lastNameInput, "John")

  const addressInput = screen.getByLabelText("Address:")
  userEvent.type(addressInput, "123 Fake Street")

  const cityInput = screen.getByLabelText("City:")
  userEvent.type(cityInput, "BangCock")

  const stateInput = screen.getByLabelText("State:")
  userEvent.type(stateInput, "MT")

  const zipInput = screen.getByLabelText("Zip:")
  userEvent.type(zipInput, "98001")

  const submit = screen.getByRole("button")
  userEvent.click(submit)

  await waitFor(() => {
    const successMessage = screen.queryByTestId("successMessage")
    expect(successMessage).toBeInTheDocument()
    expect(successMessage).toBeInTheDocument("Jason")
    expect(successMessage).toBeInTheDocument("John")
    expect(successMessage).toBeInTheDocument("123 Fake Street")
    expect(successMessage).toBeInTheDocument("BangCock")
    expect(successMessage).toBeInTheDocument("MT")
    expect(successMessage).toBeInTheDocument("98001")
  })
})
