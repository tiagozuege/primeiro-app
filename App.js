import React from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';
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

    render() {
        return (
            <View>
                <Header title="Pessoas"/>
                <PeopleList people={this.state.people} />
            </View>
        );
    }
}

