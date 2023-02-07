import * as React from 'react';
import { IconButton } from './IconButton';

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export interface IPasswordInputProps {
  passwordField: ComponentFramework.PropertyTypes.StringProperty;
  disabled: boolean;
  onChange: (newTextValue?: string) => void;
}

export const PasswordTextField: React.FunctionComponent<IPasswordInputProps> = props => {
  const { passwordField, onChange, disabled } = props;

  const [visibility, setVisibility] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onChangeDebounce = React.useCallback(debounce((e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value), 500), []);

  React.useEffect(() => {
    if (inputRef.current) {
      if (passwordField.security?.readable) {
        let currentValue: string = passwordField.raw || '---';
        if (document.activeElement === inputRef.current) currentValue = passwordField.raw || '';
        inputRef.current.value = currentValue;
      }
      else {
        inputRef.current.value = '******';
      }
    }
  });

  return (
    <div className="BeverControls_PasswordField">
      <div className={
        `BeverControls_PasswordField-wrapper
        ${disabled ? 'BeverControls_PasswordField-disabled' : ''}`
      }>
        <input
          ref={inputRef}
          type={ !passwordField.security?.readable || !passwordField.raw || visibility
            ? 'text'
            : 'password'}
          className="BeverControls_PasswordField-field"
          disabled={disabled}
          onChange={onChangeDebounce}
          onFocus={() => {
            if (!passwordField.raw) inputRef!.current!.value = '';
            if (!visibility) inputRef!.current!.type = 'password';
          }}
          onBlur={() => {
            inputRef!.current!.value = inputRef!.current!.value.trim();

            if (!inputRef?.current?.value) {
              inputRef!.current!.value = '---';
              inputRef!.current!.type = 'text';
            }
          }}
        />
        { passwordField.security?.readable &&
          <IconButton
            off={visibility}
            onClick={() => {
              setVisibility(!visibility);
            }}
          />
        }
      </div>
    </div>
  );
};
