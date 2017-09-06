import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'TestFieldsWebPartStrings';
import TestFields from './components/TestFields';
import { ITestFieldsProps } from './components/ITestFieldsProps';
import { ITestFieldsWebPartProps } from './ITestFieldsWebPartProps';

// Custom property fields
import { PropertyFieldPeoplePicker, IPrincipalType } from '../../PropertyFieldPeoplePicker';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from "../../PropertyFieldListPicker";
import { PropertyFieldTermPicker } from "../../PropertyFieldTermPicker";
import { PropertyFieldDatePicker, ITimeConvention, IDateConvention } from "../../PropertyFieldDatePicker";

export default class TestFieldsWebPart extends BaseClientSideWebPart<ITestFieldsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITestFieldsProps> = React.createElement(
      TestFields,
      {
        description: this.properties.description,
        list: this.properties.singleList as string,
        multiList: this.properties.multiList as string[] || [],
        terms: this.properties.terms || [],
        datetime: this.properties.datetime || { value: null, displayValue: null }
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldPeoplePicker('people', {
                  label: 'PropertyFieldPeoplePicker',
                  initialData: this.properties.people,
                  allowDuplicate: true,
                  principalType: [IPrincipalType.Users, IPrincipalType.SharePoint, IPrincipalType.Security],
                  // principalType: [IPrincipalType.SharePoint],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  context: this.context,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'peopleFieldId'
                }),
                PropertyFieldListPicker('singleList', {
                  label: 'Select a list',
                  selectedList: this.properties.singleList,
                  includeHidden: false,
                  //baseTemplate: 109,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  // multiSelect: false,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId'
                }),
                PropertyFieldListPicker('multiList', {
                  label: 'Select multiple lists',
                  selectedList: this.properties.multiList,
                  includeHidden: false,
                  //baseTemplate: 109,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  multiSelect: true,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'multiListPickerFieldId'
                }),
                PropertyFieldTermPicker('terms', {
                  label: 'Select terms',
                  panelTitle: 'Select terms',
                  initialValues: this.properties.terms,
                  allowMultipleSelections: true,
                  excludeSystemGroup: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  context: this.context,
                  disabled: false,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'termSetsPickerFieldId'
                }),
                PropertyFieldDatePicker('datetime', {
                  label: 'Select the date',
                  initialDate: this.properties.datetime,
                  // formatDate: this._formatDateIso,
                  dateConvention: IDateConvention.Date,
                  timeConvention: ITimeConvention.Hours12,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'dateTimeFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }

  private _formatDateIso(date: Date): string {
    return date.toISOString();
  }
}

