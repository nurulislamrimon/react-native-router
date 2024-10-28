// types.ts
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define the param list for each screen in the stack
export type IRootStackParamList = {
  Home: undefined;
  Details: {
    itemId: string;
    otherParam: string;
  };
};

export type IHomeScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'Home'
>;

export type IDetailsScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'Details'
>;

// Route props (if you need access to route params in your component)
export type DetailsScreenRouteProp = RouteProp<IRootStackParamList, 'Details'>;
