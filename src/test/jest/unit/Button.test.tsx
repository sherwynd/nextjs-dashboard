import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  const renderButton = (props?: any) =>
    render(<Button {...props}>{props?.children || "Click Me"}</Button>);

  it("renders with the correct label", () => {
    renderButton();
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  test.each([
    ["default", "bg-primary", "Click Me"],
    ["destructive", "bg-destructive", "Delete"],
  ])("applies the '%s' variant class", (variant, expectedClass, label) => {
    renderButton({ variant, children: label });
    expect(
      screen.getByRole("button", { name: new RegExp(label, "i") }),
    ).toHaveClass(expectedClass);
  });

  it("triggers click events", () => {
    const handleClick = jest.fn();
    renderButton({ onClick: handleClick });

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
