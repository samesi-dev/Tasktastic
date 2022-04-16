import React from 'react';
import './Home.css';
import { Button } from '../Layout/Header/Button';

const Home = () => {
    return (
    <div>
        <h1 className="Heading" >
            <span style={{textDecoration: 'line-through'}}>
            Procrastinate</span>
            <span>. Complete. Progress</span>
        </h1> 
      <p className="Heading-paragraph" >Capture, organize and share tasks from anywhere.
      <br></br>
      Your best ideas will always be with you and will always be synchronized.</p>
     <div id="wrapper"><Button>start now</Button></div>

    </div>
    )
}
export default Home;