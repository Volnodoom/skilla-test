import CustomSelector from "components/content/custom-selector/custom-selector";
import FilterSearch from "./components/filter-search/filter-search";
import * as S from "./filtering.style";
import { useState } from "react";
import FilterSimple from "./components/filter-simple/filter-simple";
import { InitialFilterValue } from "utils/constants";

const mockData = [
  {
    text: 'Все клиенты',
    flag: false,
  },
  {
    text: 'Новые клиенты',
    flag: false,
  },
  {
    text: 'Все исполнители',
    flag: false,
  },
  {
    text: 'Через приложение',
    flag: false,
  },
  {
    text: 'Прочие звонки',
    flag: false,
  },
]

const Filtering = () => {
  const mockFilterList = Object.values(InitialFilterValue);

  const isAnyFilterActive = true;

  return(
    <S.FilteringWrapper>
      <FilterSearch />
      {
        isAnyFilterActive
        ?
          <S.FilterReset
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
            optionList={mockData}
            isSelected={index%2 === 0}
            key={index}
          />
        ))
      }

    </S.FilteringWrapper>
  );
};

export default Filtering;
