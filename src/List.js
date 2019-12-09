import React, {useReducer, useState, useEffect } from 'react';
import reducer from "./reducer";


const initialState = { count: 0 };
function List({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <p>List的Count</p>
      <p>List的Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>加+</button>
    </>
  )
}

export default List;
