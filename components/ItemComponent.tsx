import {Text} from "./Themed";
import * as React from "react";
import {Item} from "../api/models/shop";

export interface ItemComponentProps {
  item: Item
}

export default function ItemComponent({item}: ItemComponentProps) {

  return (
    <>
      <Text>
        {item.name}
      </Text>
    </>
  )
}
