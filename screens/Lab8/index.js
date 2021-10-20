import React, { useState, useRef } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { WebView } from 'react-native-webview'


const Lab8 = () => {
    const [uri, setUri] = useState('https://github.com/unitondev')
    const webviewRef = useRef()
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TextInput
                    placeholder='Enter url'
                    value={uri}
                    onChangeText={setUri}
                    style={styles.text}
                    placeholderTextColor='#9c9c9c'
                />
                <Button onPress={() => webviewRef.current.goBack()} title='Back' color='#007AFF' />
            </View>

            <WebView
                ref={webviewRef}
                source={{ uri }}
                onError={error => console.log('WEBVIEW ERROR')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
    },
    header: {
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 15,
        borderWidth: 1,
        marginHorizontal: 6,
        marginVertical: 12,
        color: 'black'
    }
})

export default Lab8