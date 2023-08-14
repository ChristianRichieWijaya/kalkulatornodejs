import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [bilangan1, setCount1] = useState(1);
  const [bilangan2, setCount2] = useState(2);
  const result = Number(bilangan1) + Number(bilangan2);
  return (
    <>
      <h1>Kalkulator Penjumlahan</h1>
      <div>
        <input value={bilangan1} onChange={e=> setCount1(e.target.value)} type='number'></input>
        <br></br>
        <input value={bilangan2} onChange={e=> setCount2(e.target.value)} type='number'></input>
        <br></br>
        <p>Hasil : {result}</p>
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
