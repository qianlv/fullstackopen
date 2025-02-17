import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Content = ({ content, vote }) => {
  return <p>{content} <br /> has {vote} votes </p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const randomIndex = () => Math.floor(Math.random() * anecdotes.length)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(randomIndex())
  const randomClick = () => {
    setSelected(randomIndex())
  }
  const voteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Content content={anecdotes[selected]} vote={votes[selected]} />
      <Button handleClick={voteClick} text="vote" />
      <Button handleClick={randomClick} text="next anecdotes" />

      <h2>Anecdote with most votes</h2>
      <Content content={anecdotes[mostIndex]} vote={votes[mostIndex]} />
    </div>
  )
}

export default App
