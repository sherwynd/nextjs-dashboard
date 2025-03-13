import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "@/app/page";

it("should render Hello World", () => {
  render(<Home />);

  const heading = screen.getByText(/hello world/i);
  expect(heading).toBeInTheDocument();
});
