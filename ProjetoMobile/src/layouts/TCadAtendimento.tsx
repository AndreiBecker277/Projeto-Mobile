import firestore from "@react-native-firebase/firestore";
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CadAtendimentoProps,  } from "../types";
import { useState } from "react";

export default ({ navigation, route }: CadAtendimentoProps) => {
    const [descricao, setDesc] = useState('');
    const [hora, setHora] = useState('');
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    function validarCampoTexto() {
        // Use uma expressão regular para verificar se o texto contém apenas letras maiúsculas ou minúsculas.
        // O padrão /^[A-Za-z]+$/ significa que a string deve começar e terminar com letras,
        // e o + indica que pode haver uma ou mais letras no meio.
        const regex = /^[A-Za-z]+$/;

        if (!regex.test(descricao)) {
            console.log("O campo so pode possuir letras")
            return false;
        }

    };

    function validarCampoNumerico() {
        // Use uma expressão regular para verificar se o texto contém apenas números.
        // O padrão /^[0-9]+$/ significa que a string deve consistir apenas em dígitos numéricos.
        const regex = /^[0-9]+$/;

        if (!regex.test(hora)) {
            console.log("O texto contém caracteres não numéricos.");
            return false;
        }

        if (!regex.test(data)) {
            console.log("O texto contém caracteres não numéricos.");
            return false;
        }

    };


    function buscarCliente(nome: string, cpf: string) {
          setNome(nome);
          setCpf(cpf);
    }
    function cadastrar() {
        setIsLoading(true);

        firestore()
            .collection('Atendimento')
            .add({
                descricao,
                hora,
                data,
                created_at: firestore.FieldValue.serverTimestamp()
            })

            .then(() => {
                Alert.alert("Atendimento", "Cadastrado com Sucesso")
                navigation.navigate('Home')

            })

            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

    }

    
    return (
        <View>
            
            <Text>Nome: {nome}</Text>
            <Text>CPF:{cpf}</Text>
            
            <Button 
            title="Buscar Cliente"
            onPress={() => navigation.navigate("ListarCliente", {buscar: buscarCliente} )}
                
                />

            
            <Text>Data:</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setData(text) }} />
            <Text>Hora:</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setHora(text) }} />
            <Text>Descrição:</Text>
            <TextInput
              maxLength={10}
              numberOfLines={3}
                style={styles.caixa_texto}
                onChangeText={(text) => { setDesc(text) }} />
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
        alignItems: 'center',
        backgroundColor: '#DC143C'
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

