import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
export const LoginContext = React.createContext()

class LoginProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
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
      <LoginContext.Provider value={providerData}>
        {children}
      </LoginContext.Provider>
    )
  }
}

LoginProvider.defaultProps = {
  children: PropTypes.object
};

LoginProvider.propTypes = {
  children: {}
};

function mapStateToProps (state) {
  return {
    //redux data
  }
}

export default connect(mapStateToProps, null)(LoginProvider)