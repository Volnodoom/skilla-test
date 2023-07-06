import { DATE_DIGITS, FIFTH_CHARACTER, FIRST_CHARACTER, FIX_DIGITS_NUMBER, FOURTH_CHARACTER, FixedDateTimeList, InOutCallType, ONE_MONTH_BEFORE, ONE_WEEK_BEFORE, ONE_YEAR_BEFORE, SECOND_CHARACTER, SECOND_DATE_STEP, SIXTH_CHARACTER, SortingTitle, THIRD_CHARACTER, THREE_DAYS_BEFORE, TIME_SIXTY, TWO_DIGITS, YESTERDAY } from "./constants";

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

export const todayNoTimeShort = new Date()
  .toLocaleDateString('ru-Ru')
  .replace(/([\d]{2}).([\d]{2}).([\d]{2})(\d{2})/g, '$1.$2.$4');

export const formatDateDotToHyphen = (string) => string
  .replace(/([\d]{2}).([\d]{2}).([\d]{2})/g, '20$3-$2-$1')

  // for the follow format 20211224
export const formatDateToDotShort = (string) => string
  .replace(/([\d]{2})([\d]{2})([\d]{2})([\d]{2})/g, '$4.$3.$2')

  // for the follow format 15042023 to 15.04.23
  export const formatDMYToDotShort = (string) => string
  .replace(/([\d]{2})([\d]{2})([\d]{2})([\d]{2})/g, '$1.$2.$4')

  // for the follow format 15.04.23 to 2023-04-15
export const formatDMYDotToHyphen = (string) => string
  .replace(/([\d]{2}).([\d]{2}).([\d]{2})/g, '20$3-$2-$1')

  // for the follow format 150423 to 2023-04-15
export const formatDMYToHyphen = (string) => string
  .replace(/([\d]{2})([\d]{2})([\d]{4})/g, '$3-$2-$1')

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

export const today = formateDateNoTime(new Date());
export const threeDaysBefore = formateDateNoTime(new Date(
  new Date().setDate(new Date().getDate() - THREE_DAYS_BEFORE)
  ));
export const oneWeekBefore = formateDateNoTime(new Date(
  new Date().setDate(new Date().getDate() - ONE_WEEK_BEFORE)
  ));
export const oneMonthBefore = formateDateNoTime(new Date(
  new Date().setMonth(new Date().getMonth() - ONE_MONTH_BEFORE)
  ));
export const oneYearBefore = formateDateNoTime(new Date(
  new Date().setFullYear(new Date().getFullYear() - ONE_YEAR_BEFORE)
  ));

export const fixedDayTimeSwitcher = (timeValue) => {
  switch(timeValue) {
    case FixedDateTimeList.ThreeDays:
      return {
        dayStart: threeDaysBefore,
        dayEnd: today,
      };
    case FixedDateTimeList.Week:
      return {
        dayStart: oneWeekBefore,
        dayEnd: today,
      };
    case FixedDateTimeList.Month:
      return {
        dayStart: oneMonthBefore,
        dayEnd: today,
      };
    case FixedDateTimeList.Year:
      return {
        dayStart: oneYearBefore,
        dayEnd: today,
      };
    default:
      return {
        dayStart: threeDaysBefore,
        dayEnd: today,
      };
  }
}

