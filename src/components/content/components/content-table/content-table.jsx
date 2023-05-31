import ContentBody from "./components/content-body/content-body";
import ContentFooter from "./components/content-footer/content-footer";
import ContentHeader from "./components/content-header/content-header";
import * as S from "./content-table.style";

const ContentTable = () => {
  return(
    <S.ContentTableWrapper>
      <ContentHeader />
      <ContentBody />
      <ContentFooter />
    </S.ContentTableWrapper>
  );
};

export default ContentTable;
