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
