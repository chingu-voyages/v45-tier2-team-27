import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
// import Trapezoid from "./Trapezoid";
import "../SearchResults.css";

export default function SearchResults() {
  return (
    <div className="search-container text-center mt-12 mx-6">
      <h1 className="text-2xl md:text-3xl uppercase py-4">Skyfall</h1>
      <h2 className="uppercase pb-2">You Searched:</h2>
      <div className="search-field flex justify-evenly lg:w-9/12 lg:m-auto">
        <p className="uppercase">
          <q>K</q>
        </p>
        <span>&#8226;</span>
        <p className="uppercase">2000-2010</p>
        <span>&#8226;</span>
        <p className="uppercase">Comp</p>
        <span>&#8226;</span>
        <p className="uppercase">Mass</p>
      </div>
      {/* Results table */}
      <table className="w-full border border-1 border-solid border-black lg:w-9/12 lg:m-auto">
        <thead className="bg-gray-300">
          <tr>
            <th className="search-table-header uppercase">Name</th>
            <th className="search-table-header uppercase underline">
              <a href="/" aria-label="View year of strike summary ">
                Year
              </a>
            </th>
            <th className="search-table-header uppercase underline">
              <a href="/" aria-label="View composition materials summary">
                Comp
              </a>
            </th>
            <th className="search-table-header uppercase underline">
              <a href="/" aria-label="View mass value summary">
                Mass
              </a>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="search-results">
          <tr>
            <td className=" search-results-data">Kavarpura</td>
            <td className=" search-results-data">2004</td>
            <td className=" search-results-data">Iron, IIE-an</td>
            <td className=" search-results-data">6800</td>
            <td className=" search-results-data">
              <a
                href="/"
                className="uppercase underline text-sky-700"
                aria-label="View map"
              >
                Map
              </a>
            </td>
          </tr>
          <tr>
            <td className=" search-results-data">Kemer</td>
            <td className=" search-results-data">2008</td>
            <td className=" search-results-data">L4</td>
            <td className=" search-results-data">5750</td>
            <td className=" search-results-data">
              <a
                href="/"
                className="uppercase underline text-sky-700"
                aria-label="View map"
              >
                Map
              </a>
            </td>
          </tr>
          <tr>
            <td className=" search-results-data">Kosice</td>
            <td className=" search-results-data">2010</td>
            <td className=" search-results-data">H5</td>
            <td className=" search-results-data">4300</td>
            <td className=" search-results-data">
              <a
                href="/"
                className="uppercase underline text-sky-700"
                aria-label="View map"
              >
                Map
              </a>
            </td>
          </tr>
          <tr>
            <td className=" search-results-data">Kendrapara</td>
            <td className=" search-results-data">2003</td>
            <td className=" search-results-data">H4-5</td>
            <td className=" search-results-data">6669.2</td>
            <td className=" search-results-data">
              <a
                href="/"
                className="uppercase underline text-sky-700"
                aria-label="View map"
              >
                Map
              </a>
            </td>
          </tr>
          <tr>
            <td className=" search-results-data">Kilabo</td>
            <td className=" search-results-data">2002</td>
            <td className=" search-results-data">LL6</td>
            <td className=" search-results-data">19000</td>
            <td className=" search-results-data">
              <a
                href="/"
                className="uppercase underline text-sky-700"
                aria-label="View map"
              >
                Map
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <NewSearchBtn />
      <BorderImages />
    </div>
  );
}
