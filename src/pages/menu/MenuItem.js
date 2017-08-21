import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class MenuItem extends PureComponent {
  render() {
    const { image, title, description, path } = this.props
    return (
      <li className="hex">
        <div className="hexIn">
          <Link className="hexLink" to={path}>
            <img src={image} alt="menu" />
            <h1>
              {title}
            </h1>
            <p>
              {description}
            </p>
          </Link>
        </div>
      </li>
    )
  }
}
export default MenuItem
