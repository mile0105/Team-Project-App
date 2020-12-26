import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import {Text, View} from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import {useEffect} from 'react';
import main from '../styles/main';
import {fetchShop} from "../api/apis";

export default function ShopScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });

    fetchShop().then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  });

  return (
    <View style={main.centered}>
      <Text
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        This is Shop Screen
      </Text>
    </View>
  )
};
