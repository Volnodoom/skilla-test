import styled, { css } from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";
import customCursor from "assets/icons/icon-cursor.svg"
import { iconColorHoverBehavior } from "styled-elements/css-constants/css-constants";

const cursor = css`
  cursor: url(${customCursor}) 7 2, pointer;
`;

const playIcon = css`
  position: absolute;
  inset: 50%;
  transform: translate(-30%, -50%);
  width: 5px;
  height: 5px;

  content: '';
  border: 5px solid ${({theme}) => theme.color.accent};
  border-left-color: ${({theme}) => theme.color.accent};
  border-right-width: 0px;
  border-left-width: 7px;
  border-top-color: transparent;
  border-bottom-color: transparent;
`;

const pauseIcon = css`
  position: absolute;
  inset: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 9px;

  content: '';
  background-color: ${({theme}) => theme.color.accent};
  box-shadow: 4px 0 0 0 ${({theme}) => theme.color.accent};
`;

const ContentAudioWrapper = styled.div`
  display: flex;
  width: 22rem;
  height: 3rem;
  padding: 0.75rem 1.125rem;

  border-radius: 3em;
  align-items: center;
  background-color: ${({theme}) => theme.color.thirdBackground};
`;

const ContentAudioTiming = styled.span`
  display: block;
  width: ${({hasHours}) => hasHours ? '4.2em' : '2.93em'};
  font-size: 15px;
  margin-right: 0.53em;
`;

const ContentAudioPlayButton = styled(ButtonTransparent)`
  position: relative;
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;

  border-radius: 50%;
  background-color: ${({theme}) => theme.color.whitePure};

  ::after {
    ${({isPlaying}) => isPlaying ? pauseIcon : playIcon}
  }
`;

const ContentAudioPlayTimeLine = styled.input`
  width: 10.25rem;
  height: 0.25rem;
  margin-right: 0.75em;

  overflow: hidden;
  border-radius: 3rem;

  -webkit-appearance: none;

  ::-webkit-slider-runnable-track,
  ::-moz-range-track {
    width: 100%;
    height: 0.25rem;

    ${cursor}
    border: 0;
  }

  ::-webkit-slider-runnable-track {
    background: linear-gradient(to right,
      ${({theme}) => theme.color.whitePure} ${({progressPercent}) => `${progressPercent}%`},
      ${({theme}) => theme.color.icon} ${({progressPercent}) => `${progressPercent}%`}
    );
    ${cursor}
  }

  ::-moz-range-track {
    background-color: ${({theme}) => theme.color.icon};
  }

  ::-moz-range-progress {
    height: 100%;

    ${cursor}
    background-color: ${({theme}) => theme.color.whitePure};
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0;
    width: 0.2rem;
    height: 0.25rem;

    background-color: ${({theme}) => theme.color.whitePure};
    ${cursor}
  }

  ::-moz-range-thumb {
    border: 0;
    width: 0.2rem;
    height: 0.25rem;

    background-color: ${({theme}) => theme.color.whitePure};
    ${cursor}
  }

  :active::-webkit-slider-thumb {
    width: 0.3rem;
    background-color: ${({theme}) => theme.color.accent};
  }

  :active::-moz-range-thumb {
    width: 0.3rem;
    background-color: ${({theme}) => theme.color.accent};
  }
`;

const ContentAudioDownload = styled(ButtonTransparent)`
  width: 0.875rem;
  height: 1rem;
  ${iconColorHoverBehavior};
`;

const ContentAudioClose = styled(ButtonTransparent)`
  width: 1rem;
  height: 1rem;
  margin-left: 1.375rem;

  ${iconColorHoverBehavior};
`;

export {
  ContentAudioWrapper,
  ContentAudioTiming,
  ContentAudioPlayButton,
  ContentAudioPlayTimeLine,
  ContentAudioDownload,
  ContentAudioClose,
}

