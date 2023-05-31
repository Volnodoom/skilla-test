export const TIME_SIXTY = 60;
export const TWO_DIGITS = 10;
export const PERCENTAGE = 100;
export const PROPER_FORMATE_LOCAL = 'fr-Fr';
export const STEP = 25;
export const YESTERDAY = 'вчера';

export const NavigationName = {
  Result: 'Итоги',
  Order: 'Заказы',
  Message: 'Сообщения',
  Call: 'Звонки',
  Agent: 'Контрагенты',
  Doc: 'Документы',
  Executer: 'Исполнители',
  Reports: 'Отчеты',
  Knowledge: 'База знаний',
  Settings: 'Настройки',
}

export const NavigationStatic = [
  {
    text: NavigationName.Result,
    flag: false,
  },
  {
    text: NavigationName.Order,
    flag: false,
  },
  {
    text: NavigationName.Message,
    flag: false,
  },
  {
    text: NavigationName.Call,
    flag: true,
  },
  {
    text: NavigationName.Agent,
    flag: false,
  },
  {
    text: NavigationName.Doc,
    flag: false,
  },
  {
    text: NavigationName.Executer,
    flag: false,
  },
  {
    text: NavigationName.Reports,
    flag: false,
  },
  {
    text: NavigationName.Knowledge,
    flag: false,
  },
  {
    text: NavigationName.Settings,
    flag: false,
  },

];

export const ColorHighlight = {
  Green: 'Green',
  Yellow: 'Yellow',
  Red: 'Red',
};

export const InitialHeadlineData = [
  {
    text: 'Новые звонки',
    textHighligh: [20, 30],
    color: ColorHighlight.Green,
  },
  {
    text: 'Качество разговоров',
    textHighligh: 40,
    color: ColorHighlight.Yellow,
  },
  {
    text: 'Конверсия в заказ',
    textHighligh: 67,
    color: ColorHighlight.Red,
  },
];

export const TickDirection = {
  Top: 'Top',
  Bottom: 'Bottom',
  Left: 'Left',
  Right: 'Right',
};

export const TickType = {
  Thin: 'Thin',
  Thick: 'Thick',
};

export const InitialFilterValue = {
  Type: 'Все типы',
  User: 'Все сотрудники',
  Call: 'Все звонки',
  Resource: 'Все источники',
  Fall: 'Все ошибки',
};

export const SortingTitle = {
  Type: 'Тип',
  Time: 'Время',
  User: 'Сотрудник',
  Call: 'Звонок',
  Resource: 'Источник',
  Duration: 'Длительность',
};

export const SortingOrder = {
  Increase: 'ASC',
  Decrease: 'DESC',
};

export const InOutCallType = {
  InCome: 'inComing',
  OutCome: 'outComing',
}

export const SortingTitleList = [
  'Тип',
  'Время',
  'Сотрудник',
  '',
  'Звонок',
  'Источник',
  'Длительность',
];
