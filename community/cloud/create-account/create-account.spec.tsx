import React from "react";
import { render } from "@testing-library/react";
import { BasicCreateAccount } from "./create-account.composition";

describe("create-account", () => {
  it("renders", () => {
    const { container } = render(<BasicCreateAccount />);
    expect(container).toBeTruthy();
  });

  it("renders heading", () => {
    const { getByTestId } = render(<BasicCreateAccount />);
    expect(getByTestId("heading")).toBeTruthy();
  });

  it("renders paragraph", () => {
    const { getByTestId } = render(<BasicCreateAccount />);
    expect(getByTestId("paragraph")).toBeTruthy();
  });
  it("renders button with the correct link", () => {
    const { getByTestId } = render(<BasicCreateAccount />);
    expect(getByTestId("button")).toBeTruthy();

    const button = getByTestId("button");
    expect(button.firstChild).toHaveAttribute(
      "href",
      "https://bit.cloud/signup"
    );
  });
});
