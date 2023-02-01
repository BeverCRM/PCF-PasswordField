import * as React from 'react';
import { TextField } from '@fluentui/react';
import { fieldStyles } from '../styles/fieldStyles';

export interface IPasswordTextFieldProps {
  currentTextValue?: string;
  isControlDisabled: boolean;
  onChange: (newTextValue?: string) => void;
}

export const PasswordTextField: React.FunctionComponent<IPasswordTextFieldProps> = props => {
  const { currentTextValue, onChange, isControlDisabled } = props;

  const [value, setValue] = React.useState(currentTextValue);
  const [visibility, setVisibility] = React.useState(false);
  const [, forceReRender] = React.useState({});
  const focusedRef = React.useRef(false);
  const rootElRef = React.useRef<HTMLDivElement>(null);

  const inputAttributeValue = visibility || focusedRef.current
    ? value
    : value?.replace(/./g, '*');

  React.useEffect(() => {
    const revealBtn = rootElRef.current?.querySelector<HTMLButtonElement>('.ms-TextField-reveal');
    if (revealBtn) {
      revealBtn.onclick = () => {
        setVisibility(!visibility);
      };
    }
  });

  React.useEffect(() => {
    setValue(currentTextValue);
  }, [currentTextValue]);

  return (
    <TextField
      type="password"
      canRevealPassword
      revealPasswordAriaLabel="Show password"
      styles={fieldStyles}
      value={inputAttributeValue}
      disabled={isControlDisabled}
      elementRef={rootElRef}
      onChange={(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setValue(newValue);
      }}
      onFocus={() => {
        focusedRef.current = true;
        forceReRender({});
      }}
      onBlur={() => {
        focusedRef.current = false;
        if (value !== currentTextValue) {
          onChange(value);
        }
      }}
    />
  );
};
