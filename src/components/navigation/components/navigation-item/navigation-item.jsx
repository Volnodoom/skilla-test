import NavigationIcon from "../navigation-icon/navigation-icon";
import * as S from "./navigation-item.style";

const NavigationItem = ({text, isActive}) => {
  return(
    <S.NavigationItem isActive={isActive}>
      <NavigationIcon iconName={text} aria-hidden="true" focusable="false"/>
      {text}
    </S.NavigationItem>
  );
};

export default NavigationItem;
