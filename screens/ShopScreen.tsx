import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import MenuIcon from '../components/MenuIcon';
import {useEffect, useState} from 'react';
import {fetchShop} from "../api/apis";
import {Item, ShopResponse} from "../api/models/shop";
import ItemListComponent from "../components/ItemListComponent";
import {ScrollView} from "react-native";

export default function ShopScreen() {
  const navigation = useNavigation();


  const [shop, setShop] = useState<ShopResponse>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchShop().then(data => {
      setShop(data)
    }).catch(err => {

      console.log(err);
    })
  },[]);

  return (
    <ScrollView>

        <ItemListComponent items={shop?.daily!!} name={'Daily'}/>
        <ItemListComponent items={shop?.community!!} name={'Community'}/>
        <ItemListComponent items={shop?.featured!!} name={'Featured'}/>
        <ItemListComponent items={shop?.specialDaily!!} name={'Special daily'}/>
        <ItemListComponent items={shop?.specialFeatured!!} name={'Special featured'}/>
        <ItemListComponent items={shop?.offers!!} name={'Offers'}/>

    </ScrollView>
  )
};
