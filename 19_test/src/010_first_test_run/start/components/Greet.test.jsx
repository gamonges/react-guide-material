import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

it("h1が存在する", () => {
  render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();
});
