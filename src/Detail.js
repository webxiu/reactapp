import React, { useState, useEffect, useReducer } from 'react';
import reducer from "./reducer";

const initialState = { count: 0 };
function Detail({initialCount}) {
  const [count3, setCount] = useState(10);
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count3} times`)
    // 副作用(不执行)
    return () => {
      console.log('====================默认不执行, 点击执行')
    }
    // 解除副作用(执行)
    // return (() =>{
    //   console.log('===================默认执行, 点击执行')
    // })() 

  }, [count3])
  return (
    <>
      <p>Detail的Count: {state.count}</p>

      <button onClick={() => dispatch({ type: 'decrement' })}>减-</button>
      <button onClick={() => { setCount(count3 + 1) }}>click me</button>
    </>
  )
}


export default Detail;
