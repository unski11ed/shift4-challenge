/* eslint-disable jsx-a11y/alt-text */
import React, { forwardRef } from 'react';

import { StylableComponentProps } from '@app/types';

// Note: Just to abstract away the html components, and use the
// projects atomic components
export interface ImageProps extends StylableComponentProps {
  src: string;
  alt: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, ...props }, ref) => (
    <img {...props} ref={ref} src={`${process.env.PUBLIC_URL}${src}`} />
  )
);
