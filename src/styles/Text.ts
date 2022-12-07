import type { ElementType, ReactNode } from "react";
import styled, { css } from "styled-components";

import {
  SpaceProps,
  ColorProps,
  TypographyProps,
  space,
  color,
  compose,
  typography,
  variant,
} from "styled-system";

export interface TextProps extends SpaceProps, ColorProps, TypographyProps {
  truncate?: boolean;
  children?: ReactNode;
  // ColorProps fix: https://github.com/styled-system/styled-system/issues/1206
  [key: string]: any;
}

export const StyledText = styled("span")<TextProps>(
  variant({
    prop: "truncate",
    variants: {
      true: {
        display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
  }),
  compose(color, space, typography)
);
