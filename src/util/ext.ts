import { ReactiveControllerHost } from "lit";

export class OptionValue<T> {
  private _stringValue: string;

  get stringValue() {
    return this._stringValue;
  }
  set stringValue(v: string) {
    this._stringValue = v;
    this.owner.changesMade = true;
    this.owner.revision++;
    this.owner.host.requestUpdate();
  }

  get allowedStringValues() {
    return this.allowedValues.map((x) => x[0]);
  }

  get internalValue() {
    return this.allowedValues.find((x) => x[0] === this._stringValue)![1];
  }

  constructor(
    private readonly owner: {
      changesMade: boolean;
      revision: number;
      host: ReactiveControllerHost;
    },
    private readonly allowedValues: Array<[string, T]>,
    defaultStringValue: string
  ) {
    this._stringValue = defaultStringValue;
  }
}
