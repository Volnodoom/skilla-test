import styled from "styled-components";
import { tableBottomLineColor } from "styled-elements/css-constants/css-constants";

const ContentBodyDateSeparation = styled.tr`
  display: grid;
  grid-template-columns: auto repeat(7, 1fr);
  padding: ${({isStart}) => isStart ? '1.375em' : '2.5em'} 2.5em 1em;

  ${tableBottomLineColor};
`;

const ContentBodyDate = styled.td`
  position: relative;
  font-size: 15px;
  letter-spacing: 0.01em;

  ::after {
    position: absolute;
    inset: 0 -0.33em auto auto;
    transform: translateX(100%);

    font-size: 12px;
    line-height: 1.0;
    color: ${({theme}) => theme.color.textHeader};
    content: attr(data-totalinfocount);
  }
`;

export {
  ContentBodyDateSeparation,
  ContentBodyDate,

}
