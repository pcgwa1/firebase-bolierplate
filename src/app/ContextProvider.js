import React, { Component } from 'react'
import PropTypes from 'prop-types'
export const AppContext = React.createContext()

class AppProvider extends Component {
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
    const { children, user: { uid }  } = this.props
    return (
      <AppContext.Provider value={{ uid, data }}>
        {children}
      </AppContext.Provider>
    )
  }
}

AppProvider.propTypes = {
  children: PropTypes.object,
}

AppProvider.defaultProps = {
  children: {}
}

export default AppProvider
