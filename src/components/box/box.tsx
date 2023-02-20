import React, { forwardRef, PropsWithChildren } from "react";
import { StylableComponentProps } from "../../types";

// Note: Just to abstract away the html components, and use the
// projects atomic components
export interface BoxProps extends PropsWithChildren<StylableComponentProps> {}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <div {...props} ref={ref} />
));
