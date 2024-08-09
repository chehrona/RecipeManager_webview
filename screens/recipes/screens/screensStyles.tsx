import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
    },
    cardList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    bodyContainer: {
        flex: 1,
        position: 'relative',
    },
    mainImage: {
        flex: 0.35,
    },
    title: {
        width: '100%',
        fontSize: 25,
        position: 'absolute',
        bottom: '50%',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
    },
    list: {},
    ingredient: {
        backgroundColor: 'red',
    },
});
