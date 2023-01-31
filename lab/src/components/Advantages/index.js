import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import icon4 from "../../images/icon4.png"
import styles from "./style.module.css"
const title1 = "Declarative";
const text1 = "React makes it painless to create interactive UIs.";
const title2 = "Components";
const text2 = "Build encapsulated components that manage their state";
const title3 = "Single-Way";
const text3 = "A set of imutable values are passed to the component's";
const title4 = "JSX";
const text4 = "Statically typed, designed to run on modern browsers.";

export function Advantages() {
  return (
    <>
    <article className={styles.container} id="container1">
      <img src={icon1} alt="icon1" className={styles.iconImage} />
      <h1 className={styles.articleTitle}>{title1}</h1>
      <p className={styles.grayText}>{text1}</p>
    </article>
    <article className={styles.container} id="container2">
      <img src={icon2} alt="icon2" className={styles.iconImage} />
      <h1 className={styles.articleTitle}>{title2}</h1>
      <p className={styles.grayText}>{text2}</p>
    </article>
    <article className={styles.container} id="container3">
      <img src={icon3} alt="icon3" className={styles.iconImage} />
      <h1 className={styles.articleTitle}>{title3}</h1>
      <p className={styles.grayText}>{text3}</p>
    </article>
    <article className={styles.container} id="container4">
      <img src={icon4} alt="icon4" className={styles.iconImage} />
      <h1 className={styles.articleTitle}>{title4}</h1>
      <p className={styles.grayText}>{text4}</p>
    </article>
    </>
  );
};
