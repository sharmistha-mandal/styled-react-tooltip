import Tooltip from "./components/Tooltip";
import "./styles.css";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Tooltip text="Age from Age To" placement="right">
          <label htmlFor="myInput">My Input</label>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
