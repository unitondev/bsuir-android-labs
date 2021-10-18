import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
    layoutButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    linearLayout: {
        margin: 5,
        backgroundColor: '#d9d9d9',
        color: 'black',
    },
    scrollviewLayout: {
        marginHorizontal: 5,
        marginVertical: 60,
        backgroundColor: '#d9d9d9',
        color: 'black',
    },
    button: {
        margin: 10,
    }
})

export default styles