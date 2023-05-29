import { useState } from "react";
import * as S from "./filter-search.style";

const FilterSearch = () => {
  const [searchRequest, setSearchRequest] = useState('');

  const handleInputChange = (evt) => {
    setSearchRequest(evt.target.value);
  }

  const handleDeleteClick = () => {
    setSearchRequest('');
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

      <S.FilterSearchLabel htmlFor="call-search" aria-label="Поиск по звонкам">
        <S.FilterSearchIcon aria-hidden="true" focusable="false"/>
      </S.FilterSearchLabel>

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
