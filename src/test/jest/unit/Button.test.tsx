import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  const renderButton = (
    props: Partial<React.ComponentProps<typeof Button>> = {},
  ) => render(<Button {...props}>{props.children ?? "Click Me"}</Button>);

  it("should renders with the correct label", () => {
    renderButton();
    expect(
      screen.getByRole("button", { name: "Click Me" }),
    ).toBeInTheDocument();
  });

  test.each([
    ["default", "bg-primary", "Click Me"],
    ["destructive", "bg-destructive", "Delete"],
  ] as const)(
    // This ensures TypeScript correctly infers the type
    "should applies the '%s' variant class",
    (variant, expectedClass, label) => {
      renderButton({
        variant: variant as "default" | "destructive",
        children: label,
      });
      expect(
        screen.getByRole("button", { name: new RegExp(label, "i") }),
      ).toHaveClass(expectedClass);
    },
  );

  it("should triggers click events", () => {
    const handleClick = jest.fn();
    renderButton({ onClick: handleClick });

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
