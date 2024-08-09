import React from 'react';

// Native components
import { View, TextInput } from 'react-native';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Styles
import { styles } from './searchBarStyles';

const SearchBar: React.FC = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleSearch = (inputText: string) => {
        console.log(inputText, 'text');
        setInputValue(inputText);
    };

    return (
        <View style={styles.searchWrapper}>
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size={20}
                style={styles.icon}
            />
            <TextInput
                value={inputValue}
                placeholder="Search"
                onChangeText={handleSearch}
            />
        </View>
    );
};

export default SearchBar;
