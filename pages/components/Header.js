import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 140, height: 140 }} source={require('../../assets/nutrientes.png')}/>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingBottom: 40,
        backgroundColor: '#368FCA',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default Header