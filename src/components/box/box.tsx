import React, { forwardRef } from 'react';

import { StylableComponentProps } from '@app/types';

// Note: Just to abstract away the html components, and use the
// projects atomic components
export interface BoxProps
  extends StylableComponentProps,
    React.HTMLAttributes<HTMLDivElement> {}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <div {...props} ref={ref} />
));
