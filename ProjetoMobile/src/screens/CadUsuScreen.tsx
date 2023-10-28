import TCadCliente from "../layouts/TCadCliente";
import { CadUsuProps } from "../types";

const CadUsuScreen = ({ navigation, route }: CadUsuProps) => {
    return (
      <TCadCliente navigation={navigation} route={route}/>
    );
  }

  export default CadUsuScreen;