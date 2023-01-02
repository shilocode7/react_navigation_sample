import React from 'react'
import {Outlet, Link } from 'react-router-dom'

const Zoo = () => {
    return (
        <div>
            <h1>Zoo</h1><br></br>
            <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
                <h3>
                    <Link to="preditor">to show preditor</Link> | {" "}
                    <Link to="cuteanimals">to show cute animals</Link> | {" "}
                </h3><br></br>
                <img src="\image\zoo.jpg" alt="dog" style={{width: "60%" ,height:"250px"}}/>
            </nav>
            <Outlet />
        </div>
    )
}

export default Zoo