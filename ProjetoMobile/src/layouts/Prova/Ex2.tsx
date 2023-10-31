
// Como Aqui não possui types e stack para localizar o componente de navegação da tela pois precisa 
// de um processo para isto , apenas ficará como a tela de navegação seria feita caso fosse funcional

import { Pressable, StyleSheet, Text, View } from "react-native"
//Props nao existente pois precisa ser criado assim navigation sendo inutil neste caso

const telaIncial = ({ navigation, route }: TelaProps) => {
    return (
    <View style={styles.container}>
        <Pressable style={styles.botao}
            // Ex1 nao possui um type para ser executado mas seria chamado assim
            onPress={() => navigation.navigate(`Ex1`)}>
            <Text style={{ fontSize: 16, color: 'black' }}>"Tela Cadastro"</Text>
        </Pressable>

        <Pressable style={styles.botao}
            onPress={() => navigation.navigate(``)}>
            <Text style={{ fontSize: 16, color: 'black' }}>"Tela Cadastro de produto"</Text>
        </Pressable>

    
    </View>
    );

}

export default telaIncial;

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
