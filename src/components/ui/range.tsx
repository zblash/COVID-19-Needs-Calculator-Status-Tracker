import styled from 'styled-components';

import React = require('react');

export interface UIRangeProps {
  id: string;
  label: string;
  onChange?: (v: string) => void;
  value?: string | number;
  disabled?: boolean;
  name?: string;
  min?: number;
  max?: number;
}

const StyledUIRangeWrapper = styled.div<{ disabled?: boolean }>`
  width: 100%;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;
const StyledInputRange = styled.input`
  -webkit-appearance: none;
  margin-top: 10px;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
`;
const StyledLabel = styled.label``;

const UIRange: React.SFC<UIRangeProps> = props => {
  const __ = (
    <StyledUIRangeWrapper disabled={props.disabled}>
      <StyledLabel htmlFor={props.id}>
        {props.label} ({props.value})
      </StyledLabel>
      <StyledInputRange
        id={props.id}
        type="range"
        name={props.name}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={e => props.onChange && props.onChange(e.target.value)}
      />
    </StyledUIRangeWrapper>
  );

  return __;
};

const PureUIRange = React.memo(UIRange);

export { PureUIRange as UIRange };
