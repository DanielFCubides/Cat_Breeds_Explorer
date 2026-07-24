import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders the Get started heading", () => {
    render(<App />);
    expect(screen.getByText("Get started")).toBeInTheDocument();
  });

  it("increments counter on click", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    expect(button).toHaveTextContent("Count is 0");
    await userEvent.click(button);
    expect(button).toHaveTextContent("Count is 1");
  });
});
