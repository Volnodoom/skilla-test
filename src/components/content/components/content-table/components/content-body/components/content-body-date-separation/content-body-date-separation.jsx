import * as S from "./content-body-date-separation.style";

const CELLS_WITHOUT_CONTENT = 6;

const ContentBodyDateSeparation = ({dateString, totalCalls, isStart}) => {
  return(
    <S.ContentBodyDateSeparation isStart={isStart}>
      <S.ContentBodyDate
        data-totalinfocount={totalCalls}
      >
          {dateString}
      </S.ContentBodyDate>

      {
        Array
          .from({length: CELLS_WITHOUT_CONTENT})
          .map((value, index) => <td key={index} ></td>)
      }

    </S.ContentBodyDateSeparation>
  );
};

export default ContentBodyDateSeparation;
