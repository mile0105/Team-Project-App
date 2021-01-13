import * as React from 'react';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import {Text, View} from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import {Card} from 'react-native-elements';
import {ScrollView} from "react-native";


export default function RequirementsScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  });

  const bulletPoint = () => {
    return (<Text>
      {'\u2022'}
    </Text>)
  };

  return (
    <View style={main.centerHorizontally}>
      <ScrollView style={{marginTop: 10, marginBottom: 10}}>

        <Card containerStyle={{width: "90%"}}>
          <Card.Title>Minimum requirements on Windows</Card.Title>
          <Card.Divider/>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Windows 7/8/10 64-bit
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Core i3 2.4 GHz processor
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              4GB of system RAM
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Intel HD 4000 video card
            </Text>
          </View>
        </Card>

        <Card containerStyle={{width: "90%"}}>
          <Card.Title>Recommended requirements on Windows</Card.Title>
          <Card.Divider/>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Windows 7/8/10 64-bit
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Core i5 2.8 GHz processor
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              8GB of system RAM
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Nvidia GTX 660 or AMD Radeon HD 7870
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              DX11 GPU 2GB VRAM
            </Text>
          </View>
        </Card>

        <Card containerStyle={{width: "90%"}}>
          <Card.Title>Minimum requirements on MAC</Card.Title>
          <Card.Divider/>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Mac OS X Sierra
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Core i3 2.4 GHz
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              4GB of system RAM
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Intel HD 4000
            </Text>
          </View>
        </Card>

        <Card containerStyle={{width: "90%", marginBottom: 15}}>
          <Card.Title>Recommended MAC machines</Card.Title>
          <Card.Divider/>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              MacBook Pro 560
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              iMac Pro
            </Text>
          </View>
          <View style={main.textWrapper}>
            {bulletPoint()}
            <Text style={main.textBlock}>
              Mac Pro
            </Text>
          </View>
        </Card>

      </ScrollView>

    </View>
  )
};
