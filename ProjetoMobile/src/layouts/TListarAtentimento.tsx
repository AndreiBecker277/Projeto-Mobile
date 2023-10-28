import firestore from "@react-native-firebase/firestore";
import { ICliente } from "../models/ICliente";
import { useState, useEffect } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { ListarAtendimentoProps, ListarClienteProps } from "../types";
import AlterarCliente from "./AlterarCliente";
import { IAtendimento } from "../models/IAtendimento";

export default ({ navigation, route }: ListarAtendimentoProps) => {

    const [atendimento, SetAtendimento] = useState([] as IAtendimento[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()

            .collection('Atendimento')
            .onSnapshot(querySnaphot => {

                const data = querySnaphot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                }) as unknown as IAtendimento[];

                SetAtendimento(data);
                setIsLoading(false);
            });
        return () => subscribe();
    }, []);


    function deletarCliente(id: string) {

        firestore()
            .collection('Atendimento')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Nota", "Removido Com Sucesso")
                navigation.navigate('Home')
            })

            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

    }


    return (
        <View>
            <Text style={{ fontSize: 30 }}>Listagem de clientes</Text>
            <FlatList
                data={atendimento}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dados_card}>
                                <Text>{info.index}</Text>
                                <Text>{info.item.data}</Text>
                                <Text>{info.item.hora}</Text>
                                <Text>{info.item.descricao}</Text>
                            </View>
                        </View>
                    );
                }}>

            </FlatList>
        </View>
    );
}



const styles = StyleSheet.create({

    botao_alterar: {
        backgroundColor: 'yellow',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },

    card: {

        borderwidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row'
    },

    dados_deletar: {
        backgroundColor: 'red',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dados_card: {
        flex: 1,
    }

});

