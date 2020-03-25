import * as React from 'react';
import styled from 'styled-components';

export interface UIInputProps {
  id: string;
  label: string;
  type?: 'text' | 'password' | 'email' | 'number';
  inputClassName?: string;
  placeholder?: string;
  onChange?: (v: string) => void;
  value?: string | number;
  disabled?: boolean;
  form?: string;
  setRef?: React.RefObject<HTMLInputElement>;
  required?: boolean;
  name?: string;
  step?: string;
  readOnly?: boolean;
}

const StyledUIInputWrapper = styled.div<{ disabled?: boolean }>`
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 7px;
  background-image: none !important;
  background-color: transparent !important ;
  box-shadow: none;
  outline: none;
  width: 100%;
  height: 25px;
  padding: 5px 0 5px 5px;
`;

const StyledLabel = styled.label``;

const UIInput: React.SFC<UIInputProps> = props => {
  const __ = (
    <StyledUIInputWrapper disabled={props.disabled}>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <Input
        step={props.step}
        ref={props.setRef}
        name={props.name}
        form={props.form}
        value={props.value}
        type={props.type}
        disabled={props.disabled}
        id={props.id}
        required={props.required}
        className={props.inputClassName}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        onChange={e => props.onChange && props.onChange(e.target.value)}
      />
    </StyledUIInputWrapper>
  );

  return __;
};

const PureUIInput = React.memo(UIInput);

export { PureUIInput as UIInput };
