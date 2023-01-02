import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Preditor = () => {
    return (
        <div style={{backgroundColor: "rgb(201, 238, 108)"}}><h1>Preditor</h1><br></br>
            <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                <h3>
                    <Link to="/zoo/preditor/tiger">to show tiger</Link> | {" "}
                    <Link to="/zoo/preditor/chitta">to show chitta</Link> | {" "}
                </h3>
            </nav>
            <Outlet />
        </div>
    )
}

export default Preditor