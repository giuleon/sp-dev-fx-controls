import { ICheckedTerms } from './../../../PropertyFieldTermSetPicker';
export interface ITestFieldsProps {
  description: string;
  list: string | string[];
  multiList: string[];
  terms: ICheckedTerms;
}
