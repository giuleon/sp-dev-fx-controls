import * as React from "react";
import { ITimeComponentProps } from "./IPropertyFieldDateTimePickerHost";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/components/Dropdown";

/**
 * @class
 * Minutes component
 */
export default class MinutesComponent extends React.Component<ITimeComponentProps, {}> {
    constructor(props: ITimeComponentProps) {
        super(props);
    }

    public render(): JSX.Element {
        let minutes: IDropdownOption[] = [];
        for (let j = 0; j < 60; j++) {
            let digitMin: string;
            if (j < 10) {
                digitMin = '0' + j;
            } else {
                digitMin = j.toString();
            }
            let selected: boolean = false;
            if (j == this.props.value) {
                selected = true;
            }
            minutes.push({ key: j, text: digitMin, isSelected: selected });
        }

        return (
            <Dropdown
                label=""
                options={minutes}
                onChanged={this.props.onChange} />
        );
    }
}