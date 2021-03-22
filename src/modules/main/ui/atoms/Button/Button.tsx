import React from 'react';
import {StyledButton} from './Button.styles';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent) => void;
  /** Id of the element */
  htmlId: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
   htmlId,
  ...props
}) => {

  return (
    <StyledButton
      type="button"
      primary={primary}
      size={size}
      backgroundColor={backgroundColor}
      data-testid={htmlId}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
