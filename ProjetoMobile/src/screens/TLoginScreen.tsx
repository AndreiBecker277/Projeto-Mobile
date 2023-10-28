import TLogin from "../layouts/TLogin";
import { TLoginProps } from "../types";

const TLoginScreen = ({ navigation, route }: TLoginProps) => {
    return (
      <TLogin navigation={navigation} route={route}/>
    );
  }

  export default TLoginScreen;