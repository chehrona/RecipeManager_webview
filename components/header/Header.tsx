import React from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome';

import { styles } from './headerStyles';

const Header: React.FC = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleSearch = (inputText: string) => {
        console.log(inputText, 'text');
        setInputValue(inputText);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchWrapper}>
                <FontAwesome6 name={'search'} style={styles.icon} />
                <TextInput
                    value={inputValue}
                    placeholder="Search"
                    onChangeText={handleSearch}
                />
            </View>
        </SafeAreaView>
    );
};

export default Header;
