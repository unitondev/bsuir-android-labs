import React from 'react'
import { View, Text, StyleSheet, ToastAndroid, Button } from 'react-native'

const showToast = text => {
    ToastAndroid.show(text, ToastAndroid.SHORT)
}

const Home = () => (
    <View style={styles.screen}>
        <View style={styles.textContainer}>
            <Text style={styles.text}> "Мобильные приложения для информационных систем" </Text>
            <Text style={styles.text}> Артём Корбут </Text>
            <Text style={styles.text}> 920605 </Text>
        </View>
        <View style={styles.button}>
            <Button
                    onPress={() => {
                        showToast('hello world')
                    }}
                    title = 'touch me'
                    color='#007AFF'
                />
        </View>
    </View>
)


const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'center'
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    button: {
        margin: 15
    }
})

export default Home
