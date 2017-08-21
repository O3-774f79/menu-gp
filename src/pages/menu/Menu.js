import React, { PureComponent } from 'react'
import MenuItem from './MenuItem'
import image from '../../resource/images/Untitled.png'
import image1 from '../../resource/images/Untitled Diagram (1).png'
import image2 from '../../resource/images/Untitled Diagram (2).png'
import image3 from '../../resource/images/Untitled Diagram (3).png'
import image4 from '../../resource/images/Untitled Diagram (4).png'
import image5 from '../../resource/images/Untitled Diagram (5).png'
import image6 from '../../resource/images/Untitled Diagram (6).png'
import image7 from '../../resource/images/Untitled Diagram (7).png'
import image8 from '../../resource/images/Untitled Diagram (8).png'
import image9 from '../../resource/images/Untitled Diagram (9).png'
class Menu extends PureComponent {
  render() {
    return <div className="container-fluid well">
        <div className="well" style={{ boxShadow: '0 0 30px black', backgroundColor: '#FFBE7D' }}>
          <div className="card">
            <div className="inCard">
              <h1> SCMS CDG GlabalPlatform</h1>
            </div>
          </div>
          <ul id="hexGrid">
            <li className="hex">
              <div className="hexIn">
                <a className="hexLink" href="http://localhost:3000">
                  <img src={image} alt="" />
                  <h1>Profile Management System</h1>
                  <p style={{ fontSize: 19 }}>manage profile</p>
                  test
                </a>
              </div>
            </li>

            <MenuItem title="Pre-Personalization" description="Pre-Personalization system" path="/pre-perso" image={image1} />
            <MenuItem title="Card Production" description="Card Production System" path="/info-card" image={image2} />
            <MenuItem title="Manage PIN " description="Manage PIN System" path="/pin-management" image={image3} />
            <MenuItem title="Life Cycle Management" description=" Key/Card/App/Profile Life Cycle Management" path="/life-cycle-managemgent" image={image4} />
            <MenuItem title="Key Management" description="Key Management system" path="/key-management" image={image5} />
            <MenuItem title="App Management" description="App Management system" path="/app-management" image={image6} />
            <MenuItem title="Card Inventory/Card Control " description="Card Inventory/Card Control system" path="/card-system" image={image7} />
            <MenuItem title="Report" description="Report System" path="/report-system" image={image8} />
            <MenuItem title="Customer Support " description="Customer Support system" path="/customer-support" image={image9} />
          </ul>
        </div>
      </div>
  }
}

export default Menu
