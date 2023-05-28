import { TickDirection, TickType } from "utils/constants";
import {ReactComponent as IconTickTop} from "assets/icons/icon-tick-top.svg"
import {ReactComponent as IconTickBottom} from "assets/icons/icon-tick-bottom.svg"
import {ReactComponent as IconTickLeft} from "assets/icons/icon-tick-left.svg"
import {ReactComponent as IconTickRight} from "assets/icons/icon-tick-right.svg"
import {ReactComponent as IconTickThickTop} from "assets/icons/icon-tick-thick-top.svg"
import {ReactComponent as IconTickThickBottom} from "assets/icons/icon-tick-thick-bottom.svg"


const Tick = ({tickType = TickType.Thin, tickDirection = TickDirection.Bottom}) => {
  if(tickType === TickType.Thin && tickDirection === TickDirection.Top) {
    return <IconTickTop  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thin && tickDirection === TickDirection.Bottom) {
    return <IconTickBottom  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thin && tickDirection === TickDirection.Left) {
    return <IconTickLeft  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thin && tickDirection === TickDirection.Right) {
    return <IconTickRight  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thick && tickDirection === TickDirection.Top) {
    return <IconTickThickTop  aria-hidden="true" focusable="false"/>
  }

  if(tickType === TickType.Thick && tickDirection === TickDirection.Bottom) {
    return <IconTickThickBottom  aria-hidden="true" focusable="false"/>
  }
};

export default Tick;
