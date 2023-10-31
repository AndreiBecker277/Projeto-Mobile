import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CadUsuProps } from "../types";
import { useState } from "react";
import firestore from "@react-native-firebase/firestore";


export default ({ navigation, route }: CadUsuProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numeroRua, setNumRUa] = useState('');
    const [bairro, setbairro] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function validarCampoTexto() {
        // Use uma expressão regular para verificar se o texto contém apenas letras maiúsculas ou minúsculas.
        // O padrão /^[A-Za-z]+$/ significa que a string deve começar e terminar com letras,
        // e o + indica que pode haver uma ou mais letras no meio.
        const regex = /^[A-Za-z]+$/;

        if (!regex.test(nome)) {
            console.log("O campo so pode possuir letras")
            return false;
        }

        if (!regex.test(rua)) {
            console.log("O campo so pode possuir letras")
            return false;
        }

        if (!regex.test(bairro)) {
            console.log("O campo so pode possuir letras")
            return false;
        }

    };

    function validarCampoNumerico() {
        // Use uma expressão regular para verificar se o texto contém apenas números.
        // O padrão /^[0-9]+$/ significa que a string deve consistir apenas em dígitos numéricos.
        const regex = /^[0-9]+$/;

        if (!regex.test(numeroRua)) {
            console.log("O texto contém caracteres não numéricos.");
            return false;
        }

        if (!regex.test(dataNasc)) {
            console.log("O texto contém caracteres não numéricos.");
            return false;
        }

        if (!regex.test(cpf)) {
            console.log("O texto contém caracteres não numéricos.");
            return false;
        }

    };




    function cadastrar() {

        validarCampoTexto();
        validarCampoNumerico();

        setIsLoading(true);

        firestore()
            .collection('Cliente')
            .add({
                nome,
                cpf,
                rua,
                numeroRua,
                bairro,
                dataNasc,
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
        <ImageBackground source={require('../assets/Moon2.jpg')} style={styles.img}>

            <View style={styles.container}>

                <Image style={styles.img_logo}
                    source={require('../assets/IconMoon.png')} />
                <Text style={styles.text}>Nome:</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNome(text) }} />
                <Text style={styles.text}>CPF:</Text>
                <TextInput

                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCpf(text) }} />
                <Text style={styles.text}>Rua:</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setRua(text) }} />
                <Text style={styles.text}>Numero da Rua:</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNumRUa(text) }} />
                <Text style={styles.text}>Bairro:</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setbairro(text) }} />
                <Text style={styles.text}>Data de Nascimento:</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setDataNasc(text) }} />
                <Pressable
                    style={styles.botao}
                    onPress={cadastrar}
                    disabled={isLoading}>
                    <Text style={styles.desc_botao}>Cadastrar</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );

}


const styles = StyleSheet.create({

    text: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 4,


    },

    img_logo: {
        height: 150,
        width: 150,
        margin: 10,
    },

    img: {
        flex: 1,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    caixa_texto: {
        width: '70%',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white',
    },
    botao: {

        justifyContent: 'center',
        backgroundColor: '#7FE6ED',
        paddingVertical: 10,
        paddingHorizontal: 30,
        margin: 15
    },
    desc_botao: {
        fontSize: 20,
        color: 'black',

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

