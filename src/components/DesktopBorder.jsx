export default function DesktopBorder() {
  return (
    <div className="desktop-border-container max-xl:hidden">
      <div className="left-border-container">
        <img src="/images/left-desktop-border.png" className="left-border-img" />
      </div>
      <div className="right-border-container">
        <img src="/images/right-desktop-border.png" className="right-border-img" />
      </div>
    </div>
  );
}
