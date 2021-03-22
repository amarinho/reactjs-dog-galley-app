import React from 'react';
import {StyledPage} from "./Page.styles";

export interface PageProps {
  /** Children element */
  children: React.ReactNode;
  /** Id of the element */
  htmlId: string;
}

export const Page = ({children, htmlId}: PageProps): JSX.Element => (
  <StyledPage data-testid={htmlId}>{children}</StyledPage>
);
