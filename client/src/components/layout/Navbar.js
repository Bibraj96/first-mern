import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ title, icon }) => {
  return (
    <Router>
      <div className="navbar bg-primary">
        <h1>
          <i className={icon} /> {title}
        </h1>
      </div>
    </Router>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
}

export default Navbar
