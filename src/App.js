import React, { Component } from 'react';
import './resource/hexagons.css';
import image from './resource/globalplatform-qualified-card.jpg';
class App extends Component {
  render() {
    return <div className="container-fluid">
        <div className="card">
          <div className="inCard">
            <h1> SCMS CDG GlabalPlatform</h1>
          </div>
        </div>
        <ul id="hexGrid">
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="https://www.facebook.com/">
                <img src={image} alt="" />
                <h1>Profile Management System</h1>
                <p>manage profile</p>
                test
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="http://localhost/gp/PrePerso.html">
                <img src={image} alt="" />
                <h1>Pre-Personalization System</h1>
                <p>pre-perso</p>
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="http://localhost/gp/infoCard.html">
                <img src={image} alt="" />
                <h1>Card Production System</h1>
                <p>manage card</p>
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="http://localhost/gp/ManagePin.html">
                <img src={image} alt="" />
                <h1>Manage PIN System</h1>
                <p>Manage Pin</p>
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="#">
                <img src={image} alt="" />
                <h1>Key/Card/App/Profile Life Cycle Management</h1>
                <p>manage key/card/app profile</p>
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="http://localhost/gp/KeyManage.html">
                <img src={image} alt="" />
                <h1>Key Management System</h1>
                <p>management key</p>
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="#">
                <img src={image} alt="" />
                <h1>App Management System</h1>
                <p>management app</p>
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="#">
                <img src={image} alt="" />
                <h1>Card Inventory/Card Control System</h1>
                <p>card Inventory & card Control System</p>
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="#">
                <img src={image} alt="" />
                <h1>Report System</h1>
                <p>generate and manage report</p>
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="#">
                <img src={image} alt="" />
                <h1>Customer Support System</h1>
                <p>support customer to use</p>
              </a>
            </div>
          </li>
        </ul>
      </div>;
  }
}

export default App;
