import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';

// fluxo:
// initial satate --> render() --> componentDidMount()
// --> state = { people: [<pessoa1>...<pessoaN>] } --> render()

export default class App extends React.Component {

    constructor(props) {
        super(props);

        // Definindo um estado inicial do componente
        this.state = {
            people: []
        };
    }

    // funcao chamada apos o componente estar pronto
    componentDidMount() {

        axios.get('https://randomuser.me/api/?nat=br&results=5')
        .then(response => {
            const results = response.data.results;
            this.setState({
                people: results // atualiza o estado inserindo os dados da
                                // api `randomuser`
            });
        })
    }

    renderList() {

        const textElements = this.state.people.map(function (p) {
            const first = p.name.first;
            return <Text key={first}>{first}</Text>;
        });

        return textElements;

        // Usar keys em elementos de lista para que o react possa
        // diferenciar os elementos. Mais em https://fb.me/react-warning-keys        

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

