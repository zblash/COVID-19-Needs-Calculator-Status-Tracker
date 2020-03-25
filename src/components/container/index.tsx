import * as React from 'react';
import styled from 'styled-components';

export interface IContainerProps {}

const StyledContainer = styled.div`
  width: 58%;
  padding-top: 12%;
  margin-right: 2%;
  height: 100%;
  float: right;
  background-color: #f0f4ff;
`;

const Container: React.SFC<IContainerProps> = props => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

const PureContainer = React.memo(Container);

export { PureContainer as Container };
