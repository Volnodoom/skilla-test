import { InOutCallType } from "utils/constants";
import * as S from "./content-line.style";
import ContentAudio from "../content-audio/content-audio";

const ContentLine = ({callInfo}) => {
  const {
    inOutCall,
    time,
    avatarImg=false,
    personName=false,
    personSurname=false,
    phoneNumber,
    source,
    record=false,
    duration,
  } = callInfo;

  const familyInitials = 'R.A';
  const treatedDate = '14:25';
  const audioSRC = '';

  return(
    <S.ContentLineRow hasRecord={Boolean(record)}>
      <S.ContentLineCell>
        {
          inOutCall === InOutCallType.InCome ? <S.IncomingCall /> : <></>
        }
        {
          inOutCall === InOutCallType.OutCome ? <S.IncomingCall /> : <></>
        }
      </S.ContentLineCell>

      <S.ContentLineCell>{treatedDate}</S.ContentLineCell>

      <S.ContentLineCell>
        {
          avatarImg ? <S.ContentLineAvatarImg src={avatarImg} alt="." /> : <S.EmptyAvatar data-familyinitials={familyInitials} />
        }
      </S.ContentLineCell>

      <S.ContentLineCell></S.ContentLineCell>

      <S.ContentLineCell>{phoneNumber}</S.ContentLineCell>

      <S.ContentLineCell hasDiffColor>{source}</S.ContentLineCell>

      <S.ContentLineCell>
        {record ? <ContentAudio audioSRC={audioSRC} /> : duration}
      </S.ContentLineCell>
    </S.ContentLineRow>
  );
};

export default ContentLine;
