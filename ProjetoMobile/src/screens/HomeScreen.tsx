import { View } from "react-native";
import Principal from "../../Principal";
import { HomeProps } from "../types";

const HomeScreen = ({ navigation, route }: HomeProps) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Principal navigation={navigation} route={route} />
      </View>
    );
  }

  export default HomeScreen;