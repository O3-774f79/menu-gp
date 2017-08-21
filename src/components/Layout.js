import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'

import HeaderNav from './HeaderNav'

class Layout extends PureComponent {
  render() {
    const { children } = this.props

    return <div className="root">
        <HeaderNav />
        <div className="main-section">
          <div className="container">
            <h2 className="well" id="service">
              <Route path="/pin-management" component={() => <div>
                    Manage PIN System
                  </div>} />
              <Route path="/key-management" component={() => <div>
                    Key Management System
                  </div>} />
              <Route path="/info-card" component={() => <div>
                    Card Production System
                  </div>} />
              <Route path="/pre-perso" component={() => <div>
                    Pre personalization System
                  </div>} />
              <Route path="/life-cycle-managemgent" component={() => <div>
                    Key/Card/App/Profile Life Cycle Management System
                  </div>} />
              <Route path="/app-management" component={() => <div>
                    App Management System
                  </div>} />
              <Route path="/card-system" component={() => <div>
                    Card Inventory/Card Control System
                  </div>} />
              <Route path="/report-system" component={() => <div>
                    Report System
                  </div>} />
              <Route path="/customer-support" component={() => <div>
                    Customer Support System
                  </div>} />
            </h2>
            <div className="well" id="service-body">
              {children}
            </div>
          </div>
        </div>
      </div>
  }
}

export default Layout
