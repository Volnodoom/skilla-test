import * as S from "./content.style";
import DateBalance from "./components/date-balance/date-balance";
import Filtering from "./components/filtering/filtering";

const Content = () => {
  return(
    <S.ContentWrapper>
      <DateBalance />

      <Filtering />
    </S.ContentWrapper>
  );
};

export default Content;
