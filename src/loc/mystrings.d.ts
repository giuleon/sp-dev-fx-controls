declare interface IComponentAndFieldStrings {
  // PeoplePicker labels
  PeoplePickerSuggestedContacts: string;
  PeoplePickerSuggestedGroups: string;
  PeoplePickerSuggestedCombined: string;
  PeoplePickerNoResults: string;
  PeoplePickerLoading: string;

  //DatePicker labels
  DatePickerMonthLongJanuary: string;
  DatePickerMonthShortJanuary: string;
  DatePickerMonthLongFebruary: string;
  DatePickerMonthShortFebruary: string;
  DatePickerMonthLongMarch: string;
  DatePickerMonthShortMarch: string;
  DatePickerMonthLongApril: string;
  DatePickerMonthShortApril: string;
  DatePickerMonthLongMay: string;
  DatePickerMonthShortMay: string;
  DatePickerMonthLongJune: string;
  DatePickerMonthShortJune: string;
  DatePickerMonthLongJuly: string;
  DatePickerMonthShortJuly: string;
  DatePickerMonthLongAugust: string;
  DatePickerMonthShortAugust: string;
  DatePickerMonthLongSeptember: string;
  DatePickerMonthShortSeptember: string;
  DatePickerMonthLongOctober: string;
  DatePickerMonthShortOctober: string;
  DatePickerMonthLongNovember: string;
  DatePickerMonthShortNovember: string;
  DatePickerMonthLongDecember: string;
  DatePickerMonthShortDecember: string;
  DatePickerDayLongSunday: string;
  DatePickerDayShortSunday: string;
  DatePickerDayLongMonday: string;
  DatePickerDayShortMonday: string;
  DatePickerDayLongTuesday: string;
  DatePickerDayShortTuesday: string;
  DatePickerDayLongWednesday: string;
  DatePickerDayShortWednesday: string;
  DatePickerDayLongThursday: string;
  DatePickerDayShortThursday: string;
  DatePickerDayLongFriday: string;
  DatePickerDayShortFriday: string;
  DatePickerDayLongSaturday: string;
  DatePickerDayShortSaturday: string;

  DatepickerGoToToday: string;
  DateTimePickerDate: string;
  DateTimePickerTime: string;
}

declare module 'componentAndFieldStrings' {
  const strings: IComponentAndFieldStrings;
  export = strings;
}
