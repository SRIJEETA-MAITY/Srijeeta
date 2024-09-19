import  React from 'react';
import sri from './sri.jpg';

const Contact=()=>{
    return (
        <div className="con">
            <div className="contact">
             <h1>Name:   SRIJEETA MAITY</h1>
             <h1>Contact:8653026351</h1>
             <h1>EMail:  srijeetamaity2002@gmail.com</h1>
             <a href="https://github.com/SRIJEETA-MAITY">GitHub</a>
            </div>
            <div className="pic">
                <img className='me' src={sri} alt=""/>
            </div>
           
        </div>
    )
}

export default Contact