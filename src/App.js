import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
// import reducer from "./reducer";
import List from "./List";
import Detail from "./Detail";




function App({initialCount}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)

    // 副作用(不执行)
    return () => {
      console.log('====================默认不执行, 点击执行')
    }
    // 解除副作用(执行)
    // return (() =>{
    //   console.log('===================默认执行, 点击执行')
    // })() 

  }, [count])

 
  return (
    <div>
      <p>You clicked {count} times</p>
      
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      
      <Router>
        <ul>
          <li> <Link to="/">首页</Link> </li>
          <li><Link to="/detail/">列表</Link> </li>
        </ul>
        <Route path="/" exact component={List} />
        <Route path="/detail/" component={Detail} />
      </Router>
    </div>
  )
}

export default App;
