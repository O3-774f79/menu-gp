import React, { PureComponent } from 'react'
import '../resource/css/style.css'
import HeaderNav from '../components/HeaderNav'
import FaceShadow from '../resource/images/face_shadow.png'
import { FormControl } from 'react-bootstrap'
class Infocard extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      PID: 'PID',
      ThaiName: 'ThaiName',
      EngName: 'EngName',
      DOB: 'DOB',
      Religion: 'Religion',
      Address: 'Address'
    }
    this.inputData = this.inputData.bind(this)
  }
  inputData() {
    this.setState({
      PID: '123456789',
      Name: 'test tester',
      EngName: 'Eng englist',
      DOB: '5-10-59',
      Religion: 'satan',
      Address: 'bankok'
    })
  }

  render() {
    return (
      <div className="root">
        <HeaderNav />
        <div className="main-section">
          <div className="container">
            <h2 className="well" id="service">
              Card Production System
            </h2>
            <div className="well" id="service-body">
              <div className="row">
                <div className="col-lg-4 col-sm-6 wow fadeInLeft delay-05s">
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>PID</h3>
                      <FormControl
                        type="text"
                        value={this.state.PID}
                        placeholder="Enter text"
                        disable
                      />
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>ชื่อ-สกุล</h3>
                      <FormControl
                        type="text"
                        value={this.state.ThaiName}
                        placeholder="Enter text"
                        disable
                      />
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>Name-Lastname</h3>
                      <FormControl
                        type="text"
                        value={this.state.EngName}
                        placeholder="Enter text"
                        disable
                      />
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>เกิด</h3>
                      <FormControl
                        type="text"
                        value={this.state.DOB}
                        placeholder="Enter text"
                        disable
                      />
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>ศาสนา</h3>
                      <FormControl
                        type="text"
                        value={this.state.Religion}
                        placeholder="Enter text"
                        disable
                      />
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>ที่อยู่</h3>
                      <FormControl
                        type="text"
                        value={this.state.Address}
                        placeholder="Enter text"
                        disable
                      />
                    </div>
                  </div>
                </div>
                <figure className="col-lg-6 col-sm-5  text-right wow fadeInUp delay-02s">
                  <img id="image" src={FaceShadow} />
                </figure>
              </div>
              <button
                style={{ margin: '20px' }}
                id="btn"
                onClick={this.inputData}
              >
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Infocard
