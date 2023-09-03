import NewSearchBtn from "./NewSearchBtn"
import BigChartBorder from "./BigChartBorder"
import BackResultsBtn from "./BackResultsBtn"
import "../SearchResults.css";

export default function BigChart() {
    return (
        <div className="flex mx-6 my-20 justify-center items-center">
            <BigChartBorder />

            <div>
                <NewSearchBtn />
                <BackResultsBtn />
            </div>

        </div>
    )
}