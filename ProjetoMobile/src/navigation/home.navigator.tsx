import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types";
import DetalhesScreen from "../screens/DetalhesScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
   
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Detalhes" component={DetalhesScreen}/>
    </Stack.Navigator>
   
  
    );
  }
  
  export default HomeNavigator;