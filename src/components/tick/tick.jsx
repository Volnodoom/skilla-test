import { TickDirection, TickType } from "utils/constants";
import {ReactComponent as IconTickTop} from "assets/icons/icon-tick-top.svg"
import {ReactComponent as IconTickBottom} from "assets/icons/icon-tick-bottom.svg"
import {ReactComponent as IconTickLeft} from "assets/icons/icon-tick-left.svg"
import {ReactComponent as IconTickRight} from "assets/icons/icon-tick-right.svg"
import {ReactComponent as IconTickThickTop} from "assets/icons/icon-tick-thick-top.svg"
import {ReactComponent as IconTickThickBottom} from "assets/icons/icon-tick-thick-bottom.svg"
import { defaultTheme } from "themes/default-theme";


const Tick = ({
  tickType = TickType.Thin,
  tickDirection = TickDirection.Bottom,
  color = defaultTheme.color.icon,
}) => {
  if(tickType === TickType.Thin && tickDirection === TickDirection.Top) {
    return <IconTickTop style={{color: color}}  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thin && tickDirection === TickDirection.Bottom) {
    return <IconTickBottom style={{color: color}}  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thin && tickDirection === TickDirection.Left) {
    return <IconTickLeft style={{color: color}}  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thin && tickDirection === TickDirection.Right) {
    return <IconTickRight style={{color: color}}  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thick && tickDirection === TickDirection.Top) {
    return <IconTickThickTop style={{color: color}}  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thick && tickDirection === TickDirection.Bottom) {
    return <IconTickThickBottom style={{color: color}}  aria-hidden="true" focusable="false"/>
  }
};

export default Tick;
