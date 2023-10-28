import TelaListar from "../layouts/TelaListarCliente";
import { ListarClienteProps } from "../types";


const TelaListarScreen = ({ navigation, route }: ListarClienteProps) => {
    return (
      <TelaListar navigation={navigation} route={route}/>
    );
  }

  export default TelaListarScreen;