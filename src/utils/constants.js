export const TIME_SIXTY = 60;
export const TWO_DIGITS = 10;
export const PERCENTAGE = 100;
export const STEP = 25;
export const THREE_DAYS_BEFORE = 3;
export const ONE_WEEK_BEFORE = 7;
export const ONE_MONTH_BEFORE = 1;
export const ONE_YEAR_BEFORE = 1;
export const DATE_DIGITS = 6;
export const DATE_DIGITS_WITH_DOT = 8;
export const DAY_MONTH = 4;
export const REQUEST_TIMEOUT = 5000;
export const FIX_DIGITS_NUMBER = 11;
export const FIRST_CHARACTER= 0;
export const SECOND_CHARACTER = 1;
export const THIRD_CHARACTER = 2;
export const FOURTH_CHARACTER = 3;
export const FIFTH_CHARACTER = 4;
export const SIXTH_CHARACTER = 5;
export const SECOND_DATE_STEP = 6;
export const YEAR_START = '20';

export const YESTERDAY = 'вчера';
export const BACKEND_URL = 'https://api.skilla.ru/mango';
export const AUTH_TOKEN = 'Bearer testtoken';
export const GLOBAL_METHOD = 'POST';
export const INPUT = 'INPUT';
export const SEARCH = 'Search';
export const DATE_TIME_FILTER = 'date-time-filter';

export const UrlList = {
  CallList: '/getList',
  Record: '/getRecord',
  PersonList: '/getPersonsList',
}

export const FetchParams = {
  DateStart: 'date_start',
  DateEnd: 'date_end',
  LimitStart: 'offset',
  LimitEnd: 'limit',
  Record: 'record',
  PartnerId: 'partnership_id',
  InOut: 'in_out',
  Source: 'sources[]',
  CallType: 'from_type[]',
  Error: 'errors[]',
  Search: 'search',
}

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
  OnGoing: 'onGoing',
  All: 'all',
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

export const LoadingStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Succeeded: 'succeeded',
  Failed: 'failed',
};

export const InOutCallTypeRu = {
  // All: {
  //   display: 'Все Типы',
  //   fetchParam: 'in_out',
  //   fetch: 'empty',
  // },
  InCome: {
    display: 'Входящие',
    fetchParam: 'in_out',
    fetch: '1',
  },
  OnGoing: {
    display: 'Исходящие',
    fetchParam: 'in_out',
    fetch: '0',
  },
}

export const SourceList = {
  Site: {
    display: 'С сайта',
    fetchParam: 'sources[]',
    fetch: 'from_site',
  },
  Yandex: {
    display: 'Яндекс',
    fetchParam: 'sources[]',
    fetch: 'yandex',
  },
  Google: {
    display: 'Гугл',
    fetchParam: 'sources[]',
    fetch: 'google',
  },
  Empty: {
    display: 'Без источника',
    fetchParam: 'sources[]',
    fetch: 'empty',
  },
}

export const CallTypeList = {
  Client: {
    display: 'Клиенты',
    fetchParam: 'from_type[]',
    fetch: 'clients',
  },
  NewClient: {
    display: 'Новые клиенты',
    fetchParam: 'from_type[]',
    fetch: 'new_clients',
  },
  Workers: {
    display: 'Рабочие',
    fetchParam: 'from_type[]',
    fetch: 'workers',
  },
  App: {
    display: 'Приложение',
    fetchParam: 'from_type[]',
    fetch: 'app',
  },
}

export const CallErrorTypeList = {
  NoErrors: {
    display: 'Без ошибок',
    fetchParam: 'errors[]',
    fetch: 'noerrors',
  },
  NoScript: {
    display: 'Скрипт не использован',
    fetchParam: 'errors[]',
    fetch: 'noscript',
  },
}

export const mockOptionList = {
  Yandex: {
    display: 'Все клиенты образ',
    fetchParam: '',
    fetch: '',
  },
  Yandex1: {
    display: 'Новые клиенты образ',
    fetchParam: '',
    fetch: '',
  },
  Yandex2: {
    display: 'Все исполнители образ',
    fetchParam: '',
    fetch: '',
  },
  Yandex3: {
    display: 'Через приложение образ',
    fetchParam: '',
    fetch: '',
  },
  Yandex4: {
    display: 'Прочие звонки образ',
    fetchParam: '',
    fetch: '',
  },
}

export const dateList = [
  {
    display: '3 дня',
    fetchParam: DATE_TIME_FILTER,
    fetch: '',
  },
  {
    display: 'Неделя',
    fetchParam: DATE_TIME_FILTER,
    fetch: '',
  },
  {
    display: 'Месяц',
    fetchParam: DATE_TIME_FILTER,
    fetch: '',
  },
  {
    display: 'Год',
    fetchParam: DATE_TIME_FILTER,
    fetch: '',
  },
]

export const FixedDateTimeList = {
  ThreeDays: '3 дня',
  Week: 'Неделя',
  Month: 'Месяц',
  Year: 'Год',
}
