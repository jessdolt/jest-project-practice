interface CounterTwoProps {
  count: number
  handleIncrement?: () => void
  handleDecrement?: () => void
}

const CounterTwo: React.FC<CounterTwoProps> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div>
      <h1>Counter Two</h1>

      <p>{count}</p>

      {handleIncrement && (
        <button onClick={() => handleIncrement()}>Increment</button>
      )}

      {handleDecrement && (
        <button onClick={() => handleDecrement()}>Decrement</button>
      )}
    </div>
  )
}

export default CounterTwo
