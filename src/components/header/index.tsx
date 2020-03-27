import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/*  Styles */
const StyledWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f0f4ff;
  height: 60px;
`;

const StyledLink = styled(NavLink)`
  color: #000;
  cursor: pointer;
  text-decoration: none;
  margin-right: 1em;
`;

const StyledLinkWrapper = styled.div`
  margin-right: 2%;
  margin: 0;
  float: right;
  padding: 20px;
  height: 40px;
`;

/*  Component  */
function HeaderComponent() {
  /*  Variables */

  /*  Callbacks */

  /*  Lifecycle  */

  return (
    <StyledWrapper>
      <StyledLinkWrapper>
        <StyledLink to="/toilet-paper">Toilet Paper Calculator</StyledLink>
        <StyledLink to="/soap">Liquid Soap Calculator</StyledLink>
        <StyledLink to="/test">COVID-19 Test</StyledLink>
        <StyledLink to="/status">COVID-19 Status</StyledLink>
      </StyledLinkWrapper>
    </StyledWrapper>
  );
}
const PureHeaderComponent = React.memo(HeaderComponent);

export { PureHeaderComponent as HeaderComponent };
