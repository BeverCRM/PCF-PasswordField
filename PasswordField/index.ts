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
      this.value = <string>context.parameters.passwordFieldProperty?.raw;
      const props: IPasswordTextFieldProps =
      { newTextValue: this.value,
        isControlDisabled: context.mode.isControlDisabled,
        onChange: text => {
          this.value = text;
          this.notifyOutputChanged();
        } };
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
