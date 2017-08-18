import React, { PureComponent } from 'react'
import '../resource/css/style.css'
import HeaderNav from '../components/HeaderNav'
import ModalComponent from '../components/modaKey'

class Keymanage extends PureComponent {
  render() {
    return <div className="root">
        <HeaderNav />
        <section className="main-section">
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <div className="well" id="service">
                <h2> Key Management System</h2>
              </div>
              <div className="well" style={{ height: '500px' }} id="service-body">
                <div className="col-md-12">
                  <div className="col-md-12">
                    <table className="table table-striped" style={{marginTop: 60}}>
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
                      <ModalComponent />
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
