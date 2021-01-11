import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import {Text, View} from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import {useEffect, useState} from 'react';
import main from '../styles/main';
import {fetchShop} from "../api/apis";
import {Item} from "../api/models/shop";
import ItemComponent from "../components/ItemComponent";

export default function ShopScreen() {
  const navigation = useNavigation();

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchShop().then(data => {
      setItems(data.daily)
    }).catch(err => {

      console.log(err);
    })
  },[]);

  return (
    <View style={main.centered}>
      {items.map((item, index) => <ItemComponent item={item} key={index}/>)}
    </View>
  )
};
