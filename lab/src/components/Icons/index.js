import ironhackLogoXs from "../../images/ironhack-logo-xs.png";
import menuTopXs from "../../images/menu-top-xs.png";
import styles from "./style.module.css"

export function Icons () {
    return (
        <header className={styles.header}>
          <img src={ironhackLogoXs} alt="ironhack-logo" className={styles.icon} />
          <img src={menuTopXs} alt="menu-icon" className={styles.smallIcon} />
        </header>
    )
}

