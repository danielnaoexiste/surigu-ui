import type { FC } from "react";
import Box from "../Box";
import Text from "../Text";
import Loading from "../Loading";

export const LoaderBox: FC = ({ ...props }) => (
  <Box
    data-testid="loader-box"
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    {...props}
  >
    <Loading size="large" />
    <Box display="none">
      <Text>Loading...</Text>
    </Box>
  </Box>
);
