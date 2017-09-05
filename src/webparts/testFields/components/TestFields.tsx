import * as React from 'react';
import styles from './TestFields.module.scss';
import { ITestFieldsProps, ITestFieldsState } from './ITestFieldsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { FileTypeIcon, IApplicationType, IIconType, IImageSize } from "../../../FileTypeIcon";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/components/Dropdown";

export default class TestFields extends React.Component<ITestFieldsProps, ITestFieldsState> {
  constructor(props: ITestFieldsProps) {
    super(props);

    this.state = {
      imgSize: IImageSize.small
    };

    this._onChange = this._onChange.bind(this);
  }

  private _onChange(element?: IDropdownOption): void {
    this.setState({
      imgSize: parseInt(element.key.toString())
    });
  }

  public render(): React.ReactElement<ITestFieldsProps> {
    const sizeOptions: IDropdownOption[] = [
      {
        key: IImageSize.small,
        text: IImageSize[IImageSize.small],
        selected: IImageSize.small === this.state.imgSize
      },
      {
        key: IImageSize.medium,
        text: IImageSize[IImageSize.medium],
        selected: IImageSize.medium === this.state.imgSize
      },
      {
        key: IImageSize.large,
        text: IImageSize[IImageSize.large],
        selected: IImageSize.large === this.state.imgSize
      }
    ];

    return (
      <div className={styles.testFields}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">Description: {escape(this.props.description)}</p>
              <p className="ms-font-l ms-fontColor-white">List: {this.props.list}</p>
              <p className="ms-font-l ms-fontColor-white">Multi List: {this.props.multiList.join(', ')}</p>
              <p className="ms-font-l ms-fontColor-white">Term(s): {this.props.terms.map(t => t.name).join(', ')}</p>
              <p className="ms-font-l ms-fontColor-white">Date: {this.props.datetime.displayValue}</p>
              <p className="ms-font-l ms-fontColor-white">Font icons:
                <FileTypeIcon type={IIconType.font} path="https://contoso.sharepoint.com/documents/filename.docx" />
                <FileTypeIcon type={IIconType.font} path="https://contoso.sharepoint.com/documents/filename.unknown" />
                <FileTypeIcon type={IIconType.font} path="https://contoso.sharepoint.com/documents/filename.doc" />
                <FileTypeIcon type={IIconType.font} application={IApplicationType.HTML} />
                <FileTypeIcon type={IIconType.font} application={IApplicationType.Mail} />
                <FileTypeIcon type={IIconType.font} application={IApplicationType.SASS} />
              </p>
              <p className="ms-font-l ms-fontColor-white">Image icons:
                <FileTypeIcon type={IIconType.image} path="https://contoso.sharepoint.com/documents/filename.docx" />
                <FileTypeIcon type={IIconType.image} path="https://contoso.sharepoint.com/documents/filename.unknown" />
                <FileTypeIcon type={IIconType.image} path="https://contoso.sharepoint.com/documents/filename.doc" />
                <FileTypeIcon type={IIconType.image} application={IApplicationType.Word} />

                <FileTypeIcon type={IIconType.image} size={IImageSize.small} application={IApplicationType.Excel} />
                <FileTypeIcon type={IIconType.image} size={IImageSize.medium} application={IApplicationType.Excel} />
                <FileTypeIcon type={IIconType.image} size={IImageSize.large} application={IApplicationType.Excel} />
              </p>

              <p className="ms-font-l ms-fontColor-white">Icon size tester:
                <Dropdown options={sizeOptions} onChanged={this._onChange} />
                <FileTypeIcon type={IIconType.image} size={this.state.imgSize} application={IApplicationType.Excel} />
                <FileTypeIcon type={IIconType.image} size={this.state.imgSize} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
