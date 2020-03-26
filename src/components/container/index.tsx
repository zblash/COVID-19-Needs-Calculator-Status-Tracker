/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';

export interface ContainerProps {}

const StyledContainer = styled.div`
  width: 58%;
  padding-top: 12%;
  margin-right: 2%;
  height: 100%;
  float: right;
  background-color: #f0f4ff;
`;

const Container: React.SFC<ContainerProps> = props => <StyledContainer>{props.children}</StyledContainer>;

const PureContainer = React.memo(Container);

export { PureContainer as Container };
