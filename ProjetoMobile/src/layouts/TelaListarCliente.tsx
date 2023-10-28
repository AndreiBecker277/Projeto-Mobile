import firestore from "@react-native-firebase/firestore";
import { ICliente } from "../models/ICliente";
import { useState, useEffect } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { ListarClienteProps } from "../types";
import AlterarCliente from "./AlterarCliente";

export default ({ navigation, route }: ListarClienteProps) => {

    const [cliente, SetCliente] = useState([] as ICliente[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()

            .collection('Cliente')
            .onSnapshot(querySnaphot => {

                const data = querySnaphot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                }) as unknown as ICliente[];

                SetCliente(data);
                setIsLoading(false);
            });
        return () => subscribe();
    }, []);


    function deletarCliente(id: string) {

        firestore()
            .collection('Cliente')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Nota", "Removido Com Sucesso")
                navigation.navigate('Home')
            })

            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

    }

    function alterarCliente(id: string) {

        navigation.navigate("AlterarCliente", { id: id })
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Listagem de clientes</Text>
            <FlatList
                data={cliente}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dados_card}>
                                <Text>{info.index}</Text>
                                <Text>{info.item.nome}</Text>
                                <Text>{info.item.cpf}</Text>
                                <Text>{info.item.rua}</Text>
                                <Text>{info.item.numeroRua}</Text>
                                <Text>{info.item.bairro}</Text>
                                <Text>{info.item.dataNasc}</Text>

                            </View>

                            <View style={styles.botao_alterar}>
                                <Pressable
                                    onPress={() => alterarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 40 }}>
                                        A
                                    </Text>
                                </Pressable>
                            </View>

                            <View style={styles.dados_deletar}>

                                <Pressable
                                    onPress={() => deletarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 40 }}>
                                        X
                                    </Text>
                                </Pressable>
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

