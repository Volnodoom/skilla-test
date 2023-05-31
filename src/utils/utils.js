import { TIME_SIXTY, TWO_DIGITS } from "./constants";

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
