import { IPropertyPaneCustomFieldProps } from '@microsoft/sp-webpart-base';

/**
 * @interface
 * Date field value interface
 *
 */
export interface IDateFieldValue {
    value: Date;
    displayValue: string;
}

/**
  * @enum
  * Time convention
  */
export enum ITimeConvention {
    /**
     * The 12-hour clock is a time convention in which the 24 hours of the day are
     * divided into two periods: a.m. and p.m.
     */
    Hours12 = 0,
    /**
     * The 24-hour clock is the convention of time keeping in which the day runs from midnight to
     * midnight and is divided into 24 hours, indicated by the hours passed since midnight, from 0 to 23
     */
    Hours24 = 1
}

/**
  * @enum
  * Time convention
  */
export enum IDateConvention {
    DateTime = 0,
    Date = 1
}

/**
 * @interface
 * Public properties of the PropertyFieldDateTimePicker custom field
 *
 */
export interface IPropertyFieldDateTimePickerProps {
    /**
     * @var
     * Property field label displayed on top
     */
    label: string;
    /**
     * @var
     * Initial date of the control
     */
    initialDate?: IDateFieldValue;
    /**
     * @function
     * Defines a formatDate function to display the date of the custom Field.
     * By defaut date.toDateString() is used.
     */
    formatDate?: (date: Date) => string;
    /**
     * @var
     * Defines the date convention to use. The default is date and time.
     */
    dateConvention?: IDateConvention;
    /**
     * @var
     * Defines the time convention to use. The default value is the 24-hour clock convention.
     */
    timeConvention?: ITimeConvention;
    /**
     * @function
     * Defines a onPropertyChange function to raise when the selected date changed.
     * Normally this function must be always defined with the 'this.onPropertyChange'
     * method of the web part object.
     */
    onPropertyChange(propertyPath: string, oldValue: any, newValue: any): void;
    /**
     * @function
     * This API is called to render the web part.
     * Normally this function must be always defined with the 'this.render.bind(this)'
     * method of the web part object.
     */
    render(): void;
    /**
     * This property is used to indicate the web part's PropertyPane interaction mode: Reactive or NonReactive.
     * The default behaviour is Reactive.
     */
    disableReactivePropertyChanges?: boolean;
    /**
     * @var
     * Parent Web Part properties
     */
    properties: any;
    /**
     * @var
     * An UNIQUE key indicates the identity of this control
     */
    key?: string;
    /**
     * The method is used to get the validation error message and determine whether the input value is valid or not.
     *
     *   When it returns string:
     *   - If valid, it returns empty string.
     *   - If invalid, it returns the error message string and the text field will
     *     show a red border and show an error message below the text field.
     *
     *   When it returns Promise<string>:
     *   - The resolved value is display as error message.
     *   - The rejected, the value is thrown away.
     *
     */
    onGetErrorMessage?: (value: string) => string | Promise<string>;
    /**
     * Custom Field will start to validate after users stop typing for `deferredValidationTime` milliseconds.
     * Default value is 200.
     */
    deferredValidationTime?: number;
}

/**
 * @interface
 * Private properties of the PropertyFieldDateTimePicker custom field.
 * We separate public & private properties to include onRender & onDispose method waited
 * by the PropertyFieldCustom, witout asking to the developer to add it when he's using
 * the PropertyFieldDateTimePicker.
 *
 */
export interface IPropertyFieldDateTimePickerPropsInternal extends IPropertyPaneCustomFieldProps {
    label: string;
    initialDate?: IDateFieldValue;
    targetProperty: string;
    formatDate?: (date: Date) => string;
    dateConvention?: IDateConvention;
    timeConvention?: ITimeConvention;
    onRender(elem: HTMLElement): void;
    onDispose(elem: HTMLElement): void;
    onPropertyChange(propertyPath: string, oldValue: any, newValue: any): void;
    render(): void;
    disableReactivePropertyChanges?: boolean;
    properties: any;
    onGetErrorMessage?: (value: string) => string | Promise<string>;
    deferredValidationTime?: number;
}