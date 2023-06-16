import ContentLine from "./components/content-line/content-line";
import { dateNaming, formateDateNoTime } from "utils/utils";
import { Fragment, useCallback, useRef } from "react";
import ContentBodyDateSeparation from "./components/content-body-date-separation/content-body-date-separation";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";
import ContentLoadingLine from "./components/content-loading-line/content-loading-line";
import { LoadingStatus } from "utils/constants";

const ContentBody = () => {
  const previousValue = useRef('');
  const dateList = new Set();

  const info = useCallsInfoStore(selector.getCalls);
  const isLoading = useCallsInfoStore(selector.getIsLoading);
  const currentStatus = useCallsInfoStore(selector.getLoadingStatus);
  const isIdle = currentStatus === LoadingStatus.Idle;

  info.forEach((line) => dateList.add(line.dateNoTime));

  const getTotalCallsForDay = useCallback((stringDateValue) => info
    .filter((value) => value.dateNoTime === stringDateValue)
    .length, [info]
  )

  const hasRecord = info.some((value) => Boolean(value.record));

  const hasContactsToday = dateList
    .has(
      formateDateNoTime(new Date())
    );

    if(isLoading || isIdle) {
      return(
        <tbody>
          <ContentLoadingLine />
        </tbody>
      )
    }


  return(
    <tbody>
      {
        !hasContactsToday  ?
          <ContentBodyDateSeparation
            dateString={dateNaming(info[0].dateNoTime)}
            totalCalls={getTotalCallsForDay(info[0].dateNoTime)}
            isStart
          /> :
        <></>
      }

      {
        info.map((value) => {
          const dateNoTime = value.dateNoTime;
          if(
              previousValue.current &&
              previousValue.current !== dateNoTime
            ) {
              previousValue.current = dateNoTime;

              return(
                <Fragment key={`separator-for-${dateNoTime}-${value.id}`}>
                  <ContentBodyDateSeparation
                    dateString={dateNaming(dateNoTime)}
                    totalCalls={getTotalCallsForDay(dateNoTime)}
                  />
                  <ContentLine
                    callInfo={value}
                    hasRecord={hasRecord}
                    key={value.id}
                  />
                </Fragment>
              )
            } else {
              previousValue.current = value.dateNoTime;

              return <ContentLine
                callInfo={value}
                hasRecord={hasRecord}
                key={value.id}
              />
            }
        })
      }
    </tbody>
  );
};

export default ContentBody;
