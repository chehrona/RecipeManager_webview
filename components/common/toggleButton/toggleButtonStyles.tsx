import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    subtitleToggle: {
        flex: 0.08,
        flexDirection: 'row',
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 3,
        paddingBottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23221f',
        borderRadius: 20,
        gap: 10,
    },
    toggleButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23221f',
        height: '100%',
        borderRadius: 20,
    },
    toggleButtonActive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d0d0d',
        height: '100%',
        borderRadius: 20,
    },
    subtitle: {
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitleActive: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fbde82',
        fontWeight: 'bold',
    },
});
