import { ICheckedTerms } from '../../../PropertyFieldTermPicker';
import { IDateFieldValue } from "../../../PropertyFieldDatePicker";
import { IImageSize } from "../../../FileTypeIcon";

export interface ITestFieldsProps {
  description: string;
  list: string | string[];
  multiList: string[];
  terms: ICheckedTerms;
  datetime: IDateFieldValue;
}

export interface ITestFieldsState {
  imgSize: IImageSize;
}
