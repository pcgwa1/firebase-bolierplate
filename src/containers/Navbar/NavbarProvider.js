import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
export const NavbarContext = React.createContext()

class NavbarProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: 'Hello Data'
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {

  }

  render() {
    const { data } = this.state
    const { children  } = this.props

    const providerData = { data }
    return (
      <NavbarContext.Provider value={providerData}>
        {children}
      </NavbarContext.Provider>
    )
  }
}

NavbarProvider.defaultProps = {
  children: PropTypes.object
};

NavbarProvider.propTypes = {
  children: {}
};

function mapStateToProps (state) {
  return {
    //redux data
  }
}

export default connect(null, null)(NavbarProvider)