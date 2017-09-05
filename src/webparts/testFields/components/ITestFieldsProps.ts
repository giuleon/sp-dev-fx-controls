import { ICheckedTerms } from '../../../PropertyFieldTermSetPicker';
import { IDateFieldValue } from "../../../PropertyFieldDatePicker";
export interface ITestFieldsProps {
  description: string;
  list: string | string[];
  multiList: string[];
  terms: ICheckedTerms;
  datetime: IDateFieldValue;
}
