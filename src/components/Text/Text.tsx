import type { FC } from "react";

import { StyledText, TextProps } from "@styles/Text";

export const Text: FC<TextProps> = ({
  truncate = false,
  children,
  ...props
}) => (
  <StyledText data-testid="text" truncate={truncate} {...props}>
    {children}
  </StyledText>
);
