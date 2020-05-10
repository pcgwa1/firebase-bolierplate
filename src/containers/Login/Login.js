import React from 'react';
import PropTypes from 'prop-types';
import LoginProvider, { LoginContext } from './LoginProvider'

const Login = props => {
  return (
    <LoginProvider>
      <LoginContext>
          {({ data }) => {
              return (
                <div>
                  Login-Context
                </div>
              )
          }}
      </LoginContext>
    </LoginProvider>
  );
};

Login.defaultProps = {

};

Login.propTypes = {

};

export default Login