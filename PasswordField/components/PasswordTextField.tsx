import * as React from 'react';
import { TextField } from '@fluentui/react';
import { fieldStyles } from '../styles/fieldStyles';

export interface IPasswordTextFieldProps {
  newTextValue: string | null;
  onChange: (text : string | null) => void;
  isControlDisabled: boolean;
}

export const PasswordTextField: React.FunctionComponent<IPasswordTextFieldProps> = props => {
  const { newTextValue, onChange, isControlDisabled } = props;
  const [textValue, setTextValue] = React.useState(newTextValue);

  React.useEffect(() => {
    setTextValue(newTextValue);
  }, [newTextValue]);

  return (
    <TextField
      type="password"
      canRevealPassword
      revealPasswordAriaLabel="Show password"
      styles={fieldStyles}
      value={textValue || ''}
      disabled={isControlDisabled}
      onChange={(e, value) => {
        setTextValue(value || '');
        onChange(value || '');
      }}
    />
  );
};
