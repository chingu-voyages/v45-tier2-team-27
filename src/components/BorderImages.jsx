import '../borderImages.css'

export default function BorderImages(){

    return(
        <div className="border-container">
            <div className="top-border-container">
                <img className="top-left-border" src="/images/top-left-border.png" alt="" />
                <img className="top-left-border-img" src="/images/top-left-border-img.png" alt="" />
                <img className="top-right-border" src="/images/top-right-border.png" alt="" />
                <img className="top-right-border-img" src="/images/top-right-border-img.png" alt="" />
            </div>

            
            <div className="bottom-border-container">
                <img className="bottom-right-border" src="/images/bottom-right-border.png" alt="" />
                <img className="bottom-left-border" src="/images/bottom-left-border.png" alt="" />
                <img className="bottom-right-border-img" src="/images/bottom-right-border-img.png" alt="" />
                <img className="bottom-left-border-img" src="/images/bottom-left-border-img.png" alt="" />
            </div>
            <img className="side-bar-img" src="/images/side-bar-img.png" alt="" />
        </div>
    )
}