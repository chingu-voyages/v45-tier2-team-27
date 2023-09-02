import BorderImages from "./BorderImages";
import NewSearchBtn from "./NewSearchBtn";
import ChartBorder from "./ChartBorder"
// import Trapezoid from "./Trapezoid";
import "../SearchResults.css";


export default function Chart() {
    return (
        <div className="search-container text-center mt-12 mx-6 h-screen md:hidden">

            <h2 className="uppercase pb-2 ">You Searched:</h2>

            <div className="flex justify-center flex-col items-center">
                <img className="w-4/5 h-auto" src="/images/search_field.png" alt="" />
                <div className="flex justify-between" style={{ width: '68%', marginTop: '-15px' }}>
                    <p className="uppercase">
                        K
                    </p>
                    <span>&#8226;</span>
                    <p className="uppercase">2000-2010</p>
                    <span>&#8226;</span>
                    <p className="uppercase">Comp</p>
                    <span>&#8226;</span>
                    <p className="uppercase">Mass</p>
                </div>
            </div>

            <div className="flex justify-between justify-between items-center px-20 mt-6 md:hidden">
                <img className="w-20 h-20 border-2 border-black" src="/images/radar-menu.svg" alt="" />
                <img className="w-20 h-20" src="/images/radio-menu.png" alt="" />
                <img className="w-20 h-20" src="/images/graph-menu.svg" alt="" />
            </div>




            <div className="flex justify-center">
                <ChartBorder />
            </div>
            
            <NewSearchBtn />
            <BorderImages />
        </div>
    );
}
