import Radar from './RadarChart'

export default function ChartBorder() {
    return (
        <div>
            <div className="field-border">


                <img className="field-top-dot" src="/images/field-top-dot.svg" />

                
                <img className="field-left-image" src="/images/field-left.svg" />
                
                <img className="chart-top-left" src="/images/chart-left-top-border.svg" />
                <span className="inner-text">Mass Value</span>  {/* Added this line */}
            </div>

            <div className="chart-border">
                <Radar />
            </div>
        </div>
    )
}