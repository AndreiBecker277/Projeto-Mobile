import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, ImageBackground, StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { HomeProps } from '../types';



const Principal = ({ navigation, route }: HomeProps) => {
    return (
        <ImageBackground source={require('../assets/Home.jpg')} style={styles.img}>
            <View style={styles.principal}>
                <View style={styles.fundo}>
                    <Pressable style={styles.botao}
                        onPress={() => navigation.navigate(`Cadastrar_Cliente`)}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Cadastrar Cliente</Text>
                    </Pressable>

                    <Pressable style={styles.botao}
                        onPress={() => navigation.navigate(`Cadastrar_Atendimento`)}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Cadastrar Atendimento</Text>
                    </Pressable>

                    <Pressable style={styles.botao}
                        onPress={() => navigation.navigate(`ListarCliente`)} >
                        <Text style={{ fontSize: 16, color: 'black' }}>Lista de Clientes</Text>
                    </Pressable>
                    <Pressable style={styles.botao}
                        onPress={() => navigation.navigate(`ListarAtendimento`)} >
                        <Text style={{ fontSize: 16, color: 'black' }}>Lista de Atendimentos</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground >
    );
}

export default Principal;

const styles = StyleSheet.create({
 
    fundo: {
        backgroundColor: '#C478CB ',
        borderWidth: 1,
        borderRadius: 4,
        height: 250,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        flex: 1,
        width: 400

    },
    botao: {
        alignItems: 'center',
        width: '40%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 8,
        backgroundColor: 'white',
    },

    principal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20


    },


});