import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
import DesktopBorder from "./DesktopBorder";

const data = [
  {
    name: "Kavarpura",
    id: 47351,
    recclass: "Iron, IIE-an",
    mass: 6800,
    year: "2006",
  },
  {
    name: "Kemer",
    id: 53654,
    recclass: "L4",
    mass: 5760,
    year: "2008",
  },
  {
    name: "Kosice",
    id: 53810,
    recclass: "H5",
    mass: 4300,
    year: "2010",
  },
  {
    name: "Kendrapara",
    id: 12276,
    recclass: "H4-5",
    mass: 669.2,
    year: "2003",
  },
  {
    name: "Kilabo",
    id: 12307,
    recclass: "LL6",
    mass: 19000,
    year: "2002",
  },
  {
    name: "Kilbourn",
    id: 12308,
    recclass: "H5",
    mass: 772,
    year: "1911",
  },
  {
    name: "Kingai",
    id: 12316,
    recclass: "H6",
    mass: 67.400000000000006,
    year: "1967",
  },
  {
    name: "Kirbyville",
    id: 12321,
    recclass: "Eucrite-mmict",
    mass: 97.7,
    year: "1906",
  },
];

export default function SearchResults() {
  return (
    <div className="search-container text-center mt-12 ">
      <div className="mx-6 mb-40">
        <h1 className="text-3xl md:text-3xl uppercase py-4">Skyfall</h1>
        <h2 className="uppercase pb-2">You Searched:</h2>
        {/* Search field */}
        <div className="search-field flex justify-evenly lg:m-auto">
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
        <div className="table-container">
          <table className=" w-full border border-1 border-solid border-black lg:m-auto">
            <thead className="bg-gray-300 sticky top-0">
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
            {/*  */}
            <tbody className="search-results">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="search-results-data">{item.name}</td>
                  <td className="search-results-data">{item.year}</td>
                  <td className="search-results-data">{item.recclass}</td>
                  <td className="search-results-data">
                    {item.mass.toFixed(2)}
                  </td>
                  <td className="search-results-data">
                    <a
                      href="/"
                      className="uppercase underline text-sky-700"
                      aria-label="View map"
                    >
                      Map
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <NewSearchBtn />
      <BorderImages />
      <DesktopBorder />
    </div>
  );
}

// <tr>
//   <td className=" search-results-data">Kemer</td>
//   <td className=" search-results-data">2008</td>
//   <td className=" search-results-data">L4</td>
//   <td className=" search-results-data">5750</td>
//   <td className=" search-results-data">
//     <a
//       href="/"
//       className="uppercase underline text-sky-700"
//       aria-label="View map"
//     >
//       Map
//     </a>
//   </td>
// </tr>
// <tr>
//   <td className=" search-results-data">Kosice</td>
//   <td className=" search-results-data">2010</td>
//   <td className=" search-results-data">H5</td>
//   <td className=" search-results-data">4300</td>
//   <td className=" search-results-data">
//     <a
//       href="/"
//       className="uppercase underline text-sky-700"
//       aria-label="View map"
//     >
//       Map
//     </a>
//   </td>
// </tr>
// <tr>
//   <td className=" search-results-data">Kendrapara</td>
//   <td className=" search-results-data">2003</td>
//   <td className=" search-results-data">H4-5</td>
//   <td className=" search-results-data">6669.2</td>
//   <td className=" search-results-data">
//     <a
//       href="/"
//       className="uppercase underline text-sky-700"
//       aria-label="View map"
//     >
//       Map
//     </a>
//   </td>
// </tr>
// <tr>
//   <td className=" search-results-data">Kilabo</td>
//   <td className=" search-results-data">2002</td>
//   <td className=" search-results-data">LL6</td>
//   <td className=" search-results-data">19000</td>
//   <td className=" search-results-data">
//     <a
//       href="/"
//       className="uppercase underline text-sky-700"
//       aria-label="View map"
//     >
//       Map
//     </a>
//   </td>
// </tr>
