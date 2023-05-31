import { InOutCallType } from "utils/constants";
import ContentLine from "./components/content-line/content-line";
import { dateNaming, formateDateNoTime } from "utils/utils";
import { Fragment, useCallback, useRef } from "react";
import ContentBodyDateSeparation from "./components/content-body-date-separation/content-body-date-separation";

const mockData = {
  id: '531487',
  inOutCall: InOutCallType.InCome,
  dateTime: '2022-04-19 12:10:08',
  dateNoTime: '2022-04-19',
  avatarImg: '',
  personName: 'Татьяна',
  personSurname: 'Михалкович',
  phoneNumber: '79315xxxxxx',
  source: 'Yandex',
  record: '',
  duration: '15.20',
};
const mockData2 = {
  id: '53148asd7',
  inOutCall: InOutCallType.InCome,
  dateTime: '2022-04-19 12:10:08',
  dateNoTime: '2022-04-24',
  avatarImg: '',
  personName: 'Татьяна',
  personSurname: 'Михалкович',
  phoneNumber: '79315xxxxxx',
  source: 'Yandex',
  record: '',
  duration: '15.20',
};

const mockIdealData = {
  id: '531488437',
  inOutCall: InOutCallType.InCome,
  dateTime: '2022-04-19 12:10:08',
  dateNoTime: '2023-06-01',
  avatarImg: '',
  personName: 'Татьяна',
  personSurname: 'Михалкович',
  phoneNumber: '79315xxxxxx',
  source: 'Yandex',
  record: '',
  duration: '15.20',
};

const ContentBody = () => {
  const previousValue = useRef('');
  const info = [mockData, mockData2];
  const dateList = new Set();

  info.forEach((line) => dateList.add(line.dateNoTime));

  const getTotalCallsForDay = useCallback((stringDateValue) => info
    .filter((value) => value.dateNoTime === stringDateValue)
    .length
  )

  const hasContactsToday = dateList
    .has(
      formateDateNoTime(new Date())
    );


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
                <Fragment key={`separator-for-${dateNoTime}`}>
                  <ContentBodyDateSeparation
                    dateString={dateNaming(dateNoTime)}
                    totalCalls={getTotalCallsForDay(dateNoTime)}
                  />
                  <ContentLine callInfo={value} key={value.id}/>
                </Fragment>
              )
            } else {
              previousValue.current = value.dateNoTime;
              return <ContentLine callInfo={value} key={value.id}/>
            }
        })
      }
    </tbody>
  );
};

export default ContentBody;
