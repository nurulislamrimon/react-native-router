import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IRootStackParamList} from '../Interfaces/navigator.interface';

// Navigation prop types
export type IHomeScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'DetailsScreen'
>;
function HomeScreen() {
  const navigation = useNavigation<IHomeScreenNavigationProp>();
  return (
    <View>
      <Text>Home Screen</Text>
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
export default HomeScreen;
