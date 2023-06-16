import * as S from "./content-loading-line.style";

const ContentLoadingLine = () => {
  return(
    <S.ContentLoadingLineRow>
      <td></td>
      <td></td>
      <td></td>

      <S.ContentLoadingLineMessage>
        Загружается список звонков ...
      </S.ContentLoadingLineMessage>

      <td></td>
      <td></td>
      <td></td>
    </S.ContentLoadingLineRow>
  );
};

export default ContentLoadingLine;
