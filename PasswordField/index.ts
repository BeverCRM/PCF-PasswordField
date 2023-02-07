import * as React from 'react';
import { IInputs, IOutputs } from './generated/ManifestTypes';
import { PasswordTextField, IPasswordInputProps } from './components/PasswordInput';

export class PasswordField implements ComponentFramework.ReactControl<IInputs, IOutputs> {
  private value?: string;
  private security?: ComponentFramework.PropertyHelper.SecurityValues;
  private notifyOutputChanged: () => void;

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
  ): void {
    this.security = context.parameters.passwordField.security;
    this.notifyOutputChanged = notifyOutputChanged;
  }

  public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
    const props: IPasswordInputProps = {
      passwordField: context.parameters.passwordField,
      disabled: context.mode.isControlDisabled,
      onChange: newTextValue => {
        this.value = newTextValue;
        this.notifyOutputChanged();
      },
    };

    return React.createElement(PasswordTextField, props);
  }

  public getOutputs(): IOutputs {
    return {
      passwordField: this.security?.editable ? this.value : undefined,
    };
  }

  public destroy(): void {

  }
}
