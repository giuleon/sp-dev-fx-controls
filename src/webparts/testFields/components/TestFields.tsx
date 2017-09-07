import * as React from 'react';
import styles from './TestFields.module.scss';
import { ITestFieldsProps, ITestFieldsState } from './ITestFieldsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { FileTypeIcon, ApplicationType, IconType, ImageSize } from "../../../FileTypeIcon";
import { Placeholder } from "../../../Placeholder";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/components/Dropdown";

export default class TestFields extends React.Component<ITestFieldsProps, ITestFieldsState> {
  constructor(props: ITestFieldsProps) {
    super(props);

    this.state = {
      imgSize: ImageSize.small
    };

    this._onChange = this._onChange.bind(this);
    this._onConfigure = this._onConfigure.bind(this);
  }

  private _onChange(element?: IDropdownOption): void {
    this.setState({
      imgSize: parseInt(element.key.toString())
    });
  }

  private _onConfigure() {
    this.props.context.propertyPane.open();
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
        <span className="ms-font-xl">Web part title</span>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-neutralLight ms-fontColor-neutralDark ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <p className="ms-font-xxl ms-fontColor-neutralDark">Web part to test the controls</p>

              <p className="ms-font-xl ms-fontColor-neutralDark">Property pane field controls</p>
              <p className="ms-font-m ms-fontColor-neutralDark">List: {this.props.list}</p>
              <p className="ms-font-m ms-fontColor-neutralDark">Multi List: {this.props.multiList.join(', ')}</p>
              <p className="ms-font-m ms-fontColor-neutralDark">Term(s): {this.props.terms.map(t => t.name).join(', ')}</p>
              <p className="ms-font-m ms-fontColor-neutralDark">Date: {this.props.datetime.displayValue}</p>


              <p className="ms-font-xl ms-fontColor-neutralDark">Other controls</p>
              <p className="ms-font-l ms-fontColor-neutralDark">Font icons:
                <FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.docx" />
                <FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.unknown" />
                <FileTypeIcon type={IconType.font} path="https://contoso.sharepoint.com/documents/filename.doc" />
                <FileTypeIcon type={IconType.font} application={ApplicationType.HTML} />
                <FileTypeIcon type={IconType.font} application={ApplicationType.Mail} />
                <FileTypeIcon type={IconType.font} application={ApplicationType.SASS} />
              </p>
              <p className="ms-font-l ms-fontColor-neutralDark">Image icons:
                <FileTypeIcon type={IconType.image} path="https://contoso.sharepoint.com/documents/filename.docx" />
                <FileTypeIcon type={IconType.image} path="https://contoso.sharepoint.com/documents/filename.unknown" />
                <FileTypeIcon type={IconType.image} path="https://contoso.sharepoint.com/documents/filename.pptx?querystring='prop1'&amp;prop2='test'" />
                <FileTypeIcon type={IconType.image} application={ApplicationType.Word} />

                <FileTypeIcon type={IconType.image} size={ImageSize.small} application={ApplicationType.Excel} />
              </p>

              <p className="ms-font-l ms-fontColor-neutralDark">Icon size tester:
                <Dropdown options={sizeOptions} onChanged={this._onChange} />
                <FileTypeIcon type={IconType.image} size={this.state.imgSize} application={ApplicationType.Excel} />
                <FileTypeIcon type={IconType.image} size={this.state.imgSize} />
              </p>
            </div>
          </div>
        </div>

        <Placeholder
          iconName='Page'
          iconText='Testing'
          description='Placeholder without a button'>
        </Placeholder>

        <Placeholder
          iconName='Edit'
          iconText='Configure your web part'
          description='Please configure the web part.'
          buttonLabel='Configure'
          onConfigure={this._onConfigure}>
        </Placeholder>
      </div>
    );
  }
}
