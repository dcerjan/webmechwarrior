interface IFormInputProps<T> {
  // An alias for value only when value is a boolean. Provided for convenience of destructuring the whole field object
  // into the props of a form element.
  checked?: boolean,

  // When nested in FormSection, returns the name prop prefixed with the FormSection name.
  // Otherwise, returns the name prop that you passed in.
  name: string,

  // A function to call when the form field loses focus. It expects to either receive the React SyntheticEvent
  // or the current value of the field.
  onBlur: (val: T) => void,

  // A function to call when the form field is changed. It expects to either receive the React SyntheticEvent
  // or the new value of the field.
  onChange: (val: T) => void,

  // A function to call when the form field receives a dragStart event. Saves the field value in the
  // event for giving the field it is dropped into.
  onDragStart: (val: T) => void,

  // A function to call when the form field receives a drop event.
  onDrop: (val: T) => void,

  // A function to call when the form field receives focus.
  onFocus: (val: T) => void,

  // The value of this form field. It will be a boolean for checkboxes, and a string for all other input types.
  // If there is no value in the Redux state for this field, it will default to ''. This is to ensure that the input
  // is controlled. If you require that the value be of another type (e.g. Date or Number), you must provide
  // initialValues to your form with the desired type of this field.
  value: T,
}

interface IFormMetaProps<T> {
  // true if this field currently has focus. It will only work if you are passing onFocus to your input element.
  active: boolean,

  // true if this field has been set with the AUTOFILL action and has not since been changed with a CHANGE action.
  // This is useful to render the field in a way that the user can tell that the value was autofilled for them.
  autofilled: boolean,

  // true if the form is currently running asynchronous validation because this field was blurred.
  asyncValidating: boolean,

  // true if the field value has changed from its initialized value. Opposite of pristine.
  dirty: boolean,

  // The error for this field if its value is not passing validation. Both synchronous, asynchronous, and submit
  // validation errors will be reported here.
  error?: string,

  // The name of the form. Could be useful if you want to manually dispatch actions.
  form: string,

  // The initial value of the field.
  initial: T,

  // true if the field value fails validation (has a validation error). Opposite of valid.
  invalid: boolean,

  // true if the field value is the same as its initialized value. Opposite of dirty.
  pristine: boolean,

  // true if the field is currently being submitted
  submitting: boolean,

  // true if the form had onSubmit called and failed to submit for any reason.
  // A subsequent successful submit will set it back to false.
  submitFailed: boolean

  // true if the field has been touched. By default this will be set when the field is blurred.
  touched: boolean

  // true if the field value passes validation (has no validation errors). Opposite of invalid.
  valid: boolean

  // true if this field has ever had focus. It will only work if you are passing onFocus to your input element.
  visited: boolean

  // The warning for this field if its value is not passing warning validation.
  warning?: string
}

export interface IFormComponentProps<T> {
  input: IFormInputProps<T>,
  meta: IFormMetaProps<T>,
  valueChanged?: (newVal: T, oldVal: T) => void,
}

export interface IFormFieldProps<T, F, P = void> {
  // A string path, in dot-and-bracket notation, corresponding to a value in the form values.
  // It may be as simple as 'firstName' or as complicated as contact.billing.address[2].phones[1].areaCode.
  name: string,

  // Formats the value from the Redux store to be displayed in the field input. Common use cases are to format
  // Numbers into currencies or Dates into a localized date format.
  // format is called with the field value and name as arguments and should return the new formatted
  // value to be displayed in the field input.
  // To respect React 15 input behavior there is defaultFormat = value => value == null ? '' : value internally used.
  // To disable that you can pass null as format prop.
  format?: (val: T, name: string) => string,

  // A function to convert whatever value the user has entered into the value that you want stored in the Redux store for the field. For instance, if you want the value to be in all uppercase, you would pass value => value.toUpperCase(). The parameters to your normalize function are:
  normalize?: (val: T, prevVal: T, allVals: F, prevAllVals: F) => T,

  // A callback that will be called whenever an onBlur event is fired from the underlying input.
  // If you call event.preventDefault(), the BLUR action will NOT be dispatched,
  // and the value and focus state will not be updated in the Redux store.
  onBlur?: (event: React.SyntheticEvent<HTMLElement>, newVal: T, prevVal: T, name: string) => void,

  // A callback that will be called whenever an onChange event is fired from the underlying input.
  // If you call event.preventDefault(), the CHANGE action will NOT be dispatched,
  // and the value will not be updated in the Redux store.
  onChange?: (event: React.SyntheticEvent<HTMLElement>, newVal: T, prevVal: T, name: string) => void,

  // A callback that will be called whenever an onDragStart event is fired from the underlying input.
  onDragStart?: (event: React.SyntheticEvent<HTMLElement>, name: string) => void,

  // A callback that will be called whenever an onDrop event is fired from the underlying input.
  // If you call event.preventDefault(), the CHANGE action will NOT be dispatched,
  // and the value will not be updated in the Redux store.
  onDrop?: (event: React.SyntheticEvent<HTMLElement>, newVal: T, prevVal: T, name: string) => void,

  // A callback that will be called whenever an onFocus event is fired from the underlying input.
  // If you call event.preventDefault(), the FOCUS action will NOT be dispatched,
  // and the focus state will not be updated in the Redux store.
  onFocus?: (event: React.SyntheticEvent<HTMLElement>, name: string) => void,

  // Object with custom props to pass through the Field component into a component provided to component prop.
  // This props will be merged to props provided by Field itself. This may be useful if you are using TypeScript.
  // This construct is completely optional; the primary way of passing props along to your component is to give them
  // directly to the Field component, but if, for whatever reason, you prefer to bundle them into a separate object,
  // you may do so by passing them into props.
  props?: P,

  // Parses the value given from the field input component to the type that you want stored in the Redux store.
  // Common use cases are to parse currencies into Numbers or localized date formats into Dates.
  // parse is called with the field value and name as arguments and should return the new parsed value
  // to be stored in the Redux store.
  parse?: (val: any, name: string) => T,

  // Allows you to to provide a field-level validation rule. The function is given the fields current value,
  // all other form values, the props passed to the form, and the name of field currently being validated.
  // If the field is valid it should return undefined. If the field is invalid it should return an error (usually,
  // but not necessarily, a String). Note: if the validate prop changes the field will be re-registered.
  validate?: (val: T, allVals: F, props: P, name: string) => string | undefined,

  // Allows you to to provide a field-level warning rule. The function is given the fields current value,
  // all other form values, and the props passed to the form. If the field does not need a warning
  // it should return undefined. If the field needs a warning it should return the warning (usually
  //  but not necessarily, a String). Note: if the warn prop changes the field will be re-registered.
  warn?: (val: T, allVals: F, props: P) => string | undefined,
}
