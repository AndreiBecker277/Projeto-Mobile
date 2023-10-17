import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Detalhes: undefined;
  
  };
  
  type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
  
  type HomeScreenNavigationProp = HomeProps['navigation'];
  
  type HomeScreenRouteProp = HomeProps['route'];
  
  export type {HomeScreenNavigationProp, HomeScreenRouteProp, HomeProps,RootStackParamList};