import React, { PureComponent } from 'react'
import '../resource/css/hexagons.css'
import { Link } from 'react-router-dom'
import image from '../resource/images/Untitled.png'
import image1 from '../resource/images/Untitled Diagram (1).png'
import image2 from '../resource/images/Untitled Diagram (2).png'
import image3 from '../resource/images/Untitled Diagram (3).png'
import image4 from '../resource/images/Untitled Diagram (4).png'
import image5 from '../resource/images/Untitled Diagram (5).png'
import image6 from '../resource/images/Untitled Diagram (6).png'
import image7 from '../resource/images/Untitled Diagram (7).png'
import image8 from '../resource/images/Untitled Diagram (8).png'
import image9 from '../resource/images/Untitled Diagram (9).png'
const styles = {
    p: {
      fontSize: 20
    } 
}
class Menu extends PureComponent {
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
                <p style={{ fontSize: 19 }}>manage profile</p>
                test
              </a>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Preperso">
                <img src={image1} alt="" />
                <h1>Pre-Personalization System</h1>
                <p style={{ fontSize: 19 }}>pre-perso</p>
                test
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Infocard">
                <img src={image2} alt="" />
                <h1>Card Production System</h1>
                <p style={{ fontSize: 19 }}>manage card</p>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Managepin">
                <img src={image3} alt="" />
                <h1>Manage PIN System</h1>
                <p style={{ fontSize: 19 }}>Manage Pin</p>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Lifecyclemanagement">
                <img src={image4} alt="" />
                <h1>Key/Card/App/Profile Life Cycle Management</h1>
                <p style={{ fontSize: 19 }}>manage key/card/app profile</p>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Keymanage">
                <img src={image5} alt="" />
                <h1>Key Management System</h1>
                <p style={{ fontSize: 19 }}>management key</p>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Appmanage">
                <img src={image6} alt="" />
                <h1>App Management System</h1>
                <p style={{ fontSize: 19 }}>management app</p>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Cardsystem">
                <img src={image7} alt="" />
                <h1>Card Inventory/Card Control System</h1>
                <p style={{ fontSize: 19 }}>
                  card Inventory & card Control System
                </p>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Reportsystem">
                <img src={image8} alt="" />
                <h1>Report System</h1>
                <p style={{ fontSize: 19 }}>generate and manage report</p>
              </Link>
            </div>
          </li>
          <li className="hex">
            <div className="hexIn">
              <Link className="hexLink" to="/Customersupport">
                <img src={image9} alt="" />
                <h1>Customer Support System</h1>
                <p style={{ fontSize: 19 }}>support customer to use</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
  }
}

export default Menu
