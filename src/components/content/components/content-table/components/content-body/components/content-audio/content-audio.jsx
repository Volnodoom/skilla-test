import { useEffect, useRef, useState } from "react";
import * as S from "./content-audio.style";
import {ReactComponent as IconDownload} from "assets/icons/icon-download.svg"
import {ReactComponent as IconClose} from "assets/icons/icon-spin-cross.svg"
import { calculateAudioTime } from "utils/utils";
import { PERCENTAGE, TIME_SIXTY } from "utils/constants";
import * as selector from "store/useCallsInfoStore.selector";
import { useCallsInfoStore } from "store/useCallsInfoStore";

const INITIAL_PROGRESS_MAX = 100;

const ContentAudio = ({duration, recordId, partnerId}) => {
  const audio = useRef(null);

  const [styleBarProgress, setStyleBarProgress] = useState(0);
  const [maxProgress, setMaxProgress] = useState(INITIAL_PROGRESS_MAX);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioTimeInfo, setAudioTimeInfo] = useState('')
  const [progressInputValue, setProgressInputValue] = useState(0);
  const [audioTotalDuration, setAudioTotalDuration] = useState('');
  const [playingDuration, setPlayingDuration] = useState('');

  const fetchRecord = useCallsInfoStore(selector.fetchRecord);
  const audioSRC = useCallsInfoStore(selector.getRecordUrl)(recordId);

  useEffect(() => {
    if(recordId && partnerId) {
      fetchRecord(recordId, partnerId);
    }
  }, [recordId, partnerId, fetchRecord])


  const hasHours = Math.floor(audioTotalDuration / (TIME_SIXTY * TIME_SIXTY)) > 0;

  useEffect(() => {
    if(audioSRC && audio.current.currentTime === 0) {
      setAudioTimeInfo(audioTotalDuration);
    }
  }, [audioSRC, audioTotalDuration]);

  const handleLoadMeta = () => {
    setAudioTotalDuration(audio.current.duration);
    setMaxProgress(audio.current.duration);
  };

  const handleAudioTimeUpdate = () => {
    const time = audio.current.currentTime;

    setProgressInputValue(Math.floor(time));
    setStyleBarProgress(time * PERCENTAGE/audioTotalDuration);
    setPlayingDuration(time);
    setAudioTimeInfo(playingDuration);
  }

  const handleEndAudioPlay = () => {
    audio.current.currentTime = 0;
    setIsPlaying(false);
  }

  const handlePlayTimeInput = (evt) => {
    setPlayingDuration(evt.target.value);

    setStyleBarProgress(evt.target.value * PERCENTAGE/audioTotalDuration);
  };

  const handlePlayTimeChange = (evt) => {
    audio.current.currentTime = evt.target.value;
  };

  const handlePlayButtonClick = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    if(newState) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }

  if(!audioSRC) {
    return calculateAudioTime(duration)
  }

  return(
    <S.ContentAudioWrapper>
      <audio
        onTimeUpdate={handleAudioTimeUpdate}
        onLoadedMetadata={handleLoadMeta}
        onEnded={handleEndAudioPlay}
        ref={audio}
        preload="metadata"
      >
        <source
          src={audioSRC}
          type="audio/mpeg"
        />
      </audio>

      <S.ContentAudioTiming hasHours={hasHours}>
        {calculateAudioTime(audioTimeInfo)}
      </S.ContentAudioTiming>

      <S.ContentAudioPlayButton
        onClick={handlePlayButtonClick}
        isPlaying={isPlaying}
        type="button"
        aria-label="Кнопка проигрывания/воспроизведения"
      />

      <S.ContentAudioPlayTimeLine
        onInput={handlePlayTimeInput}
        onChange={handlePlayTimeChange}
        progressPercent={styleBarProgress}
        value={progressInputValue}
        max={maxProgress}
        type="range"
      />

      <S.ContentAudioDownload
        type="button"
        aria-label="Скачать запись"
      >
        <IconDownload />
      </S.ContentAudioDownload>

      <S.ContentAudioClose
        type="button"
      >
        <IconClose />
      </S.ContentAudioClose>
    </S.ContentAudioWrapper>
  );
};

export default ContentAudio;
