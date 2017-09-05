import { ITimeComponentProps } from './IPropertyFieldDatePickerHost';
import { IPropertyFieldDatePickerPropsInternal, ITimeConvention } from './IPropertyFieldDatePicker';
import { IDropdownOption } from "office-ui-fabric-react/lib/components/Dropdown";

/**
 * @interface
 * PropertyFieldDateTimePickerHost properties interface
 *
 */
export interface IPropertyFieldDatePickerHostProps extends IPropertyFieldDatePickerPropsInternal {
    onChange: (targetProperty?: string, newValue?: any) => void;
}

export interface IPropertyFieldDatePickerHostState {
    day?: Date;
    hours?: number;
    minutes?: number;
    seconds?: number;
    errorMessage?: string;
}

export interface ITimeComponentProps {
    value: number;
    onChange: (value?: IDropdownOption) => void;
}

export interface IHoursComponentProps extends ITimeComponentProps {
    timeConvention: ITimeConvention;
}