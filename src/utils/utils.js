import { InOutCallType, PROPER_FORMATE_LOCAL, TIME_SIXTY, TWO_DIGITS, YESTERDAY } from "./constants";

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
