import { ICheckedTerms } from './IPropertyFieldTermSetPicker';
import { ITermStore, IGroup, ITermSet, ITerm } from '../../services/ISPTermStorePickerService';
import { IPropertyFieldTermSetPickerPropsInternal } from "./IPropertyFieldTermSetPicker";
import SPTermStorePickerService from '../../services/SPTermStorePickerService';

/**
 * @interface
 * PropertyFieldTermSetPickerHost properties interface
 *
 */
export interface IPropertyFieldTermSetPickerHostProps extends IPropertyFieldTermSetPickerPropsInternal {
  onChange: (targetProperty?: string, newValue?: any) => void;
}

/**
 * @interface
 * PropertyFieldTermSetPickerHost state interface
 *
 */
export interface IPropertyFieldFontPickerHostState {
  termStores?: ITermStore[];
  errorMessage?: string;
  openPanel?: boolean;
  loaded?: boolean;
  activeNodes?: ICheckedTerms;
}

export interface ITermChanges {
  changedCallback: (term: ITerm, checked: boolean) => void;
  activeNodes?: ICheckedTerms;
}

export interface ITermGroupProps extends ITermChanges {
  group: IGroup;
  termstore: string;
  termsService: SPTermStorePickerService;
  multiSelection: boolean;
}

export interface ITermGroupState {
  expanded: boolean;
}

export interface ITermSetProps extends ITermChanges {
  termset: ITermSet;
  termstore: string;
  termsService: SPTermStorePickerService;
  autoExpand: () => void;
  multiSelection: boolean;
}

export interface ITermSetState {
  terms?: ITerm[];
  loaded?: boolean;
  expanded?: boolean;
}

export interface ITermProps extends ITermChanges {
  termset: string;
  term: ITerm;
  multiSelection: boolean;
}

export interface ITermState {
  selected?: boolean;
}
