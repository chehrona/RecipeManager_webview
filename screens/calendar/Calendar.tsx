import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import SearchBar from '../../components/searchBar/SearchBar';

import { styles } from '../../appStyles';

const Calendar: React.FC = () => {
    return (
        <SafeAreaView style={styles.recipeContainer}>
            <SearchBar />
        </SafeAreaView>
    );
};

export default Calendar;
