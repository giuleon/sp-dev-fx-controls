import * as React from 'react';
import styles from './TestFields.module.scss';
import { ITestFieldsProps } from './ITestFieldsProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TestFields extends React.Component<ITestFieldsProps, {}> {
  public render(): React.ReactElement<ITestFieldsProps> {
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
