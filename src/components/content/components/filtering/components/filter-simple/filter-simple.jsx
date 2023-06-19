import { useState } from "react";
import * as S from "./filter-simple.style";
import CustomSelector from "components/content/components/custom-selector/custom-selector";
import Tick from "components/tick/tick";
import { CallErrorTypeList, CallTypeList, InOutCallTypeRu, InitialFilterValue, SourceList, TickDirection, mockOptionList } from "utils/constants";
import { defaultTheme } from "themes/default-theme";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";

const FilterSimple = ({filterName, isSelected=false}) => {
  const [isActive, setIsActive] = useState(false);

  const getFilters = useCallsInfoStore(selector.getFilters);

  const hasFilter = getFilters.length > 0;
  const matchedFilter = getFilters.find((line) => line.type === filterName);

  const matchOptionType = () => {
   switch(filterName) {
    case InitialFilterValue.Type:
      return Object.values(InOutCallTypeRu);
    case InitialFilterValue.Resource:
      return Object.values(SourceList);
    case InitialFilterValue.Call:
      return Object.values(CallTypeList);
    case InitialFilterValue.Fall:
      return Object.values(CallErrorTypeList);
    default:
      return Object.values(mockOptionList);
  }}

  const detectTickColor = (isSelected, isActive) => {
    if(isSelected || isActive) {
      return defaultTheme.color.accent ;
    }
    return defaultTheme.color.icon;
  }

  const handleButtonClick = (evt) => {
    setIsActive(prev => !prev);
  }
  return(
    <S.FilterSimpleButton
      onClick={handleButtonClick}
      isActive={isActive}
      isSelected={isSelected}
      type="button"
    >
      {
        hasFilter ?
          matchedFilter ?
            matchedFilter.value :
              filterName :
          filterName
      }
      <Tick
        color={detectTickColor(isSelected, isActive)}
        tickDirection={isActive ? TickDirection.Top : TickDirection.Bottom}
      />
      <CustomSelector
        filterType={filterName}
        optionList={matchOptionType(filterName)}
        handleActiveState={{isActive, setIsActive}}
      />
    </S.FilterSimpleButton>
  );
};

export default FilterSimple;
