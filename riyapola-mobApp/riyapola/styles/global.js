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
        minWidth: '48%',
        color: '#000'
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: "#076AE0",
    },
    select: {
        alignSelf: 'stretch',
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 16,
        marginBottom: 20,
        color: '#000',
        minWidth: '50%'
    },
    cardContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    }
});
