import React from "react";

const STYLES = [
  "btn-primary-solid",
  "btn--secondary--solid",
  "btn--small--solid",
];

const SIZES = ["btn--medium", "btn--small"];

export const Button = ({
  name,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  value,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      name={name}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      value={value}
    >
      {value}
    </button>
  );
};
