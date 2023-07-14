import React from 'react'
import "./Home.css"
import {Link} from 'react-scroll'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <div className=" home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h1>Welcome to <span style={{ color: "wheat"}}>Blogging Website</span></h1>
            <h4 style={{color:"#F79F1F"}}>BLOGGING THE TECH WORLD</h4>
            <Button ><Link  to="posts" spy={true} scroll="true">Explore</Link></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home