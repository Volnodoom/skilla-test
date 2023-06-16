import { useState } from "react";
import { SortingOrder, SortingTitleList, TickDirection } from "utils/constants";
import * as S from "./content-header.style";
import Tick from "components/tick/tick";
import { defaultTheme } from "themes/default-theme";
import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as selector from "store/useCallsInfoStore.selector";

const ContentHeader = () => {
  const [currentSort, setCurrentSort] = useState('');
  const [sortOrder, setSortOrder] = useState(false);

  const info = useCallsInfoStore(selector.getCalls);
  const hasRecord = info.some((value) => Boolean(value.record));

  const handleSortClick = (value) => () => {
    setCurrentSort(value);

    if(currentSort !== value) {
      setSortOrder(false);
      return;
    }

    setSortOrder(prev => !prev);
  }

  return(
    <S.ContentHeaderWrapper>
      <S.ContentHeaderRow hasRecord={hasRecord}>
        {
          SortingTitleList.map((value, index) => (
            <S.ContentHeaderCell
              key={index}
            >
              {
                value &&
                (
                  <S.ContentHeaderSort
                    onClick={handleSortClick(value)}
                    isActive={currentSort === value}
                    type="button"
                  >
                    {value}
                    {
                      currentSort === value ?
                        (
                          <Tick
                            tickDirection={sortOrder ? TickDirection.Top : TickDirection.Bottom}
                            color={defaultTheme.color.accent}
                          />
                        )
                      :
                        <></>
                    }
                  </S.ContentHeaderSort>
                )

              }
            </S.ContentHeaderCell>
          ))
        }

      </S.ContentHeaderRow>
    </S.ContentHeaderWrapper>
  );
};

export default ContentHeader;
