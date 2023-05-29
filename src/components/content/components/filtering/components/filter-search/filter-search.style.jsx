import styled, { css } from "styled-components";
import {ReactComponent as SearchIcon} from "assets/icons/icon-search.svg";
import {ReactComponent as CrossIcon} from "assets/icons/icon-spin-cross.svg";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";

const iconBehavior = css`
  color: ${({ theme }) => theme.color.icon};

  :hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

const FilterSearchWrapper = styled.div`
  position: relative;
  width: 31.86em;
  font-size: 14px;
  margin-right: auto;
`;

const FilterSearchIcon = styled(SearchIcon)`

`;

const FilterSearchLabel = styled.label`
  position: absolute;
  width: 1.15em;
  height: 1.15em;
  inset: 50% auto 50% 1.125em;
  transform: translateY(-50%);

  ${iconBehavior};
`;

const FilterSearchInput = styled.input`
  width: 100%;
  height: 2.86em;
  padding: 0.71em 3.3em;

  border-radius: 3.43em;
  border: 1px solid transparent;
  background-color: transparent;

  font-size: inherit;
  color: ${({ theme }) => theme.color.text};

  :hover:not(:focus) + ${FilterSearchLabel} {
    color: ${({ theme }) => theme.color.accent};
  };

  :focus {
    outline: none;
  };

  :focus-visible {
    border: 1px solid ${({ theme }) => theme.color.accent};
    outline: none;
  };

  ::placeholder {
    color: ${({ theme }) => theme.color.textSecondary};
  }

  :not(:placeholder-shown) {
    border: 1px solid ${({ theme }) => theme.color.thirdBackground};
  }
`;

const FilterSearchDeleteButton = styled(ButtonTransparent)`
  display: ${({isActive}) => isActive ? 'block' : 'none'};
  width: 1em;
  height: 1em;
  position: absolute;
  inset: 45% 1.36em auto auto;
  transform: translateY(-50%);

  ${iconBehavior};
  font-size: inherit;

  ::after {
    position: absolute;
    width: 1.7em;
    height: 1.5em;
    inset: 50%;
    transform: translate(-50%, -50%);

    content: '';
  }
`;

const FilterSearchDelete = styled(CrossIcon)`

`;

export {
  FilterSearchWrapper,
  FilterSearchIcon,
  FilterSearchInput,
  FilterSearchDelete,
  FilterSearchLabel,
  FilterSearchDeleteButton,

}
