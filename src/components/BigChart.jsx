import NewSearchBtn from "./NewSearchBtn"
import BigChartBorder from "./BigChartBorder"
import BackResultsBtn from "./BackResultsBtn"
import "../SearchResults.css";

export default function BigChart() {
    return (
      <div className="big-chart-container">
        <BigChartBorder />

        <div className="big-chart-btns">
          <NewSearchBtn />
          <BackResultsBtn />
        </div>
      </div>
    );
}