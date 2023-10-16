import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Principal from "./Principal";



type StackParamList = {
  Home: undefined;
  Detalhes: undefined

}

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

type HomeScreenNavigationProp = Props['navigation'];

type HomeScreenRouteProp = Props['route'];

const HomeScreen = ({ navigation,route}: Props) =>{
return (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
     <Principal navigation={navigation} route={route}/>
  </View>
);
}
const DetalhesScreen = () => {
  return (
    <view style={{

      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <Text> Detalhes Screen </Text>
    </view>
  );

}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
 <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Detalhes" component={DetalhesScreen}/>
  </Stack.Navigator>
 </NavigationContainer>

  );
}

export type {HomeScreenNavigationProp, HomeScreenRouteProp, Props};

export default App;


