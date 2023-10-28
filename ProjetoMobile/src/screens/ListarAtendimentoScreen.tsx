import React from "react";
import { ListarAtendimentoProps } from "../types";
import TListarAtentimento from "../layouts/TListarAtentimento";

const ListarAtendimentoScreen = ({ navigation, route }: ListarAtendimentoProps) => {
    return (
      <TListarAtentimento navigation={navigation} route={route}/>
    );
  }

  export default ListarAtendimentoScreen;