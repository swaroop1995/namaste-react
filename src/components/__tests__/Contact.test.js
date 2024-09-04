import { render, screen } from "@testing-library/react";
import Contact from "../contactus";
import "@testing-library/jest-dom";

describe("contact us test page", () => {
  test("Should load component us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button in the component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("should load input name in the component", () => {
    render(<Contact />);

    const inputField = screen.getByPlaceholderText("name");
    expect(inputField).toBeInTheDocument();
  });

  test("should load input boxes in the component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
