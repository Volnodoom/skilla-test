import { useState } from "react";
import * as S from "./filter-search.style";
import { maskMobile, unmaskMobile } from "utils/utils";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";
import { FetchParams, SEARCH } from "utils/constants";

const FilterSearch = () => {
  const [searchRequest, setSearchRequest] = useState('');

  const updateFilter = useCallsInfoStore(selector.updateFilter);
  const fetchFilter = useCallsInfoStore(selector.fetchFilter);
  const getSearchFilter = useCallsInfoStore(selector.getSearchFilter);
  const getSearchFilterValue = getSearchFilter ? getSearchFilter.value : '';

  const handleInputChange = (evt) => {
    const purePhoneNumbers = unmaskMobile(evt.target.value);
    if(Number(purePhoneNumbers) === Number(getSearchFilterValue)) {
      return;
    }
    setSearchRequest(maskMobile(evt.target.value));
    fetchFilter(FetchParams.Search, purePhoneNumbers);

    updateFilter({
      type: SEARCH,
      value: purePhoneNumbers,
      requestParam: FetchParams.Search,
      requestParamValue: purePhoneNumbers,
    })
  }

  const handleDeleteClick = () => {
    setSearchRequest('');
    fetchFilter(FetchParams.Search, '');

    updateFilter({
      type: SEARCH,
      value: '',
      requestParam: FetchParams.Search,
      requestParamValue: '',
    })
  }

  return(
    <S.FilterSearchWrapper>
      <S.FilterSearchInput
        onChange={handleInputChange}
        value={searchRequest}
        type="text"
        placeholder="Поиск по звонкам"
        id="call-search"
      />

      <S.FilterSearchButton aria-label="Начать поиск по звонкам">
        <S.FilterSearchIcon aria-hidden="true" focusable="false"/>
      </S.FilterSearchButton>

      <S.FilterSearchDeleteButton
        onClick={handleDeleteClick}
        isActive={Boolean(searchRequest)}
        type="button"
      >
        <S.FilterSearchDelete  aria-hidden="true" focusable="false"/>
      </S.FilterSearchDeleteButton>
    </S.FilterSearchWrapper>
  );
};

export default FilterSearch;
