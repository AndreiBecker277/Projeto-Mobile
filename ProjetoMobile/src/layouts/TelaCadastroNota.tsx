import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { CadastroNotaProps } from "../types";

export default ({ navigation, route }: CadastroNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrar() {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .add({
                titulo,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })

            .then(() => {
                Alert.alert("Nota", "Cadastrada com Sucesso")
                navigation.navigate('Home')

            })

            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

    }
    return (
        <View>
            <Text>Titulo</Text>
            <TextInput
                maxLength={10}
                numberOfLines={100}
                style={styles.caixa_texto}
                onChangeText={(text) => { setTitulo(text) }} />
            <Text>Senha</Text>
            <TextInput
                maxLength={10}
                numberOfLines={100}
                style={styles.caixa_texto}
                onChangeText={(text) => { setDescricao(text) }} />
            <Pressable
                style={styles.botao}
                onPress={cadastrar}
                disabled={isLoading}>
                <Text style={styles.desc_botao}>Cadastrar</Text>
            </Pressable>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    desc_botao: {
        fontSize: 20
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


    esqueci: {
        width: 85,
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignSelf: 'baseline',
        alignItems: 'center',
    },
    conta: {
        width: 85,
        height: 45,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#d4d0cf',
        marginBottom: 20,
        alignSelf: 'flex-end',
        alignItems: 'center',
    }

});

