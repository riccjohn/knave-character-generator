import { render } from "@testing-library/react";
import App from "./App";

test("renders the test component", () => {
  const { getByText } = render(<App />);
  expect(getByText(/HELLO I AM APP/i)).toBeInTheDocument();
});
