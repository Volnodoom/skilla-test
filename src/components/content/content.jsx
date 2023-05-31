import * as S from "./content.style";
import DateBalance from "./components/date-balance/date-balance";
import Filtering from "./components/filtering/filtering";
import ContentTable from "./components/content-table/content-table";

const Content = () => {
  return(
    <S.ContentWrapper>
      <DateBalance />
      <Filtering />
      <ContentTable />
    </S.ContentWrapper>
  );
};

export default Content;
