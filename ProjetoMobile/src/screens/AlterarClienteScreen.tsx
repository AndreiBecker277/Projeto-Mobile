import AlterarCliente from "../layouts/AlterarCliente";
import { AlterarClienteProps } from "../types";

const AlterarClienteScreen = ({ navigation, route }: AlterarClienteProps) => {
    return (
      <AlterarCliente navigation={navigation} route={route}/>
    );
  }

  export default AlterarClienteScreen;