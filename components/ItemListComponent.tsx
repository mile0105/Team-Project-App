import * as React from "react";
import {Item} from "../api/models/shop";
import {Card} from "react-native-elements";
import ItemComponent from "./ItemComponent";

import {Text} from 'react-native';

export interface ItemListComponentProps {
  items: Item[] | undefined,
  name: string
}

export default function ItemListComponent({items, name}: ItemListComponentProps) {

  const hasItems = items !== undefined && items.length > 0;

  return (
    <>
      {hasItems && (
        <Card>
          <Card.Title>
            <Text style={{fontWeight: 'bold', fontSize: 32}}>
              {name}
            </Text>
          </Card.Title>
          {items!!.map((item, index) => <ItemComponent item={item} key={index}/>)}
        </Card>
      )}
    </>
  )
}
