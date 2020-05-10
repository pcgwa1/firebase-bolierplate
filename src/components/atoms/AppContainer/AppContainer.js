import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  padding: 0 0;
  margin: 0 auto;
`

const AppContainer = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

AppContainer.defaultProps = {
  children: []
};

AppContainer.propTypes = {
  children: PropTypes.array
};

export default AppContainer;
