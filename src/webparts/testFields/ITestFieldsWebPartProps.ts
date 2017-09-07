import { IPropertyFieldGroupOrPerson } from '../../PropertyFieldPeoplePicker';
import { ICheckedTerms } from '../../PropertyFieldTermPicker';
import { IDateFieldValue } from "../../PropertyFieldDateTimePicker";

export interface ITestFieldsWebPartProps {
  description: string;
  people: IPropertyFieldGroupOrPerson[];
  singleList: string | string[];
  multiList: string | string[];
  terms: ICheckedTerms;
  datetime: IDateFieldValue;
}
