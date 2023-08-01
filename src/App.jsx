import kamusStail from "./App.module.css";
import stail from "./New.module.css";

function App() {
  return (
    <>
      <p className={[kamusStail.title]}>Hello React</p>
      <p className={[stail.title]}>Hello React</p>
    </>
  );
}

export default App;
