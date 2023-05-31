import { InOutCallType } from "utils/constants";
import ContentLine from "./components/content-line/content-line";

const mockData = {
  inOutCall: InOutCallType.InCome,
  time: '2022-04-19 12:10:08',
  avatarImg: '',
  personName: 'Татьяна',
  personSurname: 'Михалкович',
  phoneNumber: '79315xxxxxx',
  source: 'Yandex',
  record: '',
  duration: '15.20',
};

const ContentBody = () => {
  return(
    <tbody>
      <ContentLine callInfo={mockData}/>
      <ContentLine callInfo={mockData}/>
    </tbody>
  );
};

export default ContentBody;
