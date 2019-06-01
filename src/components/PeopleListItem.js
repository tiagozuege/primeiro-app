import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {capitalFirst } from '../util';
// import capitalFirst from '../util/capitalizeFirst';

const PeopleListItem = function (props) {

    const people = props.people;

    /* Destruct */
    const {title, first, last } = people.name;
    // const firstName = people.name.first;
    // const lastName = people.name.last;

    return (
        <View style={ styles.line }>
            <Text style={styles.lineText}>
                { 
                    capitalFirst(title) + ' ' +
                    capitalFirst(first) + ' ' +
                    capitalFirst(last)
                }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default PeopleListItem;