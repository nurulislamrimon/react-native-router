import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {IDetailsScreenNavigationProp} from '../Interfaces/navigator.interface';

export default function UserScreen() {
  const navigation = useNavigation<IDetailsScreenNavigationProp>();
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('DetailsScreen', {
            itemId: 'XX',
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}
