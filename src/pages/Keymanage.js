import React, { PureComponent } from 'react'
import '../resource/css/style.css'
import HeaderNav from '../components/HeaderNav'

class Keymanage extends PureComponent {
  render() {
    return <div>
        <HeaderNav />
        <section className="main-section">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <div className="well" id="service">
                <h2> Key Management System</h2>
              </div>
              <div className="well" style={{ height: '500px' }} id="service-body">
                <div className="row">
                  <div className="col-md-12" style={{ marginBottom: '50px' }}>
                    <div className="col-md-2" style={{ textAlign: 'right' }}>
                      <label for="">input PID</label>
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-2">
                      <button className="btn btn-warning">verify</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="col-md-12">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'center', width: '20%' }}>
                            Name
                          </th>
                          <th style={{ textAlign: 'center', width: '80%' }}>
                            Key
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>John</td>
                          <td>
                            1234567812345678123456781234567812345678123456781234567812345678
                          </td>
                        </tr>
                        <tr>
                          <td>Mary</td>
                          <td>
                            1234567812345678123456781234567812345678123456781234567812345678
                          </td>
                        </tr>
                        <tr>
                          <td>July</td>
                          <td>
                            1234567812345678123456781234567812345678123456781234567812345678
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="row" style={{ margin: '30px' }}>
                      <button type="button" className="btn btn-primary" >
                        เปลี่ยน Key
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  }
}

export default Keymanage
