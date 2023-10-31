import firestore from "@react-native-firebase/firestore";
import { AlterarClienteProps } from "../types";
import { useEffect, useState } from "react";
import { ICliente } from "../models/ICliente";
import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Carregamento from "./Carregamento";

export default ({ navigation, route }: AlterarClienteProps) => {
    const [id,] = useState(route.params.id);    
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numeroRua, setNumRua] = useState('');
    const [bairro, setbairro] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function carregar() {

        setIsLoading(true);

        const resultado = await firestore()
            .collection('Cliente')
            .doc(id)
            .get();

        const cliente = {
            id: resultado.id,
            ...resultado.data()
        } as ICliente;

        setNome(cliente.nome);
        setCpf(cliente.cpf);
        setRua(cliente.rua);
        setNumRua(cliente.numeroRua);
        setbairro(cliente.bairro);
        setDataNasc(cliente.dataNasc);
        setIsLoading(false);

    };

    useEffect(() => {
        carregar();


    }, []);

    function alterar() {
        setIsLoading(true);

        firestore()

            .collection('Cliente')
            .doc(id)
            .update({
                nome,
                cpf,
                rua,
                numeroRua,
                bairro,
                dataNasc,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Alterada Com Sucesso!")
                navigation.goBack();
            })

            .catch((error) => console.log(error))
            .finally(() => (false));

    }

    return (

        <ImageBackground source={require('../assets/Moon2.jpg')} style={styles.img}>

            <View style={styles.container}>
           
                <Image style={styles.img_logo}
                    source={require('../assets/IconMoon.png')} />
                     <Carregamento isLoading={isLoading}/>
                <Text style={styles.text}>Nome:</Text>
                <TextInput
                    value={nome}
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNome(text) }} />
                <Text style={styles.text}>CPF:</Text>
                <TextInput
                    value={cpf}
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCpf(text) }} />
                <Text style={styles.text}>Rua:</Text>
                <TextInput
                    value={rua}
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setRua(text) }} />
                <Text style={styles.text}>Numero da Rua:</Text>
                <TextInput
                    value={numeroRua}
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNumRua(text) }} />
                <Text style={styles.text}>Bairro:</Text>
                <TextInput
                    value={bairro}
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setbairro(text) }} />
                <Text style={styles.text}>Data de Nascimento:</Text>
                <TextInput
                    value={dataNasc}
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setDataNasc(text) }} />
                <Pressable
                    style={styles.botao}
                    onPress={() => alterar()}
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
});