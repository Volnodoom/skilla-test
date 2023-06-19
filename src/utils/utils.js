import { FIX_DIGITS_NUMBER, InOutCallType, SortingTitle, TIME_SIXTY, TWO_DIGITS, YESTERDAY } from "./constants";

export const calculateAudioTime = (secs) => {
  let minutes, seconds, secondsAfterHour;
  const hours = Math.floor(secs / (TIME_SIXTY * TIME_SIXTY));
  const hasHours = hours > 0;

  if(hasHours) {
    secondsAfterHour = secs % (TIME_SIXTY * TIME_SIXTY);
  }

  minutes = hasHours ?
    Math.floor(secondsAfterHour / TIME_SIXTY) :
    Math.floor(secs / TIME_SIXTY);

  seconds = hasHours ?
    Math.floor(secondsAfterHour % TIME_SIXTY) :
    Math.floor(secs % TIME_SIXTY);

  const returnedSeconds = seconds < TWO_DIGITS ? `0${seconds}` : `${seconds}`;
  const returnedMinutes = minutes < TWO_DIGITS ? `0${minutes}` : `${minutes}`;
  const returnedHours = hours < TWO_DIGITS ? `0${hours}` : `${hours}`;
  return `${hasHours ? `${returnedHours}:` : ''}${returnedMinutes}:${returnedSeconds}`;
}

export const formateDateNoTime = (valueDate) => valueDate
  .toLocaleDateString('ru-Ru')
  .replace(/([\d]{2}).*?([\d]{2}).*?(\d{4})/g, '$3-$2-$1');

export const dateNaming = (value) => {
  const dateValue = new Date(value);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const formatter = new Intl.DateTimeFormat('ru-Ru', {
    year: 'numeric',
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  })

  if(value === formateDateNoTime(yesterday)) {
    return YESTERDAY;
  } else {
    const formattedString = formatter.format(dateValue);
    return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
  }
}

export const calculateInOutToClient = (value) => {
  switch(value) {
    case 1:
      return InOutCallType.InCome;
    case 0:
      return InOutCallType.OnGoing;
    default:
      return InOutCallType.All;
  }
}

const sortFunctionBase = (sortFunction, isIncrease) => {
  if(!isIncrease) {
    return sortFunction();
  }

  return Number(-sortFunction());
}

const sortInOutCall = (dataList, isIncrease) => dataList.slice().sort((valueA, valueB) => {
  const sortFunction = () => {
    if(
      valueA.inOut === InOutCallType.InCome &&
      valueB.inOut === InOutCallType.OnGoing
      ) {
        return 1
    }
    if(
      valueA.inOut === InOutCallType.OnGoing &&
      valueB.inOut === InOutCallType.InCome
      ) {
        return -1
    }

    return 0
  }

  return sortFunctionBase(
    sortFunction,
    isIncrease
  )
});

const sortTime = (dataList, isIncrease) => dataList.slice().sort((valueA, valueB) => {
  const sortFunction = () => {
    const timeA = Date.parse(valueA.date);
    const timeB = Date.parse(valueB.date);

    if(timeB - timeA > 0) {
      return 1
    }
    if(timeB - timeA < 0) {
      return -1
    }

    return 0;
  }

  return sortFunctionBase(
    sortFunction,
    isIncrease
  )

});

const sortSource = (dataList, isIncrease) => dataList.slice().sort((valueA, valueB) => {
  const sortFunction = () => {
    const sourceA = valueA.source.toLowerCase();
    const sourceB = valueB.source.toLowerCase();

    if(sourceB > sourceA) {
      return 1
    }
    if(sourceB < sourceA) {
      return -1
    }

    return 0;
  }

  return sortFunctionBase(
    sortFunction,
    isIncrease
  )

});

const sortDuration = (dataList, isIncrease) => dataList.slice().sort((valueA, valueB) => {
  const sortFunction = () => {
    const durationA = valueA.duration;
    const durationB = valueB.duration;

    if(durationB > durationA) {
      return 1
    }
    if(durationB < durationA) {
      return -1
    }

    return 0;
  }

  return sortFunctionBase(
    sortFunction,
    isIncrease
  )

});

export const sortData = (type, isIncrease, dataList) => {
  switch(type) {
    case SortingTitle.Type:
      return sortInOutCall(dataList, isIncrease);
    case SortingTitle.Time:
      return sortTime(dataList, isIncrease);
    case SortingTitle.Resource:
      return sortSource(dataList, isIncrease);
    case SortingTitle.Duration:
      return sortDuration(dataList, isIncrease);
    default:
      return dataList;
  }
}

export const getCoords = (elem) => {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}

export const maskMobile = (string) => {
  const numberSequence = /^([\d]{1})?(\d{1,3})?(\d{1,3})?(\d{1,2})?(\d{1,2})?/g;

  const leftOnlyNumbers = /\D/g;
  const elevenDigitsString = string.replace(leftOnlyNumbers, '').slice(0, FIX_DIGITS_NUMBER);
  const stringLength = elevenDigitsString.length;
  const match = [...elevenDigitsString.matchAll(numberSequence)][0];

  if(stringLength === 0) {
    return ``;
  } else if(stringLength <= 1) {
    return `+${elevenDigitsString}`;
  } else if (stringLength <= 4) {
    return `+${match[1]} (${match[2]}`;
  } else if (stringLength <= 7) {
    return `+${match[1]} (${match[2]})-${match[3]}`;
  } else if (stringLength <= 9) {
    return `+${match[1]} (${match[2]})-${match[3]}-${match[4]}`;
  } else if (stringLength <= 11) {
    return `+${match[1]} (${match[2]})-${match[3]}-${match[4]}-${match[5]}`;
  }
}

export const unmaskMobile = (string) => {
  const numberRegexp = /\D/g;
  const onlyNumberString = string.replace(numberRegexp, '');
  return onlyNumberString;
}
