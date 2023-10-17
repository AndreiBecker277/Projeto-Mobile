import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Principal from "./Principal";
import HomeNavigator from "./src/navigation/home.navigator";


const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>

  );
}



export default App;


