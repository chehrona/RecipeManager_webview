import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        width: 165,
        height: 'auto',
        marginBottom: 2,
    },
    imageWrapper: {
        shadowColor: '#cac9c9',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    image: {
        height: 220,
        width: 165,
        borderRadius: 10,
    },
    title: {
        color: '#cac9c9',
        fontSize: 18,
        marginTop: 5,
        fontWeight: 'bold',
    },
});
