import type { FC } from "react";

import { StyledLoading, LoadingProps } from "./Loading.styles";

export const Loading: FC<LoadingProps> = ({
  size = "small",
  color = "primary",
}) => (
  <StyledLoading
    data-testid="loading"
    viewBox="25 25 50 50"
    size={size}
    color={color}
  >
    <circle
      className="path"
      cx="50"
      cy="50"
      r="20"
      fill="none"
      strokeWidth="3"
    />
  </StyledLoading>
);
