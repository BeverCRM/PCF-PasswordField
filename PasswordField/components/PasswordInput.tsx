import * as React from 'react';
import { IconButton } from './IconButton';

export interface IPasswordInputProps {
  currentTextValue?: string;
  isControlDisabled: boolean;
  onChange: (newTextValue?: string) => void;
}

export const PasswordTextField: React.FunctionComponent<IPasswordInputProps> = props => {
  const { currentTextValue, onChange, isControlDisabled } = props;

  const [visibility, setVisibility] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.value = currentTextValue ?? '';
  });

  return (
    <div className="BeverControls_PasswordField">
      <div className="BeverControls_PasswordField-wrapper">
        <input
          ref={inputRef}
          type={visibility ? 'text' : 'password'}
          className="BeverControls_PasswordField-field"
          disabled={isControlDisabled}
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
