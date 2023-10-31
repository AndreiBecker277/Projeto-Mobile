import { View } from "react-native";
import Principal from "../layouts/Principal";
import { HomeProps } from "../types";
import PreencherCampo from "../layouts/Prova/Ex1";
import Ex3 from "../layouts/Prova/Ex3";

const HomeScreen = ({ navigation, route }: HomeProps) => {
    return (
      <View style={{ flex: 1 }}>
        {/* <Principal navigation={navigation} route={route} /> */}
        <Ex3/>
      </View>
    );
  }

  export default HomeScreen;