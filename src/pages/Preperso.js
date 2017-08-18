import React, { PureComponent } from 'react'
import HeaderNav from '../components/HeaderNav'
import '../resource/css/style.css'
import { DropdownButton, MenuItem, Button } from 'react-bootstrap'
class Preperso extends PureComponent {
  render() {
    return <div>
        <HeaderNav />
        <div className="main-section">
          <div className="container">
            <h2 className="well" style={{ boxShadow: '0 0 30px black' }}>
              Pre Perso
            </h2>
            <div className="well" id="service-body">
              <div className="row" style={{ margin: '50px 150px 100px 80px' }}>
                <div className="col-lg-4  ">
                  <label style={{ marginRight: '20px', fontSize: 20 }}>
                    หน่วยงาน
                  </label>
                  <DropdownButton title="Dropdown" id="bg-nested-dropdown" style={{ backgroundColor: '#1aff1a' }}>
                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                  </DropdownButton>
                </div>

                <div className="col-lg-4  ">
                  <label style={{ marginRight: '20px', fontSize: 20 }}>
                    Card Type
                  </label>
                  <DropdownButton title="Dropdown" id="bg-nested-dropdown" style={{ backgroundColor: '#1aff1a' }}>
                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                  </DropdownButton>
                </div>
                <div className="col-lg-4  ">
                  <label style={{ marginRight: '20px', fontSize: 20 }}>
                    Card Profile
                  </label>
                  <DropdownButton title="Dropdown" id="bg-nested-dropdown" style={{ backgroundColor: '#1aff1a' }}>
                    <MenuItem eventKey="1">Dropdown link</MenuItem>
                    <MenuItem eventKey="2">Dropdown link</MenuItem>
                  </DropdownButton>
                </div>
              </div>
              <form>
                <div className="form-group row">
                  <div className="col-xs-3 col-xs-offset-4">
                    <label for="ex3" style={{ marginRight: 10 }}>
                      จำนวนวน
                    </label>
                    <input className="form-control" id="ex3" type="text" />
                  </div>
                  <div className="col-xs-2">
                    <Button style={{ marginTop: 25 }} bsStyle="primary">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  }
}
export default Preperso
