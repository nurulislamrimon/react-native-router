// navigator.interface.ts
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Stack navigation param list
export type IRootStackParamList = {
  Home: undefined;
  Details: undefined;
  DetailsScreen: {
    itemId: string;
    otherParam: string;
  };
};

// Tab navigation param list
export type IDetailsTabParamList = {
  User: undefined;
  Product: undefined;
};

// Navigation prop types
export type IHomeScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'Home'
>;
export type IDetailsScreenNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'DetailsScreen'
>;
