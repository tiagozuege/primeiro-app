import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {capitalFirst } from '../util';
// import capitalFirst from '../util/capitalizeFirst';

const PeopleListItem = function (props) {

    const people = props.people;
    const avatar = {uri: people.picture.thumbnail};

    /* Destruct */
    const {title, first, last } = people.name;
    // const firstName = people.name.first;
    // const lastName = people.name.last;

    return (
        <TouchableOpacity onPress={() => console.log("Toquei na pessoa!")}>
            <View style={ styles.line }>
                <Image style={styles.avatar}  source={avatar}/>
                <Text style={styles.lineText}>
                    { 
                        // capitalFirst(title) + ' ' +
                        capitalFirst(first) + ' ' +
                        capitalFirst(last)
                    }
                </Text>
            </View>
        </TouchableOpacity>
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
        paddingLeft: 15,
        flex: 9
    },
    avatar: {
        aspectRatio: 1,
        flex:1,
        marginLeft: 15,
        borderRadius: 50
    }

});

export default PeopleListItem;