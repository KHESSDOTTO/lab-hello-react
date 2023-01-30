import ironhackLogoXs from "../../images/ironhack-logo-xs.png";
import menuTopXs from "../../images/menu-top-xs.png";
import style from "./style.css"

export function Icons () {
    return (
        <header className="header">
          <img src={ironhackLogoXs} alt="ironhack-logo" className="icon" />
          <img src={menuTopXs} alt="menu-icon" className="small-icon" />
        </header>
    )
}

