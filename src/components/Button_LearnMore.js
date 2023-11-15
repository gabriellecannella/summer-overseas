// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test", "btn--LearnMore"];

const SIZES = ["btn--medium", "btn--large"];

export const Button_LearnMore = ({
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
      href="https://uflorida-my.sharepoint.com/personal/gcannella_ufl_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fgcannella%5Fufl%5Fedu%2FDocuments%2FFall%202023%2FCIS4914%2FSenior%20Design%20%2D%20Project%2FUniversity%20of%20Florida%20%5F%20Computer%20Science%20Internship%20%5F%20Ghana%202024%20%281%29%20%281%29%20%281%29%2Epdf&parent=%2Fpersonal%2Fgcannella%5Fufl%5Fedu%2FDocuments%2FFall%202023%2FCIS4914%2FSenior%20Design%20%2D%20Project"
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
