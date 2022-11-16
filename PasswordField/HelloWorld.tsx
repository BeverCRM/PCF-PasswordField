import * as React from 'react';
import { Label, TextField } from '@fluentui/react';

export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
      <TextField
        label="Password with reveal button"
        type="password"
        canRevealPassword
        revealPasswordAriaLabel="Show password"
    />
    )
  }
}
