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
  variant?: "contained" | "outlined";
  label?: ReactNode;
  onClick?: MouseEventHandler;
}

export const StyledButton = styled("button")<ButtonProps>(
  {
    gap: ".25rem",
    display: "flex",
    fontSize: "16px",
    cursor: "pointer",
    lineHeight: "24px",
    fontWeight: "bold",
    border: "2px solid",
    borderRadius: "4px",
    transition: "500ms",
    alignItems: "center",
    padding: ".25rem .75rem",
  },
  variant({
    variants: {
      contained: {
        color: "white",
        bg: "primaryMedium",
        borderColor: "transparent",

        "&:hover": {
          bg: "primaryDark",
        },
      },
      outlined: {
        color: "primary",
        bg: "transparent",
        borderColor: "primary",

        "&:hover": {
          bg: "primaryMedium",
          color: "white",
          borderColor: "transparent",
        },
      },
    },
  }),
  compose(space, border, layout, typography)
);
