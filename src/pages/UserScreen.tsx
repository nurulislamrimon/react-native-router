import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IRootStackParamList} from '../Interfaces/navigator.interface';

export type IDetailsScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'DetailsScreen'
>;

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
