import type { FC } from "react";

import { StyledText, TextProps } from "./Text.styles";

export const Text: FC<TextProps> = ({
  truncate = false,
  children,
  ...props
}) => (
  <StyledText data-testid="text" truncate={truncate} {...props}>
    {children}
  </StyledText>
);
