import { useEffect, useRef } from "react";
import * as S from "./custom-selector.style";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";

const CustomSelector = ({optionList, handleActiveState, child, filterType }) => {
  const {isActive, setIsActive} = handleActiveState;
  const selectorBox = useRef(null);

  const updateFilter = useCallsInfoStore(selector.updateFilter);
  const fetchFilter = useCallsInfoStore(selector.fetchFilter);
  const getFilters = useCallsInfoStore(selector.getFilters);

  const matchedFilter = getFilters.find((line) => line.type === filterType);
  const activeValue = matchedFilter ? matchedFilter.value : null;

  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (selectorBox.current && !selectorBox.current.contains(evt.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsActive])

  const handleClick = (filterName, requestParam, requestParamValue) => () => {
    fetchFilter(requestParam, requestParamValue);

    updateFilter({
      type: filterType,
      value: filterName,
      requestParam,
      requestParamValue,
    })
  }

  return(
    <S.CustomSelectorList isActive={isActive} ref={selectorBox}>
    {
      optionList.map((optionItemObject, index) => (
        <S.CustomSelectorItem
          onClick={handleClick(
            optionItemObject.display,
            optionItemObject.fetchParam,
            optionItemObject.fetch,
            )}
          data-optionname={optionItemObject.display}
          isActive={activeValue === optionItemObject.display}
          key={index}
        >
          {optionItemObject.display}
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
