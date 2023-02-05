import styled, { keyframes } from "styled-components";

import { SpaceProps, space, variant } from "styled-system";

export interface LoadingProps extends SpaceProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
}

export interface StyledProps extends LoadingProps {
  viewBox: string;
  children?: JSX.Element;
}

const sizeVariants = variant({
  prop: "size",
  variants: {
    small: {
      width: "15px",
      height: "15px",
    },
    medium: {
      width: "25px",
      height: "25px",
    },
    large: {
      width: "35px",
      height: "35px",
    },
  },
});

const colorVariants = variant({
  prop: "color",
  variants: {
    primary: {
      stroke: "primary",
    },
    secondary: {
      stroke: "secondary",
    },
  },
});

export const StyledLoading = styled.svg<StyledProps>`
  animation: rotate 1s linear infinite;

  & .path {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
  ${sizeVariants}
  ${colorVariants}
  ${space}
`;
