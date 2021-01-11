import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import {Text, View} from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import {useEffect} from 'react';
import main from '../styles/main';
import {Card, Divider} from 'react-native-elements';


export default function RequirementsScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  });

  return (
    <View style={main.centered}>
      <Text>
        Na smuti so zuti
      </Text>
      <Divider/>
      <Card>
        <Card.Title>Recommended requirements</Card.Title>
        <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
      </Card>
    </View>
  )
};
