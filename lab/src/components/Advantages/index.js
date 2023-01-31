import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon1.png"
import icon3 from "../../images/icon1.png"
import icon4 from "../../images/icon1.png"
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
    <article className="container" id="container1">
      <img src={icon1} alt="icon1" />
      <h1>{title1}</h1>
      <p>{text1}</p>
    </article>
    <article className="container" id="container2">
      <img src={icon2} alt="icon2" />
      <h1>{title2}</h1>
      <p>{text2}</p>
    </article>
    <article className="container" id="container3">
      <img src={icon3} alt="icon3" />
      <h1>{title3}</h1>
      <p>{text3}</p>
    </article>
    <article className="container" id="container4">
      <img src={icon4} alt="icon4" />
      <h1>{title4}</h1>
      <p>{text4}</p>
    </article>
    </>
  );
};
