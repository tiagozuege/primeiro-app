import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem';


const PeopleList = function(props) {

    const people = props.people;
    const items = people.map(function (p) {
        return <PeopleListItem key={p.name.first} people={p}/>;
    });

    // Usar 'key' em elementos de lista para que o react possa
    // diferenciar os elementos. Ver https://fb.me/react-warning-keys

    return (
        <View style={styles.container}>
            { items }
        </View>
    )
}

/* Com arrow function */
// const PeopleList = props => (
//     <Text></Text>
// )

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d0dcef'
    }
});

export default PeopleList;