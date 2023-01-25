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

  const rootEl = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState(currentTextValue);
  const [displayValue, setDisplayValue] = React.useState(currentTextValue?.replace(/./g, '*'));
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);

  const toggleDisplayValue = () => {
    if (passwordVisibility) setDisplayValue(value);
    else setDisplayValue(value?.replace(/./g, '*'));
  };

  React.useEffect(() => {
    const revealBtn = rootEl.current?.querySelector<HTMLButtonElement>('.ms-TextField-reveal');
    if (revealBtn) {
      revealBtn.onclick = () => {
        setPasswordVisibility(!passwordVisibility);
      };
    }
  });

  React.useEffect(() => {
    setValue(currentTextValue);
  }, [currentTextValue]);

  React.useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  React.useEffect(() => {
    toggleDisplayValue();
  }, [passwordVisibility]);

  return (
    <TextField
      type="password"
      canRevealPassword
      revealPasswordAriaLabel="Show password"
      styles={fieldStyles}
      value={displayValue}
      disabled={isControlDisabled}
      elementRef={rootEl}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      onBlur={() => {
        toggleDisplayValue();

        if (value !== currentTextValue) {
          onChange(value);
        }
      }}
    />
  );
};
