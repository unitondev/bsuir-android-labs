import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        marginHorizontal: 6,
        marginVertical: 12,
        padding: 10
    },
    submitButton: {
        marginVertical: 12,
    },
    errorMessage: {
        fontSize: 15,
        color: 'red'
    }
})

export default styles