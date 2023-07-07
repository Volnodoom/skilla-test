import { useCallsInfoStore } from "store/useCallsInfoStore";
import * as S from "./content-footer.style";
import * as selector from "store/useCallsInfoStore.selector";

const ContentFooter = () => {
  const fetchMoreCalls = useCallsInfoStore(selector.fetchMoreCalls);
  const currentCallsNumber = useCallsInfoStore(selector.getCurrentCallsNumber);
  const totalCallsNumber = useCallsInfoStore(selector.getTotalCalls);

  const handleClick = () => {
    fetchMoreCalls();
  }

  if(Number(totalCallsNumber) === Number(currentCallsNumber)) {
    return <></>
  }

  return(
    <tfoot>
      <S.ContentFooterRow>
        <td></td>
        <td></td>
        <td></td>

        <td>
          <S.ContentFooterShowMore
            onClick={handleClick}
          >
            Загрузить больше
          </S.ContentFooterShowMore>
        </td>

        <td></td>
        <td></td>
        <td></td>
      </S.ContentFooterRow>
    </tfoot>
  );
};

export default ContentFooter;
