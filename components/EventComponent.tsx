import {Text} from "./Themed";
import * as React from "react";
import {Event} from "../api/models/events";

export interface EventComponentProps {
  event: Event
}

export default function EventComponent({event}: EventComponentProps) {

  return(

    <>
      <Text>
        {event.name_line1}
      </Text>
    </>
  )

}
