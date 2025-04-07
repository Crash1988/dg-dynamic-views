export interface FieldProps {
    required?: boolean;
    label?: string;
    placeholder?: string;
    indeterminate?: boolean;
    color?: string;
    disabled?: boolean;
    options?: { value: string; label: string }[];
    hideFieldUnderline?: boolean;
    floatLabel?: string;
    tabindex?: number;
    appearance?: string;
    addText?: string;
    prefix?: string;
    useGrouping?: boolean;
    step?: number;
    max?: number;
  }
  
  export interface Validation {
    messages?: any;
  }
  
  export interface ModelOptions {
    updateOn?: string;
    debounce?: number;
  }
  
  export interface Expressions {
    [key: string]: any;
  }
  
  export interface ExpressionProperties {
    [key: string]: any;
  }
  
  export class BaseField {
    className?: string;
    key!: string;
    props?: FieldProps;
    id?: string;
    hooks?: any;
    modelOptions?: ModelOptions;
    validation?: Validation;
    resetOnHide?: boolean;
    wrappers?: string[];
    expressions?: Expressions;
    expressionProperties?: ExpressionProperties;
    type!: any; // Ensure the type property is defined
    // fieldGroup: BaseField[] = []; // Default to an empty array
  }
  
  export class InputField extends BaseField {
    override type: 'input' = 'input';
  }
  
  export class SectionField extends BaseField {
    override type: 'section' = 'section';
    fieldGroup: BaseField[] = [];
  }
  
  export class RadioField extends BaseField {
    override type: 'radio' = 'radio';
  }
  
  export class SelectField extends BaseField {
    override type: 'select' = 'select';
  } 

  export class FormlyGroup extends BaseField {
    override type: 'formly-group' = 'formly-group';
  }
  
  export class GaigCustomCheckgroupField extends BaseField {
    override type: 'gaigCustomCheckgroup' = 'gaigCustomCheckgroup';
  }
  
  export class GaigRadioQuestionField extends BaseField {
    override type: 'gaigRadioQuestion' = 'gaigRadioQuestion';
  }
  
  export class GaigInputTextField extends BaseField {
    override type: 'gaigInputText' = 'gaigInputText';
  }
  
  export class CheckboxField extends BaseField {
    override type: 'checkbox' = 'checkbox';
  }
  
  export class RepeatSectionField extends BaseField {
    override type: 'repeatSection' = 'repeatSection';
    fieldArray!: BaseField;
  }
  
  export class TabsField extends BaseField {
    override type: 'tabs' = 'tabs';
     fieldGroup: BaseField[] = [];
  }
  
  export class GaigCustomInputNumberField extends BaseField {
    override type: 'gaigCustomInputNumber' = 'gaigCustomInputNumber';
  }
    
  export class GaigCustomInputTextarea extends BaseField {
    override type: 'gaigCustomInputTextarea' = 'gaigCustomInputTextarea';
  }
  
  
  export interface Form {
    fieldGroupClassName?: string;
    fieldGroup: BaseField[];
    props?: any;
    id?: string;
    hooks?: any;
    modelOptions?: ModelOptions;
    validation?: Validation;
    resetOnHide?: boolean;
    type?: any;
    wrappers?: string[];
    expressions?: Expressions;
    expressionProperties?: ExpressionProperties;
  }
  