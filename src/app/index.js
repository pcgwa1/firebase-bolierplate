import React from 'react'
import AppContextProvider from './ContextProvider'
import { connect } from "react-redux"
import Routes from './Routes'
import 'antd/dist/antd.css'

const App = ({ user }) => {
  return (
      <AppContextProvider user={user}>
        <Routes />
      </AppContextProvider>
  )
}

function mapStateToProps(state) {
    return {
        user: state.auth && state.auth.user ? state.auth.user : null,
    };
}

export default connect(mapStateToProps)(App);
