import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 100,
        width: '100%',
        backgroundColor: '#23221f',
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: '#cac9c9',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 30,
        color: '#cac9c9',
        fontWeight: 'bold',
    },
});
