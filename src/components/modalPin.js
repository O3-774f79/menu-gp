import React, { PureComponent } from 'react'
import { Button, Modal } from 'react-bootstrap'
const styles = {
    marginTop: 15
}
class ModalPin extends PureComponent {
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
    return <div>
        <Button bsStyle="primary" onClick={this.open} style={{ marginTop: '10px' }}>
          Change Pin
        </Button>
        <Modal show={this.state.show} onHide={this.close} container={this} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Change Pin</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: 300 }}>
            <div className="col-md-2" style={styles}>
              <label>Old Pin</label>
            </div>
            <div className="col-md-10">
              <input style={styles} type="text" className="form-control" />
            </div>
            <div className="col-md-2" style={styles}>
              <label>New Pin</label>
            </div>
            <div className="col-md-10">
              <input style={styles} type="text" className="form-control" />
            </div>
            <div className="col-md-2" style={styles}>
              <label>Confirm Pin</label>
            </div>
            <div className="col-md-10">
              <input style={styles} type="text" className="form-control" />
            </div>

            <Button style={{ marginTop: 20 }} bsStyle="primary">
              เปลี่ยน Pin
            </Button>
          </Modal.Body>
        </Modal>
      </div>
  }
}
export default ModalPin
