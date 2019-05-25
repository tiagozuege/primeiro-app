import React from 'react';
import {View, Text} from 'react-native';


/* Sem arrow function */
const PeopleList = function(props) {

    const people = props.people;
    const textElements = people.map(function (element) {
        const firstName = element.name.first;
        return <Text key={firstName}>{firstName}</Text>;
    });

    // Usar 'key' em elementos de lista para que o react possa
    // diferenciar os elementos. Ver https://fb.me/react-warning-keys

    return (
        <View>
            { textElements }
        </View>
    )
}

/* Com arrow function */
// const PeopleList = props => (
//     <Text></Text>
// )

export default PeopleList;