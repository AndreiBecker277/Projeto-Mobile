import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types";
import DetalhesScreen from "../screens/DetalhesScreen";

import TelaCadastroNotaScreen from "../screens/TelaCadastroNotaScreen";
import ListarScreen from "../screens/ListarScreen";
import CadUsuScreen from "../screens/CadUsuScreen";
import CadAtendimentoScreen from "../screens/CadAtendimentoScreen";
import AlterarClienteScreen from "../screens/AlterarClienteScreen";
import TLoginScreen from "../screens/TLoginScreen";
import CadastroScreen from "../screens/CadastroScreen";
import ListarAtendimentoScreen from "../screens/ListarAtendimentoScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (

    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      <Stack.Screen name="Cadastro_ADM" component={CadastroScreen} />
      <Stack.Screen name="Login" component={TLoginScreen} />     
      <Stack.Screen name="Nota" component={TelaCadastroNotaScreen} />
      <Stack.Screen name="ListarCliente" component={ListarScreen} />
      <Stack.Screen name="AlterarCliente" component={AlterarClienteScreen} />
      <Stack.Screen name="Cadastrar_Cliente" component={CadUsuScreen} />
      <Stack.Screen name="Cadastrar_Atendimento" component={CadAtendimentoScreen} />
      <Stack.Screen name="ListarAtendimento" component={ListarAtendimentoScreen} />
    </Stack.Navigator>


  );
}

export default HomeNavigator;