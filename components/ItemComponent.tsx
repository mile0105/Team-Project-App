import * as React from "react";
import {Item} from "../api/models/shop";
import {Avatar, Card, ListItem} from "react-native-elements";
import {Image, Modal} from "react-native";
import {useState} from "react";

export interface ItemComponentProps {
  item: Item
}

export default function ItemComponent({item}: ItemComponentProps) {

  const [imageVisible, setImageVisible] = useState(false);


  const getColor = () => {

    switch (item.rarity) {
      case 'handmade': return '#BBBBBB';
      case 'common': return '#7B7B7B';
      case 'uncommon': return '#3A7913';
      case 'rare': return '#1258A2';
      case 'epic': return '#BD3FFA';
      case 'legendary': return '#FF7605';
      case 'mythic': return '#DCA01E';
      case 'exotic': return '#9DD7FE';
      case 'transcendent': return '#B22222';
      case 'marvel': return '#9E1919';
      case 'dark series': return '#A42D8A';
      case 'dc': return '#697D99';
      case 'star wars': return '#38434F';
      case 'gaming legends': return '#38434F';
      case 'frozen series': return '#9DD7FE';
      case 'lava series': return '#B02B13';
      case 'shadow series': return '#151515';
      case 'slurp series': return '#15BFE7';
      default: return '-1';
    }
  };

  return (
    <ListItem bottomDivider topDivider onPress={() => {
      setImageVisible(true);
    }}>
      {item.icon !== '' ? (
        <>
          <Avatar containerStyle={{backgroundColor: `${getColor()}`}} source={{uri: item.image}}/>
        </>) : (
        <>
        </>
      )}
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      </ListItem.Content>

      <Modal
        animationType="slide"
        transparent={false}
        visible={imageVisible}
        onRequestClose={() => {
          setImageVisible(!imageVisible)
        }}>
        <Image source={{uri: item.full_background}} resizeMode={'contain'} style={{width: '100%', height: '100%'}}/>

      </Modal>

      <ListItem.Chevron/>
    </ListItem>
  )
}
