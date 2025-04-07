import { Component } from '@angular/core';
import {
  BaseField,
  CheckboxField,
  Form,
  FormlyGroup,
  GaigCustomCheckgroupField,
  GaigCustomInputNumberField,
  GaigCustomInputTextarea,
  GaigInputTextField,
  GaigRadioQuestionField,
  InputField,
  RadioField,
  RepeatSectionField,
  SectionField,
  SelectField,
  TabsField
} from '../models/form.model';
import { FormDisplayComponent } from '../form-display/form-display.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { JsonEditorOptions } from './json-editor/json-editor-options';
import * as dataExample from './example.json';

@Component({
  selector: 'app-json-view-editor',
  imports: [JsonEditorComponent, FormDisplayComponent],
  templateUrl: './json-view-editor.component.html',
  styleUrl: './json-view-editor.component.scss'
})
export class JsonViewEditorComponent {
  editorOptions: JsonEditorOptions;
  data: any;
  updatedData: any = {};
  form: Form;

  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';

    this.data = dataExample;
    this.form = this.parseJson(this.data);
  }

  parseJson(jsonObject: any): Form {
    function parseField(field: any): BaseField {
      const baseField: BaseField = {
        className: field.className,
        key: field.key,
        props: field.props,
        id: field.id,
        hooks: field.hooks,
        modelOptions: field.modelOptions,
        validation: field.validation,
        resetOnHide: field.resetOnHide,
        wrappers: field.wrappers,
        expressions: field.expressions,
        expressionProperties: field.expressionProperties,
        type: field.type
      };

      // console.log('parsing field', field.type);
      switch (field.type) {
        case 'input':
          return { ...baseField, type: 'input' } as InputField;
        case 'section':
          return { ...baseField, type: 'section', fieldGroup: (field.fieldGroup ?? []).map(parseField) } as SectionField;
        case 'radio':
          return { ...baseField, type: 'radio' } as RadioField;
        case 'select':
          return { ...baseField, type: 'select' } as SelectField;
        case 'repeatSection':
          return { ...baseField, type: 'repeatSection', fieldArray: parseField(field.fieldArray) } as RepeatSectionField;
        case 'tabs':
          console.log('tabs field', field.fieldGroup);
          return { ...baseField, type: 'tabs', fieldGroup: (field.fieldGroup ?? []).map(parseField) } as TabsField;
        case 'formly-group':
          return { ...baseField, type: 'formly-group', fieldGroup: (field.fieldGroup ?? []).map(parseField) } as FormlyGroup;
        case 'gaigCustomInputNumber':
          return { ...baseField, type: 'gaigCustomInputNumber' } as GaigCustomInputNumberField;
        case 'gaigRadioQuestion':
          return { ...baseField, type: 'gaigRadioQuestion' } as GaigRadioQuestionField;
        case 'gaigInputText':
          return { ...baseField, type: 'gaigInputText' } as GaigInputTextField;
        case 'gaigCustomCheckgroup':
          return { ...baseField, type: 'gaigCustomCheckgroup' } as GaigCustomCheckgroupField;
        case 'gaigCustomInputTextarea':
          return { ...baseField, type: 'gaigCustomInputTextarea' } as GaigCustomInputTextarea;
        case 'checkbox':
          return { ...baseField, type: 'checkbox' } as CheckboxField;
        default:
          console.warn(`Unknown field type: ${field.type}`);
          return baseField;
      }
    }

    const form: Form = {
      fieldGroupClassName: jsonObject.fieldGroupClassName,
      fieldGroup: jsonObject.fieldGroup.map(parseField),
      props: jsonObject.props,
      id: jsonObject.id,
      hooks: jsonObject.hooks,
      modelOptions: jsonObject.modelOptions,
      validation: jsonObject.validation,
      resetOnHide: jsonObject.resetOnHide,
      type: jsonObject.type,
      wrappers: jsonObject.wrappers,
      expressions: jsonObject.expressions,
      expressionProperties: jsonObject.expressionProperties
    };

    console.log('parsing jsonObject', form);
    return form;
  }

  jsonChanged(event: any) {
    this.updatedData = event;
    // if (Array.isArray(event)) {
    // this.view.viewJson = event;
    // }

    this.form = this.parseJson(this.updatedData);
  }
}
