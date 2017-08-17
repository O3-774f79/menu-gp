import React, { PureComponent } from 'react'
import HeaderNav from '../components/HeaderNav'
import '../resource/css/style.css'
import { DropdownButton, MenuItem, Button } from 'react-bootstrap'
class Managepin extends PureComponent {
  render() {
    return <div>
        <HeaderNav />
        <div className="main-section">
          <div className="container">
            <h2 style={{ marginBottom: '20px' }} className="well" id="service">
              Manage Pin System
            </h2>
            <div className="well" id="service-body">
              <div className="row">
                <div className="col-lg-3   text-left wow fadeInUp delay-02s">
                  <h3>นาย พิทักษ์ ปกป้อง </h3>
                </div>
                <div className="col-lg-6  wow fadeInLeft delay-05s">
                  <div className="service-list">
                    <div className="service-list-col2">
                      <span id="text-comfirm" />
                      <input style={{ width: '100%', marginTop: '20px' }} value="1234567812345678123456781234567812345678123456781234567812345678" disabled />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3   text-left wow fadeInUp delay-02s">
                  <button style={{ marginTop: '10px' }} type="button" className="btn btn-primary">
                    เปลี่ยน Key
                  </button>
                  <DropdownButton style={{ marginTop: '10px' }} title="โปรดพิจารณา" id="bg-nested-dropdown">
                    <MenuItem eventKey="1">อนุมัติ</MenuItem>
                    <MenuItem eventKey="2">ไม่อนุมัติ</MenuItem>
                  </DropdownButton>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3   text-left wow fadeInUp delay-02s">
                  <h3>นาย พิทักษ์ จะปกป้อง </h3>
                </div>
                <div className="col-lg-6  wow fadeInLeft delay-05s">
                  <div className="service-list">
                    <div className="service-list-col2">
                      <span id="text-comfirm" />
                      <input id="tb-key" style={{ width: '100%', marginTop: '20px' }} value="1234567812345678123456781234567812345678123456781234567812345678" disabled />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3   text-left wow fadeInUp delay-02s">
                  <button style={{ marginTop: '10px' }} type="button" className="btn btn-primary">
                    เปลี่ยน Key
                  </button>
                  <DropdownButton style={{ marginTop: '10px' }} title="โปรดพิจารณา" id="bg-nested-dropdown">
                    <MenuItem eventKey="1">อนุมัติ</MenuItem>
                    <MenuItem eventKey="2">ไม่อนุมัติ</MenuItem>
                  </DropdownButton>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-1  text-left wow fadeInUp delay-02s">
                  <h3>นาย พิทักษ์ ไม่ปกป้อง </h3>
                </div>
                <div className="col-lg-6 col-sm-6 wow fadeInLeft delay-05s">
                  <div className="service-list">
                    <div className="service-list-col2">
                      <span id="text-comfirm" />
                      <input style={{ width: '100%', marginTop: '20px' }} value="1234567812345678123456781234567812345678123456781234567812345678" disabled />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-1  text-left wow fadeInUp delay-02s">
                  <button style={{ marginTop: '10px' }} type="button" className="btn btn-primary">
                    เปลี่ยน Key
                  </button>
                  <DropdownButton style={{ marginTop: '10px' }} title="โปรดพิจารณา" id="bg-nested-dropdown">
                    <MenuItem eventKey="1">อนุมัติ</MenuItem>
                    <MenuItem eventKey="2">ไม่อนุมัติ</MenuItem>
                  </DropdownButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  ChangKey
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="recipient-name" className="form-control-label">
                      Key:
                    </label>
                    <input type="text" className="form-control" id="recipient-name" />
                  </div>
                  <div className="form-group">
                    <label for="message-text" className="form-control-label">
                      New Key:
                    </label>
                    <input type="text" className="form-control" id="message-text" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}
export default Managepin
