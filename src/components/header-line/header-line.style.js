import styled from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";
import {ReactComponent as IconSearch} from "assets/icons/icon-search.svg";

const HeadLineWrapper = styled.div`
  grid-area: header-line;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* width: 105rem; */
  padding: 1.25em 7.5em;
  display: none;

  background-color: ${({theme}) => theme.color.whitePure};
  box-shadow: 0px 4px 5px #E9EDF3;
`;

const HeadLineList = styled.ul`
  display: flex;
  gap: 3.5em;
  width: 48.125em;
  padding: 0;
  margin: 0;
  margin-right: auto;

  align-items: center;
  list-style: none;
`;

const HeadLineDateItem = styled.li`
  width: 7.5rem;

  font-size: 15px;
  color: ${({theme}) => theme.color.textHeader};
`;

const HeadLineSearchButton = styled(ButtonTransparent)`
  position: relative;
  width: 2em;
  height: 3em;
  margin-right: 3.5em;

  color: ${({theme}) => theme.color.icon};

  :hover {
    color: ${({theme}) => theme.color.accent};
  }
`;

const HeadLineSearchIcon = styled(IconSearch)`
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
`;

const HeadLinerUserName = styled(ButtonTransparent)`
  display: flex;
  align-items: baseline;
  gap: 0.67em;
  margin-right: 2.7em;

  font-size: 15px;
  color: ${({theme}) => theme.color.textHeader};
`;

const HeadLineActiveUser = styled(ButtonTransparent)`
  display: flex;
  align-items: center;
  gap: 0.625em;

  color: ${({theme}) => theme.color.textHeader};
`;

const HeaderLineAvatar = styled.img`
  width: 2.5em;
  height: 2.5em;

  border-radius: 50%;
  background-color: ${({theme}) => theme.color.grey};
`;

export {
  HeadLineWrapper,
  HeadLineList,
  HeadLineDateItem,
  HeadLineSearchButton,
  HeadLineSearchIcon,
  HeadLinerUserName,
  HeadLineActiveUser,
  HeaderLineAvatar,
}
