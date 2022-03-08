import { useState } from 'react'
import { isPrime, isFibonacci } from './utils'
import './App.css'

export default function App() {
  const [numberInput, setNumberInput] = useState('')
  const [mode, setMode] = useState('isPrime')
  const [validatedValue, setValidatedValue] = useState(false)

  const validateNumberInput = input => {
    let processingInput = input,
      finalizedInput
    if (input < 0) processingInput = 1
    if (!isNaN(processingInput))
      finalizedInput = processingInput && Math.round(processingInput)
    return finalizedInput
  }

  return (
    <div className="App">
      <div className="container">
        <div className="first-column">
          <input
            type="number"
            onChange={e => {
              setNumberInput(validateNumberInput(e.target.value))

              if (mode === 'isPrime') {
                setValidatedValue(isPrime(validateNumberInput(e.target.value)))
              }
              if (mode === 'isFibonacci') {
                setValidatedValue(
                  isFibonacci(validateNumberInput(e.target.value))
                )
              }
            }}
            value={numberInput}
          />
        </div>
        <div className="second-column">
          <select
            onChange={e => {
              setMode(e.target.value)

              if (e.target.value === 'isPrime') {
                setValidatedValue(isPrime(numberInput))
              }
              if (e.target.value === 'isFibonacci') {
                setValidatedValue(isFibonacci(numberInput))
              }
            }}
            value={mode}
          >
            <option value="isPrime" defaultValue>
              isPrime
            </option>
            <option value="isFibonacci">isFibonacci</option>
          </select>
        </div>
        <div className="third-column">{`${validatedValue}`}</div>
      </div>
    </div>
  )
}
