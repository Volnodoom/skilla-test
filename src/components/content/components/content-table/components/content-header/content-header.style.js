import styled from "styled-components";
import { ButtonTransparent } from "styled-elements/button-transparent/button-transparent";
import { gridTableTemplateColumns, tableBottomLineColor } from "styled-elements/css-constants/css-constants";

const ContentHeaderWrapper = styled.thead`

`;

const ContentHeaderRow = styled.tr`
  padding: 1.71em 2.86em 1.43em;

  display: grid;
  ${gridTableTemplateColumns}
  ${tableBottomLineColor};

  font-size: 14px;
`;

const ContentHeaderCell = styled.th`
  border: 0;

  :last-child {
    margin-left: auto;
  }
`;

const ContentHeaderSort = styled(ButtonTransparent)`
  display: flex;

  align-items: baseline;
  gap: 0.3em;

  font-size: 14px;
  font-weight: 400;
  text-align: start;

  color: ${({isActive, theme}) => isActive ? theme.color.accent : theme.color.textHeader};

  svg {
    padding-bottom: 1px;
  }
`;

export {
  ContentHeaderWrapper,
  ContentHeaderRow,
  ContentHeaderCell,
  ContentHeaderSort,
}
