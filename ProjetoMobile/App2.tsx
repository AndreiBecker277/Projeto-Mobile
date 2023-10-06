import React from 'react';
import {
    StyleSheet,
  Text, View
} from 'react-native';

const App2 = () => {
    return (
        <>   
         <Text> Hello word</Text>
            <Text> Hello word</Text>
            <Text> Hello word</Text>
            <Text> Hello word</Text>
            <Text> Hello word</Text>
            <Text> Hello word</Text>
            <Text> Hello word</Text>
            <Text> Hello word</Text>
            <View style={styles.container}><Text>pampas</Text></View>
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