import { useState } from "react";
import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { TLoginProps } from "../types";

const TelaLogin = ({ navigation, route }: TLoginProps) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function logar() {
    if (email && senha) {
      setIsLoading(true);
      
      auth()
          .signInWithEmailAndPassword(email, senha)
          .then(() => { navigation.navigate('Home') })
          .catch((error) => console.log(error))
          .finally(() => setIsLoading(false))
  }

  }

  function redefinirSenha() {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinir senha", "Enviamos um email para você"))
    .catch((error) => console.log(error))
  }



  return (
    <ImageBackground source={require('../assets/wallpaper.jpg')} style={styles.img}>
      <View style={styles.container}>
        <Image style={styles.img_logo}
          source={require('../assets/Fire.png')} />
        <Text style={{ color: 'black' }}>Email</Text>
        <TextInput style={styles.box}
          onChangeText={(text) => { setEmail(text) }} />
        <Text style={{ color: 'black' }}>Senha</Text>
        <TextInput style={styles.box}
          onChangeText={(text) => { setSenha(text) }} />
        <Pressable style={styles.botao} onPress={logar} disabled={isLoading}>
          <Text style={{ fontSize: 20, color: 'black' }}> Login</Text>
        </Pressable>
        <View style={styles.botoes_}>
          <Pressable style={styles.esqueci} onPress={redefinirSenha} disabled={isLoading}>
            <Text style={{ fontSize: 15, color: 'black' }}> Esqueci a senha</Text>
          </Pressable>
          <Pressable style={styles.conta} onPress={() => navigation.navigate('Cadastro_ADM')}>
            <Text style={{ fontSize: 15, color: 'black' }}>Criar conta</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}

export default TelaLogin;

const styles = StyleSheet.create({
  img_logo: {
    margin: 20,
    width: 150,
    height: 150,
  },
  img: {
    flex: 1,

  },
  botoes_: {
    flexDirection: 'row',

  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    margin: 10,

  },
  box: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  botao: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#d4d0cf',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
  esqueci: {
    margin: 10,
    width: 85,
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#d4d0cf',
    marginBottom: 20,
    // alignSelf: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conta: {
    margin: 10,
    width: 85,
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#d4d0cf',
    //marginBottom: 20,
    // alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botoes: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flex: 1

  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  },

});