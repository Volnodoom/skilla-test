import * as S from "./content-footer.style";

const ContentFooter = () => {
  return(
    <tfoot>
      <S.ContentFooterRow>
        <td></td>
        <td></td>
        <td></td>

        <td>
          <S.ContentFooterShowMore>
            Загрузить больше
          </S.ContentFooterShowMore>
        </td>

        <td></td>
        <td></td>
        <td></td>
      </S.ContentFooterRow>
    </tfoot>
  );
};

export default ContentFooter;
