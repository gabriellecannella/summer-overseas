import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test", "btn--LearnMore"];

const SIZES = ["btn--medium", "btn--large"];

export const Button_PastTrip = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a
      href="https://uflorida-my.sharepoint.com/personal/gcannella_ufl_edu/_layouts/15/onedrive.aspx?ga=1&id=%2Fpersonal%2Fgcannella%5Fufl%5Fedu%2FDocuments%2FFall%202023%2FCIS4914%2FSenior%20Design%20%2D%20Project%2FGhana%5FSyllabus%2Epdf&parent=%2Fpersonal%2Fgcannella%5Fufl%5Fedu%2FDocuments%2FFall%202023%2FCIS4914%2FSenior%20Design%20%2D%20Projects"
      target="_blank" // Open in a new tab
      rel="noopener noreferrer" // Recommended for security
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};