export const validateInputDate = (string) => {
  const leftOnlyNumbers = /\D/g;
  const twelveDigitsString = string.replace(leftOnlyNumbers, '').slice(0, DATE_DIGITS*2);
  const stringLength = twelveDigitsString.length;
  const currentYearShort = String(new Date().getFullYear()).slice(2);

  const checkFirstNumber = (hasMoreNumbers, isSecondDate) => (string) => {
    const currentIndex = isSecondDate ? SECOND_DATE_STEP + FIRST_CHARACTER : FIRST_CHARACTER;
    const nextIndex = isSecondDate ? SECOND_DATE_STEP + SECOND_CHARACTER : SECOND_CHARACTER;

    if(Number(string[currentIndex]) > 3 && isSecondDate)  {
      return `${string.slice(0, currentIndex)}0${hasMoreNumbers ? string.slice(nextIndex) : ''}`;
    } else if (Number(string[currentIndex]) > 3 && !isSecondDate) {
      return `0${hasMoreNumbers ? string.slice(nextIndex) : ''}`;
    }
    return `${string}`;
  }

  const checkSecondNumber = (hasMoreNumbers, isSecondDate) => (string) => {
    const previousIndex = isSecondDate ? SECOND_DATE_STEP + FIRST_CHARACTER : FIRST_CHARACTER;
    const currentIndex = isSecondDate ? SECOND_DATE_STEP + SECOND_CHARACTER : SECOND_CHARACTER;
    const nextIndex = isSecondDate ? SECOND_DATE_STEP + THIRD_CHARACTER : THIRD_CHARACTER;

    if(
      Number(string[previousIndex]) === 0 &&
      Number(string[currentIndex]) === 0
      ) {
        return `${string.slice(0, currentIndex)}1${hasMoreNumbers ? string.slice(nextIndex) : ''}`;
      }

    return `${string}`;
  }

  const checkThirdNumber = (hasMoreNumbers, isSecondDate) => (string) => {
    const currentIndex = isSecondDate ? SECOND_DATE_STEP + THIRD_CHARACTER : THIRD_CHARACTER;
    const nextIndex = isSecondDate ? SECOND_DATE_STEP + FOURTH_CHARACTER : FOURTH_CHARACTER;

    if(Number(string[currentIndex]) > 1) {
      return `${string.slice(0, currentIndex)}0${hasMoreNumbers ? string.slice(nextIndex) : ''}`;
    }
    return `${string}`;
  }

  const checkFourthNumber = (hasMoreNumbers, isSecondDate) => (string) => {
    const previousIndex = isSecondDate ? SECOND_DATE_STEP + THIRD_CHARACTER : THIRD_CHARACTER;
    const currentIndex = isSecondDate ? SECOND_DATE_STEP + FOURTH_CHARACTER : FOURTH_CHARACTER;
    const nextIndex = isSecondDate ? SECOND_DATE_STEP + FIFTH_CHARACTER : FIFTH_CHARACTER;

    if(
      Number(string[previousIndex]) === 0 &&
      Number(string[currentIndex]) === 0
      ) {
      return `${string.slice(0, currentIndex)}1${hasMoreNumbers ? string.slice(nextIndex) : ''}`;
    }

    if(
      Number(string[previousIndex]) === 1 &&
      Number(string[currentIndex]) > 2
      ) {
      return `${string.slice(0, currentIndex)}2${hasMoreNumbers ? string.slice(nextIndex) : ''}`;
    }
    return `${string}`;
  }

  const checkFifthNumber = (hasMoreNumbers, isSecondDate) => (string) => {
    const currentIndex = isSecondDate ? SECOND_DATE_STEP + FIFTH_CHARACTER : FIFTH_CHARACTER;
    const nextIndex = isSecondDate ? SECOND_DATE_STEP + SIXTH_CHARACTER : SIXTH_CHARACTER;

    if(string[currentIndex] > currentYearShort[0]) {
      return `${string.slice(0, currentIndex)}${currentYearShort[0]}${hasMoreNumbers ? string.slice(nextIndex) : ''}`;
    }
    return `${string}`;
  }

  const checkSixthNumber = (hasMoreNumbers, isSecondDate) => (string) => {
    const previousIndex = isSecondDate ? SECOND_DATE_STEP + FIFTH_CHARACTER : FIFTH_CHARACTER;
    const currentIndex = isSecondDate ? SECOND_DATE_STEP + SIXTH_CHARACTER : SIXTH_CHARACTER;
    const nextIndex = isSecondDate ? SECOND_DATE_STEP + SIXTH_CHARACTER + 1: SIXTH_CHARACTER + 1;

    if(
      string[currentIndex] > currentYearShort[1] &&
      string[previousIndex] === currentYearShort[0]
      ) {
      return `${string.slice(0, currentIndex)}${currentYearShort[1]}${hasMoreNumbers ? string.slice(nextIndex) : ''}`;
    }
    return `${string}`;
  }

  const one = checkFirstNumber(stringLength > 1, false)(twelveDigitsString);
  const two = checkSecondNumber(stringLength > 2, false)(one);
  const three = checkThirdNumber(stringLength > 3, false)(two);
  const four = checkFourthNumber(stringLength > 4, false)(three);
  const five = checkFifthNumber(stringLength > 5, false)(four);
  const six = checkSixthNumber(stringLength > 6, false)(five);
  //second date
  const secondOne = checkFirstNumber(stringLength > 7, true)(six);
  const secondTwo = checkSecondNumber(stringLength > 8, true)(secondOne);
  const secondThree = checkThirdNumber(stringLength > 9, true)(secondTwo);
  const secondFour = checkFourthNumber(stringLength > 10, true)(secondThree);
  const secondFive = checkFifthNumber(stringLength > 11, true)(secondFour);
  const secondSix = checkSixthNumber(stringLength > 12, true)(secondFive);

  return secondSix;
}

export const maskDateInput = (string) => {
  const numberSequence = /^([\d]{1,2})?(\d{1,2})?(\d{1,2})?(\d{1,2})?(\d{1,2})?(\d{1,2})?/g;
  const leftOnlyNumbers = /\D/g;
  const twelveDigitsString = string.replace(leftOnlyNumbers, '').slice(0, DATE_DIGITS*2);
  const stringLength = twelveDigitsString.length;

  const match = [...twelveDigitsString.matchAll(numberSequence)][0];

  if(stringLength === 0) {
    return ``;
  } else if(stringLength <= 2) {
    return `${twelveDigitsString}`;
  } else if (stringLength <= 4) {
    return `${match[1]}.${match[2]}`;
  } else if (stringLength <= 6) {
    return `${match[1]}.${match[2]}.${match[3]}`;
  } else if (stringLength <= 8) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
  } else if (stringLength <= 10) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}.${match[5]}`;
  } else if (stringLength <= 12) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}.${match[5]}.${match[6]}`;
  }
}







