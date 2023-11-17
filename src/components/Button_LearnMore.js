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
      href="https://ufloridhttps://uflorida-my.sharepoint.com/:w:/g/personal/gcannella_ufl_edu/EevmgR0OmYtCmWmWVL3LoHMB40lqRAue6YsunkH042jIrQa-https://uflorida-my.sharepoint.com/:w:/r/personal/gcannella_ufl_edu/_layouts/15/Doc.aspx?sourcedoc=%7B1D81E6EB-990E-428B-9969-9654BDCBA073%7D&file=Cape%20Town%20Syllabus_Summer_23.docx&action=default&mobileredirect=trhttps://uflorida-my.sharepoinhttps://uflorida-my.sharepoint.com/personal/gcannella_ufl_edu/_layouts/15/onedrive.aspx?login_hint=gcannella%40ufl%2Eedu&id=%2Fpersonal%2Fgcannella%5Fufl%5Fedu%2FDocuments%2FFall%202023%2FCIS4914%2FSenior%20Design%20%2D%20Project%2FGhana%5FSyllabus%2Epdf&parent=%2Fpersonal%2Fgcannella%5Fufl%5Fedu%2FDocuments%2FFall%202023%2FCIS4914%2FSenior%20Design%20%2D%20Projectt.com/:w:/g/personal/gcannella_ufl_edu/EevmgR0OmYtCmWmWVL3LoHMB40lqRAue6YsunkH042jIrQ?e=Mq5KUUue.sharepoint.com/personal/gcannella_ufl_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fgcannella%5Fufl%5Fedu%2FDocuments%2FFall%202023%2FCIS4914%2FSenior%20Design%20%2D%20Project%2FUniversity%20of%20Florida%20%5F%20Computer%20Science%20Internship%20%5F%20Ghana%202024%20%281%29%20%281%29%20%281%29%2Epdf&parent=%2Fpersonal%2Fgcannella%5Fufl%5Fedu%2FDocuments%2FFall%202023%2FCIS4914%2FSenior%20Design%20%2D%20Project"
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
