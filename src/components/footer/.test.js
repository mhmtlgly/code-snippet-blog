import React from "react"
import { render } from "@testing-library/react"

import { Copyright } from "./copyright"

// describe(`Copyright Component`, () => {
//   it(`renders Copyright Component`, () => {
//     const { container } = render(<Copyright />)
//     expect(container.querySelector(`h2`)).toBeInTheDocument()
//   })

//   it(`has heading value`, () => {
//     const { getByText } = render(<Copyright />)
//     const text = `Ad Box`
//     const child = getByText(text)
//     expect(child).toBeInTheDocument()
//   })
// })

// test("renders Copyright Component", () => {
//   const { container, getByText } = render(<Copyright />)
//   expect(container).toBeInTheDocument()
//   expect(getByText("copyright")).toBeInTheDocument()
// })

test("renders a message", () => {
  const { container, getByText, text } = render(<Copyright />)
  expect(container).toBeInTheDocument()
})

test("renders a message", () => {
  const { container, getByText, text } = render(<Copyright />)
  expect(getByText(/opyrighT/i)).toBeInTheDocument()
})

describe(`Copyright Component`, () => {
  it(`renders Copyright Component`, () => {
    const { container } = render(<Copyright />)
    expect(container).toBeInTheDocument()
  })

  it(`has heading value`, () => {
    const { getByText } = render(<Copyright />)
    const text = /opyrighT/i
    const child = getByText(text)
    expect(child).toBeInTheDocument()
  })
})
