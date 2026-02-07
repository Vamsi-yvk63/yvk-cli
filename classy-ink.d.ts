// classy-ink.d.ts
import type { FC, ReactNode } from "react";
import type { BoxProps, TextProps } from "ink";

declare module "classy-ink" {
  export interface ClassyBoxProps extends BoxProps {
    class?: string;
    children?: ReactNode;
  }

  export interface ClassyTextProps extends TextProps {
    class?: string;
    children?: ReactNode;
  }

  export const Box: FC<ClassyBoxProps>;
  export const Text: FC<ClassyTextProps>;
}
