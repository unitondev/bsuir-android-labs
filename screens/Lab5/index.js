import React, { useState } from 'react'
import { View, StyleSheet, Image, Button } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

const Lab5 = () => {
    const [imageUri, setImageUri] = useState()

    const onGalleryOpen = () => {
        launchImageLibrary({
            mediaType: 'photo'
        }, response => {
            const originalUri = response.assets[0].uri
            if (response.assets) {
                setImageUri(originalUri) 
            }
        })
    }

    return (
        <View style={styles.screen}>
            <Button onPress={onGalleryOpen} title='Open photo' />
            {imageUri ?
                <Image
                    style={styles.image}
                    source={{ uri: imageUri }}
                /> : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20
    },
    image: {
        width: '90%',
        height: '90%',
        margin: 10, 
        alignSelf: 'center'
    }
})

export default Lab5