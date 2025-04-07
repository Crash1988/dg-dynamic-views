import { Component } from '@angular/core';
import { BaseField, CheckboxField, Form, FormlyGroup, GaigCustomCheckgroupField, GaigCustomInputNumberField, GaigCustomInputTextarea, GaigInputTextField, GaigRadioQuestionField, InputField, RadioField, RepeatSectionField, SectionField, SelectField, TabsField } from '../models/form.model';
import { FormDisplayComponent } from '../form-display/form-display.component';

@Component({
  selector: 'app-json-view-editor',
  imports: [FormDisplayComponent],
  templateUrl: './json-view-editor.component.html',
  styleUrl: './json-view-editor.component.scss'
})
export class JsonViewEditorComponent {


  form: Form;

  constructor() {
    // {"type":"tabs","fieldGroup":[{"expressions":[],"fieldGroupClassName":"row","fieldGroup":[{"fieldGroupClassName":"container-fluid","fieldGroup":[{"fieldGroupClassName":"row","fieldGroup":[{"className":"col-lg-6 par-2","type":"formly-group","fieldGroup":[{"className":"col-12","key":"investmentStrategies","type":"gaigCustomCheckgroup","props":{"appearance":"outline","label":"Select all the Investment Strategies of the current and anticipated future funds:","hideFieldUnderline":true,"floatLabel":"always","color":"primary","options":[{"value":"privateEquity","label":"Private Equity For Kunal"},{"value":"hedgeFunds","label":"Hedge Funds"},{"value":"ventureCapital","label":"Venture Capital"},{"value":"realEstate","label":"Real Estate"},{"value":"creditDebt","label":"Credit/Debt"},{"value":"fundofFunds","label":"Fund of Funds"}],"disabled":false,"placeholder":""},"id":"formly_193_multicheckbox_multiCheckBox123_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"key":"coverageLines","type":"gaigCustomCheckgroup","props":{"appearance":"outline","label":"Select Coverage lines being sought?","hideFieldUnderline":true,"floatLabel":"always","color":"primary","options":[{"value":"do","label":"DO"},{"value":"eo","label":"EO"},{"value":"epl","label":"EPL"},{"value":"fid","label":"FID"}],"disabled":false,"placeholder":""},"id":"formly_193_multicheckbox_multiCheckBox123_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","type":"gaigInputText","key":"websiteUrl","props":{"appearance":"outline","required":true,"label":"Internet Website Address ","placeholder":"","disabled":false},"resetOnHide":true,"id":"formly_23_input_firstName_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"expressions":{},"expressionProperties":{},"wrappers":["HighlightFocusSectionWrapper"]},{"className":"col-12","key":"firmOperatedPreviousNames","type":"gaigRadioQuestion","props":{"label":"Has the firm operated under any other names previously?","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","key":"firmHasInternationalLocations","type":"gaigRadioQuestion","props":{"label":"Does the Firm have any international locations?","disabled":false,"placeholder":""},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","key":"insuredAnticipateSponsoring","type":"gaigRadioQuestion","props":{"label":"Does any Insured Organization anticipate sponsoring a new Investment Fund within the next 18 months?","disabled":false,"placeholder":""},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","type":"gaigCustomInputNumber","key":"currentFirmAssetsUnderManagement","props":{"appearance":"outline","required":true,"label":"Current Firmwide Assets Under Management<span class='text-danger'>(000)</span>?","placeholder":"$","prefix":"$","useGrouping":true,"disabled":false,"step=1000":"max=999999999999"},"resetOnHide":true,"id":"formly_23_input_firstName_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"expressions":{},"expressionProperties":{},"wrappers":["HighlightFocusSectionWrapper"]}],"resetOnHide":true,"id":"formly_23_input_firstName_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"expressions":{},"expressionProperties":{},"wrappers":[],"props":{}},{"className":"col-lg-6 pal-2 bl-1","type":"formly-group","fieldGroup":[{"className":"col-12","key":"wasDoCoveragePurchased","type":"gaigRadioQuestion","props":{"label":"Was D&O run-off coverage purchased or is indemnification provided by any individual or organization, other than an Insured, to Insured Persons who have served in Outside Positions of Portfolio Companies that have been divested or liquidated?","disabled":false,"placeholder":""},"id":"formly_5883_gaigRadioQuestion_wasDoCoveragePurchased_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","key":"portFolioAllInsuredPersonSubject","type":"gaigRadioQuestion","props":{"label":"With respect to Portfolio Company securities, are all Insured Persons subject to a written insider trading policy that prohibits trading in securities on the basis of non-public information?","disabled":false,"placeholder":"","options":[{"optionName":"Yes","optionValue":"Y"},{"optionName":"No","optionValue":"N"},{"optionName":"N/A","optionValue":"NA"}]},"id":"formly_5883_gaigRadioQuestion_portFolioAllInsuredPersonSubject_1","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","key":"isComunicationbyInsuredPerson","type":"gaigRadioQuestion","props":{"label":"Is communication by Insured Persons with media sources restricted or monitored?","disabled":false,"placeholder":"","options":[{"optionName":"Yes","optionValue":"Y"},{"optionName":"No","optionValue":"N"},{"optionName":"N/A","optionValue":"NA"}]},"id":"formly_8505_gaigRadioQuestion_isComunicationbyInsuredPerson_2","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","key":"isInsuredOrganizationWithSEC","type":"gaigRadioQuestion","props":{"label":"Is any Insured Organization registered with the SEC or equivalent foreign authority?","disabled":false,"placeholder":""},"id":"formly_8505_gaigRadioQuestion_isInsuredOrganizationWithSEC_3","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","key":"hasInsuredOrgSubjectToSECRegulatory","type":"gaigRadioQuestion","props":{"label":"Has any Insured Organization been subject to any SEC or other regulatory examination?","disabled":false,"placeholder":""},"id":"formly_8505_gaigRadioQuestion_hasInsuredOrgSubjectToSECRegulatory_4","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-12","type":"gaigCustomInputTextarea","key":"responseForImprovementDefficiancesDetails","props":{"appearance":"outline","required":true,"label":"Please provide details.","max":10,"placeholder":"","disabled":false,"hidden":true},"resetOnHide":true,"id":"formly_23_input_firstName_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"expressions":{"hide":"model.hasInsuredOrgSubjectToSECRegulatory!=true"},"expressionProperties":{},"wrappers":["HighlightFocusSectionWrapper"],"hide":true}],"props":{},"resetOnHide":true,"id":"formly_23_input_firstName_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"expressions":{},"expressionProperties":{},"wrappers":[]}],"props":{},"id":"formly_22___0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":[],"expressions":{},"expressionProperties":{}}],"props":{},"id":"formly_19___0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":[],"expressions":{},"expressionProperties":{}}],"wrapper":"div","props":{"label":"Asset Management General Info"},"id":"formly_54___0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":["twoColumnsWrapper"],"expressionProperties":{}},{"expressions":[],"fieldGroupClassName":"row","fieldGroup":[{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["HighlightFocusSectionWrapper"],"expressions":{},"expressionProperties":{}}],"wrapper":"div","props":{"label":"Claims"},"id":"formly_54___0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":["twoColumnsWrapper"],"expressionProperties":{}},{"key":"privateEquityStrategy","type":"formly-group","expressions":{"hide":"!model.investmentStrategies?.privateEquity"},"props":{"label":"Private Equity","placeholder":"","disabled":false,"hidden":true},"id":"formly_8515_formly-group_privateEquityStrategy_2","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressionProperties":{},"hide":true},{"key":"hedgeFundsStrategy","type":"formly-group","expressions":{"hide":"!model.investmentStrategies?.hedgeFunds"},"props":{"label":"Hedge Funds","placeholder":"","disabled":false,"hidden":true},"id":"formly_8515_formly-group_hedgeFundsStrategy_3","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressionProperties":{},"hide":true},{"key":"ventureCapitalStrategy","type":"formly-group","expressions":{"hide":"!model.investmentStrategies?.ventureCapital"},"props":{"label":"Venture Capital","placeholder":"","disabled":false,"hidden":true},"id":"formly_8515_formly-group_ventureCapitalStrategy_4","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressionProperties":{},"hide":true},{"key":"realEstateStrategy","type":"formly-group","expressions":{"hide":"!model.investmentStrategies?.realEstate"},"props":{"label":"Real Estate","placeholder":"","disabled":false,"hidden":true},"id":"formly_8515_formly-group_realEstateStrategy_5","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressionProperties":{},"hide":true}],"props":{},"id":"formly_209_tabs__0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}}
    // {      "fieldGroupClassName": "container-fluid",      "fieldGroup": [        {          "fieldGroupClassName": "asd",          "fieldGroup": [            {              "fieldGroupClassName": "row",              "fieldGroup": [                {                  "className": "col-6",                  "type": "formly-group",                  "fieldGroup": [                    {                      "className": "col-12",                      "type": "input",                      "key": "firstName",                      "props": {                        "appearance": "outline",                        "required": true,                        "label": "First Name",                        "placeholder": "",                        "disabled": false                      },                      "resetOnHide": true,                      "wrappers": [                        "form-field"                      ],                      "id": "formly_23_input_firstName_0",                      "hooks": {},                      "modelOptions": {},                      "validation": {                        "messages": {}                      },                      "expressions": {},                      "expressionProperties": {}                    },                    {                      "className": "col-12",                      "type": "input",                      "key": "middleName",                      "props": {                        "appearance": "outline",                        "required": true,                        "label": "Middle Name",                        "placeholder": "",                        "disabled": false                      },                      "resetOnHide": true,                      "wrappers": [                        "form-field"                      ],                      "id": "formly_23_input_firstName_0",                      "hooks": {},                      "modelOptions": {},                      "validation": {                        "messages": {}                      },                      "expressions": {},                      "expressionProperties": {}                    },                    {                      "className": "col-12",                      "type": "input",                      "key": "lastName",                      "props": {                        "appearance": "outline",                        "required": true,                        "label": "Last Name",                        "placeholder": "",                        "disabled": false                      },                      "resetOnHide": true,                      "wrappers": [                        "form-field"                      ],                      "id": "formly_23_input_firstName_0",                      "hooks": {},                      "modelOptions": {},                      "validation": {                        "messages": {}                      },                      "expressions": {},                      "expressionProperties": {}                    }                  ],                  "resetOnHide": true,                  "id": "formly_23_input_firstName_0",                  "hooks": {},                  "modelOptions": {},                  "validation": {                    "messages": {}                  },                  "expressions": {},                  "expressionProperties": {},                  "wrappers": [],                  "props": {}                },                {                  "className": "col-6",                  "type": "formly-group",                  "fieldGroup": [                    {                      "className": "col-12",                      "type": "input",                      "key": "streetAddress",                      "props": {                        "appearance": "outline",                        "required": true,                        "label": "Street",                        "placeholder": "",                        "disabled": false                      },                      "resetOnHide": true,                      "wrappers": [                        "form-field"                      ],                      "id": "formly_23_input_firstName_0",                      "hooks": {},                      "modelOptions": {},                      "validation": {                        "messages": {}                      },                      "expressions": {},                      "expressionProperties": {}                    },                    {                      "className": "col-12",                      "type": "input",                      "key": "city",                      "props": {                        "appearance": "outline",                        "required": true,                        "label": "City",                        "placeholder": "",                        "disabled": false                      },                      "resetOnHide": true,                      "wrappers": [                        "form-field"                      ],                      "id": "formly_23_input_firstName_0",                      "hooks": {},                      "modelOptions": {},                      "validation": {                        "messages": {}                      },                      "expressions": {},                      "expressionProperties": {}                    },                    {                      "className": "col-12",                      "type": "input",                      "key": "stateAddress",                      "props": {                        "appearance": "outline",                        "required": true,                        "label": "State",                        "placeholder": "",                        "disabled": false                      },                      "resetOnHide": true,                      "wrappers": [                        "form-field"                      ],                      "id": "formly_23_input_firstName_0",                      "hooks": {},                      "modelOptions": {},                      "validation": {                        "messages": {}                      },                      "expressions": {},                      "expressionProperties": {}                    },                    {                      "className": "col-12",                      "type": "input",                      "key": "zip",                      "props": {                        "appearance": "outline",                        "required": true,                        "label": "Zip code",                        "placeholder": "",                        "disabled": false                      },                      "resetOnHide": true,                      "wrappers": [                        "form-field"                      ],                      "id": "formly_23_input_firstName_0",                      "hooks": {},                      "modelOptions": {},                      "validation": {                        "messages": {}                      },                      "expressions": {},                      "expressionProperties": {}                    }                  ],                  "props": {},                  "resetOnHide": true,                  "id": "formly_23_input_firstName_0",                  "hooks": {},                  "modelOptions": {},                  "validation": {                    "messages": {}                  },                  "expressions": {},                  "expressionProperties": {},                  "wrappers": []                }              ],              "props": {},              "id": "formly_22___0",              "hooks": {},              "modelOptions": {},              "validation": {                "messages": {}              },              "resetOnHide": true,              "type": "formly-group",              "wrappers": [],              "expressions": {},              "expressionProperties": {}            }          ],          "props": {},          "id": "formly_20___0",          "hooks": {},          "modelOptions": {},          "validation": {            "messages": {}          },          "resetOnHide": true,          "type": "formly-group",          "wrappers": [],          "expressions": {},          "expressionProperties": {}        }      ],      "props": {},      "id": "formly_19___0",      "hooks": {},      "modelOptions": {},      "validation": {        "messages": {}      },      "resetOnHide": true,      "type": "formly-group",      "wrappers": [],      "expressions": {},      "expressionProperties": {}    }  
    // {"className":"container","type":"tabs","expressions":[],"props":{"type":"tabs","appearance":"outline","required":"","label":""},"fieldGroup":[{"className":"row no-space","expressions":[],"props":{"type":"","required":"","label":"Personal Info","placeholder":"","disabled":false},"fieldGroup":[{"key":"testNewField","type":"input","props":{"label":"please inset your Name:","placeholder":"","disabled":false},"id":"formly_1722_input_testNewField_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{},"focus":false},{"key":"multiCheckBox123","type":"multicheckbox","props":{"appearance":"outline","label":"Check Box Group","hideFieldUnderline":true,"floatLabel":"always","color":"primary","options":[{"value":1,"label":"Option 1"},{"value":2,"label":"Option 2"},{"value":3,"label":"Option 3"},{"value":4,"label":"Option 4"},{"value":5,"label":"Option 5"},{"value":6,"label":"Option 6"},{"value":7,"label":"Option 7"},{"value":8,"label":"Option 8"}],"placeholder":"","disabled":false},"id":"formly_88_multicheckbox_multiCheckBox123_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{}},{"key":"input","type":"input","props":{"type":"number","label":"Input number","appearance":"outline","placeholder":"Input placeholder","disabled":false},"id":"formly_253_input_input_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{},"focus":false},{"className":"col-6","type":"input","expressions":[],"key":"firstName","props":{"appearance":"outline","required":true,"label":"First Name","placeholder":"","disabled":false},"id":"formly_25_input_firstName_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressionProperties":{}},{"key":"showDestinationTab","type":"checkbox","defaultValue":true,"props":{"appearance":"outline","label":"Show Destination Tab","placeholder":"","disabled":false,"hideFieldUnderline":true,"indeterminate":false,"floatLabel":"always","hideLabel":true,"color":"primary"},"id":"formly_26_checkbox_showDestinationTab_3","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{},"focus":false},{"key":"disableTripTab","type":"checkbox","defaultValue":true,"props":{"appearance":"outline","label":"Disable Trip Info Tab","placeholder":"","disabled":false,"hideFieldUnderline":true,"indeterminate":false,"floatLabel":"always","hideLabel":true,"color":"primary"},"id":"formly_1253_checkbox_disableTripTab_4","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{},"focus":false},{"key":"hasMiddleName","type":"checkbox","props":{"appearance":"outline","label":"Has Middle Name","placeholder":"","disabled":false,"hideFieldUnderline":true,"indeterminate":false,"floatLabel":"always","hideLabel":true,"color":"primary"},"id":"formly_1098_checkbox_hasMiddleName_2","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{},"focus":false},{"className":"col-6","type":"input","expressions":{"hide":"!model.hasMiddleName"},"key":"middleName","props":{"type":"input","appearance":"outline","label":"Middle Name","placeholder":"","disabled":false,"hidden":true},"id":"formly_1098_input_middleName_3","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"focus":false,"expressionProperties":{},"hide":true},{"className":"col-6","type":"input","expressions":[],"key":"lastName","props":{"type":"input","appearance":"outline","required":true,"label":"Last Name","placeholder":"","disabled":false},"id":"formly_25_input_lastName_1","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressionProperties":{},"focus":false}],"id":"formly_22___0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":[],"expressionProperties":{}},{"className":"row no-space","expressions":{"hide":"!model.showDestinationTab"},"props":{"type":"","appearance":"outline","required":"","label":"Destination","hidden":false},"fieldGroup":[{"key":"textarea","type":"textarea","props":{"label":"Textarea","placeholder":"Textarea placeholder","required":true,"appearance":"outline","autosize":true,"disabled":false,"cols":1,"rows":1},"id":"formly_93_textarea_textarea_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{}},{"className":"col-6","type":"input","expressions":[],"key":"country","props":{"type":"input","appearance":"outline","required":true,"label":"Country","placeholder":"","disabled":false},"id":"formly_26_input_country_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressionProperties":{}},{"key":"select","type":"select","props":{"appearance":"outline","label":"Select","placeholder":"Select placeholder","required":true,"options":[{"label":"Option 1","value":"1"},{"label":"Option 2","value":"2"},{"label":"Option 3","value":"3"}],"disabled":false},"id":"formly_194_select_select_1","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{}},{"key":"sex","type":"radio","props":{"appearance":"outline","label":"Radio","required":true,"options":[{"label":"Male","value":"male"},{"label":"Female","value":"female"},{"label":"Prefer not to tell","value":"unknown"}],"placeholder":"","disabled":false,"hideFieldUnderline":true,"floatLabel":"always","tabindex":-1},"id":"formly_194_radio_radio_2","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressions":{},"expressionProperties":{},"focus":false}],"id":"formly_25___1","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":[],"expressionProperties":{"hide":"!model.showDestinationTab"},"hide":false},{"className":"row no-space","expressions":{"props.disabled":"model.disableTripTab"},"props":{"type":"","appearance":"outline","required":"","label":"Trip info","placeholder":"","disabled":true},"fieldGroup":[{"className":"col-6","type":"input","expressions":[],"key":"day","props":{"type":"input","appearance":"outline","required":true,"label":"Day of the trip","placeholder":"","disabled":false},"id":"formly_27_input_day_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":["form-field"],"expressionProperties":{}}],"id":"formly_33_formly-group_tripinfo_2","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":[],"expressionProperties":{}}],"id":"formly_19_tabs__0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressionProperties":{}}
    // {"type":"tabs","fieldGroup":[{"expressions":[],"fieldGroupClassName":"row","fieldGroup":[{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}}],"wrapper":"div","props":{"label":"General Info"},"id":"formly_54___0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":["twoColumnsWrapper"],"expressionProperties":{}},{"expressions":[],"fieldGroupClassName":"row","fieldGroup":[{"className":"col-6 pr-2","key":"investmentStrategies","type":"gaigCustomCheckgroup","props":{"appearance":"outline","label":"Select all the Investment Strategies of the current and anticipated future funds:","hideFieldUnderline":true,"floatLabel":"always","color":"primary","options":[{"value":"privateEquity","label":"Private Equity"},{"value":"hedgeFunds","label":"Hedge Funds"},{"value":"ventureCapital","label":"Venture Capital"},{"value":"realEstate","label":"Real Estate"},{"value":"creditDebt","label":"Credit/Debt"},{"value":"fundofFunds","label":"Fund of Funds"}],"disabled":false,"placeholder":""},"id":"formly_193_multicheckbox_multiCheckBox123_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"multiCheckBox1234","type":"gaigCustomCheckgroup","props":{"appearance":"outline","label":"Select Coverage lines being sought?","hideFieldUnderline":true,"floatLabel":"always","color":"primary","options":[{"value":"do","label":"EO"},{"value":"eo","label":"EO"},{"value":"EPL","label":"EPL"},{"value":"fid","label":"FID"}],"disabled":false,"placeholder":""},"id":"formly_193_multicheckbox_multiCheckBox123_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}}],"wrapper":"div","props":{"label":"Asset Management General Info"},"id":"formly_54___0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":["twoColumnsWrapper"],"expressionProperties":{}},{"expressions":[],"fieldGroupClassName":"row","fieldGroup":[{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pr-2","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}},{"className":"col-6 pl-2 bl-1","key":"gaigRadioQuestion","type":"gaigRadioQuestion","props":{"label":"custom field","placeholder":"test","disabled":false,"appearance":"outline","sectionIdentifier":"gaigRadioQuestionIdentifier"},"id":"formly_129_gaigInputText_test_0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}}],"wrapper":"div","props":{"label":"Claims"},"id":"formly_54___0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"type":"formly-group","wrappers":["twoColumnsWrapper"],"expressionProperties":{}}],"props":{},"id":"formly_209_tabs__0","hooks":{},"modelOptions":{},"validation":{"messages":{}},"resetOnHide":true,"wrappers":[],"expressions":{},"expressionProperties":{}}   
    const jsonString2 = `
        {
        "expressions": [],
        "fieldGroupClassName": "row",
        "fieldGroup": [  {
            "type": "tabs",
            "fieldGroup": [
              {
                "expressions": [],
                "fieldGroupClassName": "row",
                "fieldGroup": [
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  }
                ],
                "wrapper": "div",
                "props": { "label": "General Info" },
                "id": "formly_54___0",
                "hooks": {},
                "modelOptions": {},
                "validation": { "messages": {} },
                "resetOnHide": true,
                "type": "formly-group",
                "wrappers": ["twoColumnsWrapper"],
                "expressionProperties": {}
              },
              {
                "expressions": [],
                "fieldGroupClassName": "row",
                "fieldGroup": [
                  {
                    "className": "col-6 pr-2",
                    "key": "investmentStrategies",
                    "type": "gaigCustomCheckgroup",
                    "props": {
                      "appearance": "outline",
                      "label": "Select all the Investment Strategies of the current and anticipated future funds:",
                      "hideFieldUnderline": true,
                      "floatLabel": "always",
                      "color": "primary",
                      "options": [
                        { "value": "privateEquity", "label": "Private Equity" },
                        { "value": "hedgeFunds", "label": "Hedge Funds" },
                        { "value": "ventureCapital", "label": "Venture Capital" },
                        { "value": "realEstate", "label": "Real Estate" },
                        { "value": "creditDebt", "label": "Credit/Debt" },
                        { "value": "fundofFunds", "label": "Fund of Funds" }
                      ],
                      "disabled": false,
                      "placeholder": ""
                    },
                    "id": "formly_193_multicheckbox_multiCheckBox123_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "multiCheckBox1234",
                    "type": "gaigCustomCheckgroup",
                    "props": {
                      "appearance": "outline",
                      "label": "Select Coverage lines being sought?",
                      "hideFieldUnderline": true,
                      "floatLabel": "always",
                      "color": "primary",
                      "options": [
                        { "value": "do", "label": "EO" },
                        { "value": "eo", "label": "EO" },
                        { "value": "EPL", "label": "EPL" },
                        { "value": "fid", "label": "FID" }
                      ],
                      "disabled": false,
                      "placeholder": ""
                    },
                    "id": "formly_193_multicheckbox_multiCheckBox123_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  }
                ],
                "wrapper": "div",
                "props": { "label": "Asset Management General Info" },
                "id": "formly_54___0",
                "hooks": {},
                "modelOptions": {},
                "validation": { "messages": {} },
                "resetOnHide": true,
                "type": "formly-group",
                "wrappers": ["twoColumnsWrapper"],
                "expressionProperties": {}
              },
              {
                "expressions": [],
                "fieldGroupClassName": "row",
                "fieldGroup": [
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pr-2",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  },
                  {
                    "className": "col-6 pl-2 bl-1",
                    "key": "gaigRadioQuestion",
                    "type": "gaigRadioQuestion",
                    "props": {
                      "label": "custom field",
                      "placeholder": "test",
                      "disabled": false,
                      "appearance": "outline",
                      "sectionIdentifier": "gaigRadioQuestionIdentifier"
                    },
                    "id": "formly_129_gaigInputText_test_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": { "messages": {} },
                    "resetOnHide": true,
                    "wrappers": [],
                    "expressions": {},
                    "expressionProperties": {}
                  }
                ],
                "wrapper": "div",
                "props": { "label": "Claims" },
                "id": "formly_54___0",
                "hooks": {},
                "modelOptions": {},
                "validation": { "messages": {} },
                "resetOnHide": true,
                "type": "formly-group",
                "wrappers": ["twoColumnsWrapper"],
                "expressionProperties": {}
              }
            ],
            "props": {},
            "id": "formly_209_tabs__0",
            "hooks": {},
            "modelOptions": {},
            "validation": { "messages": {} },
            "resetOnHide": true,
            "wrappers": [],
            "expressions": {},
            "expressionProperties": {}
          }
        ],
        "wrapper": "div",
        "id": "formly_54___0",
        "hooks": {},
        "modelOptions": {},
        "validation": { "messages": {} },
        "resetOnHide": true,
        "type": "formly-group",
        "expressionProperties": {}
      }
    
    
    `;
    const jsonString = `
    
 {
    "type": "tabs",
    "fieldGroup": [
      {
        "expressions": [],
        "fieldGroupClassName": "row",
        "fieldGroup": [
          {
            "fieldGroupClassName": "container-fluid",
            "fieldGroup": [
              {
                "fieldGroupClassName": "row",
                "fieldGroup": [
                  {
                    "className": "col-lg-6 par-2",
                    "type": "formly-group",
                    "fieldGroup": [
                      {
                        "className": "col-12",
                        "key": "investmentStrategies",
                        "type": "gaigCustomCheckgroup",
                        "props": {
                          "appearance": "outline",
                          "label": "Select all the Investment Strategies of the current and anticipated future funds:",
                          "hideFieldUnderline": true,
                          "floatLabel": "always",
                          "color": "primary",
                          "options": [
                            {
                              "value": "privateEquity",
                              "label": "Private Equity For Kunal"
                            },
                            {
                              "value": "hedgeFunds",
                              "label": "Hedge Funds"
                            },
                            {
                              "value": "ventureCapital",
                              "label": "Venture Capital"
                            },
                            {
                              "value": "realEstate",
                              "label": "Real Estate"
                            },
                            {
                              "value": "creditDebt",
                              "label": "Credit/Debt"
                            },
                            {
                              "value": "fundofFunds",
                              "label": "Fund of Funds"
                            }
                          ],
                          "disabled": false,
                          "placeholder": ""
                        },
                        "id": "formly_193_multicheckbox_multiCheckBox123_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "key": "coverageLines",
                        "type": "gaigCustomCheckgroup",
                        "props": {
                          "appearance": "outline",
                          "label": "Select Coverage lines being sought?",
                          "hideFieldUnderline": true,
                          "floatLabel": "always",
                          "color": "primary",
                          "options": [
                            {
                              "value": "do",
                              "label": "DO"
                            },
                            {
                              "value": "eo",
                              "label": "EO"
                            },
                            {
                              "value": "epl",
                              "label": "EPL"
                            },
                            {
                              "value": "fid",
                              "label": "FID"
                            }
                          ],
                          "disabled": false,
                          "placeholder": ""
                        },
                        "id": "formly_193_multicheckbox_multiCheckBox123_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "type": "gaigInputText",
                        "key": "websiteUrl",
                        "props": {
                          "appearance": "outline",
                          "required": true,
                          "label": "Internet Website Address ",
                          "placeholder": "",
                          "disabled": false
                        },
                        "resetOnHide": true,
                        "id": "formly_23_input_firstName_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "expressions": {},
                        "expressionProperties": {},
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ]
                      },
                      {
                        "className": "col-12",
                        "key": "firmOperatedPreviousNames",
                        "type": "gaigRadioQuestion",
                        "props": {
                          "label": "Has the firm operated under any other names previously?",
                          "placeholder": "test",
                          "disabled": false,
                          "appearance": "outline"
                        },
                        "id": "formly_129_gaigInputText_test_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "key": "firmHasInternationalLocations",
                        "type": "gaigRadioQuestion",
                        "props": {
                          "label": "Does the Firm have any international locations?",
                          "disabled": false,
                          "placeholder": ""
                        },
                        "id": "formly_129_gaigInputText_test_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "key": "insuredAnticipateSponsoring",
                        "type": "gaigRadioQuestion",
                        "props": {
                          "label": "Does any Insured Organization anticipate sponsoring a new Investment Fund within the next 18 months?",
                          "disabled": false,
                          "placeholder": ""
                        },
                        "id": "formly_129_gaigInputText_test_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "type": "gaigCustomInputNumber",
                        "key": "currentFirmAssetsUnderManagement",
                        "props": {
                          "appearance": "outline",
                          "required": true,
                          "label": "Current Firmwide Assets Under Management<span class='text-danger'>(000)</span>?",
                          "placeholder": "$",
                          "prefix": "$",
                          "useGrouping": true,
                          "disabled": false,
                          "step=1000": "max=999999999999"
                        },
                        "resetOnHide": true,
                        "id": "formly_23_input_firstName_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "expressions": {},
                        "expressionProperties": {},
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ]
                      }
                    ],
                    "resetOnHide": true,
                    "id": "formly_23_input_firstName_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": {
                      "messages": {}
                    },
                    "expressions": {},
                    "expressionProperties": {},
                    "wrappers": [],
                    "props": {}
                  },
                  {
                    "className": "col-lg-6 pal-2 bl-1",
                    "type": "formly-group",
                    "fieldGroup": [
                      {
                        "className": "col-12",
                        "key": "wasDoCoveragePurchased",
                        "type": "gaigRadioQuestion",
                        "props": {
                          "label": "Was D&O run-off coverage purchased or is indemnification provided by any individual or organization, other than an Insured, to Insured Persons who have served in Outside Positions of Portfolio Companies that have been divested or liquidated?",
                          "disabled": false,
                          "placeholder": ""
                        },
                        "id": "formly_5883_gaigRadioQuestion_wasDoCoveragePurchased_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "key": "portFolioAllInsuredPersonSubject",
                        "type": "gaigRadioQuestion",
                        "props": {
                          "label": "With respect to Portfolio Company securities, are all Insured Persons subject to a written insider trading policy that prohibits trading in securities on the basis of non-public information?",
                          "disabled": false,
                          "placeholder": "",
                          "options": [
                            {
                              "optionName": "Yes",
                              "optionValue": "Y"
                            },
                            {
                              "optionName": "No",
                              "optionValue": "N"
                            },
                            {
                              "optionName": "N/A",
                              "optionValue": "NA"
                            }
                          ]
                        },
                        "id": "formly_5883_gaigRadioQuestion_portFolioAllInsuredPersonSubject_1",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "key": "isComunicationbyInsuredPerson",
                        "type": "gaigRadioQuestion",
                        "props": {
                          "label": "Is communication by Insured Persons with media sources restricted or monitored?",
                          "disabled": false,
                          "placeholder": "",
                          "options": [
                            {
                              "optionName": "Yes",
                              "optionValue": "Y"
                            },
                            {
                              "optionName": "No",
                              "optionValue": "N"
                            },
                            {
                              "optionName": "N/A",
                              "optionValue": "NA"
                            }
                          ]
                        },
                        "id": "formly_8505_gaigRadioQuestion_isComunicationbyInsuredPerson_2",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "key": "isInsuredOrganizationWithSEC",
                        "type": "gaigRadioQuestion",
                        "props": {
                          "label": "Is any Insured Organization registered with the SEC or equivalent foreign authority?",
                          "disabled": false,
                          "placeholder": ""
                        },
                        "id": "formly_8505_gaigRadioQuestion_isInsuredOrganizationWithSEC_3",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "key": "hasInsuredOrgSubjectToSECRegulatory",
                        "type": "gaigRadioQuestion",
                        "props": {
                          "label": "Has any Insured Organization been subject to any SEC or other regulatory examination?",
                          "disabled": false,
                          "placeholder": ""
                        },
                        "id": "formly_8505_gaigRadioQuestion_hasInsuredOrgSubjectToSECRegulatory_4",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "resetOnHide": true,
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "expressions": {},
                        "expressionProperties": {}
                      },
                      {
                        "className": "col-12",
                        "type": "gaigCustomInputTextarea",
                        "key": "responseForImprovementDefficiancesDetails",
                        "props": {
                          "appearance": "outline",
                          "required": true,
                          "label": "Please provide details.",
                          "max": 10,
                          "placeholder": "",
                          "disabled": false,
                          "hidden": true
                        },
                        "resetOnHide": true,
                        "id": "formly_23_input_firstName_0",
                        "hooks": {},
                        "modelOptions": {},
                        "validation": {
                          "messages": {}
                        },
                        "expressions": {
                          "hide": "model.hasInsuredOrgSubjectToSECRegulatory!=true"
                        },
                        "expressionProperties": {},
                        "wrappers": [
                          "HighlightFocusSectionWrapper"
                        ],
                        "hide": true
                      }
                    ],
                    "props": {},
                    "resetOnHide": true,
                    "id": "formly_23_input_firstName_0",
                    "hooks": {},
                    "modelOptions": {},
                    "validation": {
                      "messages": {}
                    },
                    "expressions": {},
                    "expressionProperties": {},
                    "wrappers": []
                  }
                ],
                "props": {},
                "id": "formly_22___0",
                "hooks": {},
                "modelOptions": {},
                "validation": {
                  "messages": {}
                },
                "resetOnHide": true,
                "type": "formly-group",
                "wrappers": [],
                "expressions": {},
                "expressionProperties": {}
              }
            ],
            "props": {},
            "id": "formly_19___0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "type": "formly-group",
            "wrappers": [],
            "expressions": {},
            "expressionProperties": {}
          }
        ],
        "wrapper": "div",
        "props": {
          "label": "Asset Management General Info"
        },
        "id": "formly_54___0",
        "hooks": {},
        "modelOptions": {},
        "validation": {
          "messages": {}
        },
        "resetOnHide": true,
        "type": "formly-group",
        "wrappers": [
          "twoColumnsWrapper"
        ],
        "expressionProperties": {}
      },
      {
        "expressions": [],
        "fieldGroupClassName": "row",
        "fieldGroup": [
          {
            "className": "col-6 pr-2",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pl-2 bl-1",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pr-2",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pl-2 bl-1",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pr-2",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pl-2 bl-1",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pr-2",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pl-2 bl-1",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pr-2",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          },
          {
            "className": "col-6 pl-2 bl-1",
            "key": "gaigRadioQuestion",
            "type": "gaigRadioQuestion",
            "props": {
              "label": "custom field",
              "placeholder": "test",
              "disabled": false,
              "appearance": "outline",
              "sectionIdentifier": "gaigRadioQuestionIdentifier"
            },
            "id": "formly_129_gaigInputText_test_0",
            "hooks": {},
            "modelOptions": {},
            "validation": {
              "messages": {}
            },
            "resetOnHide": true,
            "wrappers": [
              "HighlightFocusSectionWrapper"
            ],
            "expressions": {},
            "expressionProperties": {}
          }
        ],
        "wrapper": "div",
        "props": {
          "label": "Claims"
        },
        "id": "formly_54___0",
        "hooks": {},
        "modelOptions": {},
        "validation": {
          "messages": {}
        },
        "resetOnHide": true,
        "type": "formly-group",
        "wrappers": [
          "twoColumnsWrapper"
        ],
        "expressionProperties": {}
      },
      {
        "key": "privateEquityStrategy",
        "type": "formly-group",
        "expressions": {
          "hide": "!model.investmentStrategies?.privateEquity"
        },
        "props": {
          "label": "Private Equity",
          "placeholder": "",
          "disabled": false,
          "hidden": false
        },
        "id": "formly_8515_formly-group_privateEquityStrategy_2",
        "hooks": {},
        "modelOptions": {},
        "validation": {
          "messages": {}
        },
        "resetOnHide": true,
        "wrappers": [],
        "expressionProperties": {},
        "hide": false
      },
      {
        "key": "hedgeFundsStrategy",
        "type": "formly-group",
        "expressions": {
          "hide": "!model.investmentStrategies?.hedgeFunds"
        },
        "props": {
          "label": "Hedge Funds",
          "placeholder": "",
          "disabled": false,
          "hidden": false
        },
        "id": "formly_8515_formly-group_hedgeFundsStrategy_3",
        "hooks": {},
        "modelOptions": {},
        "validation": {
          "messages": {}
        },
        "resetOnHide": true,
        "wrappers": [],
        "expressionProperties": {},
        "hide": false
      },
      {
        "key": "ventureCapitalStrategy",
        "type": "formly-group",
        "expressions": {
          "hide": "!model.investmentStrategies?.ventureCapital"
        },
        "props": {
          "label": "Venture Capital",
          "placeholder": "",
          "disabled": false,
          "hidden": false
        },
        "id": "formly_8515_formly-group_ventureCapitalStrategy_4",
        "hooks": {},
        "modelOptions": {},
        "validation": {
          "messages": {}
        },
        "resetOnHide": true,
        "wrappers": [],
        "expressionProperties": {},
        "hide": false
      },
      {
        "key": "realEstateStrategy",
        "type": "formly-group",
        "expressions": {
          "hide": "!model.investmentStrategies?.realEstate"
        },
        "props": {
          "label": "Real Estate",
          "placeholder": "",
          "disabled": false,
          "hidden": false
        },
        "id": "formly_8515_formly-group_realEstateStrategy_5",
        "hooks": {},
        "modelOptions": {},
        "validation": {
          "messages": {}
        },
        "resetOnHide": true,
        "wrappers": [],
        "expressionProperties": {},
        "hide": false
      }
    ],
    "props": {},
    "id": "formly_209_tabs__0",
    "hooks": {},
    "modelOptions": {},
    "validation": {
      "messages": {}
    },
    "resetOnHide": true,
    "wrappers": [],
    "expressions": {},
    "expressionProperties": {}
  }


`;

    this.form = this.parseJson(jsonString);
  }

  parseJson(jsonString: string): Form {
    const jsonObject = JSON.parse(jsonString);
  // console.log('jsonString', jsonString);
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
        type: field.type,
      };
      
      console.log('parsing field', field.type);
      switch (field.type) {
        case 'input':
          return { ...baseField, type: 'input' } as InputField;
        case 'section':
          return { ...baseField, type: 'section', fieldGroup: (field.fieldGroup?? []).map(parseField) } as SectionField;
        case 'radio':
          return { ...baseField, type: 'radio' } as RadioField;
        case 'select':
          return { ...baseField, type: 'select' } as SelectField;
        case 'repeatSection':
          return { ...baseField, type: 'repeatSection', fieldArray: parseField(field.fieldArray) } as RepeatSectionField;
        case 'tabs':
          console.log('tabs field', field.fieldGroup);
          return { ...baseField, type: 'tabs', fieldGroup: (field.fieldGroup?? []).map(parseField) } as TabsField;
        case 'formly-group':
          return { ...baseField, type: 'formly-group', fieldGroup: (field.fieldGroup?? []).map(parseField) } as FormlyGroup;
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
  
}

