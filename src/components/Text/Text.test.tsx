import { Text } from "./Text";
import { render } from "@utils/render";

describe("Text", () => {
  test("should render the Text component", () => {
    render(<Text />);
  });

  test("should have content when children props is present", () => {
    const { getByTestId } = render(<Text>Froggy</Text>);
    expect(getByTestId("text").textContent).toBe("Froggy");
  });
});
