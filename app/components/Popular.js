import React from "react";
import { useState } from "react";

function Popular() {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button className="btn-clear nav-link">{language}</button>
        </li>
      ))}
    </ul>
  );
}

export default Popular;
