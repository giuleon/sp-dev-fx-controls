import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
    IPropertyPaneField,
    PropertyPaneFieldType,
    IPropertyPaneCustomFieldProps
} from '@microsoft/sp-webpart-base';
import { IPropertyFieldDatePickerHostProps } from './IPropertyFieldDatePickerHost';
import PropertyFieldDatePickerHost from './PropertyFieldDatePickerHost';
import { IDateFieldValue, IPropertyFieldDatePickerPropsInternal, ITimeConvention, IPropertyFieldDatePickerProps, IDateConvention } from "./IPropertyFieldDatePicker";

/**
 * @class
 * Represents a PropertyFieldDatePicker object
 *
 */
class PropertyFieldDatePickerBuilder implements IPropertyPaneField<IPropertyFieldDatePickerPropsInternal> {

    //Properties defined by IPropertyPaneField
    public type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
    public targetProperty: string;
    public properties: IPropertyFieldDatePickerPropsInternal;

    //Custom properties
    private label: string;
    private initialDate: IDateFieldValue;
    private formatDate: (date: Date) => string;
    private dateConvention: IDateConvention;
    private timeConvention: ITimeConvention;
    private onPropertyChange: (propertyPath: string, oldValue: any, newValue: any) => void;
    private customProperties: any;
    private key: string;
    private onGetErrorMessage: (value: string) => string | Promise<string>;
    private deferredValidationTime: number = 200;
    private renderWebPart: () => void;
    private disableReactivePropertyChanges: boolean = false;

    /**
     * @function
     * Ctor
     */
    public constructor(_targetProperty: string, _properties: IPropertyFieldDatePickerPropsInternal) {
        this.render = this.render.bind(this);
        this.targetProperty = _properties.targetProperty;
        this.properties = _properties;
        this.label = _properties.label;
        this.initialDate = _properties.initialDate;
        this.properties.onDispose = this.dispose;
        this.properties.onRender = this.render;
        this.onPropertyChange = _properties.onPropertyChange;
        this.formatDate = _properties.formatDate;
        this.customProperties = _properties.properties;
        this.key = _properties.key;
        this.onGetErrorMessage = _properties.onGetErrorMessage;
        this.renderWebPart = _properties.render;

        if (typeof _properties.deferredValidationTime !== "undefined") {
            this.deferredValidationTime = _properties.deferredValidationTime;
        }

        if (typeof _properties.dateConvention !== "undefined") {
            this.dateConvention = _properties.dateConvention;
        } else {
            this.dateConvention = IDateConvention.DateTime;
        }

        if (typeof _properties.timeConvention !== "undefined") {
            this.timeConvention = _properties.timeConvention;
        } else {
            this.timeConvention = ITimeConvention.Hours24;
        }

        if (typeof _properties.disableReactivePropertyChanges !== "undefined" && _properties.disableReactivePropertyChanges != null) {
            this.disableReactivePropertyChanges = _properties.disableReactivePropertyChanges;
        }
    }

    /**
     * @function
     * Renders the DatePicker field content
     */
    private render(elem: HTMLElement, ctx?: any, changeCallback?: (targetProperty?: string, newValue?: any) => void): void {
        //Construct the JSX properties
        const element: React.ReactElement<IPropertyFieldDatePickerHostProps> = React.createElement(PropertyFieldDatePickerHost, {
            label: this.label,
            initialDate: this.initialDate,
            targetProperty: this.targetProperty,
            formatDate: this.formatDate,
            dateConvention: this.dateConvention,
            timeConvention: this.timeConvention,
            onDispose: this.dispose,
            onRender: this.render,
            onPropertyChange: this.onPropertyChange,
            onChange: changeCallback,
            properties: this.customProperties,
            key: this.key,
            onGetErrorMessage: this.onGetErrorMessage,
            deferredValidationTime: this.deferredValidationTime,
            render: this.renderWebPart,
            disableReactivePropertyChanges: this.disableReactivePropertyChanges
        });
        //Calls the REACT content generator
        ReactDom.render(element, elem);
    }

    /**
     * @function
     * Disposes the current object
     */
    private dispose(elem: HTMLElement): void {

    }

}

/**
 * @function
 * Helper method to create the customer field on the PropertyPane.
 * @param targetProperty - Target property the custom field is associated to.
 * @param properties - Strongly typed custom field properties.
 */
export function PropertyFieldDatePicker(targetProperty: string, properties: IPropertyFieldDatePickerProps): IPropertyPaneField<IPropertyFieldDatePickerPropsInternal> {

    //Create an internal properties object from the given properties
    var newProperties: IPropertyFieldDatePickerPropsInternal = {
        label: properties.label,
        targetProperty: targetProperty,
        initialDate: properties.initialDate,
        dateConvention: properties.dateConvention,
        timeConvention: properties.timeConvention,
        onPropertyChange: properties.onPropertyChange,
        properties: properties.properties,
        formatDate: properties.formatDate,
        onDispose: null,
        onRender: null,
        key: properties.key,
        onGetErrorMessage: properties.onGetErrorMessage,
        deferredValidationTime: properties.deferredValidationTime,
        render: properties.render,
        disableReactivePropertyChanges: properties.disableReactivePropertyChanges
    };
    //Calls the PropertyFieldDatePicker builder object
    //This object will simulate a PropertyFieldCustom to manage his rendering process
    return new PropertyFieldDatePickerBuilder(targetProperty, newProperties);
}