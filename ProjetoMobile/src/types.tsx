import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Detalhes: undefined;
    Login: undefined;
    Cadastro_ADM: undefined;
    Nota: undefined;
    ListarCliente: undefined;
    AlterarCliente: {id:string;};
    Cadastrar_Cliente: undefined
    Cadastrar_Atendimento: undefined
    ListarAtendimento: undefined
  };
  
  type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
  type TLoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>
  type CadastroProps = NativeStackScreenProps<RootStackParamList, 'Cadastro_ADM'> 
  type CadastroNotaProps = NativeStackScreenProps<RootStackParamList, 'Nota'>
  type ListarClienteProps = NativeStackScreenProps<RootStackParamList, 'ListarCliente'>
  type AlterarClienteProps = NativeStackScreenProps<RootStackParamList, 'AlterarCliente'>
  type CadUsuProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar_Cliente'>
  type CadAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar_Atendimento'>
  type ListarAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'ListarAtendimento'>


  export type { HomeProps,RootStackParamList,TLoginProps,CadastroProps,
    CadastroNotaProps,ListarClienteProps,AlterarClienteProps,CadUsuProps
  ,CadAtendimentoProps,ListarAtendimentoProps};