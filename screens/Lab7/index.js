import React from 'react'
import { View, Text, StyleSheet, PermissionsAndroid, ToastAndroid, Button } from 'react-native'

const Lab7 = () => {

    const showToast = text => {
        ToastAndroid.show(text, ToastAndroid.SHORT)
    }

    const requestCameraPermission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            .finally(
                async () => {
                    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)) {
                        showToast('Allowed')
                    } else {
                        showToast('Forbidden')
                    }
                }
            )
    }

    const requestReadContactsPermission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
            .finally(
                async () => {
                    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)) {
                        showToast('Allowed')
                    } else {
                        showToast('Forbidden')
                    }
                }
            )
    }

    const requestReadSmsPermission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS)
            .finally(
                async () => {
                    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_SMS)) {
                        showToast('Allowed')
                    } else {
                        showToast('Forbidden')
                    }
                }
            )
    }

    const requestRecordAudioPermission = async () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)
            .finally(
                async () => {
                    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO)) {
                        showToast('Allowed')
                    } else {
                        showToast('Forbidden')
                    }
                }
            )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Click the button to request permissions</Text>
            <View style={styles.button}>
                <Button onPress={requestCameraPermission} title='Camera' color='#007AFF' />
            </View>
            <View style={styles.button}>
                <Button onPress={requestReadContactsPermission} title='Contacts reading' color='#007AFF' />
            </View>
            <View style={styles.button}>
                <Button onPress={requestReadSmsPermission} title='Sms reading' color='#007AFF' />
            </View>
            <View style={styles.button}>
                <Button onPress={requestRecordAudioPermission} title='Voice recording' color='#007AFF' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginVertical: 10,
        color: 'black',
    },
    permissionInfo: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    button: {
        marginVertical: 5,
    }
})

export default Lab7