import { NavigationName } from "utils/constants";
import {ReactComponent as IconResults} from "assets/icons/icon-results.svg";
import {ReactComponent as IconOrders} from "assets/icons/icon-orders.svg";
import {ReactComponent as IconMessage} from "assets/icons/icon-mail.svg";
import {ReactComponent as IconCall} from "assets/icons/icon-phone.svg";
import {ReactComponent as IconAgent} from "assets/icons/icon-agents.svg";
import {ReactComponent as IconDoc} from "assets/icons/icon-documents.svg";
import {ReactComponent as IconExecuter} from "assets/icons/icon-executer.svg";
import {ReactComponent as IconReports} from "assets/icons/icon-report.svg";
import {ReactComponent as IconKnowledge} from "assets/icons/icon-knowledge.svg";
import {ReactComponent as IconSettings} from "assets/icons/icon-settings.svg";

const NavigationIcon = ({iconName}) => {
  switch(iconName) {
    case NavigationName.Result:
      return<IconResults />;
    case NavigationName.Order:
      return<IconOrders />;
    case NavigationName.Message:
      return<IconMessage />;
    case NavigationName.Call:
      return<IconCall />;
    case NavigationName.Agent:
      return<IconAgent />;
    case NavigationName.Doc:
      return<IconDoc />;
    case NavigationName.Executer:
      return<IconExecuter />;
    case NavigationName.Reports:
      return<IconReports />;
    case NavigationName.Knowledge:
      return<IconKnowledge />;
    case NavigationName.Settings:
      return<IconSettings />;
    default:
      <>No img</>
  }
};

export default NavigationIcon;
