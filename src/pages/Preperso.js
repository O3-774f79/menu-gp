import React, { PureComponent } from 'react'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Button  from 'react-bootstrap/lib/Button'
class Preperso extends PureComponent {
  render() {
    return (
      <div>
        <div className="row" style={{ margin: '50px 150px 100px 80px' }}>
          <div className="col-lg-4  ">
            <label style={{ marginRight: '20px', fontSize: 20 }}>
              หน่วยงาน
            </label>
            <DropdownButton
              title="Dropdown"
              id="bg-nested-dropdown"
              style={{ backgroundColor: '#1aff1a' }}
            >
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </div>

          <div className="col-lg-4  ">
            <label style={{ marginRight: '20px', fontSize: 20 }}>
              Card Type
            </label>
            <DropdownButton
              title="Dropdown"
              id="bg-nested-dropdown"
              style={{ backgroundColor: '#1aff1a' }}
            >
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </div>
          <div className="col-lg-4  ">
            <label style={{ marginRight: '20px', fontSize: 20 }}>
              Card Profile
            </label>
            <DropdownButton
              title="Dropdown"
              id="bg-nested-dropdown"
              style={{ backgroundColor: '#1aff1a' }}
            >
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </div>
        </div>
        <form>
          <div className="form-group row">
            <div className="col-xs-3 col-xs-offset-4">
              <label style={{ marginRight: 10 }}>จำนวนวน</label>
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
    )
  }
}
export default Preperso
