import { css } from "styled-components";

export const gridTableTemplateColumns = css`
  grid-template-columns: 3.79rem 6.43rem 5.43rem 3.71rem 23.36rem 1fr ${({hasRecord}) =>  hasRecord ? '1fr' : '9.14rem'};
`;

export const tableBottomLineColor = css`
  border-bottom: 1px solid ${({theme}) =>  theme.color.thirdBackground};
`;

export const iconColorHoverBehavior = css`
  color: ${({theme}) => theme.color.icon};

  :hover {
    color: ${({theme}) => theme.color.accent};
  }
`;
