import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Home = () => (
    <View style={ styles.main }>
        <Text> hello world! </Text>
    </View>
)


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Home
