import { NavigationStatic } from "utils/constants";
import NavigationItem from "./components/navigation-item/navigation-item";
import * as S from "./navigation.style";
import Logo from "assets/img/logo.svg";
import {ReactComponent as AddIcon} from "assets/icons/icon-add-order.svg"
import {ReactComponent as PaymentIcon} from "assets/icons/icon-payment.svg"

const Navigation = () => {
  return(
    <S.NavigationWrapper>
      <S.NavigationLogo src={Logo} alt="логотип Скилла ИС" />
      <nav>
        <S.NavigationList>
          {
            NavigationStatic.map((value, index) => (
            <NavigationItem
              text={value.text}
              isActive={value.flag}
              key={index}
            />
            ))
          }
        </S.NavigationList>
      </nav>

      <S.NavigationAddButton type="button">Добавить заказ {<AddIcon />}</S.NavigationAddButton>
      <S.NavigationPaymentButton type="button">Оплата{<PaymentIcon />}</S.NavigationPaymentButton>

    </S.NavigationWrapper>
  );
};

export default Navigation;
