import React, { PureComponent } from 'react'
import '../resource/css/style.css'
import HeaderNav from '../components/HeaderNav'
import FaceShadow from '../resource/images/face_shadow.png'
class Infocard extends PureComponent {
  render() {
    return <div>
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
                      <p id="pid">
                        .................................................................................................
                      </p>
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>ชื่อ-สกุล</h3>
                      <p id="thai_name">
                        .................................................................................................
                      </p>
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>Name-Lastname</h3>
                      <p id="eng_name">
                        .................................................................................................
                      </p>
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>เกิด</h3>
                      <p id="dob">
                        .................................................................................................
                      </p>
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>ศาสนา</h3>
                      <p id="reg">
                        .................................................................................................
                      </p>
                    </div>
                  </div>
                  <div className="service-list">
                    <div className="service-list-col2">
                      <h3>ที่อยู่</h3>
                      <p id="address">
                        .................................................................................................
                      </p>
                    </div>
                  </div>
                </div>
                <figure className="col-lg-6 col-sm-5  text-right wow fadeInUp delay-02s">
                  <img id="image" src={FaceShadow} />
                </figure>
              </div>
              <button style={{ margin: '20px' }} id="btn">
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
  }
}

export default Infocard
