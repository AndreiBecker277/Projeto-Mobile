import React from 'react';
import {
    StyleSheet,
    Text, View
} from 'react-native';
import ListaFlat from './listFlat';
import ListaSection from './ListaSection';
import ListaTitulo from './ListaTitulo';

const lista = [
    { key: 1, descricao: 'Teste' },
    { key: 2, descricao: 'Teste2' },
    { key: 3, descricao: 'Teste3' },
    { key: 4, descricao: 'Teste4' },
    { key: 4, descricao: 'Palmeiras' }
];

const listaTitulo = [
    {key: 1, name: 'Joao' },
    {key: 2, name: 'Adelia' },
    {key: 3, name: 'Alonso' },
    {key: 4, name: 'Juriscleide' },
    
];

const listaSection = [
    { title: 'A', data: [{ key: 1, descricao: 'Ana' }] },
    { title: 'B', data: [{ key: 2, descricao: 'Bruno' }] },
    { title: 'C', data: [{ key: 3, descricao: 'Carlos' }] },
    { title: 'D', data: [{ key: 4, descricao: 'Douglas' }] },
    { title: 'E', data: [{ key: 5, descricao: 'Elio' }] },
    { title: 'F', data: [{ key: 6, descricao: 'Fabio' }] },

];
const App2 = () => {

    return (
        <>
            <ListaTitulo array={listaTitulo} />
           
        </>
    );
}


export default App2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
});