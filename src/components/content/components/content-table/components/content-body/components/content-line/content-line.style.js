import styled, { css } from "styled-components";
import {ReactComponent as IconInCome} from "assets/icons/icon-incoming.svg"
import {ReactComponent as IconOutcome} from "assets/icons/icon-outgoing.svg"
import { gridTableTemplateColumns, tableBottomLineColor } from "styled-elements/css-constants/css-constants";

const sourceColor = css`
  color: ${({theme}) => theme.color.textSource};
`;

const ContentLineRow = styled.tr`
  padding: 1em 2.5em 1em 2.5em;
  display: grid;
  ${gridTableTemplateColumns};

  align-items: center;
  :not(:last-child) {
    ${tableBottomLineColor};
  }

`;

const ContentLineCell = styled.td`
  font-size: 15px;
  width: min-content;
  width: 100%;
`;

const ContentLineCellCall = styled(ContentLineCell)`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  width: auto;
  padding-right: 1em;


  > :first-child {
    color: ${({theme}) => theme.color.textSecondary};
  }
`;

const ContentLineCellSource = styled(ContentLineCell)`
  ${({hasDiffColor}) => hasDiffColor ? sourceColor : ''};
`;

const ContentLineRecord = styled(ContentLineCell)`
  text-align: right;
`;

const IncomingCall = styled(IconInCome)`

`;

const OutComingCall = styled(IconOutcome)`

`;

const ContentLineCellImg = styled.td`
  font-size: 15px;
`;

const ContentLineAvatarImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const EmptyAvatar = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${({theme}) => theme.color.thirdBackground};

  ::after {
    position: absolute;
    inset: 50%;
    width: 2rem;
    height: 1rem;
    transform: translate(-50%, -65%);

    content: attr(data-familyinitials);
    text-align: center;
    font-size: 14px;
    color: ${({theme}) => theme.color.accent};
  }
`;

export {
  ContentLineRow,
  IncomingCall,
  OutComingCall,
  ContentLineAvatarImg,
  EmptyAvatar,
  ContentLineCell,
  ContentLineCellSource,
  ContentLineCellCall,
  ContentLineCellImg,
  ContentLineRecord,

}
