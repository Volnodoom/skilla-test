import FilterSearch from "./components/filter-search/filter-search";
import * as S from "./filtering.style";
import FilterSimple from "./components/filter-simple/filter-simple";
import { InitialFilterValue } from "utils/constants";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";

const Filtering = () => {
  const mockFilterList = Object.values(InitialFilterValue);

  const getFilters = useCallsInfoStore(selector.getFilters);
  const clearAllFilters = useCallsInfoStore(selector.clearAllFilters);
  const fetchInitiation = useCallsInfoStore(selector.fetchInitiation);

  const hasFilters = getFilters.length > 0;
  const matchedFilter = (filterName) => getFilters.find((line) => line.type === filterName);

  const handleResetFilterClick = () => {
    clearAllFilters();
    fetchInitiation();
  }

  return(
    <S.FilteringWrapper>
      <FilterSearch />
      {
        hasFilters
        ?
          <S.FilterReset
            onClick={handleResetFilterClick}
            type="button"
          >
            Сбросить фильтры
          </S.FilterReset>
        :
          <></>
      }

      {
        mockFilterList.map((value, index) => (
          <FilterSimple
            filterName={value}
            isSelected={Boolean(matchedFilter(value))}
            key={index}
          />
        ))
      }

    </S.FilteringWrapper>
  );
};

export default Filtering;
