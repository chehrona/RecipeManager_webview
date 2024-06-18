import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        width: '100%',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23221f',
    },
    iconWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeIcon: {
        color: '#fbde82',
        fontSize: 20,
        margin: 0,
        padding: 0,
    },
    inactiveIcon: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        color: '#cac9c9',
    },
    iconNameActive: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#fbde82',
        textAlign: 'center',
    },
    iconNameInactive: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#cac9c9',
        textAlign: 'center',
    },
});
