import React from "react";
import './button.css';

interface ButtonProps {
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
  size?: "small" | "medium" | "large";
  /**
   * Inactive or not?
   */
  disable?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  disable = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "sb-button--primary"
    : "sb-button--secondary";
  const modeDisable = disable
    ? "sb-button--disable"
    : "sb-button--active";
  return (
    <button
      type="button"
      className={["sb-button", `sb-button--${size}`, mode, modeDisable].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
