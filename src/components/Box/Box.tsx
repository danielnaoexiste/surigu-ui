import type { FC } from "react";

import { StyledBox, BoxProps } from "@styles/Box";

export const Box: FC<BoxProps> = ({ children, ...props }) => (
  <StyledBox data-testid="box" {...props}>
    {children}
  </StyledBox>
);
