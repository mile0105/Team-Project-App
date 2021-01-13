import * as React from 'react';
import {useCallback} from 'react';
import {Feather} from './Themed';
import {TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export default function MenuIcon() {
  const navigation = useNavigation();

  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  },[]);

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Feather name="menu" size={24} style={{marginLeft: 25}}/>
    </TouchableOpacity>
  );
};
