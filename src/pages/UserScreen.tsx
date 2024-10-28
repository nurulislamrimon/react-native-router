import {View, Button} from 'react-native';
import React from 'react';

export default function UserScreen() {
  // const navigation = useNavigation<IRootStackParamList>();
  return (
    <View>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
