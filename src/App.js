import { useState } from "react";
import "./App.css";

function App() {
  const gridNums = [];
  for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 6; col++) {
      gridNums.push({ row: row, col: col });
    }
  }

  const rows = [];
  for (let i = 0; i < 11; i++) {
    rows.push(i);
  }

  const cols = [];
  for (let i = 0; i < 6; i++) {
    cols.push(i);
  }

  // console.log(gridNums, gridNums.map(<div></div>));
  const [grid, setGrid] = useState(
    rows.map((row) => (
      <div key={row} className={`row row-${row}`}>
        {cols.map((col) => (
          <div
            key={`${row} ${col}`}
            className={`square square-${row}-${col}`}
          ></div>
        ))}
      </div>
    ))
  );

  console.log(grid);

  const [max, setMax] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <div className="game">
          <div className="score">Score</div>
          <div className="nextIcons">
            <div className="smallRow">
              <div className="square"></div>
            </div>
            <div className="smallRow">
              <div className="square"></div>
            </div>
          </div>
          <div className="grid">{grid}</div>
          <div className="unlockedIcons"></div>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
