import React, { PureComponent } from 'react'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Button  from 'react-bootstrap/lib/Button'
class Preperso extends PureComponent {
  render() {
    return <div>
        <div className="row" style={{ margin: '50px 150px 100px 80px' }}>
          <div className="col-lg-4  ">
            <label style={{ marginRight: '20px', fontSize: 20 }}>
              หน่วยงาน
            </label>
            <DropdownButton title="หน่วยงาน" id="bg-nested-dropdown" style={{ backgroundColor: '#66cdaa' }}>
              <MenuItem eventKey="1">กรมการปกครอง</MenuItem>
            </DropdownButton>
          </div>

          <div className="col-lg-4  ">
            <label style={{ marginRight: '20px', fontSize: 20 }}>
              Card Type
            </label>
            <DropdownButton title="Card Type" id="bg-nested-dropdown" style={{ backgroundColor: '#66cdaa' }}>
              <MenuItem eventKey="1">Card</MenuItem>
            </DropdownButton>
          </div>
          <div className="col-lg-4  ">
            <label style={{ marginRight: '20px', fontSize: 20 }}>
              Card Profile
            </label>
            <DropdownButton title="Card Profile" id="bg-nested-dropdown" style={{ backgroundColor: '#66cdaa' }}>
              <MenuItem eventKey="1">PersonalCard</MenuItem>
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
  }
}
export default Preperso
