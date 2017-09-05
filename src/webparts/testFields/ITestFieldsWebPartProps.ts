import { IPropertyFieldGroupOrPerson } from '../../PropertyFieldPeoplePicker';
import { ICheckedTerms } from '../../PropertyFieldTermSetPicker';
import { IDateFieldValue } from "../../PropertyFieldDatePicker";

export interface ITestFieldsWebPartProps {
  description: string;
  people: IPropertyFieldGroupOrPerson[];
  singleList: string | string[];
  multiList: string | string[];
  terms: ICheckedTerms;
  datetime: IDateFieldValue;
}
