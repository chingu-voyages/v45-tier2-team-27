export default function NewSearchBtn() {
  return (
    <div className="mx-10 my-12 py-1 bottom-20 relative">
      <img
        src="/images/large-black-border.png"
        alt=""
        className="large-black-border absolute -top-2 left-0 right-0 m-auto"
      />
      <a href="/" className="uppercase relative" aria-label="Start a new search">
        Start new search
      </a>
    </div>
  );
}
