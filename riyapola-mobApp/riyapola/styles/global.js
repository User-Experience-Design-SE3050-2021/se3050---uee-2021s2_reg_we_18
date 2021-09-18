import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
        flexDirection: 'column'
    },
    topicForm: {
        fontSize: 24,
        color: '#076AE0',
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 18,
        color: '#333',
        fontFamily: 'Roboto'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        fontFamily: 'Roboto'
    },
    input: {
        alignSelf: 'stretch',
        height: 40,
        borderColor: '#076AE0',
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 16,
        borderRadius: 8,
        marginBottom: 20,
        color: '#000'
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
});