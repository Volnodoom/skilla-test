import * as S from "./custom-selector.style";

const CustomSelector = ({optionList, isActive, child }) => {
  return(
    <S.CustomSelectorList isActive={isActive}>
    {
      optionList.map((value, index) => (
        <S.CustomSelectorItem
          data-optionname={value.text}
          isActive={value.flag}
          key={index}
        >
          {value.text}
        </S.CustomSelectorItem>
      ))
    }

    {
      child ? child : <></>
    }
    </S.CustomSelectorList>
  );
};

export default CustomSelector;
