import React from 'react';
import {styles} from '../styles/MessageScreenStyles';
import { FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
  {
  id: 1,
  title: 'T1',
  description: 'D1',
  image: require('../assets/me.jpg'),
  },
  {
  id: 2,
  title: 'T2',
  description: 'D2',
  image: require('../assets/me.jpg'),
  }
]
function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={m => m.id.toString()}
        renderItem={({item}) =>
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}/>}
          ItemSeparatorComponent={ListItemSeparator}/>
    </Screen>
  );
};
export default MessagesScreen;