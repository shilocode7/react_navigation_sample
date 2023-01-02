import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const CuteAnimals = () => {
    return (
        <div style={{backgroundColor: "rgb(116, 245, 185)"}}><h1>Cute Animals</h1><br></br>
            <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                <h3>
                    <Link to="/zoo/cuteanimals/monkey">to show monkey</Link> | {" "}
                    <Link to="/zoo/cuteanimals/squirrel">to show squirrel</Link> | {" "}
                </h3>
            </nav>
            <Outlet />
        </div>
    )
}

export default CuteAnimals