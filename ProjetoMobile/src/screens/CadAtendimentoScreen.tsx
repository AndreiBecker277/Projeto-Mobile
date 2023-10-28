import TCadAtendimento from "../layouts/TCadAtendimento";
import { CadAtendimentoProps } from "../types";

const CadAtendimentoScreen = ({ navigation, route }: CadAtendimentoProps) => {
    return (
      <TCadAtendimento navigation={navigation} route={route}/>
    );
  }

  export default CadAtendimentoScreen;