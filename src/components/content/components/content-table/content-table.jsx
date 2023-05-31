import ContentBody from "./components/content-body/content-body";
import ContentHeader from "./components/content-header/content-header";
import * as S from "./content-table.style";

const ContentTable = () => {
  return(
    <S.ContentTableWrapper>
      <ContentHeader />
      <ContentBody />
      <tfoot></tfoot>
    </S.ContentTableWrapper>
  );
};

export default ContentTable;
