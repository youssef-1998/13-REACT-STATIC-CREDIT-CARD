import React from 'react';
import backgroud from './background.jpg';
import puce from './puce 1.png';
import visa from './visa.jpeg';
import './App.css';


function App() {
  return (
    <div className='card'>
      <h1 class="grand-titre ">CREDIT CARD</h1>
      <img className="puce" src={puce}></img>

      <div className="container">

        <div className="column">

          <p className="num-1">7253  3256  7895  1245</p>
          <p className="t-date">MONTH/YEAR</p>

          <div className="l-2-horizontal">
            <p className="n-date">5422</p>

            <div className="box-right">
              <p className="validation">VALID<br />THRU</p>
              <i class="fas fa-caret-right" ></i>
              <p className="n-date">11/50</p>
            </div>

          </div>

          <p className="sous-titre">CARDHOLDER</p>

        </div>

        <img className="visa" src={visa}></img>

      </div>

    </div>
  );
}

export default App;
