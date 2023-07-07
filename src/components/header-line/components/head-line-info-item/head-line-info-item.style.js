import styled, { css } from "styled-components";
import { ColorHighlight } from "utils/constants";

const greenColorLight = css`
  color: ${({theme}) => theme.color.green};
`;

const yellowColorLight = css`
  color: ${({theme}) => theme.color.yellow};
`;

const redColorLight = css`
  color: ${({theme}) => theme.color.red};
`;

const greenBGLight = css`
  background-color: ${({theme}) => theme.color.green};
`;

const yellowBGLight = css`
  background-color: ${({theme}) => theme.color.yellow};
`;

const redBGLight = css`
  background-color: ${({theme}) => theme.color.red};
`;

const HeadLineInfoItem = styled.li`
  /* display: flex;
  flex-direction: column; */
  font-size: 14px;
`;

const InfoItemColorHighlight = styled.span`
  ${({color}) => color === ColorHighlight.Green && greenColorLight};
  ${({color}) => color === ColorHighlight.Yellow && yellowColorLight};
  ${({color}) => color === ColorHighlight.Red && redColorLight};
`;

const InfoItemVisualization = styled.div`
  position: relative;
  width: 9.75rem;
  height: 0.375rem;
  margin-top: 0.5rem;

  border-radius: 0.75rem;
  overflow-x: hidden;
  background-color: ${({theme}) => theme.color.textHeader};

  ::after {
    position: absolute;
    content: '';
    width: ${({progress}) => `${progress}%`};
    height: 0.375rem;

    background-color: ${({theme}) => theme.color.textHeader};
    ${({color}) => color === ColorHighlight.Green && greenBGLight};
    ${({color}) => color === ColorHighlight.Yellow && yellowBGLight};
    ${({color}) => color === ColorHighlight.Red && redBGLight};
  }
`;

export {
  HeadLineInfoItem,
  InfoItemColorHighlight,
  InfoItemVisualization,
}
