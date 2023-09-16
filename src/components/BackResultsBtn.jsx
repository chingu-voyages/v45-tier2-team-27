import { useContext } from "react";
import { AuthContext } from "../App";

export default function BackResultsBtn() {
  const { darkMode } = useContext(AuthContext);
  return (
    <div className="back-results-container">
      <img
        src={`${
          darkMode
            ? "/images/white-back-to-results-border.png"
            : "/images/back-to-results-border.png"
        }`}
        alt=""
        className="back-results-border"
      />
      <a
        href="/search-results"
        className="back-results-btn uppercase text-sm"
        aria-label="Go back to search results"
      >
        Back to results
      </a>
    </div>
  );
}
