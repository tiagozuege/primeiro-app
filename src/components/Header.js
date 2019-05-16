import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Arrow function: variavel Header recebe um function que tem `props` como
// parametro e retorna uma `View`

// const Header = props => (
//     <View style={style.container}>
//         <Text style={style.title}>{props.title}</Text>
//     </View>
// );
const Header = function(props) {

    return (
        <View style={style.container}>
            <Text style={style.title}>{props.title}</Text>
        </View> 
    )
}

// stylesheet
const style = StyleSheet.create({
    container: {
        marginTop: 22,
        backgroundColor: '#6298ef',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        color: '#fff'
    }
});

// Exportar Header para poder utiliza-lo em outro arquivo
// Caso contrario o componente so 'vive' no arquivo atual
export default Header;