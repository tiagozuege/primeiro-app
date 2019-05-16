import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';


export default class App extends React.Component {

    renderList() {
        // const names = [
        //     'Ágatha Alves Zuege',
        //     'Danieli Alves Zuege',
        //     'Tiago Jasper Zuege'
        // ]

        // Usar keys em elementos de lista para que o react possa
        // diferenciar os elementos. Mais em https://fb.me/react-warning-keys
        // const textElements = names.map(function (name){
        //     return <Text key={name}>{name}</Text>
        // });

        // return textElements;

        // Retorna o primeiro nome do objeto `results` vindo da api `randomuser`
        axios.get('https://randomuser.me/api/?nat=br&results=5').then(
            function(response) {
                const results = response.data.results;
                const names = results.map(function (people) {
                    return people.name.first;
                });
                console.log(names);
            }
        )

    }

    render() {
        return (
            <View>
                <Header title="Pessoas"/>
                { this.renderList() }
            </View>
        );
    }
}

