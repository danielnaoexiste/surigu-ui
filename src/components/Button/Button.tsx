import type { FC } from "react";

import { StyledButton, ButtonProps } from "./Button.styles";

export const Button: FC<ButtonProps> = ({
  label,
  prefix,
  variant = "primary",
  size = "md",
  margin,
  ...props
}) => (
  <StyledButton data-testid="button" size={size} variant={variant} {...props}>
    {!!prefix && prefix}
    {label}
  </StyledButton>
);
