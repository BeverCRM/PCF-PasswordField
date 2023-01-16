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
  const [value, setValue] = React.useState(currentTextValue);

  React.useEffect(() => {
    setValue(currentTextValue);
  }, [currentTextValue]);

  return (
    <TextField
      type="password"
      canRevealPassword
      revealPasswordAriaLabel="Show password"
      styles={fieldStyles}
      value={value || ''}
      disabled={isControlDisabled}
      onChange={(e, newValue) => {
        setValue(newValue || '');
      }}
      onBlur={e => {
        onChange(e.target.value);
      }}
    />
  );
};
