import type { FC } from "react";

import { StyledButton, ButtonProps } from "./Button.styles";

export const Button: FC<ButtonProps> = ({
  label,
  prefix,
  variant = "contained",
  margin,
  ...props
}) => (
  <StyledButton data-testid="button" variant={variant} {...props}>
    <>
      {!!prefix && prefix}
      {label}
    </>
  </StyledButton>
);
