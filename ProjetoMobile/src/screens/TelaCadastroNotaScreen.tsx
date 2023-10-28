import TelaCadastroNota from "../layouts/TelaCadastroNota";
import { CadastroNotaProps } from "../types";

const TelaCadastroNotaScreen = ({ navigation, route }: CadastroNotaProps) => {
    return (
      <TelaCadastroNota navigation={navigation} route={route}/>
    );
  }

  export default TelaCadastroNotaScreen;