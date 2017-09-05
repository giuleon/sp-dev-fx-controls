declare interface IComponentAndFieldStrings {
  // PeoplePicker labels
  PeoplePickerSuggestedContacts: string;
  PeoplePickerSuggestedGroups: string;
  PeoplePickerSuggestedCombined: string;
  PeoplePickerNoResults: string;
  PeoplePickerLoading: string;
}

declare module 'componentAndFieldStrings' {
  const strings: IComponentAndFieldStrings;
  export = strings;
}
