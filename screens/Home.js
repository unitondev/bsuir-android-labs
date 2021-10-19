import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => (
    <View style={ styles.main }>
        <Text style={ styles.text }> hello world! </Text>
    </View>
)


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black'
    }
})

export default Home
