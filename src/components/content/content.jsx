import * as S from "./content.style";
import DateBalance from "./components/date-balance/date-balance";
import Filtering from "./components/filtering/filtering";
import ContentTable from "./components/content-table/content-table";
import { useEffect } from "react";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";
import { LoadingStatus, THREE_DAYS_BEFORE } from "utils/constants";
import { formateDateNoTime } from "utils/utils";

const today = new Date();
const threeDaysBefore = new Date().setDate(new Date().getDate() - THREE_DAYS_BEFORE);

const firstThreeDays = {
  dayStart: new Date(threeDaysBefore),
  dayEnd: today,
}

const Content = () => {
  const initialDataRequest = useCallsInfoStore(selector.fetchInitiation);
  const changeLoadingStatus = useCallsInfoStore(selector.changeLoadingStatus);

  useEffect(() => {
    changeLoadingStatus(LoadingStatus.Loading);

      initialDataRequest(
        formateDateNoTime(firstThreeDays.dayStart),
        formateDateNoTime(firstThreeDays.dayEnd),
      );


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
