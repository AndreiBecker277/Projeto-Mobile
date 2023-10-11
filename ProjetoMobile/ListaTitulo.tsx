import React from "react";
import { FlatList, StyleSheet, Text, TextInput } from "react-native";

type listatitleprops = {
    array: { key: number; name: String }[]


}

const listaTitulo = (props: listatitleprops) => {

    return <FlatList
        data={props.array}
        renderItem={({ item }) => (
            <>
                <Text style={styles.item}>{item.name}</Text>
                <TextInput />
            </>
        )}
    />

}
export default listaTitulo;
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

});