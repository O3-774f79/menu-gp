import React, { PureComponent } from 'react'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
class ModalKeyComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  close() {
    this.setState({ show: false })
  }
  open() {
    this.setState({ show: true })
  }
  render() {
    console.log(this.state)
    return <div style={{marginLeft:'40%'}}>
        <Button bsStyle="primary" onClick={this.open}>
          เปลี่ยน key
        </Button>
        <Modal show={this.state.show} onHide={this.close} container={this} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Change Key
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: 300 }}>
            <div className="col-md-2" style={{ textAlign: 'right' }}>
              <label>Input PID</label>
            </div>
            <div className="col-md-8">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-2">
              <button style={{ marginBottom: 30 }} className="btn btn-warning">
                Verify
              </button>
            </div>
            <div className="col-md-2" style={{ textAlign: 'right' }}>
              <label>Old Key</label>
            </div>
            <div className="col-md-10">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-2" style={{ textAlign: 'right' }}>
              <label>New Key</label>
            </div>
            <div className="col-md-10">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-2.offset-5">
              <button style={{ marginTop: 20 }} className="btn btn-primary">
                เปลี่ยน key
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
  }
}
export default ModalKeyComponent
