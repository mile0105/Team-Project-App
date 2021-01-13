import * as React from 'react';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import MenuIcon from '../components/MenuIcon';
import {fetchShop} from "../api/apis";
import {ShopResponse} from "../api/models/shop";
import ItemListComponent from "../components/ItemListComponent";
import {ActivityIndicator, ScrollView} from "react-native";

export default function ShopScreen() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [shop, setShop] = useState<ShopResponse>();

  useEffect(() => {

    if (!isLoading) {
      setIsLoading(true);

      navigation.setOptions({
        headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
      });

      fetchShop().then(data => {
        setShop(data);
        setIsLoading(false);
      }).catch(err => {
        console.log(err);
        setIsLoading(false);
      })
    }

  }, []);

  return (
    <ScrollView>

      {isLoading ? (
        <ActivityIndicator size="large" color={'#0000ff'}/>
      ) : (
        <>
          <ItemListComponent items={shop?.daily!!} name={'Daily'}/>
          <ItemListComponent items={shop?.community!!} name={'Community'}/>
          <ItemListComponent items={shop?.featured!!} name={'Featured'}/>
          <ItemListComponent items={shop?.specialDaily!!} name={'Special daily'}/>
          <ItemListComponent items={shop?.specialFeatured!!} name={'Special featured'}/>
          <ItemListComponent items={shop?.offers!!} name={'Offers'}/>
        </>
      )}

    </ScrollView>
  )
};
