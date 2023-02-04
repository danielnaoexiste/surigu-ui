import type { ReactNode } from "react";
import styled from "styled-components";

import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
  PositionProps,
  BoxShadowProps,
  TypographyProps,
  BackgroundProps,
  space,
  color,
  layout,
  border,
  flexbox,
  compose,
  position,
  boxShadow,
  typography,
  background,
} from "styled-system";

export interface BoxProps
  extends BorderProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    PositionProps,
    BoxShadowProps,
    BackgroundProps,
    TypographyProps,
    SpaceProps {
  children?: ReactNode;
  // ColorProps fix: https://github.com/styled-system/styled-system/issues/1206
  [key: string]: any;
}

export const StyledBox = styled("div")<BoxProps>(
  {
    fontFamily: "Roboto Mono, monospace",
    boxSizing: "border-box",
  },
  compose(
    space,
    color,
    border,
    layout,
    flexbox,
    position,
    boxShadow,
    typography,
    background
  )
);
