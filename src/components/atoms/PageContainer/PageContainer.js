import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageContainer.module.css';
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity:0;
    visibility: visible;
  }

  to {
    opacity:1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity:1;
  }

  to {
    opacity:0;
    visibility: hidden;
  }
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  top: 0;
  left: 0;

`;

const PageElm = styled(Page)`
  &.page-enter {
    animation: ${fadeIn} 0.2s forwards;
  }
  &.page-exit {
    animation: ${fadeOut} 0.2s forwards;
  }
`;

const PageContainer = ({ children }) => {
  return (
    <PageElm>
      {children}
    </PageElm>
  );
};

PageContainer.defaultProps = {

};

PageContainer.propTypes = {
  children: PropTypes.object
};

export default PageContainer;
