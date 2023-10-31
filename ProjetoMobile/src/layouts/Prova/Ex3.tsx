import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useState } from "react";

//Citarei em comentarios as mudanças que fiz ou erros aparentes:


// o Props precisa ser criado na pasta Types pata que ocorra todo o processo de navegação

export default ({ navigation, route }: CadastroProdutoProps) => {
    // Criei os nomes das variaveis e seus Sets

    const [codigoBarras, setBarras] = useState('');
    const [preco, setPreco] = useState('');
    const [nome, setNome] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    function cadastrar() {



        setIsLoading(true);

        firestore()
            //Nome do banco de dados no firestone "Produtos"
            .collection('Produtos')
            //Adicioneis as variaveis para serem adicionadas
            .add({
                codigoBarras,
                preco,
                nome,
                created_at: firestore.FieldValue.serverTimestamp()
            })

            .then(() => {
                //Pequena mudança da menssagem de sucesso
                Alert.alert("Produto", "Cadastrado com Sucesso")
                 navigation.navigate('Home')

            })

            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

    }

    return (

        //Alem das mudanças de texto dos campos sera colocado os Sets das variaveis para que seja salvo
        // as exatas informações informadas no banco
        <View style={styles.container}>

            <Text style={styles.text}>codigo de Barras:</Text>
            <TextInput
                style={styles.caixa_texto}                
                onChangeText={(text) => { setBarras(text) }} />                
            <Text style={styles.text}>Nome do Produto:</Text>
            <TextInput

                style={styles.caixa_texto}
                onChangeText={(text) => { setNome(text) }} />
            <Text style={styles.text}>Preço do Produto:</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setPreco(text) }} />

            <Pressable
                style={styles.botao}
                onPress={cadastrar}
                disabled={isLoading}>
                <Text style={styles.desc_botao}>Cadastrar Produto</Text>
            </Pressable>
        </View>

    );

}

//Style pego de outra tela de cadastro.

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

