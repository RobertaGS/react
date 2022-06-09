import React, {useState} from 'react'

const Couter = () => {

  //state darome virsuje
  //1-current, 2-method state update, 3-initial value

  const [count, setCount] = useState(0);
  //aprasome f-jas
  const decrementCount = () => {
    setCount(prevCount => prevCount -1)
}
const incrementCount = () => {
    setCount(prevCount => prevCount +1)
}

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>


    </div>
  )
}

export default Couter