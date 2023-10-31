import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

// Função Simples de cadastro sem algum tipo de Complexidade e o botao cadastrar nao possui função neste caso.
const PreencherCampo = () => {
  return (
    <View style={styles.container}>
        <Text>Nome:</Text>
        <TextInput
            style={styles.campo}>
        </TextInput>
        <Text>Email:</Text>
        <TextInput
            style={styles.campo}>
        </TextInput>
        <Text>Senha:</Text>
        <TextInput
            style={styles.campo}>
        </TextInput>
        <Pressable
            style={styles.botao}>
            <Text style={styles.desc_botao}>Cadastrar</Text>
        </Pressable>
    </View>

  );
};

export default PreencherCampo;

//Um style simples

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    campo: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    desc_botao: {
        fontSize: 20
    },

});
