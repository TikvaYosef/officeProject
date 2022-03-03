// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { getAllEmployees } from "./services/employeeService"

function App() {
  const getAll = () => {
    getAllEmployees()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getAll}>Click To All Eployees</button>
      </header>
    </div>
  )
}

export default App
