import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid, ImageBackground, Button } from 'react-native'

import image from '../../assets/max-bovkun-STAKsZyR59A-unsplash.jpg'

const Lab3 = () => {
    const [additionalStyle, setAdditionalStyle] = useState({})
    const [isImageVisible, setIsImageVisible] = useState(false)

    const showToast = text => {
        ToastAndroid.show(text, ToastAndroid.SHORT)
    }

    const setBackgroundColor = (color) => {
        setAdditionalStyle({
            backgroundColor: color
        })
    }

    const screen = (
        <>
            <Button
                onPress={() => {
                    setBackgroundColor('green')
                    showToast('green')
                }}
                title = 'green'
                color='#007AFF'
            />

            <Button
                onPress={() => {
                    setBackgroundColor('red')
                    showToast('red')
                }}
                title = 'red'
                color='#007AFF'
            />

            <Button
                onPress={() => {
                    setBackgroundColor('blue')
                    showToast('blue')
                }}
                title = 'blue'
                color='#007AFF'
            />

            <Button
                onPress={() => {
                    setBackgroundColor('yellow')
                    showToast('yellow')
                }}
                title = 'yellow'
                color='#007AFF'
            />

            <Button
                onPress={() => setIsImageVisible(!isImageVisible)}
                title = 'image'
                color='#007AFF'
            />

            <Button
                onPress={() => showToast('Artyom Korbut')}
                title = 'developer'
                color='#007AFF'
            />
        </>
    )
    return (
        <View style={{ ...styles.screen, ...additionalStyle }}>
            {isImageVisible ?
                <ImageBackground source={image} style={styles.image}>
                    {screen}
                </ImageBackground> : screen
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default Lab3