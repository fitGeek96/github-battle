import React from "react";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { fetchPopularRepos } from "../utils/api";
function LanguagesNav({ state, setState }) {
  const { selectedLanguage } = state;
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  console.log(selectedLanguage);

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            onClick={() => setState({ selectedLanguage: language })}
            style={language === selectedLanguage ? { color: "red" } : null}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Popular() {
  const [state, setState] = useState({
    selectedLanguage: "All",
    repos: null,
    error: null,
  });

  const { selectedLanguage, repos, error } = state;

  useEffect(() => {
    fetchPopularRepos(selectedLanguage).then(
      (reposData) => setState({ repos: reposData, selectedLanguage }),
      (error) => setState({ error: error }),
    );
  }, [selectedLanguage]);

  const isLoading = () => repos === null && error === null;

  return (
    <>
      <LanguagesNav state={state} setState={setState} />

      {isLoading() && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
    </>
  );
}

export default Popular;
