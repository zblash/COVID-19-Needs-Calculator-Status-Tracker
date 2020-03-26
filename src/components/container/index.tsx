/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';

export interface ContainerProps {
  title: string;
  children: any;
}

const StyledPageTitle = styled.div`
  width: 35%;
  padding-top: 12%;
  float: left;
  margin-left: 5%;
  color: #fff;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: 53%;
  padding-top: 12%;
  margin-right: 2%;
  height: 100%;
  float: right;
  background-color: #f0f4ff;
`;

const StyledH = styled.h1`
  margin-top: 0;
  font-size: 64px;
  text-align: center;
  line-height: 80px;
`;

const Container: React.SFC<ContainerProps> = props => (
  <>
    <StyledPageTitle>
      <StyledH>{props.title}</StyledH>
    </StyledPageTitle>
    <StyledContainer>{props.children}</StyledContainer>
  </>
);

const PureContainer = React.memo(Container);

export { PureContainer as Container };
