import { InOutCallType } from "utils/constants";
import * as S from "./content-line.style";
import ContentAudio from "../content-audio/content-audio";
import { calculateAudioTime } from "utils/utils";

const ContentLine = ({callInfo, hasRecord}) => {
  const {
    date,
    dateNoTime,
    duration,
    id,
    inOut,
    partnerData,
    partnershipId,
    personAvatar,
    personName,
    personSurname,
    record,
    source,
  } = callInfo;

  const {name: partnerDataName, phone: partnerDataPhone} = partnerData;

  const familyInitials = `${personName.charAt(0).toUpperCase()}.${personSurname.charAt(0).toUpperCase()}`;
  const treatedDate = date.replace(/.*?(\d{2}):(\d{2}).*/g, '$1:$2');

  return(
    <S.ContentLineRow hasRecord={hasRecord}>
      <S.ContentLineCell>
        {
          inOut === InOutCallType.InCome ? <S.IncomingCall /> : <></>
        }
        {
          inOut === InOutCallType.OnGoing ? <S.IncomingCall /> : <></>
        }
      </S.ContentLineCell>

      <S.ContentLineCell>{treatedDate}</S.ContentLineCell>

      <S.ContentLineCellImg>
        {
          personAvatar ? <S.ContentLineAvatarImg src={personAvatar} alt={`${personName} ${personSurname}`} /> : <S.EmptyAvatar data-familyinitials={familyInitials} />
        }
      </S.ContentLineCellImg>

      <S.ContentLineCell></S.ContentLineCell>

      <S.ContentLineCellCall>
        <div>{partnerDataName}</div>
        <div>{partnerDataPhone}</div>
      </S.ContentLineCellCall>

      <S.ContentLineCellSource hasDiffColor>{source}</S.ContentLineCellSource>

      <S.ContentLineRecord>
        {
          record ?
          <ContentAudio duration={duration} recordId={record} partnerId={partnershipId} /> :
          calculateAudioTime(duration)
        }
      </S.ContentLineRecord>
    </S.ContentLineRow>
  );
};

export default ContentLine;
