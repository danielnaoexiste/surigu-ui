import type { ReactNode, MouseEventHandler } from "react";
import styled, { DefaultTheme } from "styled-components";

import {
  SpaceProps,
  BorderProps,
  LayoutProps,
  TypographyProps,
  space,
  border,
  layout,
  variant,
  compose,
  typography,
} from "styled-system";

export interface ButtonProps
  extends DefaultTheme,
    SpaceProps,
    BorderProps,
    LayoutProps,
    TypographyProps {
  prefix?: ReactNode;
  variant?: "primary" | "secondary" | "neutral" | "danger" | "text";
  size?: "sm" | "md" | "lg" | "xlg";
  disabled?: boolean;
  label?: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
}

const buttonVariants = variant({
  variants: {
    primary: {
      color: "white",
      bg: "primaryMedium",

      "&:hover": {
        bg: "primaryDark",
      },
    },
    secondary: {
      color: "white",
      bg: "secondaryMedium",

      "&:hover": {
        bg: "secondaryDark",
      },
    },
    neutral: {
      color: "almostBlack",
      bg: "white",
    },
    danger: {
      color: "white",
      bg: "red",
    },
    text: {
      color: "white",
      bg: "transparent",
      border: "none",

      "&:hover": {
        opacity: 0.75,
      },
    },
  },
});

const buttonSizes = variant({
  prop: "size",
  key: "buttonSizes",
});

export const StyledButton = styled("button")<ButtonProps>(
  {
    gap: ".25rem",
    display: "flex",
    fontSize: "16px",
    cursor: "pointer",
    lineHeight: "24px",
    fontWeight: "bold",
    borderRadius: "4px",
    transition: "500ms",
    alignItems: "center",
    appearance: "button",

    "&:disabled": {
      cursor: "not-allowed",
      opacity: "50%",
    },
  },
  buttonVariants,
  buttonSizes,
  compose(space, border, layout, typography)
);
