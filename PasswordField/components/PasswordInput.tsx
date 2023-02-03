import * as React from 'react';
import { IconButton } from './IconButton';

export interface IPasswordInputProps {
  currentValue?: string;
  disabled: boolean;
  onChange: (newTextValue?: string) => void;
}

export const PasswordTextField: React.FunctionComponent<IPasswordInputProps> = props => {
  const { currentValue, onChange, disabled } = props;

  const [visibility, setVisibility] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.value = currentValue ?? '';
  });

  return (
    <div className="BeverControls_PasswordField">
      <div className={
        `BeverControls_PasswordField-wrapper
        ${disabled ? 'BeverControls_PasswordField-disabled' : ''}`
      }>
        <input
          ref={inputRef}
          type={visibility ? 'text' : 'password'}
          className="BeverControls_PasswordField-field"
          disabled={disabled}
          onBlur={() => {
            onChange(inputRef?.current?.value);
          }}
        />
        <IconButton
          off={visibility}
          onClick={setVisibility.bind(null, !visibility)}
        />
      </div>
    </div>
  );
};
