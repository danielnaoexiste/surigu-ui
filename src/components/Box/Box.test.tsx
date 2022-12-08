import { Box } from "./Box";
import { render } from "../../utils/render";

describe("Box", () => {
  test("should render the Box component", () => {
    render(<Box />);
  });

  test("should have content when children props is present", () => {
    const { getByTestId } = render(<Box>Froggy</Box>);
    expect(getByTestId("box").textContent).toBe("Froggy");
  });
});
