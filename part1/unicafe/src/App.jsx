import { useState } from 'react'

const Header = ({ header }) => <h2>{header}</h2>

const Button = ({ handleClick, name }) => <button onClick={handleClick}>{name}</button>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td> <td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total == 0) {
    return <p>No feedback givn</p>
  }

  const avg = (good - bad) / total
  const positive = good / total * 100
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={positive + " %"} />
      </tbody>
    </table>
  )
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClick={() => setGood(good + 1)} name="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
      <Button handleClick={() => setBad(bad + 1)} name="bad" />
      <Header header="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
