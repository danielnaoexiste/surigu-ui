import "../index.css";
import clsx from "clsx";

import { FC, MouseEventHandler, ReactNode } from "react";
export interface ButtonProps {
  label: ReactNode;
  onClick: MouseEventHandler;
  variant?: "contained" | "outlined";
  prefix?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  prefix = null,
  variant = "contained",
}) => (
  <button
    onClick={onClick}
    className={clsx(
      "transition-colors border-2 duration-500 font-bold py-2 px-4 rounded inline-flex items-center gap-2",
      {
        "bg-brand-600 border-transparent hover:bg-brand-800 text-white":
          variant === "contained",
        "bg-transparent border-brand-500 text-brand hover:bg-brand-600 hover:text-white hover:border-transparent":
          variant === "outlined",
      }
    )}
  >
    <>
      {!!prefix && prefix}
      {label}
    </>
  </button>
);
