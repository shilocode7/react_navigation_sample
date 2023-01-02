import React from 'react'
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>all componnets</h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}}>
        <h3>
      <Link to="/baga">to show baga</Link> | {" "}
      <Link to="/maga">to show maga</Link> | {" "}
      <Link to="/waga">to show waga</Link> | {" "}
      <Link to="/yaga">to show yaga</Link> | {" "}
      <Link to="/zoo">zoo</Link> | {" "}
      </h3>
      </nav>
      <Outlet />
    </div>
  )
}

export default App