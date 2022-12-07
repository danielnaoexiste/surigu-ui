import { Button } from "./Button";
import { render } from "@utils/render";

describe("Button", () => {
  test("should render the Button component", () => {
    render(<Button onClick={() => null} />);
  });

  test("should renders the Label as child", () => {
    const { getByTestId } = render(<Button label="Froggy" />);
    expect(getByTestId("button").textContent).toBe("Froggy");
  });
});
