import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

import { StylableComponentProps } from "@app/types";
import { Box } from "@app/box";

export interface DefaultLayoutProps
  extends PropsWithChildren<StylableComponentProps> {}

export const DefaultLayout = styled(Box)``;
