import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Principal from "./layouts/Principal";
import HomeNavigator from "./navigation/home.navigator";


const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>

  );
}



export default App;


