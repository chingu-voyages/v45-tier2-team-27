import NewSearchBtn from "./NewSearchBtn"
import BigChartBorder from "./BigChartBorder"
import BackResultsBtn from "./BackResultsBtn"
import "../SearchResults.css";
import DarkMode from "./DarkMode";
import AppTitle from "./AppTitle";

export default function BigChart() {
    return (
        <>
        <AppTitle />
            <div className="big-chart-container ml-48 mt-0">

                <div className="big-chart-page flex mx-6 my-20 justify-center items-center">
                    <BigChartBorder />

                    <div className="big-chart-btns">
                    <NewSearchBtn />
                    <BackResultsBtn />
                    </div>
                    <div className="big-chart-icons">
                        <DarkMode />
                    </div>

                </div>
            </div>
        </>
    );
}