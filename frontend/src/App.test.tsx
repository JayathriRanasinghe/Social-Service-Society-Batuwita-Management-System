import { render, screen } from "@testing-library/react";
import App from "./App";
import { history } from "./store";

test("renders learn react link", () => {
  render(<App history={history} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
