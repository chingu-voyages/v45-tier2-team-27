import { useContext } from "react";
import { AuthContext } from "../App";

export default function NewSearchBtn() {
  const { darkMode } = useContext(AuthContext);
  return (
    <div className="new-search-container">
      <img
        src={`${
          darkMode
            ? "/images/large-white-border.png"
            : "/images/large-black-border.png"
        }`}
        alt=""
        className="new-search-border"
      />
      <a
        href="/"
        className="new-search-btn"
        aria-label="Start a new search"
      >
        Start new search
      </a>
    </div>
  );
}
