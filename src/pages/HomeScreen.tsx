import {Button, Text, View} from 'react-native';
import React from 'react';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
export default HomeScreen;
