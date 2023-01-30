import {Button} from "../src/components/Button";
import {Icons} from "../src/components/Icons";
import { MainComponent } from "./components/MainComponent";
import style from "./style.css";

function App() {
  return (
    <>
      <section className="App" id="start-page">
          <Icons/>
          <MainComponent/>
          <Button/>
      </section>
      <section className="App" id="advantages">
        {/* <Advantages/> */}
      </section>
    </>
  );
}

export default App;
