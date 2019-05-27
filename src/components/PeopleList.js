import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


/* Sem arrow function */
const PeopleList = function(props) {

    const people = props.people;
    const textElements = people.map(function (element) {
        const firstName = element.name.first;
        return (
            <View key={ firstName } style={ styles.line }>
                <Text style={styles.lineText}>{ firstName }</Text>
            </View>
        );
    });

    // Usar 'key' em elementos de lista para que o react possa
    // diferenciar os elementos. Ver https://fb.me/react-warning-keys

    return (
        <View style={styles.container}>
            { textElements }
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
    },
    line: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
});

export default PeopleList;