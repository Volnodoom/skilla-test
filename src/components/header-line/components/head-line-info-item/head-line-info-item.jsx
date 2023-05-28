import * as S from "./head-line-info-item.style";

const HeadLineInfoItem = ({text, textHighligh, color}) => {
  const isArray = Array.isArray(textHighligh);
  let progress = textHighligh;
  let start, end;

  if(isArray) {
    [start, end] = textHighligh;
    progress = (Number(start)/Number(end))*100;
  }

  return(
    <S.HeadLineInfoItem>
      {text}
      <S.InfoItemColorHighlight color={color}>
        {
          isArray ? ` ${start} из ${end} шт` : ` ${progress}%`
        }
      </S.InfoItemColorHighlight>
      <S.InfoItemVisualization
        color={color}
        progress={progress}
      />
    </S.HeadLineInfoItem>
  );
};

export default HeadLineInfoItem;
