import React, { PureComponent } from 'react'
import ModalComponent from '../components/ModalKey'

class KeyManage extends PureComponent {
  render() {
    return (
      <div className="row">
        <table className="table table-striped" style={{textAlign:'center'}}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center', width: '20%' }}>Name</th>
              <th style={{ textAlign: 'center', width: '80%' }}>Key</th>
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
        <div>
          <ModalComponent />
        </div>
      </div>
    )
  }
}

export default KeyManage
