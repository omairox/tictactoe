import logo from "./logo.svg";
import './App.css';
import Square from './Square';
import { useState } from 'react';



function App() {

  const [squares , setSquares] = useState(['','','','','','','','',''])
  const [player , setPlayer] = useState(true)

  const handleReset = () => {
    setSquares(['','','','','','','','',''])
    setPlayer(true)
  }

  const winner = arr => {

    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i=0; i<combos.length; i++) {
      const [a,b,c] = combos[i];

      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return `${arr[a]} won!`
      }
    }
    return "Who will win?"
  }



  return (
    <div className="App">
      <span>{winner(squares)}</span>
      <div className='container'>
        {squares.map((value,index) => {

          return (            
          <Square 
            squares={squares}
            setSquares={setSquares}
            player={player}
            setPlayer={setPlayer}
            value={value}
            index={index}
          />)
        })}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
