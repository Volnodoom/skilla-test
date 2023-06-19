import styled from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";

const FilteringWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5em;
  width: 100%;

  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0em 2em;
`;

const FilterReset = styled(ButtonTransparent)`
  position: relative;
  padding-right: 1.43em;
  font-size: 14px;

  color:  ${({theme}) =>  theme.color.icon};

  ::before,
  ::after {
    position: absolute;
    inset: 55% 0 auto auto;
    width: 0.7em;
    height: 1px;

    background-color: ${({theme}) =>  theme.color.icon};

    content: '';
  }

  ::before {
    transform: translateY(-50%) rotate(-45deg);

  }

  ::after {
    transform: translateY(-50%) rotate(45deg);
  }

  :hover {
    color:  ${({theme}) =>  theme.color.accent};

    ::before,
    ::after {
      background-color: ${({theme}) =>  theme.color.accent};
    }
  }
`;


export {
  FilteringWrapper,
  FilterReset,

}
