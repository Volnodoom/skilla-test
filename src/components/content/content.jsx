import * as S from "./content.style";
import DateBalance from "./components/date-balance/date-balance";
import Filtering from "./components/filtering/filtering";
import ContentTable from "./components/content-table/content-table";
import { useEffect } from "react";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";
import { LoadingStatus } from "utils/constants";

const Content = () => {
  const initialDataRequest = useCallsInfoStore(selector.fetchInitiation);
  const changeLoadingStatus = useCallsInfoStore(selector.changeLoadingStatus);

  useEffect(() => {
    changeLoadingStatus(LoadingStatus.Loading);
    initialDataRequest();
  }, [changeLoadingStatus, initialDataRequest])

  return(
    <S.ContentWrapper>
      <DateBalance />
      <Filtering />
      <ContentTable />
    </S.ContentWrapper>
  );
};

export default Content;
