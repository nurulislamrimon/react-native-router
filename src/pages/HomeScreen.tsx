import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {IHomeScreenNavigationProp} from '../Interfaces/navigator.interface';

function HomeScreen() {
  const navigation = useNavigation<IHomeScreenNavigationProp>();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 'XX',
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}
export default HomeScreen;
