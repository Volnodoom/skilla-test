import { useState } from "react";
import * as S from "./filter-simple.style";
import CustomSelector from "components/content/components/custom-selector/custom-selector";
import Tick from "components/tick/tick";
import { TickDirection } from "utils/constants";
import { defaultTheme } from "themes/default-theme";

const FilterSimple = ({filterName, optionList, isSelected=false}) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(prev => !prev);
  }
  return(
    <S.FilterSimpleButton
      onClick={handleButtonClick}
      isActive={isActive}
      isSelected={isSelected}
      type="button"
    >
      {filterName}
      <Tick
        color={isSelected ? defaultTheme.color.accent : defaultTheme.color.icon}
        tickDirection={isActive ? TickDirection.Top : TickDirection.Bottom}
      />
      <CustomSelector
        optionList={optionList}
        isActive={isActive}
      />
    </S.FilterSimpleButton>
  );
};

export default FilterSimple;
