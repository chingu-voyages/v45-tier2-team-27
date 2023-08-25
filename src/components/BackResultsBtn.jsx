
export default function BackResultsBtn() {
      return (
        <div className="mx-10 my-12 py-1 relative">
          <img
            src="/images/large-black-border.png"
            alt=""
            className="large-black-border absolute -top-2 left-0 right-0 m-auto"
          />
          <a
            href="/search-results"
            className="uppercase relative"
            aria-label="Go back to search results"
          >
           Back to results
          </a>
        </div>
      );
}
