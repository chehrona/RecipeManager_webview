import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0d0d0d',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitle: {
        fontSize: 20,
        color: '#f5f5f5',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    instruction: {
        color: '#cac9c9',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        width: screenWidth - 30,
    },
    authView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: screenWidth - 30,
    },
});
