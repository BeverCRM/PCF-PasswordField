import * as React from 'react';
import { TextField } from '@fluentui/react';
import { fieldStyles } from '../styles/fieldStyles';

export interface IPasswordTextFieldProps {
  currentTextValue: string | null;
  onChange: (newTextValue : string | undefined) => void;
  isControlDisabled: boolean;
}

export const PasswordTextField: React.FunctionComponent<IPasswordTextFieldProps> = props => {
  const { currentTextValue, onChange, isControlDisabled } = props;

  return (
    <TextField
      type="password"
      canRevealPassword={!!currentTextValue}
      revealPasswordAriaLabel="Show password"
      styles={fieldStyles}
      value={currentTextValue || ''}
      disabled={isControlDisabled}
      onChange={(e, newValue) => {
        onChange(newValue);
      }}
    />
  );
};
