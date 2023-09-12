import { useContext } from "react";
import { AuthContext } from "../App";


export default function NewSearchBtn() {

  const { darkMode } = useContext(AuthContext);
  return (
    <div className="mx-10 my-12 py-1 bottom-20 relative new-search-container">
      <img
        src={`${
          darkMode
            ? "/images/large-white-border.png"
            : "/images/large-black-border.png"
        }`}
        alt=""
        className="large-black-border absolute -top-[0.35rem] left-0 right-0 m-auto"
      />
      <a
        href="/"
        className="uppercase relative new-search-btn"
        aria-label="Start a new search"
      >
        Start new search
      </a>
    </div>
  );
}
