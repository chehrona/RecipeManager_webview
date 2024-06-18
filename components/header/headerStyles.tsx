import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 0.08,
        width: screenWidth - 30,
    },
    viewTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#f5f5f5',
    },
    searchWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        borderRadius: 5,
        backgroundColor: '#e9e5e5',
    },
    icon: {
        color: 'grey',
        marginRight: 5,
        fontSize: 16,
    },
});
