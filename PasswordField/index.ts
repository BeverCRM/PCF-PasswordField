import * as React from 'react';
import { IInputs, IOutputs } from './generated/ManifestTypes';
import { PasswordTextField, IPasswordInputProps } from './components/PasswordInput';

export class PasswordField implements ComponentFramework.ReactControl<IInputs, IOutputs> {
  private notifyOutputChanged: () => void;
  private value: string | undefined;

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
  }

  public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
    const props: IPasswordInputProps = {
      currentTextValue: context.parameters.passwordField.raw ?? undefined,
      isControlDisabled: context.mode.isControlDisabled,
      onChange: newTextValue => {
        this.value = newTextValue;
        this.notifyOutputChanged();
      },
    };

    return React.createElement(PasswordTextField, props);
  }

  public getOutputs(): IOutputs {
    return { passwordField: this.value };
  }

  public destroy(): void {

  }
}
