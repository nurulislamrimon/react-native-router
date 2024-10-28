import {Text, View} from 'react-native';
import React from 'react';
import {DetailsScreenRouteProp} from '../Interfaces/navigator.interface';

type Props = {
  route: DetailsScreenRouteProp;
};

function DetailsScreen({route}: Props) {
  const {itemId, otherParam} = route.params;

  console.log(itemId, otherParam);

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  );
}

export default DetailsScreen;
