import React, { PureComponent } from 'react'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import ModalPin from '../components/ModalPin'

class PinManage extends PureComponent {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3 ">
            <h3>นาย พิทักษ์ ปกป้อง </h3>
          </div>
          <div className="col-lg-6 ">
            <div className="service-list">
              <div className="service-list-col2">
                <span id="text-comfirm" />
                <input
                  style={{ width: '100%', marginTop: '20px' }}
                  value="1234567812345678123456781234567812345678123456781234567812345678"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3  ">
            <ModalPin />
            <DropdownButton
              style={{ marginTop: '10px' }}
              title="โปรดพิจารณา"
              id="bg-nested-dropdown"
            >
              <MenuItem eventKey="1">อนุมัติ</MenuItem>
              <MenuItem eventKey="2">ไม่อนุมัติ</MenuItem>
            </DropdownButton>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 ">
            <h3>นาย พิทักษ์ จะปกป้อง </h3>
          </div>
          <div className="col-lg-6  ">
            <div className="service-list">
              <div className="service-list-col2">
                <span id="text-comfirm" />
                <input
                  id="tb-key"
                  style={{ width: '100%', marginTop: '20px' }}
                  value="1234567812345678123456781234567812345678123456781234567812345678"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3  ">
            <ModalPin />
            <DropdownButton
              style={{ marginTop: '10px' }}
              title="โปรดพิจารณา"
              id="bg-nested-dropdown"
            >
              <MenuItem eventKey="1">อนุมัติ</MenuItem>
              <MenuItem eventKey="2">ไม่อนุมัติ</MenuItem>
            </DropdownButton>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-1 ">
            <h3>นาย พิทักษ์ ไม่ปกป้อง </h3>
          </div>
          <div className="col-lg-6 col-sm-6 ">
            <div className="service-list">
              <div className="service-list-col2">
                <span id="text-comfirm" />
                <input
                  style={{ width: '100%', marginTop: '20px' }}
                  value="1234567812345678123456781234567812345678123456781234567812345678"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-1 ">
            <ModalPin />
            <DropdownButton
              style={{ marginTop: '10px' }}
              title="โปรดพิจารณา"
              id="bg-nested-dropdown"
            >
              <MenuItem eventKey="1">อนุมัติ</MenuItem>
              <MenuItem eventKey="2">ไม่อนุมัติ</MenuItem>
            </DropdownButton>
          </div>
        </div>
      </div>
    )
  }
}
export default PinManage
