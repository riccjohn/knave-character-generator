import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the test component", () => {
  render(<App />);
  expect(screen.getByText(/Abilities/i)).toBeInTheDocument();
});
