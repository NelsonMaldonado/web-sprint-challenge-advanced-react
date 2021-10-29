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
  userEvent.type(firstNameInput, "Monica")

  const lastNameInput = screen.getByLabelText("Last Name:")
  userEvent.type(lastNameInput, "Salas")

  const addressInput = screen.getByLabelText("Address:")
  userEvent.type(addressInput, "123 Abc St")

  const cityInput = screen.getByLabelText("City:")
  userEvent.type(cityInput, "thisTown")

  const stateInput = screen.getByLabelText("State:")
  userEvent.type(stateInput, "IL")

  const zipInput = screen.getByLabelText("Zip:")
  userEvent.type(zipInput, "12345")

  const submit = screen.getByRole("button")
  userEvent.click(submit)

  await waitFor(() => {
    const successMessage = screen.queryByTestId("successMessage")
    expect(successMessage).toBeInTheDocument()
    expect(successMessage).toBeInTheDocument("Monica")
    expect(successMessage).toBeInTheDocument("Salas")
    expect(successMessage).toBeInTheDocument("123 Abc St")
    expect(successMessage).toBeInTheDocument("thisTown")
    expect(successMessage).toBeInTheDocument("IL")
    expect(successMessage).toBeInTheDocument("12345")
  })
})

// import React from "react"
// import MutationObserver from "mutationobserver-shim"
// import { render } from "@testing-library/react"
// import CheckoutForm from "./CheckoutForm"
// import PlantList from "./PlantList"
// import userEvent from "@testing-library/user-event"

// // Write up the two tests here and make sure they are testing what the title shows

// test("renders without errors", () => {
//   render(<CheckoutForm />)
// })

// test("shows success message with submit", async () => {
//   render(<CheckoutForm />)
//   const firstNameInput = screen.getByLabelText(/First Name:/i)
//   userEvent.type(firstNameInput, "Jason")

//   const lastNameInput = screen.getByLabelText("Last Name:")
//   userEvent.type(lastNameInput, "John")

//   const addressInput = screen.getByLabelText("Address:")
//   userEvent.type(addressInput, "123 Fake Street.")

//   const cityInput = screen.getByLabelText("City:")
//   userEvent.type(cityInput, "Bangcok")

//   const stateInput = screen.getByLabelText("State:")
//   userEvent.type(stateInput, "Mongose")

//   const zipcodeInput = screen.getByLabelText("Zip:")
//   userEvent.type(zipcodeInput, "98001")

//   const submitButton = screen.getByRole("button")
//   userEvent.click(submitButton)

//   await waitFor(() => {
//     const successMessage = screen.getByTestId("successMessage")

//     expect(successMessage).toBeInTheDocument()
//     expect(successMessage).toBeInTheDocument("Jason")
//     expect(successMessage).toBeInTheDocument("John")
//     expect(successMessage).toBeInTheDocument("Address")
//     expect(successMessage).toBeInTheDocument("123 Fake Street ")
//     expect(successMessage).toBeInTheDocument("Bangcok")
//     expect(successMessage).toBeInTheDocument("98001")
//   })
// })
