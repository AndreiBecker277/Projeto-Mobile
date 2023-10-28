import Cadastro from "../layouts/Cadastro";
import { CadastroProps } from "../types";

const CadastroScreen = ({ navigation, route }: CadastroProps) => {
    return (
      <Cadastro navigation={navigation} route={route}/>
    );
  }

  export default CadastroScreen;