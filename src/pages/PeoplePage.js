import React from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

// fluxo:
// initial satate --> render() --> componentDidMount()
// --> state = { people: [<pessoa1>...<pessoaN>] } --> render()

export default class PeoplePage extends React.Component {

    constructor(props) {
        super(props);

        // Definindo um estado inicial do componente
        this.state = {
            people: [],
            isLoadingPeople: true
        };
    }

    // funcao chamada apos o componente estar pronto
    componentDidMount() {

        axios.get('https://randomuser.me/api/?nat=br&results=5')
        .then(response => {
            const results = response.data.results;
            this.setState({
                people: results, // atualiza o estado inserindo os dados da
                                // api `randomuser`
                isLoadingPeople: false
            });
        })
    }

    render() {
        if (this.state.isLoadingPeople) {
            return (
                <View>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        else {
            return (
                <View>
                    <PeopleList people={this.state.people} />
                </View>
            );
        }
    }
}

