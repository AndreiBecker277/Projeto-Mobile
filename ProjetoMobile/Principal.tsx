import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import { Props } from './App';


const Principal = ({navigation, route}: Props) => {
    return(
        <>
        <Button
            title="Go to Details"
             onPress={() => navigation.navigate(`Detalhes`)}/>
        
        </>
    );
}

export default Principal;