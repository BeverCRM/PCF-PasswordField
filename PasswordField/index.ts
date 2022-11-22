import { IInputs, IOutputs } from './generated/ManifestTypes';
import { PasswordTextField, IPasswordTextFieldProps } from './components/PasswordTextField';
import * as React from 'react';

export class PasswordField implements ComponentFramework.ReactControl<IInputs, IOutputs> {
  private notifyOutputChanged: () => void;
  private context: ComponentFramework.Context<IInputs>;
  private value: string | null;

  constructor() { }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
    this.context = context;
  }

  public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
    const props: IPasswordTextFieldProps = {
      currentTextValue: context.parameters.passwordFieldProperty.raw,
      isControlDisabled: context.mode.isControlDisabled,
      onChange: newTextValue => {
        this.value = newTextValue || '';
        this.notifyOutputChanged();
      },
    };
    return React.createElement(
      PasswordTextField, props,
    );
  }

  public getOutputs(): IOutputs {
    return { passwordFieldProperty: this.value || '' };
  }

  public destroy(): void {

  }
}
