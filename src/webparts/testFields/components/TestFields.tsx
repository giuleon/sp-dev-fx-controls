import * as React from 'react';
import styles from './TestFields.module.scss';
import { ITestFieldsProps, ITestFieldsState } from './ITestFieldsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { FileTypeIcon, ApplicationType, IconType, ImageSize } from "../../../FileTypeIcon";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/components/Dropdown";

export default class TestFields extends React.Component<ITestFieldsProps, ITestFieldsState> {
  constructor(props: ITestFieldsProps) {
    super(props);

    this.state = {
      imgSize: ImageSize.small
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
        key: ImageSize.small,
        text: ImageSize[ImageSize.small],
        selected: ImageSize.small === this.state.imgSize
      },
      {
        key: ImageSize.medium,
        text: ImageSize[ImageSize.medium],
        selected: ImageSize.medium === this.state.imgSize
      },
      {
        key: ImageSize.large,
        text: ImageSize[ImageSize.large],
        selected: ImageSize.large === this.state.imgSize
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
                <FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.docx" />
                <FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.unknown" />
                <FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.doc" />
                <FileTypeIcon type={IconType.font} application={ApplicationType.HTML} />
                <FileTypeIcon type={IconType.font} application={ApplicationType.Mail} />
                <FileTypeIcon type={IconType.font} application={ApplicationType.SASS} />
              </p>
              <p className="ms-font-l ms-fontColor-white">Image icons:
                <FileTypeIcon type={IconType.image} path="https://contoso.sharepoint.com/documents/filename.docx" />
                <FileTypeIcon type={IconType.image} path="https://contoso.sharepoint.com/documents/filename.unknown" />
                <FileTypeIcon type={IconType.image} path="https://contoso.sharepoint.com/documents/filename.doc?querystring='prop1'&amp;prop2='test'" />
                <FileTypeIcon type={IconType.image} application={ApplicationType.Word} />

                <FileTypeIcon type={IconType.image} size={ImageSize.small} application={ApplicationType.Excel} />
                <FileTypeIcon type={IconType.image} size={ImageSize.medium} application={ApplicationType.Excel} />
                <FileTypeIcon type={IconType.image} size={ImageSize.large} application={ApplicationType.Excel} />
              </p>

              <p className="ms-font-l ms-fontColor-white">Icon size tester:
                <Dropdown options={sizeOptions} onChanged={this._onChange} />
                <FileTypeIcon type={IconType.image} size={this.state.imgSize} application={ApplicationType.Excel} />
                <FileTypeIcon type={IconType.image} size={this.state.imgSize} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
