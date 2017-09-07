import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ICheckedTerms } from '../../../PropertyFieldTermPicker';
import { IDateFieldValue } from "../../../PropertyFieldDateTimePicker";
import { ImageSize } from "../../../FileTypeIcon";

export interface ITestFieldsProps {
  context: WebPartContext;
  list: string | string[];
  multiList: string[];
  terms: ICheckedTerms;
  datetime: IDateFieldValue;
}

export interface ITestFieldsState {
  imgSize: ImageSize;
}
